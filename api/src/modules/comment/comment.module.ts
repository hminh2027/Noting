import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './comment.entity';
import { SharedNoteModule } from 'modules/shared-note/shared-note.module';

@Module({
  controllers: [CommentController],
  imports: [TypeOrmModule.forFeature([Comment]), SharedNoteModule],
  exports: [CommentService],
  providers: [CommentService],
})
export class CommentModule {}
