import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsInt, IsNotEmpty } from 'class-validator';
import { Permission } from '../permission.enum';

export class CreateSharedNoteDto {
  userId: number;

  @ApiProperty({
    // required: true,
    nullable: true,
  })
  @IsEmail()
  // @IsNotEmpty()
  email?: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @IsNotEmpty()
  noteId: number;

  @ApiProperty({
    enum: Permission,
    default: Permission.VIEWABLE,
  })
  // @IsEnum(Permission)
  permission: Permission;
}
