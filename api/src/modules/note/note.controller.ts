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
import { NoteService } from './note.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ReqUser } from 'common/decorator/user.decorator';
import { JwtAuthGuard } from 'common/guards/jwt.guard';

@Controller('note')
@ApiTags('note')
@UsePipes(ValidationPipe)
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  async create(@ReqUser() user, @Body() createNoteDto: CreateNoteDto) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Note created!',
      data: await this.noteService.create(user.id, createNoteDto),
    };
  }

  @Get()
  findAll(@ReqUser() user) {
    return this.noteService.getManyByUserId(user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: number, @ReqUser() user) {
    return this.noteService.getOneByIdAndUserId(+id, user.id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @ReqUser() user,
    @Body() updateNoteDto: UpdateNoteDto,
  ) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Note updated!',
      data: await this.noteService.update(+id, user.id, updateNoteDto),
    };
  }

  @Delete(':id')
  async remove(@ReqUser() user, @Param('id') id: number) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Note deleted!',
      data: await this.noteService.remove(+id, user.id),
    };
  }
}
