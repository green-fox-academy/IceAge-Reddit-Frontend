import { Component } from '@angular/core';
import { GatewayService } from 'src/app/services/gateway.service';
import { PostService } from 'src/app/services/post.service';
import { SubredditService } from 'src/app/services/subreddit.service';
import { Post } from 'src/types/posts';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss'],
})
export class FeedComponent {
    public _posts: Post[];

    constructor(
        private _postService: PostService,
        private _gateway: GatewayService,
        private _subredditService: SubredditService,
    ) {
        this._gateway.getAllPosts().subscribe((posts) => {
            this._postService.setPosts(posts);
        });
        this._gateway.getAllSubreddits().subscribe((subreddits) => {
            this._subredditService.setSubreddits(subreddits);
        });
        this._postService.posts$.subscribe((currentPosts) => {
            this._posts = currentPosts;
        });
    }
}
