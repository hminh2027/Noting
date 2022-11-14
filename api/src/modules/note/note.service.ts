import { SnapshotService } from './../snapshot/snapshot.service';
import { SharedNoteService } from './../shared-note/shared-note.service';
import { TagService } from './../tag/tag.service';
import { Note } from './note.entity';
import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Permission } from 'modules/shared-note/permission.enum';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note)
    private readonly noteRepository: Repository<Note>,
    private readonly tagService: TagService,
    private readonly sharedService: SharedNoteService,
    private readonly snapshotService: SnapshotService,
  ) {}
  async create(userId: number, createNoteDto: CreateNoteDto) {
    let newNote = await this.noteRepository.create(createNoteDto);
    newNote.userId = userId;

    const tags = await Promise.all(
      createNoteDto.tagsName.map(async (name) => {
        const tag = await this.tagService.findOneByName(name);
        if (tag.length !== 0) return tag[0];
        else return await this.tagService.create({ name });
      }),
    );
    newNote.tags = tags;
    newNote = await this.noteRepository.save(newNote);
    await this.sharedService.create({
      userId,
      noteId: newNote.id,
      permission: Permission.FULL_ACCESS,
    });
    return newNote;
  }

  async update(id: number, userId: number, updateNoteDto: UpdateNoteDto) {
    const sharedNote = await this.sharedService.getOneByUserIdAndNoteId(
      userId,
      id,
    );
    if (!sharedNote) throw new NotFoundException('Note not found!');
    if (sharedNote.permission < Permission.EDITABLE)
      throw new BadRequestException('You are not allow to update this note!');
    const note = await this.getOneById(id);
    await this.snapshotService.create({
      title: note.title,
      description: 'Note has been changed!',
      content: note.content,
      userId,
      noteId: note.id,
    });
    return this.noteRepository.update(id, updateNoteDto);
  }

  async remove(id: number, userId: number) {
    const note = await this.sharedService.getOneByUserIdAndNoteId(userId, id);
    if (!note) throw new NotFoundException('Note not found!');

    return this.noteRepository.delete(id);
  }

  async getManyByUserId(userId: number) {
    return await this.noteRepository.find({ where: { userId } });
  }

  async getOneByIdAndUserId(id: number, userId: number) {
    return await this.noteRepository
      .createQueryBuilder('note')
      .leftJoinAndSelect('note.sharedNotes', 'shared_note')
      .leftJoinAndSelect('shared_note.user', 'user')
      .leftJoinAndSelect('note.comments', 'comment')
      .leftJoinAndSelect('note.snapshots', 'snapshot')
      .where('shared_note.userId = :userId', { userId })
      .andWhere('shared_note.noteId = :noteId', { noteId: id })
      .getOne();
  }

  async getOneById(id: number) {
    return await this.noteRepository.findOne({ where: { id } });
  }

  async checkExistence(id: number, userId: number) {
    const note = await this.getOneByIdAndUserId(id, userId);
    if (!note) throw new NotFoundException('Note not exist!');
    return true;
  }
}
