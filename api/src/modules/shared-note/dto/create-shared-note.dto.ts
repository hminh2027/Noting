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
    // type: En
    enum: Permission,
    default: Permission.VIEWABLE,
  })
  @IsEnum(Permission)
  @IsNotEmpty()
  permission: Permission;

  // @ApiProperty({
  //   required: true,
  //   type: Boolean,
  //   default: false,
  // })
  // @IsBoolean()
  // isTemplate: string;

  // @ApiProperty({
  //   required: true,
  //   type: Boolean,
  //   default: false,
  // })
  // @IsBoolean()
  // isPublic: string;
}
