import { SnapShot } from './../snapshot/snapshot.entity';
import { Note } from '../note/note.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PasswordTransformer } from './password.transformer';
import { Comment } from 'modules/comment/comment.entity';

@Entity({
  name: 'user',
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

  @OneToMany(() => SnapShot, (snap) => snap.user)
  snapshots: SnapShot[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}

export class UserFillableFields {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}
