import { NoteService } from './../note/note.service';
import { SharedNote } from './shared-note.entity';
import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
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
    @Inject(forwardRef(() => NoteService))
    private readonly noteService: NoteService,
  ) {}
  async create(createSharedNoteDto: CreateSharedNoteDto) {
    if (!Object.values(Permission).includes(createSharedNoteDto.permission))
      throw new BadRequestException();

    const newNote = await this.sharedNoteRepository.create(createSharedNoteDto);
    return await this.sharedNoteRepository.save(newNote);
  }

  update(userId: number, updateSharedNoteDto: UpdateSharedNoteDto) {
    console.log(updateSharedNoteDto);
    this.noteService.getOneByIdAndUserId(updateSharedNoteDto.noteId, userId);

    // this.sharedNoteRepository.findOne({ where: { user } });
    // return this.sharedNoteRepository.update(id, updateSharedNoteDto);
  }

  remove(id: number) {
    return `This action removes a #${id} sharedNote`;
  }

  async getManyByUserId(userId: number) {
    return await this.sharedNoteRepository.find({
      where: { userId },
    });
  }

  async getOneByUserIdAndNoteId(userId: number, noteId: number) {
    return await this.sharedNoteRepository.findOneOrFail({
      where: { userId, noteId },
    });
  }
}
