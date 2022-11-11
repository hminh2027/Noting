import { SharedNoteModule } from './../shared-note/shared-note.module';
import { Note } from './note.entity';
import { forwardRef, Module } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteController } from './note.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagModule } from 'modules/tag/tag.module';
import { SnapshotModule } from 'modules/snapshot/snapshot.module';

@Module({
  controllers: [NoteController],
  imports: [
    TypeOrmModule.forFeature([Note]),
    TagModule,
    SnapshotModule,
    forwardRef(() => SharedNoteModule),
  ],
  exports: [NoteService],
  providers: [NoteService],
})
export class NoteModule {}
