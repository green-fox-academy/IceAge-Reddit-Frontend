import { Post } from './posts';

export interface Subreddit {
    name: string;
    title: string;
    date_created: Date;
    description: string;
    userCount: number;
    author: string;
    posts: Post[];
}

export interface SubredditCreation {
    name: string;
    title: string;
    description: string;
}
