import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { SnapshotService } from './snapshot.service';
import { CreateSnapshotDto } from './dto/create-snapshot.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('snapshot')
@ApiTags('snapshot')
@UsePipes(ValidationPipe)
export class SnapshotController {
  constructor(private readonly snapshotService: SnapshotService) {}

  @Post()
  create(@Body() createSnapshotDto: CreateSnapshotDto) {
    return this.snapshotService.create(createSnapshotDto);
  }
}
