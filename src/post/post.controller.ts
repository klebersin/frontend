import { Controller, Get, Post, Delete, Put, Param, Body, Res, HttpStatus } from '@nestjs/common';
import { CreatePostDTO } from '../dto/post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {

    constructor(private postService: PostService) {}

    @Get()
    async getPosts(@Res() res) {
        const posts = await this.postService.getPosts();
        return res.status(HttpStatus.OK).json(posts);
    }

    @Post()
    async createPost(@Res() res,  @Body() createPostDTO: CreatePostDTO) {
        const posts = await this.postService.createPost(createPostDTO);
        return res.status(HttpStatus.OK).json(posts);
    }

    @Get('/:postID')
    async getPost(@Res() res, @Param('postID') postID) {
        const post = await this.postService.getPost(postID);
        return res.status(HttpStatus.OK).json(post);
    }

    @Delete('/:postID')
    async deletePost(@Res() res, @Param('postID') postID) {
        const post = await this.postService.deletePost(postID);
        return res.status(HttpStatus.OK).json(post);
    }

    @Put('/:postID')
    async updatePost(@Res() res, @Param('postID') postID, @Body() createPostDTO: CreatePostDTO) {
        const post = await this.postService.updatePost(postID, createPostDTO);
        return res.status(HttpStatus.OK).json(post);
    }
}
