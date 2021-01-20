import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GatewayService } from 'src/app/services/gateway.service';
import { PostService } from 'src/app/services/post.service';
import { SubredditService } from 'src/app/services/subreddit.service';
import { Subreddit } from 'src/types/subreddits';

@Component({
    selector: 'app-subreddits',
    templateUrl: './subreddits.component.html',
    styleUrls: ['./subreddits.component.scss'],
})
export class SubredditsComponent {
    public _subreddits: Subreddit[];

    constructor(
        private _postService: PostService,
        private _subredditService: SubredditService,
        private _gateWayService: GatewayService,
        private _router: Router,
    ) {
        this._gateWayService.getAllSubreddits().subscribe((subreddits) => {
            this._subredditService.setSubreddits(subreddits);
        });
        this._gateWayService.getAllPosts().subscribe((posts) => {
            this._postService.setPosts(posts);
        });
        this._subredditService.subreddits$.subscribe((currentSubreddits) => {
            this._subreddits = currentSubreddits;
        });
    }

    private _navigateToSubredditComponent(subredditName: string): void {
        this._router.navigate(['/feed', subredditName]);
    }

    onSelect(subreddit) {
        this._gateWayService.getSubredditPostsFeedByName(subreddit.name).subscribe((response) => {
            this._postService.setCurrentSubredditPosts(response);
            this._navigateToSubredditComponent(subreddit.name);
        });
    }
}
