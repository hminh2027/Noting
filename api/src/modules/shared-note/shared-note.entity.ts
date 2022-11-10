import { Note } from './../note/note.entity';
import { User } from 'modules/user';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';
import { Permission } from './permission.enum';

@Entity({
  name: 'shared_note',
})
export class SharedNote {
  @PrimaryColumn()
  userId: number;

  @PrimaryColumn()
  noteId: number;

  @Column({ type: 'enum', enum: Permission, default: Permission.VIEWABLE })
  permission: Permission;
  // @Column({ type: Boolean, default: false })
  // isEditable: Boolean;

  // @Column({ type: Boolean, default: false })
  // isCommentable: Boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  /* N-1 */
  @ManyToOne(() => User, (user) => user.sharedNotes, {
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Note, (note) => note.sharedNotes, {
    // eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'noteId' })
  note: Note;
}
