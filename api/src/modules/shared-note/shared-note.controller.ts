import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  UseGuards,
  HttpStatus,
} from '@nestjs/common';
import { SharedNoteService } from './shared-note.service';
import { CreateSharedNoteDto } from './dto/create-shared-note.dto';
import { UpdateSharedNoteDto } from './dto/update-shared-note.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ReqUser } from 'common/decorator/user.decorator';
import { JwtAuthGuard } from 'common/guards/jwt.guard';

@Controller('shared-note')
@ApiTags('shared note')
@UsePipes(ValidationPipe)
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class SharedNoteController {
  constructor(private readonly sharedNoteService: SharedNoteService) {}

  @Post()
  async create(
    @ReqUser() user,
    @Body() createSharedNoteDto: CreateSharedNoteDto,
  ) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Note shared!',
      data: await this.sharedNoteService.create(user.id, createSharedNoteDto),
    };
  }

  @Get()
  findAll(@ReqUser() user) {
    return this.sharedNoteService.getManyByUserId(user.id);
  }

  @Get(':id')
  findOne(@ReqUser() user, @Param('id') id: number) {
    return this.sharedNoteService.getManyByUserId(user.id);
  }

  @Patch()
  async update(
    @ReqUser() user,
    @Body() updateSharedNoteDto: UpdateSharedNoteDto,
  ) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Permissions updated!',
      data: await this.sharedNoteService.update(user.id, updateSharedNoteDto),
    };
  }

  @Delete()
  async remove(
    @ReqUser() user,
    @Param('userId') userId: string,
    @Param('noteId') noteId: string,
  ) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Permissions removed!',
      data: await this.sharedNoteService.remove(user.id, +userId, +noteId),
    };
  }
}
