import { Note } from './../../note/entities/note.entity';
import { User } from 'modules/user';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity({
  name: 'tags',
})
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  /* N-N */
  @ManyToMany(() => Note, (note) => note.tags)
  @JoinTable()
  notes: Note[];
}
