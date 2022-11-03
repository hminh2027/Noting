import { Attachment } from './entities/attachment.entity';
import { Injectable, NotAcceptableException } from '@nestjs/common';
import { CreateAttachmentDto } from './dto/create-attachment.dto';
import { UpdateAttachmentDto } from './dto/update-attachment.dto';
import * as fs from 'fs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AttachmentService {
  constructor(
    @InjectRepository(Attachment)
    private readonly attachmentRepository: Repository<Attachment>,
  ) {}

  async create(createAttachmentDto: CreateAttachmentDto) {
    const fileName = await this.saveBase64ToFile(createAttachmentDto.image);
    if (!fileName)
      throw new NotAcceptableException('Can not convert base64 to image');

    const newAtt = await this.attachmentRepository.create({
      fileName,
      noteId: createAttachmentDto.noteId,
    });

    return this.attachmentRepository.save(newAtt);
  }

  remove(fileName: string) {
    return this.attachmentRepository.delete(fileName);
  }

  async saveBase64ToFile(base64string: String) {
    const base64Data = base64string.replace(/^data:image\/png;base64,/, '');
    const imageName = `${+new Date()}.png`;

    fs.mkdir('images/', { recursive: true }, (err) => {
      if (err) throw err;
    });

    fs.writeFile(`images/${imageName}`, base64Data, 'base64', function (err) {
      return null;
    });

    return imageName;
  }
}
