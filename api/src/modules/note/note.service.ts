import { Tag } from '../tag/tag.entity';
import { TagService } from './../tag/tag.service';
import { Note } from './note.entity';
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note)
    private readonly noteRepository: Repository<Note>,
    private readonly tagService: TagService,
  ) {}
  async create(userId: number, createNoteDto: CreateNoteDto) {
    const newNote = await this.noteRepository.create(createNoteDto);
    newNote.userId = userId;

    const tags = await Promise.all(
      createNoteDto.tagsName.map(async (name) => {
        const tag = await this.tagService.findOneByName(name);
        if (tag.length !== 0) return tag[0];
        else this.tagService.create({ name });
      }),
    );
    newNote.tags = tags;
    return await this.noteRepository.save(newNote);
  }

  getManyByUserId(userId: number) {
    return this.noteRepository.find({ where: { userId } });
  }

  async getOneById(id: number, userId: number) {
    return await this.noteRepository.findOne({ where: { id, userId } });
  }

  async update(id: number, userId: number, updateNoteDto: UpdateNoteDto) {
    await this.checkExistence(id, userId);
    return this.noteRepository.update(id, updateNoteDto);
  }

  async remove(id: number, userId: number) {
    await this.checkExistence(id, userId);
    return this.noteRepository.delete(id);
  }

  async checkExistence(id: number, userId: number) {
    const note = await this.getOneById(id, userId);
    if (!note) throw new ForbiddenException('Note not exist!');
    return true;
  }
}
