import { Schema } from 'mongoose';

export const PostSchema = new Schema({
    name: String,
    description: String,
    creator: String,
    createdAt: { type: Date, default: Date.now }
});