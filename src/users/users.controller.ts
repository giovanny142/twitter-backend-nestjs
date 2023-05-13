import { Controller, Get, Param, Patch, Put, Delete, Post, NotFoundException, Body } from '@nestjs/common';
import { ApiTags, ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UserEntity } from './users.entity';

export class UserCreateRequestBody {
    @ApiProperty() username: string;
    @ApiProperty() password: string;
    @ApiPropertyOptional() name?: string;
    @ApiPropertyOptional() avatar?: string;
    @ApiPropertyOptional() bio?: string;
}

export class UserUpdateRequestBody {
    @ApiPropertyOptional() password?: string;
    @ApiPropertyOptional() name?: string;
    @ApiPropertyOptional() avatar?: string;
    @ApiPropertyOptional() bio?: string;
}

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @Get('/@:username')
    async getUserByUsername(@Param('username') username: string): Promise<any> {
        const user = await this.userService.getUserByUsername(username);

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return user;
    }

    @Get('/:userid')
    async getUserByUserId(@Param('userId') userId: string): Promise<UserEntity> {
        const user = await this.userService.getUserByUsername(userId);

        if (!user) {
            throw new NotFoundException('User not found')
        }

        return user;
    }

    @Post('/')
    async createNewUser(@Body() createUserRequest: UserCreateRequestBody): Promise<UserEntity> {
        const user = await this.userService.createUser(createUserRequest);

        return user;
    }
 
    @Patch('/:userid')
    async updateUserDetails(
        @Param('userid') userid: string,
        @Body() updateUserRequest: UserUpdateRequestBody
    ): Promise<UserEntity> {
        const user = await this.userService.updateUser(userid, updateUserRequest);
        return user;
    }

    @Put(':userid/follow')
    followUser(): string {
        return 'you followed user';
    }

    @Delete('/:userid/follow')
    unfollowUser(): string {
        return 'you unfollowed user';
    }

    @Get('/:userid/followers')
    getFollowersOfUser(): string {
        return 'get followers of user'
    }

    @Put('/:userid/followees')
    getFolloweesOfUser(): string {
        return 'get followees of giver user'
    }

}
