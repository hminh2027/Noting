import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Matches } from 'class-validator';

export class CreateAttachmentDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Matches(/(data:image\/[^;]+;base64.*?)/, {
    message: `Image must be base64 encoded format.`,
  })
  image: string;

  @ApiProperty({ type: Number })
  @IsNumber()
  @IsNotEmpty()
  noteId: number;
}
