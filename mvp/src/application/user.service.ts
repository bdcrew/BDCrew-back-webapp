import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../domain/user/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findEmailOne(email: string): Promise<> {
    return this.userRepository.findOne({
      where: {
        email: email,
      },
    });
  }

  async findAll();
}
