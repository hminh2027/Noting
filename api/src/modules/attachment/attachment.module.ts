import { SharedNoteModule } from './../shared-note/shared-note.module';
import { Attachment } from './attachment.entity';
import { Module } from '@nestjs/common';
import { AttachmentService } from './attachment.service';
import { AttachmentController } from './attachment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AttachmentController],
  imports: [TypeOrmModule.forFeature([Attachment]), SharedNoteModule],
  exports: [AttachmentService],
  providers: [AttachmentService],
})
export class AttachmentModule {}
