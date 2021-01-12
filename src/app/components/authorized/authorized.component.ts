import { Component } from '@angular/core';
import { GatewayService } from 'src/app/services/gateway.service';
import { PostService } from 'src/app/services/post.service';
import { SubredditService } from 'src/app/services/subreddit.service';

@Component({
    selector: 'app-authorized',
    templateUrl: './authorized.component.html',
    styleUrls: ['./authorized.component.scss'],
})
export class AuthorizedComponent {
    constructor(
        private _gateway: GatewayService,
        private _postService: PostService,
        private _subredditServise: SubredditService,
    ) {
        this._gateway.getAllPosts().subscribe((posts) => {
            this._postService.setPosts(posts);
            this._gateway.getAllSubreddits().subscribe((subreddits) => {
                this._subredditServise.setSubreddits(subreddits);
            });
        });
    }
}
