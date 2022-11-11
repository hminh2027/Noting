import { UserService } from './../user/user.service';
import { Category } from 'modules/category/category.entity';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    private readonly userService: UserService,
  ) {}
  async create(userId: number, createCategoryDto: CreateCategoryDto) {
    const isExist = await this.getOneByUserIdAndName(
      userId,
      createCategoryDto.name,
    );

    if (isExist) throw new BadRequestException('Category existed!');

    let newCat = await this.getOneByName(createCategoryDto.name);
    if (!newCat) {
      newCat = await this.categoryRepository.create(createCategoryDto);
    }
    const user = await this.userService.get(userId);
    newCat.users = [user];
    return await this.categoryRepository.save(newCat);
  }

  async update(
    userId: number,
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ) {
    const category = this.getOneByUserIdAndId(userId, id);
    if (!category) throw new NotFoundException('Category not found!');

    return await this.categoryRepository.update(id, updateCategoryDto);
  }

  async remove(userId: number, id: number) {
    const category = this.getOneByUserIdAndId(userId, id);
    if (!category) throw new NotFoundException('Category not found!');
    return await this.categoryRepository.delete(id);
  }

  async getManyByUserId(userId: number) {
    return await this.categoryRepository
      .createQueryBuilder('category')
      .leftJoinAndSelect('category.users', 'user')
      .leftJoinAndSelect('category.notes', 'note')
      .where('user.id = :userId', { userId })
      .getMany();
  }

  async getOneByUserIdAndName(userId: number, name: string) {
    return await this.categoryRepository
      .createQueryBuilder('category')
      .leftJoinAndSelect('category.users', 'user')
      .where('user.id = :userId', { userId })
      .andWhere('category.name = :name', { name })
      .getOne();
  }

  async getOneByName(name: string) {
    return await this.categoryRepository.findOne({ where: { name } });
  }

  async getOneByUserIdAndId(userId: number, id: number) {
    return await this.categoryRepository
      .createQueryBuilder('category')
      .leftJoinAndSelect('category.users', 'user')
      .where('user.id = :userId', { userId })
      .andWhere('category.id = :id', { id })
      .getOne();
  }
}
