import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Post } from 'src/types/posts';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private _posts: Post[];

  posts$: BehaviorSubject<Post[]> = new BehaviorSubject(null);

  constructor() { }

  setPosts(posts: Post[]) : void {
    this._posts = posts;
    this.posts$.next(posts);
    
  }

  getPosts(): Observable<Post[]> {
    // return this._posts;
    return this.posts$;
  }

  getPost(postId: number): Post {
    const result = this._posts.find(post => post.id === postId);
    return result;
  }

}
