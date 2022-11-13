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
  UseGuards,
  HttpStatus,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ReqUser } from 'common/decorator/user.decorator';
import { JwtAuthGuard } from 'common/guards/jwt.guard';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comment')
@ApiTags('comment')
@UsePipes(ValidationPipe)
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  async create(@ReqUser() user, @Body() createCommentDto: CreateCommentDto) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Comment created!',
      data: await this.commentService.create(user.id, createCommentDto),
    };
  }

  @Patch(':id')
  async update(
    @ReqUser() user,
    @Param('id') id: string,
    @Body() updateCommentDto: UpdateCommentDto,
  ) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Comment created!',
      data: await this.commentService.update(user.id, +id, updateCommentDto),
    };
  }

  @Delete(':id')
  async remove(@ReqUser() user, @Param('id') id: string) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Comment created!',
      data: await this.commentService.remove(user.id, +id),
    };
  }
}
