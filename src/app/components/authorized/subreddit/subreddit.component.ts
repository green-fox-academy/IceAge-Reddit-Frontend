import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GatewayService } from 'src/app/services/gateway.service';
import { PostService } from 'src/app/services/post.service';
import { SubredditService } from 'src/app/services/subreddit.service';
import { Post } from 'src/types/posts';
import { Subreddit } from 'src/types/subreddits';

@Component({
    selector: 'app-subreddit',
    templateUrl: './subreddit.component.html',
    styleUrls: ['./subreddit.component.scss'],
})
export class SubredditComponent {
    subredditName: string;
    listOfPosts: Post[];
    subreddits: Subreddit[];

    constructor(
        private _postService: PostService,
        private _subredditService: SubredditService,
        private _gateWayService: GatewayService,
        private _activatedRoute: ActivatedRoute,
    ) {
        this._activatedRoute.params.subscribe((data) => {
            this.subredditName = data.name;
            this._gateWayService.getSubredditPostsFeedByName(data.name).subscribe((response) => {
                this._postService.setCurrentSubredditPosts(response);
                this.subreddits = this._subredditService.getAllSubreddits();
                this.listOfPosts = this._postService.getCurrentSubredditPosts();
            });
        });
    }
}
