import { Document } from 'mongoose';

export interface Post extends Document {
    readonly name: string;
    readonly description: string;
    readonly creator: string;
    readonly createdAt: Date;
}
