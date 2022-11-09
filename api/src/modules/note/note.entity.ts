import { SharedNote } from './../shared-note/shared-note.entity';
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
} from 'typeorm';
import { Comment } from 'modules/comment/comment.entity';

@Entity({
  name: 'note',
})
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ length: 5000, nullable: true })
  content: string;

  @Column({ type: Boolean, default: false })
  isTemplate: Boolean;

  @Column({ type: Boolean, default: false })
  isPublic: Boolean;

  @Column()
  userId: number;

  @Column()
  categoryId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  /* N-1 */
  @ManyToOne(() => User, (user) => user.notes, {
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Category, (category) => category.notes, {
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  /* 1-N */
  @OneToMany(() => Attachment, (att) => att.note, {
    eager: true,
    onDelete: 'CASCADE',
  })
  attachments: Attachment[];

  @OneToMany(() => SnapShot, (snap) => snap.note, {
    eager: true,
    onDelete: 'CASCADE',
  })
  snapshots: SnapShot[];

  @OneToMany(() => Comment, (comment) => comment.note, {
    eager: true,
    onDelete: 'CASCADE',
  })
  comments: Comment[];

  @OneToMany(() => SharedNote, (shared) => shared.note, {
    onDelete: 'CASCADE',
  })
  sharedNotes: SharedNote[];

  /* N-N */
  @ManyToMany(() => Tag, (tag) => tag.notes, {
    eager: true,
    onDelete: 'CASCADE',
  })
  tags: Tag[];
}
