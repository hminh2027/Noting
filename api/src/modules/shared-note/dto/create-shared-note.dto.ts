import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsInt, IsNotEmpty } from 'class-validator';
import { Permission } from '../permission.enum';

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
    enum: Permission,
    default: Permission.VIEWABLE,
  })
  @IsEnum(Permission)
  @IsNotEmpty()
  permission: Permission;
}
