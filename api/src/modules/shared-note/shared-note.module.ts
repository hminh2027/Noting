import { NoteModule } from './../note/note.module';
import { SharedNote } from './shared-note.entity';
import { Module } from '@nestjs/common';
import { SharedNoteService } from './shared-note.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SharedNote])],
  exports: [SharedNoteService],
  providers: [SharedNoteService],
})
export class SharedNoteModule {}
