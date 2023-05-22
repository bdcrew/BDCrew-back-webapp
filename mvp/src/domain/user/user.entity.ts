import { Entity } from 'typeorm';
import { Column, PrimaryColumn } from 'typeorm/browser';

@Entity()
export class UserEntity {
  @PrimaryColumn('uuid', { comment: '유저 id' }
  id: string;

  @Column('varchar', { length: 100, comment: '이메일' })
  email: string;

  @Column('varchar', { length: 150, comment: '비밀번호' })
  password: string;

  @Column('int', { comment: '전화번호' })
  phone: number;

  @Column('varchar', { length: 150, comment: '토큰' })
  token: string;

  @Column('datetime', { comment: '생성날짜' })
  created: Date;

  @Column('datetime', { comment: '수정날짜' })
  updated: Date;
}
