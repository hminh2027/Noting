import { UserService } from './../user/user.service';
import { Category } from 'modules/category/category.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
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
    const isExist = await this.getCategoryByUserIdAndName(
      userId,
      createCategoryDto.name,
    );

    if (isExist) throw new BadRequestException('Category existed!');

    let newCat = await this.getCategoryByName(createCategoryDto.name);
    if (!newCat) {
      newCat = await this.categoryRepository.create(createCategoryDto);
    }
    const user = await this.userService.get(userId);
    newCat.users = [user];
    return await this.categoryRepository.save(newCat);
  }

  async findManyByUserId(userId: number) {
    return await this.categoryRepository
      .createQueryBuilder('category')
      .leftJoinAndSelect('category.users', 'user')
      .leftJoinAndSelect('category.notes', 'note')
      .where('user.id = :userId', { userId })
      .getMany();
  }

  async getCategoryByUserIdAndName(userId: number, name: string) {
    return await this.categoryRepository
      .createQueryBuilder('category')
      .leftJoinAndSelect('category.users', 'user')
      .where('user.id = :userId', { userId })
      .andWhere('category.name = :name', { name })
      .getOne();
  }

  async getCategoryByName(name: string) {
    return await this.categoryRepository.findOne({ where: { name } });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryRepository.update(id, updateCategoryDto);
  }

  remove(id: number) {
    return this.categoryRepository.delete(id);
  }
}
