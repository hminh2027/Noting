import { Permission } from './../shared-note/permission.enum';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SharedNoteService } from 'modules/shared-note/shared-note.service';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
    private readonly sharedService: SharedNoteService,
  ) {}
  async create(userId: number, createCommentDto: CreateCommentDto) {
    await this.sharedService.checkPermission(
      userId,
      createCommentDto.noteId,
      Permission.COMMENTABLE,
    );

    const newComment = await this.commentRepository.create({
      ...createCommentDto,
      userId,
    });

    return await this.commentRepository.save(newComment);
  }

  async update(userId: number, id: number, updateCommentDto: UpdateCommentDto) {
    await this.sharedService.checkPermission(
      userId,
      updateCommentDto.noteId,
      Permission.COMMENTABLE,
    );

    return this.commentRepository.update(id, updateCommentDto);
  }

  async getManyByNoteId(noteId: number) {
    return await this.commentRepository.find({ where: { noteId } });
  }

  remove(userId: number, id: number) {
    const existed = this.commentRepository.findOne({ where: { id, userId } });
    if (!existed) throw new NotFoundException('Comment not existed!');
    return this.commentRepository.delete(id);
  }
}
