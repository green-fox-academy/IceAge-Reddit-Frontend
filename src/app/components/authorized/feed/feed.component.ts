import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/types/posts';

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
}
