import { Component } from '@angular/core';
import { GatewayService } from 'src/app/services/gateway.service';
import { PostService } from './services/post.service';
import { SubredditService } from './services/subreddit.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'IceAge-Reddit-Frontend';

    constructor(
        private _gateway: GatewayService,
        private _postService: PostService,
        private _subredditService: SubredditService,
    ) {
        this._gateway.fetchPosts().subscribe((response) => {
            this._postService.setPosts(response);
        });

        this._gateway.fetchSubreddits().subscribe((response) => {
            this._subredditService.setSubreddits(response);
        });
    }
}
