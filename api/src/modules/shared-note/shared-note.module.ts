import { NoteModule } from './../note/note.module';
import { SharedNote } from './shared-note.entity';
import { Module } from '@nestjs/common';
import { SharedNoteService } from './shared-note.service';
import { SharedNoteController } from './shared-note.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [SharedNoteController],
  imports: [TypeOrmModule.forFeature([SharedNote]), NoteModule],
  exports: [SharedNoteService],
  providers: [SharedNoteService],
})
export class SharedNoteModule {}
