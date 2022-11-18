import { UserService } from './../user/user.service';
import { SharedNoteService } from './../shared-note/shared-note.service';
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
import { UpdateSharedNoteDto } from 'modules/shared-note/dto/update-shared-note.dto';
import { CreateSharedNoteDto } from 'modules/shared-note/dto/create-shared-note.dto';

@Controller('note')
@ApiTags('note')
@UsePipes(ValidationPipe)
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class NoteController {
  constructor(
    private readonly noteService: NoteService,
    private readonly sharedNoteService: SharedNoteService,
    private readonly userService: UserService,
  ) {}

  @Post()
  async create(@ReqUser() user, @Body() createNoteDto: CreateNoteDto) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Note created!',
      data: await this.noteService.create(user.id, createNoteDto),
    };
  }

  @Post('/permission/share')
  async share(@Body() createSharedNoteDto: CreateSharedNoteDto) {
    const user = await this.userService.getByEmail(createSharedNoteDto.email);
    return {
      statusCode: HttpStatus.OK,
      message: 'Note shared!',
      data: await this.sharedNoteService.create({
        ...createSharedNoteDto,
        userId: user.id,
      }),
    };
  }

  @Get('/private')
  async findAllPrivate(@ReqUser() user) {
    return await this.noteService.getManyByUserId(user.id);
  }

  @Get('/shared')
  async findAllShared(@ReqUser() user) {
    return await this.sharedNoteService.getManyByUserId(user.id);
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

  @Patch('/permission/update')
  async updatePermission(
    @ReqUser() user,
    @Body() updateSharedNoteDto: UpdateSharedNoteDto,
  ) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Permissions updated!',
      data: await this.sharedNoteService.update(user.id, updateSharedNoteDto),
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

  @Delete('/permission/delete')
  async removeShare(
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
