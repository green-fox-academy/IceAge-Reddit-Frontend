import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

    currentSubreddit: Subreddit;

    listOfPosts: Post[];

    private _setSubredditProperties = (subreddit: Subreddit) => {
        this.listOfPosts = subreddit.posts;
        this.currentSubreddit = subreddit;
    };

    constructor(private _subredditService: SubredditService, private _route: ActivatedRoute) {}

    ngOnInit(): void {
        let name = this._route.snapshot.params.name;
        this.subredditName = name;

        const subreddit = this._subredditService.getSubredditByName();
        this._setSubredditProperties(subreddit);
    }
}
