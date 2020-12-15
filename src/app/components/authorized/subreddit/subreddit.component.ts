import { Component, Input, OnInit } from '@angular/core';
import { SubredditService } from 'src/app/services/subreddit.service';
import { Subreddit } from 'src/types/subreddits';

@Component({
    selector: 'app-subreddit',
    templateUrl: './subreddit.component.html',
    styleUrls: ['./subreddit.component.scss'],
})
export class SubredditComponent implements OnInit {
    @Input() subredditName: string;

    subreddit: Subreddit;

    constructor(private _subredditService: SubredditService) {}

    ngOnInit(): void {
        this.subreddit = this._subredditService.getSubreddit(this.subredditName);
        this.setPropertiesFromSubreddit();
    }

    private setPropertiesFromSubreddit(): void {
        this.subreddit = this._subredditService.getSubreddit(this.subredditName);
    }
}
