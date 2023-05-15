import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from './users.entity';
import { UsersRepository } from './users.repository';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: UsersRepository,
        private authService: AuthService
        ) { }

    public async getUserByUsername(username: string): Promise<UserEntity> {
        return await this.userRepository.findOne({ where: { username } });
    }

    public async getUserByUserId(userId: string): Promise<UserEntity> {
        return await this.userRepository.findOne({ where: { id: userId } });
    }

    public async createUser(user: Partial<UserEntity>, password: string): Promise<UserEntity> {
        const newUser = await this.userRepository.save(user);

        await this.authService.createPasswordForNewUser(newUser.id, password);

        return newUser;
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
