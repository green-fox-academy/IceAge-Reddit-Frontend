import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/types/posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'] 
})
export class PostComponent implements OnInit {

  @Input() postId: number;

  post: Post;

  postTitle: string;
  postDateCreated: Date;
  postAuthor: string;
  postSubreddit: string;
  postCommentCount: number;

  constructor(private _postService: PostService) { }

  ngOnInit(): void {
    this.post = this._postService.getPost(this.postId);
    this.setPropertiesFromPosts();
  }

  private setPropertiesFromPosts(): void {
    this.post = this._postService.getPost(this.postId);
    this.postTitle = this.post.title;
    this.postDateCreated = new Date(this.post.date_created);
    this.postAuthor = this.post.author;
    this.postSubreddit = this.post.subreddit;
    this.postCommentCount = this.post.commentCount;
  }

}
