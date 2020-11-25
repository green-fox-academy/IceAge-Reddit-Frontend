import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, PostResponse } from 'src/types/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private _posts: Post[];

  constructor() { }

  setPosts(post: Post[]): void {
    this._posts = post;
  }

  getAllPosts(): Post[] {
    return this._posts;
  }

}
