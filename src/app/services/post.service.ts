import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from 'src/types/posts';

@Injectable({
    providedIn: 'root',
})
export class PostService {
    private _posts: Post[];
    private _currentSubredditPosts: Post[];

    posts$: BehaviorSubject<Post[]> = new BehaviorSubject(null);

    setPosts(posts: Post[]): void {
        posts.sort((a, b) => {
            const dateA: Date = new Date(a.date_created);
            const dateB: Date = new Date(b.date_created);
            const number: number = dateB.getTime() - dateA.getTime();
            return number;
        });
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

    setCurrentSubredditPosts(postsList: Post[]): void {
        this._currentSubredditPosts = postsList;
    }

    getCurrentSubredditPosts(): Post[] {
        return this._currentSubredditPosts;
    }
}
