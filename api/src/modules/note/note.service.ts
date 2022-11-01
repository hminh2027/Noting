import { Tag } from './../tag/entities/tag.entity';
import { TagService } from './../tag/tag.service';
import { Note } from './entities/note.entity';
import { Injectable } from '@nestjs/common';
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
  async create(createNoteDto: CreateNoteDto) {
    const newNote = await this.noteRepository.create(createNoteDto);
    let arr = [];
    arr = createNoteDto.tagsId.map(async (id) => {
      return this.tagService.findOne(id).then((res) => res);
    });
    console.log(arr);
    newNote.tags = arr;
    return this.noteRepository.save(newNote);
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
