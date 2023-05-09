import { Controller, Get, Param, Patch, Put, Delete, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {

    @Get('/@:username')
    getUserByUsername(@Param('username') username: string): string {
        return `details of username = ${username}`;
    }

    @Get('/:userid')
    getUserByUserId(@Param('userid') userid: string): string {
        return `details of user id = ${userid}`;
    }

    @Post('/')
    createNewUser(): string {
        return 'new user created';
    }

    @Patch('/:userid')
    updateUserDetails(@Param('userid') userid): string {
        return `details of user (id = ${userid}) updated`;
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
