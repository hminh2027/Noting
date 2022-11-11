import { OmitType } from '@nestjs/swagger';
import { CreateNoteDto } from './create-note.dto';

export class UpdateNoteDto extends OmitType(CreateNoteDto, ['tagsName']) {}
