import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/types/posts';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
    @Input() postId: number;

    posts$: Post[];

    post: Post;
    postTitle: string;
    postDateCreated: Date;
    postAuthor: string;
    postSubreddit: string;
    postCommentCount: number;

    private _setPropertiesFromPosts = (post: Post) => {
        this.post = post;
        this.postTitle = post.title;
        this.postDateCreated = new Date(post.date_created);
        this.postAuthor = post.author;
        this.postSubreddit = post.subreddit;
        this.postCommentCount = post.commentCount;
    };

    constructor(private _postService: PostService, private _router: Router) {}

    ngOnInit(): void {
        const post = this._postService.getPost(this.postId);
        this._setPropertiesFromPosts(post);
    }

    onDetailsClick(): void {
        this._router.navigate([`/auth/post-details/${this.postId}`]);
    }
}
