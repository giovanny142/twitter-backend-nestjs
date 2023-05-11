import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserEntity } from './users.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: UsersRepository) { }

    async getUserByUsername(username: string): Promise<UserEntity> {
        return await this.userRepository.findOne({ where: { username } });
    }
}
