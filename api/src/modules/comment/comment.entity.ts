import { SnapShot } from './../snapshot/snapshot.entity';
import { Attachment } from '../attachment/attachment.entity';
import { Category } from 'modules/category/category.entity';
import { Tag } from 'modules/tag/entities/tag.entity';
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
} from 'typeorm';
import { Note } from 'modules/note/note.entity';

@Entity({
  name: 'comment',
})
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 5000 })
  content: string;

  @Column()
  userId: number;

  @Column()
  noteId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  /* N-1 */
  @ManyToOne(() => User, (user) => user.comments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Note, (note) => note.comments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'noteId' })
  note: Note;
}
