export interface PostResponse {
    posts: Post[];
}

export interface Post {
    id: number;
    title: string;
    date_created: Date;
    subreddit: string;
    author: string;
    commentCount: number;
    post_type: string;
    posted_url?: string;
    description: string;
}
