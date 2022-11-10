import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './comment.entity';

@Module({
  controllers: [CommentController],
  imports: [TypeOrmModule.forFeature([Comment])],
  exports: [CommentService],
  providers: [CommentService],
})
export class CommentModule {}
