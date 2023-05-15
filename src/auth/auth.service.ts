import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PasswordEntity } from './passwords.entity';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { compare, hash } from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(PasswordEntity)
        private passwordRepository: Repository<PasswordEntity>) { }

    public static PASSWORD_SALT_ROUNDS = 10;

    async createPasswordForNewUser(userId: string, password: string): Promise<PasswordEntity> {
        const exist = await this.passwordRepository.findOne({ where: { userId } });

        if (exist) {
            throw new UnauthorizedException('This user already has a password, cannot set new password.')
        }

        const newPassword = new PasswordEntity();
        newPassword.userId = userId;
        newPassword.password = await this.passToHash(password);

        return await this.passwordRepository.save(newPassword);
    }

    private async passToHash(password): Promise<string> {
        return hash(password, AuthService.PASSWORD_SALT_ROUNDS)
    }

    private async matchPassHash(password: string, hash: string): Promise<boolean> {
        return ((await compare(password, hash)) === true);
    }
}
