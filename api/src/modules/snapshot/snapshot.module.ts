import { SnapShot } from './snapshot.entity';
import { Module } from '@nestjs/common';
import { SnapshotService } from './snapshot.service';
import { SnapshotController } from './snapshot.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [SnapshotController],
  imports: [TypeOrmModule.forFeature([SnapShot])],
  exports: [SnapshotService],
  providers: [SnapshotService],
})
export class SnapshotModule {}
