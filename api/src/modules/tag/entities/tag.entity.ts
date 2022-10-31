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
}
