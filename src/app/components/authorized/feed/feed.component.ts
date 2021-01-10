import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { SubredditService } from 'src/app/services/subreddit.service';
import { Post } from 'src/types/posts';
import { Subreddit } from 'src/types/subreddits';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss'],
})
export class FeedComponent {
    public _posts: Post[];
    public _subreddits: Subreddit[];

    constructor(private _postService: PostService, private _subredditService: SubredditService) {
        this._postService.posts$.subscribe((posts) => (this._posts = posts));
        this._subredditService.subreddits$.subscribe((subreddits) => (this._subreddits = subreddits));
    }
}
