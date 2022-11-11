import { NoteService } from './../note/note.service';
import { SharedNote } from './shared-note.entity';
import {
  BadRequestException,
  ForbiddenException,
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSharedNoteDto } from './dto/create-shared-note.dto';
import { UpdateSharedNoteDto } from './dto/update-shared-note.dto';
import { Repository } from 'typeorm';
import { Permission } from './permission.enum';

@Injectable()
export class SharedNoteService {
  constructor(
    @InjectRepository(SharedNote)
    private readonly sharedNoteRepository: Repository<SharedNote>,
  ) {}
  async create(userId: number, createSharedNoteDto: CreateSharedNoteDto) {
    const sharedNote = await this.getOneByUserIdAndNoteId(
      userId,
      createSharedNoteDto.noteId,
    );

    if (!sharedNote)
      throw new ForbiddenException('You are not allowed to modify!');

    const existed = await this.getOneByUserIdAndNoteId(
      createSharedNoteDto.userId,
      createSharedNoteDto.noteId,
    );

    if (existed) throw new BadRequestException('Note has been shared before..');

    const newNote = await this.sharedNoteRepository.create(createSharedNoteDto);
    return await this.sharedNoteRepository.save(newNote);
  }

  async update(userId: number, updateSharedNoteDto: UpdateSharedNoteDto) {
    const sharedNote = await this.getOneByUserIdAndNoteId(
      updateSharedNoteDto.noteId,
      userId,
    );
    if (!sharedNote || sharedNote.permission != Permission.FULL_ACCESS)
      throw new ForbiddenException('You are not allow to update permission');

    sharedNote.permission = updateSharedNoteDto.permission;
    return await this.sharedNoteRepository.save(sharedNote);
  }

  async remove(authorId: number, userId: number, noteId: number) {
    const isShared = await this.getOneByUserIdAndNoteId(authorId, userId);

    if (!isShared || isShared.permission != Permission.FULL_ACCESS)
      throw new ForbiddenException('You are not allow to to modify!');

    const sharedNote = await this.getOneByUserIdAndNoteId(userId, noteId);

    if (!sharedNote) throw new NotFoundException();

    return this.sharedNoteRepository.remove(sharedNote);
  }

  async getManyByUserId(userId: number) {
    return await this.sharedNoteRepository
      .createQueryBuilder('shared_note')
      .leftJoinAndSelect('shared_note.note', 'note')
      .where('shared_note.userId = :userId', { userId })
      .getMany();
  }

  async getOneByUserIdAndNoteId(userId: number, noteId: number) {
    return await this.sharedNoteRepository
      .createQueryBuilder('shared_note')
      .leftJoinAndSelect('shared_note.user', 'user')
      .leftJoinAndSelect('shared_note.note', 'note')
      .where('shared_note.userId = :userId', { userId })
      .andWhere('shared_note.noteId = :noteId', { noteId })
      .getOne();
  }
}
