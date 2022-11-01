import { Note } from './../../note/entities/note.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({
  name: 'category',
})
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  /* 1-N */
  @OneToMany(() => Note, (note) => note.tags, { cascade: true })
  notes: Note[];
}
