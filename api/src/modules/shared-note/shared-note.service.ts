import { NoteService } from './../note/note.service';
import { SharedNote } from './shared-note.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
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
    private readonly noteService: NoteService,
  ) {}
  async create(createSharedNoteDto: CreateSharedNoteDto) {
    if (!Object.values(Permission).includes(createSharedNoteDto.permission))
      throw new BadRequestException();

    const newNote = await this.sharedNoteRepository.create(createSharedNoteDto);
    return await this.sharedNoteRepository.save(newNote);
  }

  getManyByUserId(userId: number) {
    return this.sharedNoteRepository.find({
      where: { userId },
    });
  }

  update(userId: number, updateSharedNoteDto: UpdateSharedNoteDto) {
    console.log(updateSharedNoteDto);
    this.noteService.getOneById(updateSharedNoteDto.noteId, userId);

    // this.sharedNoteRepository.findOne({ where: { user } });
    // return this.sharedNoteRepository.update(id, updateSharedNoteDto);
  }

  remove(id: number) {
    return `This action removes a #${id} sharedNote`;
  }
}
