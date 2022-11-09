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
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ReqUser } from 'common/decorator/user.decorator';

@Controller('category')
@ApiTags('category')
@UsePipes(ValidationPipe)
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly userService: UserService,
  ) {}

  @Post()
  create(@ReqUser() user, @Body() createCategoryDto: CreateCategoryDto) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Comment created successfully',
      data: this.categoryService.create(user, createCategoryDto),
    };
  }

  @Get()
  findAll() {
    return this.userService.getCategoriesByUserId(1);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
