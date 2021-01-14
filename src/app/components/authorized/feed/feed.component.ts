import { Component } from '@angular/core';
import { GatewayService } from 'src/app/services/gateway.service';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/types/posts';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss'],
})
export class FeedComponent {
    public _posts: Post[];

    constructor(private _gateway: GatewayService, private _postService: PostService) {
        this._gateway.getAllPosts().subscribe((response) => {
            this._postService.setPosts(response);
        });
        this._postService.posts$.subscribe((posts) => (this._posts = posts));
    }
}
