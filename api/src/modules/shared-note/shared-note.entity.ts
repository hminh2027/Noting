import { Note } from './../note/note.entity';
import { SnapShot } from './../snapshot/snapshot.entity';
import { Attachment } from '../attachment/attachment.entity';
import { Category } from 'modules/category/category.entity';
import { Tag } from 'modules/tag/tag.entity';
import { User } from 'modules/user';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Comment } from 'modules/comment/comment.entity';

@Entity({
  name: 'shared_note',
})
export class SharedNote {
  @PrimaryColumn()
  userId: number;

  @PrimaryColumn()
  noteId: number;

  @Column({ type: Boolean, default: false })
  isEditable: Boolean;

  @Column({ type: Boolean, default: false })
  isCommentable: Boolean;

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
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'noteId' })
  note: Note;
}
