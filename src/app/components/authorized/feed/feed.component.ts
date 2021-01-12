import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    public _subreddits: Subreddit[];

    constructor(
        private _postService: PostService,
        private _subredditService: SubredditService,
        private _gateWayService: GatewayService,
        private router: Router,
    ) {
        this._postService.posts$.subscribe((posts) => (this._posts = posts));
        this._subredditService.subreddits$.subscribe(
            (subreddits) => (this._subreddits = subreddits),
        );
    }

    private _navigateToSubredditComponent(subredditName: string): void {
        this.router.navigate(['/feed', subredditName]);
    }

    onSelect(subreddit) {
        this._gateWayService.getSubredditPostsFeedByName(subreddit.name).subscribe((response) => {
            this._postService.setCurrentSubredditPosts(response);
            this._navigateToSubredditComponent(subreddit.name);
        });
    }
}
