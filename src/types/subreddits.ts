export interface SubredditResponse {
    subreddits: Subreddit[];
}

export interface Subreddit {
    name: string,
    title: string,
    date_created: Date,
    description: string,
    userCount: number,
    author: string
}
