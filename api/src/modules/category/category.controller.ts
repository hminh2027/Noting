import { UserService } from './../user/user.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ReqUser } from 'common/decorator/user.decorator';
import { JwtAuthGuard } from 'common/guards/jwt.guard';

@Controller('category')
@ApiTags('category')
@UsePipes(ValidationPipe)
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@ReqUser() user, @Body() createCategoryDto: CreateCategoryDto) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Category created!',
      data: await this.categoryService.create(user.id, createCategoryDto),
    };
  }

  @Get()
  async findAll(@ReqUser() user) {
    return await this.categoryService.getManyByUserId(user.id);
  }

  @Patch(':id')
  async update(
    @ReqUser() user,
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Category updated!',
      data: await this.categoryService.update(user.id, +id, updateCategoryDto),
    };
  }

  @Delete(':id')
  async remove(@ReqUser() user, @Param('id') id: string) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Category deleted!',
      data: await this.categoryService.remove(user.id, +id),
    };
  }
}
