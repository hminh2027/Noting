import { Attachment } from './attachment.entity';
import {
  ForbiddenException,
  Injectable,
  NotAcceptableException,
} from '@nestjs/common';
import { CreateAttachmentDto } from './dto/create-attachment.dto';
import { UpdateAttachmentDto } from './dto/update-attachment.dto';
import * as fs from 'fs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SharedNoteService } from 'modules/shared-note/shared-note.service';
import { Permission } from 'modules/shared-note/permission.enum';

@Injectable()
export class AttachmentService {
  constructor(
    @InjectRepository(Attachment)
    private readonly attachmentRepository: Repository<Attachment>,
    private readonly sharedService: SharedNoteService,
  ) {}

  async create(userId: number, createAttachmentDto: CreateAttachmentDto) {
    const fileName = await this.saveBase64ToFile(createAttachmentDto.image);
    if (!fileName)
      throw new NotAcceptableException('Can not convert base64 to image');

    const isShared = await this.sharedService.getOneByUserIdAndNoteId(
      userId,
      createAttachmentDto.noteId,
    );

    if (!isShared || isShared.permission < Permission.EDITABLE)
      throw new ForbiddenException('You are not allowed to edit this note');

    const newAtt = await this.attachmentRepository.create({
      fileName,
      noteId: createAttachmentDto.noteId,
    });

    return this.attachmentRepository.save(newAtt);
  }

  async remove(userId: number, noteId: number, fileName: string) {
    await this.sharedService.checkPermission(
      userId,
      noteId,
      Permission.EDITABLE,
    );

    return await this.attachmentRepository.delete(fileName);
  }

  async saveBase64ToFile(base64string: String) {
    const base64Data = base64string.replace(/^data:image\/png;base64,/, '');
    const imageName = `${+new Date()}.png`;

    fs.mkdir('public/images/', { recursive: true }, (err) => {
      if (err) throw err;
    });

    fs.writeFile(
      `public/images/${imageName}`,
      base64Data,
      'base64',
      function (err) {
        return null;
      },
    );

    return imageName;
  }
}
