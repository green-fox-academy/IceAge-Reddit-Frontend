import { Component } from '@angular/core';
import { GatewayService } from 'src/app/services/gateway.service';
import { PostService } from './services/post.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'IceAge-Reddit-Frontend';

    constructor(
        private _gateway: GatewayService,
        private _postService: PostService
    ) {
        this._gateway.fetchPosts()
            .subscribe(response => {
                this._postService.setPosts(response.posts);
            })
    }
}
