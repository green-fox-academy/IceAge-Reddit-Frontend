import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { SubredditService } from 'src/app/services/subreddit.service';
import { Post } from 'src/types/posts';
import { Subreddit } from 'src/types/subreddits';

@Component({
    selector: 'app-subreddit',
    templateUrl: './subreddit.component.html',
    styleUrls: ['./subreddit.component.scss'],
})
export class SubredditComponent implements OnInit {
    subredditName: string;
    listOfPosts: Post[];
    subreddits: Subreddit[];

    constructor(
        private _postService: PostService,
        private _subredditService: SubredditService,
        private _route: ActivatedRoute,
    ) {
        // this.subreddits = this._subredditService.getAllSubreddits();
    }

    ngOnInit(): void {
        let name = this._route.snapshot.params.name;
        this.subredditName = name;
        this.listOfPosts = this._postService.getCurrentSubredditPosts();
    }
}
