import { Tag } from './../tag/entities/tag.entity';
import { TagService } from './../tag/tag.service';
import { Note } from './note.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
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
  // TODO: Create attachments here using its service
  async create(createNoteDto: CreateNoteDto) {
    const newNote = await this.noteRepository.create(createNoteDto);

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

  findAll() {
    return this.noteRepository.find();
  }

  findOne(id: number) {
    this.noteRepository.find({ where: { id } });
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return this.noteRepository.update(id, updateNoteDto);
  }

  remove(id: number) {
    return this.noteRepository.delete(id);
  }
}
