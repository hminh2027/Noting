import { SharedNote } from './shared-note.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSharedNoteDto } from './dto/create-shared-note.dto';
import { UpdateSharedNoteDto } from './dto/update-shared-note.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SharedNoteService {
  constructor(
    @InjectRepository(SharedNote)
    private readonly snapShotRepository: Repository<SharedNote>,
  ) {}
  create(createSharedNoteDto: CreateSharedNoteDto) {
    return 'This action adds a new sharedNote';
  }

  findAll() {
    return `This action returns all sharedNote`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sharedNote`;
  }

  update(id: number, updateSharedNoteDto: UpdateSharedNoteDto) {
    return `This action updates a #${id} sharedNote`;
  }

  remove(id: number) {
    return `This action removes a #${id} sharedNote`;
  }
}
