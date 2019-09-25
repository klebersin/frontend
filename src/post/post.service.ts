import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Post } from '../interfaces/post.inteface';
import { CreatePostDTO } from '../dto/post.dto';

@Injectable()
export class PostService {
    constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

    async getPosts(): Promise<Post[]> {
        const posts = await this.postModel.find();
        return posts;
    }
    async getPost(postId: string): Promise<Post> {
        const post = await this.postModel.findById(postId);
        return post;
    }
    async createPost(createPostDTO: CreatePostDTO): Promise<Post> {
        const post = await new this.postModel(createPostDTO);
        await post.save();
        return post;
    }
    async deletePost(postID: string): Promise<Post> {
        const post = await this.postModel.findByIdAndDelete(postID);
        return post;
    }

    async updatePost(postID: string, createPostDTO: CreatePostDTO): Promise<Post> {
        const post = await this.postModel.findByIdAndUpdate(postID, createPostDTO, {new: true});
        return post;
    }

}
