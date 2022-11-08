import { Tag } from './tag.entity';
import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [TagController],
  imports: [TypeOrmModule.forFeature([Tag])],
  exports: [TagService],
  providers: [TagService],
})
export class TagModule {}
