import { Note } from 'modules/note/entities/note.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'attachment',
})
export class Attachment {
  @PrimaryColumn()
  fileName: string;

  @Column()
  noteId: number;

  /* N-1 */
  @ManyToOne(() => Note, (note) => note.attachments)
  @JoinColumn({ name: 'noteId' })
  note: Note;
}
