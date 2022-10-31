import { Note } from './../note/entities/note.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PasswordTransformer } from './password.transformer';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  firstName: string;

  @Column({ length: 255 })
  lastName: string;

  @Column({ length: 255 })
  email: string;

  @Column({
    name: 'password',
    length: 255,
    transformer: new PasswordTransformer(),
  })
  password: string;

  toJSON() {
    const { password, ...self } = this;
    return self;
  }

  /* 1-N */
  @OneToMany(() => Note, (note) => note.user, { cascade: true })
  notes: Note[];
}

export class UserFillableFields {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}
