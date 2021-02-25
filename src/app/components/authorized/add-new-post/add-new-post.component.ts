import { Component } from '@angular/core';
import { GatewayService } from 'src/app/services/gateway.service';
import { Subreddit } from 'src/types/subreddits';
import { NewPost } from 'src/types/posts';
import { Router } from '@angular/router';
import { Error } from 'src/types/error';

@Component({
    selector: 'app-add-new-post',
    templateUrl: './add-new-post.component.html',
    styleUrls: ['./add-new-post.component.scss'],
})
export class AddNewPostComponent {
    newPost: NewPost = {
        title: '',
        subreddit: 'Select',
        post_type: 'text',
        commentCount: 0,
        posted_url: '',
        description: '',
    };

    namesOfSubreddits: string[];
    urlExists: boolean;
    error?: Error;
    allSubreddits: Subreddit[];

    constructor(private _gatewayService: GatewayService, private _router: Router) {
        this._gatewayService.getAllSubreddits().subscribe((succes) => {
            this.allSubreddits = succes;
            this.setNamesOfSubreddits(this.allSubreddits);
            this.namesOfSubreddits.unshift('Select');
        });
    }

    setNamesOfSubreddits(subreddits: Subreddit[]) {
        this.namesOfSubreddits = subreddits.map((subreddit) => subreddit.name);
    }

    createNewPost() {
        if (this.newPost.subreddit === 'Select') {
            delete this.newPost.subreddit;
        }

        this._gatewayService.postNewPost(this.newPost).subscribe(
            () => {
                this._router.navigate(['auth/feed']);
            },
            (err: Error) => (this.error = err),
        );
    }

    onUrlClick() {
        this.newPost.post_type = 'url';
        this.urlExists = true;
    }

    onTextClick() {
        this.newPost.post_type = 'text';
        this.urlExists = false;
    }
}
