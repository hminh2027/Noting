import { User } from 'modules/user';
import { Note } from '../note/note.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity({
  name: 'category',
})
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  /* 1-N */
  @OneToMany(() => Note, (note) => note.category, {
    onDelete: 'CASCADE',
  })
  notes: Note[];

  /* N-N */
  @ManyToMany(() => User, {
    onDelete: 'CASCADE',
  })
  @JoinTable()
  users: User[];
}
