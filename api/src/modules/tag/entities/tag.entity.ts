import { Note } from '../../note/note.entity';
import { User } from 'modules/user';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity({
  name: 'tag',
})
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  /* N-N */
  @ManyToMany(() => Note, (note) => note.tags)
  @JoinTable()
  notes: Note[];
}
