import { Controller, Get, Param, Post, Delete, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('posts')
@Controller('posts')
export class PostsController {

    @Get('/')
    getAllPosts(): string {
        return 'get all posts';
    }

    @Get('/:postid')
    getPostDetails(@Param('postid') postid: string): string {
        return `details of postid = ${postid}`
    }

    @Post('/')
    createNewPost(): string {
        return 'new post was created'
    }

    @Delete('/:postid')
    deletePost(@Param('postid') postid: string): string {
        return `delete postid = ${postid}`
    }

    @Put('/:postid/like')
    likePost(@Param('postid') postid: string): string {
        return `liked post ${postid}`
    }

    @Delete('/:postid/like')
    unlikePost(@Param('postid') postid: string): string {
        return `unliked post ${postid}`
    }
}
