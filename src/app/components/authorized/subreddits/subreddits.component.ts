import { Component } from '@angular/core';
import { SubredditService } from 'src/app/services/subreddit.service';
import { Subreddit } from 'src/types/subreddits';

@Component({
    selector: 'app-subreddits',
    templateUrl: './subreddits.component.html',
    styleUrls: ['./subreddits.component.scss'],
})
export class SubredditsComponent {
    public _subreddits: Subreddit[];

    constructor(private _subredditService: SubredditService) {
        this._subredditService.subreddits$.subscribe(
            (subreddits) => (this._subreddits = subreddits),
        );
    }
    // onSelect(subreddit) {
    //     this._router.navigate(['/subreddits', subreddit.name]);
    //     console.log('clicked');
    // }
}
