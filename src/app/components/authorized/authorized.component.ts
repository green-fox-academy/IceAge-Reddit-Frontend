import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-authorized',
    templateUrl: './authorized.component.html',
    styleUrls: ['./authorized.component.scss'],
})
export class AuthorizedComponent implements OnInit {
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

    ngOnInit(): void {}
}
