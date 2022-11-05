import { Note } from './note.entity';
import { Module } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteController } from './note.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagModule } from 'modules/tag/tag.module';

@Module({
  controllers: [NoteController],
  imports: [TypeOrmModule.forFeature([Note]), TagModule],
  exports: [NoteService],
  providers: [NoteService],
})
export class NoteModule {}
