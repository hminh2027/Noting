import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateSnapshotDto {
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
  })
  @IsNotEmpty()
  description: string;

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
}
