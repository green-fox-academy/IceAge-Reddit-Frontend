import { Component } from '@angular/core';
import { GatewayService } from 'src/app/services/gateway.service';
import { Subreddit } from 'src/types/subreddits';
import { newPost, Post } from 'src/types/posts';
import { Token } from 'src/types/token';
import { Router } from '@angular/router';
import { Error } from 'src/types/error';
import { PostService } from 'src/app/services/post.service';

@Component({
    selector: 'app-add-new-post',
    templateUrl: './add-new-post.component.html',
    styleUrls: ['./add-new-post.component.scss'],
})
export class AddNewPostComponent {
    newPost: newPost = {
        title: '',
        subreddit: 'Select',
        post_type: 'text',
        commentCount: 0,
        posted_url: '',
        description: '',
    };

    namesOfSubreddits: string[];
    urlExists: boolean;
    errorMessage$?: Error;
    token: Token;
    allSubreddits$: Subreddit[];

    constructor(
        private _gatewayService: GatewayService,
        private _router: Router,
        private _postService: PostService,
    ) {
        this._gatewayService.getAllSubreddits().subscribe((succes) => {
            this.allSubreddits$ = succes;
            this.getNamesOfSubreddits();
            this.namesOfSubreddits.unshift('Select');
            console.log(this.namesOfSubreddits);
        });
    }

    getNamesOfSubreddits(): string[] {
        return (this.namesOfSubreddits = this.allSubreddits$.map((name) => name.name));
    }

    createNewPost() {
        this._gatewayService.postNewPost(this.newPost).subscribe(
            (success: Post) => {
                console.log(success);
                this._postService.addpost(success);
                this._router.navigate(['/feed']);
            },
            (err: Error) => (this.errorMessage$ = err),
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
