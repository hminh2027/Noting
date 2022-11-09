import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsNotEmpty } from 'class-validator';

export class CreateSharedNoteDto {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @IsNotEmpty()
  noteId: number;

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
}
