import { Tag } from './entities/tag.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Repository } from 'typeorm';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private readonly userRepository: Repository<Tag>,
  ) {}
  async create(createTagDto: CreateTagDto) {
    const newTag = await this.userRepository.create(createTagDto);
    return this.userRepository.save(newTag);
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.find({ where: { id } });
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return this.userRepository.update(id, updateTagDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
