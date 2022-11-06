import { Note } from 'modules/note/note.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity({
  name: 'attachment',
})
// @Index(['fileName', 'noteId'], { unique: true })
export class Attachment {
  @PrimaryColumn()
  fileName: string;

  @PrimaryColumn()
  noteId: number;

  /* N-1 */
  @ManyToOne(() => Note, (note) => note.attachments)
  @JoinColumn({ name: 'noteId' })
  note: Note;
}
