import { Category } from 'modules/category/category.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    const newCat = await this.categoryRepository.create(createCategoryDto);
    return this.categoryRepository.save(newCat);
  }

  findManyByUserId(userId: number) {
    return this.categoryRepository
      .createQueryBuilder('category')
      .leftJoinAndSelect('category.users', 'user')
      .where('user.id = :userId', { userId })
      .getMany();
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryRepository.update(id, updateCategoryDto);
  }

  remove(id: number) {
    return this.categoryRepository.delete(id);
  }
}
