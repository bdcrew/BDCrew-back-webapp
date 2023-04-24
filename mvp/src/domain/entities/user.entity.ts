import { Entity } from 'typeorm';
import { Column, PrimaryColumn } from 'typeorm/browser';

@Entity()
export class UserEntity {
  @PrimaryColumn('uuid', { comment: '유저 id' })
  id: string;

  @Column('varchar', { length: 100, comment: '이메일' })
  email: string;

  @Column('varchar', { length: 150, comment: '비밀번호' })
  password: string;

  @Column('int')
  phone: number;

  @Column()
  token: string;

  @Column()
  created: Date;

  @Column()
  updated: Date;
}
