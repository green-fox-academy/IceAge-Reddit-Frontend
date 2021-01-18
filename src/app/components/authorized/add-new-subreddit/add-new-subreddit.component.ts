import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SubredditService } from 'src/app/services/subreddit.service';
import { SubredditCreation } from 'src/types/subreddits';

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

    constructor(private _subredditService: SubredditService) {}

    onSubmit(subredditForm: NgForm) {
        console.log('in onSubmit: ', subredditForm.valid);
        if (subredditForm.valid) {
            this._subredditService.createSubreddit(this.subreddit).subscribe(
                (result) => console.log('succes: ', result),
                (error) => console.log('error: ', error),
            );
        } else {
            console.log('error: NOT VALID INPUT');
        }
    }
}
