import { Component, OnInit } from '@angular/core';
import { SubredditService } from 'src/app/services/subreddit.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
    subredditsName: string[];
    constructor(private _subredditService: SubredditService) {
        this.subredditsName = this._subredditService.getAllNames();
    }
}
