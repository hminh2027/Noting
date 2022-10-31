import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsInt, IsNotEmpty } from 'class-validator';

export class CreateNoteDto {
  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    required: true,
  })
  @IsNotEmpty()
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
    required: true,
    type: Number,
  })
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @ApiProperty({
    required: true,
    type: [],
  })
  @IsArray()
  @IsNotEmpty()
  tagsId: number[];
}
