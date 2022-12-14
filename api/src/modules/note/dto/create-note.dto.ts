import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateNoteDto {
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    required: true,
    default: '[]',
  })
  content: string;

  @ApiProperty({
    required: true,
    type: Boolean,
    default: false,
  })
  @IsBoolean()
  isTemplate: string;

  @ApiProperty({
    required: true,
    type: Boolean,
    default: false,
  })
  @IsBoolean()
  isPublic: string;

  @ApiProperty({
    type: [],
  })
  @IsArray()
  tagsName: string[];

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNotEmpty()
  categoryId: number;
}
