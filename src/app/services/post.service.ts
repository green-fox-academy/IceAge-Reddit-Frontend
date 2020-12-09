import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from 'src/types/posts';

@Injectable({
    providedIn: 'root',
})
export class PostService {
    private _posts: Post[];

    posts$: BehaviorSubject<Post[]> = new BehaviorSubject(null);

    setPosts(posts: Post[]): void {
        this._posts = posts;
        this.posts$.next(posts);
    }

    getAllPosts(): Observable<Post[]> {
        return this.posts$;
    }

    getPost(postId: number): Post {
        const result = this._posts.find((post) => post.id === postId);
        return result;
    }
}
