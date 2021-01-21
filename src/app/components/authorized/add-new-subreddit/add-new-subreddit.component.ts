import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GatewayService } from 'src/app/services/gateway.service';
import { SubredditCreation } from 'src/types/subreddits';
import { Error } from 'src/types/error';

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

    errorMessage$?: Error;

    constructor(private _gatewayService: GatewayService) {}

    onSubmit(subredditForm: NgForm) {
        console.log('in onSubmit: ', subredditForm.valid);
        if (subredditForm.valid) {
            this._gatewayService.createSubreddit(this.subreddit).subscribe(
                (result) => console.log('succes: ', result),
                (error) => console.log('error: ', error),
            );
        } else {
            (error: Error) => (this.errorMessage$ = error);
            console.log('error: NOT VALID INPUT');
        }
    }
}
