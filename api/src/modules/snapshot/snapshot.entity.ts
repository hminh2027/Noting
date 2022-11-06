import { Note } from 'modules/note/note.entity';
import { User } from 'modules/user';
import * as moment from 'moment';
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
  BeforeInsert,
} from 'typeorm';

@Entity({
  name: 'snapshot',
})
export class SnapShot {
  @PrimaryColumn()
  createdAt: string;

  @Column()
  title: string;

  @Column({ length: 5000 })
  content: string;

  @Column()
  description: string;

  @Column()
  userId: number;

  @Column()
  noteId: number;

  /* N-1 */
  @ManyToOne(() => User, (user) => user.snapshots, {
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Note, (note) => note.snapshots, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'noteId' })
  note: Note;

  @BeforeInsert()
  getTime(): void {
    this.createdAt = moment().format('X');
  }
}
