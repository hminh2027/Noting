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
} from '@nestjs/common';
import { SharedNoteService } from './shared-note.service';
import { CreateSharedNoteDto } from './dto/create-shared-note.dto';
import { UpdateSharedNoteDto } from './dto/update-shared-note.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('shared-note')
@ApiTags('shared note')
@UsePipes(ValidationPipe)
export class SharedNoteController {
  constructor(private readonly sharedNoteService: SharedNoteService) {}

  @Post()
  create(@Body() createSharedNoteDto: CreateSharedNoteDto) {
    return this.sharedNoteService.create(createSharedNoteDto);
  }

  @Get()
  findAll() {
    return this.sharedNoteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sharedNoteService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSharedNoteDto: UpdateSharedNoteDto,
  ) {
    return this.sharedNoteService.update(+id, updateSharedNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sharedNoteService.remove(+id);
  }
}
