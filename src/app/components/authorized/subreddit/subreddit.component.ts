import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/types/posts';

@Component({
    selector: 'app-subreddit',
    templateUrl: './subreddit.component.html',
    styleUrls: ['./subreddit.component.scss'],
})
export class SubredditComponent implements OnInit {
    subredditName: string;
    listOfPosts: Post[];

    constructor(private _postService: PostService, private _route: ActivatedRoute) {}

    ngOnInit(): void {
        let name = this._route.snapshot.params.name;
        this.subredditName = name;
        this.listOfPosts = this._postService.getCurrentSubredditPosts();
    }
}
