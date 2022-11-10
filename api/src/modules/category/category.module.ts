import { UserModule } from './../user/user.module';
import { Category } from 'modules/category/category.entity';
import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CategoryController],
  imports: [TypeOrmModule.forFeature([Category]), UserModule],
  exports: [CategoryService],
  providers: [CategoryService],
})
export class CategoryModule {}
