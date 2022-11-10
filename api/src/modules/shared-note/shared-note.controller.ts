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
  create(@Body() createSharedNoteDto: CreateSharedNoteDto) {
    return this.sharedNoteService.create(createSharedNoteDto);
  }

  @Get()
  findAll() {
    return this.sharedNoteService.getManyByUserId(1);
  }

  @Patch()
  update(@ReqUser() user, @Body() updateSharedNoteDto: UpdateSharedNoteDto) {
    return this.sharedNoteService.update(user.id, updateSharedNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sharedNoteService.remove(+id);
  }
}
