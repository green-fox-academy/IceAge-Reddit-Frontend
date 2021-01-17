import { Component, OnInit } from '@angular/core';
import { GatewayService } from 'src/app/services/gateway.service';
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

    constructor(private _postService: PostService) {
        this._postService.posts$.subscribe((posts) => {
            this._posts = posts;
            console.log(posts);
        });
    }

    /* constructor(private _gatewayservice: GatewayService) {
           this._gatewayservice.getAllPosts().subscribe((posts) => {
            this._posts = posts;
            console.log(posts);
            console.log('feed rendered');
        }); 
    }*/
}
