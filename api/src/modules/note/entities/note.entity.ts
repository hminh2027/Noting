import { Attachment } from './../../attachment/entities/attachment.entity';
import { Category } from 'modules/category/entities/category.entity';
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

@Entity({
  name: 'note',
})
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ length: 5000 })
  content: string;

  @Column({ type: Boolean, default: false })
  isTemplate: Boolean;

  @Column({ type: Boolean, default: false })
  isPublic: Boolean;

  // TODO: When have authentication installed
  // pls remove userId in create-note.dto and use value from token
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
    eager: true,
    onDelete: 'CASCADE',
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
    cascade: true,
  })
  attachments: Attachment[];
  /* N-N */
  @ManyToMany(() => Tag, (tag) => tag.notes, {
    eager: true,
    onDelete: 'CASCADE',
  })
  tags: Tag[];
}
