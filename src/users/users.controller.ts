import { Controller, Get, Param, Patch, Put, Delete, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get('/@:username')
    getUserByUsername(@Param() param): string {
        return `details of username = ${param.username}`;
    }

    @Get('/:userid')
    getUserByUserId(@Param() param): string {
        return `details of user id = ${param.userid}`;
    }

    @Post('/')
    createNewUser(): string {
        return 'new user created';
    }

    @Patch('/:userid')
    updateUserDetails(@Param() param): string {
        return `details of user (id = ${param.userid}) updated`;
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
