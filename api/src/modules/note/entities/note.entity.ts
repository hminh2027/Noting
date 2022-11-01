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
  JoinTable,
} from 'typeorm';

@Entity({
  name: 'notes',
})
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ type: Boolean, default: false })
  isTemplate: Boolean;

  @Column({ type: Boolean, default: false })
  isPublic: Boolean;

  @Column()
  userId!: number;

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

  /* N-N */
  @ManyToMany(() => Tag, {
    eager: true,
  })
  @JoinTable()
  tags: Tag[];
}
