import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSnapshotDto } from './dto/create-snapshot.dto';
import { SnapShot } from './snapshot.entity';

@Injectable()
export class SnapshotService {
  constructor(
    @InjectRepository(SnapShot)
    private readonly snapShotRepository: Repository<SnapShot>,
  ) {}
  async create(createSnapshotDto: CreateSnapshotDto) {
    console.log(createSnapshotDto);

    const newSnap = await this.snapShotRepository.create(createSnapshotDto);
    return await this.snapShotRepository.save(newSnap);
  }
}
