import { Component } from '@angular/core';
import { GatewayService } from 'src/app/services/gateway.service';
import { Subreddit } from 'src/types/subreddits';
import { NgForm } from '@angular/forms';
import { newPost, Post } from 'src/types/posts';
import { Token } from 'src/types/token';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-new-post',
    templateUrl: './add-new-post.component.html',
    styleUrls: ['./add-new-post.component.scss'],
})
export class AddNewPostComponent {
    newPost: newPost = {
        title: '',
        subreddit: '',
        post_type: 'text',
        commentCount: 0,
        posted_url: '',
        description: '',
    };

    urlExists: boolean;

    token: Token;
    allSubreddits$: Subreddit[];
    namesOfSubreddits: string[];

    constructor(private _gatewayService: GatewayService, private _router: Router) {
        this._gatewayService.getAllSubreddits().subscribe((succes) => {
            this.allSubreddits$ = succes;
            this.getNamesOfSubreddits();
            console.log(this.namesOfSubreddits);
        });
    }

    getNamesOfSubreddits(): string[] {
        return (this.namesOfSubreddits = this.allSubreddits$.map((name) => name.name));
    }

    createNewPost() {
        this._gatewayService.postNewPost(this.newPost).subscribe(
            (succes: Post) => {
                console.log(succes);
                this._router.navigate(['/feed']);
            },
            (error) => console.log(error),
        );
    }

    urlClick(): boolean {
        this.newPost.post_type = 'url';
        return (this.urlExists = true);
    }

    textClick(): boolean {
        this.newPost.post_type = 'text';
        return (this.urlExists = false);
    }
}
