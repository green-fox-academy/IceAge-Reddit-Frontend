import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GatewayService } from 'src/app/services/gateway.service';
import { SubredditCreation } from 'src/types/subreddits';
import { Error } from 'src/types/error';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-new-subreddit',
    templateUrl: './add-new-subreddit.component.html',
    styleUrls: ['./add-new-subreddit.component.scss'],
})
export class AddNewSubredditComponent {
    subreddit: SubredditCreation = {
        name: '',
        title: '',
        description: '',
    };

    error: Error;

    constructor(private _gatewayService: GatewayService, private _router: Router) {}

    createNewSubreddit() {
        this._gatewayService.createSubreddit(this.subreddit).subscribe(
            () => {
                this._router.navigate(['auth/add-new-post']);
            },
            (err: Error) => (this.error = err),
        );
    }
}
