import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReqUser } from 'common/decorator/user.decorator';
import { AttachmentService } from './attachment.service';
import { CreateAttachmentDto } from './dto/create-attachment.dto';

@Controller('attachment')
@ApiTags('attachment')
export class AttachmentController {
  constructor(private readonly attachmentService: AttachmentService) {}

  @Post()
  async create(
    @ReqUser() user,
    @Body() createAttachmentDto: CreateAttachmentDto,
  ) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Attachment created!',
      data: await this.attachmentService.create(user.id, createAttachmentDto),
    };
  }

  @Delete(':noteId')
  async remove(
    @ReqUser() user,
    @Param('noteId') noteId: number,
    @Query('fileName') fileName: string,
  ) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Attachment deleted!',
      data: await this.attachmentService.remove(user.id, noteId, fileName),
    };
  }
}
