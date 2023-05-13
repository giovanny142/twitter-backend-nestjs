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

    public async getUserByUsername(username: string): Promise<UserEntity> {
        return await this.userRepository.findOne({ where: { username } });
    }

    public async getUserByUserId(userId: string): Promise<UserEntity> {
        return await this.userRepository.findOne({ where: { id: userId } });
    }

    public async createUser(user: Partial<UserEntity>): Promise<UserEntity> {
        return await this.userRepository.save(user);
    }

    public async updateUser(userId: string, newUserDetails: Partial<UserEntity>): Promise<UserEntity> {
        const existUser = await this.userRepository.findOne({ where: { id: userId } })

        if (!existUser) {
            return null;
        }
        
        if (newUserDetails.bio) existUser.bio = newUserDetails.bio;
        if (newUserDetails.avatar) existUser.avatar = newUserDetails.avatar;
        if (newUserDetails.name) existUser.name = newUserDetails.name;

        return await this.userRepository.save(existUser);
    }
}
