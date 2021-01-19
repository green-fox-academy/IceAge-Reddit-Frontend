import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Subreddit } from 'src/types/subreddits';

@Injectable({
    providedIn: 'root',
})
export class SubredditService {
    subreddits$: BehaviorSubject<Subreddit[]> = new BehaviorSubject(null);

    constructor() {}

    setSubreddits(subreddits: Subreddit[]): void {
        this.subreddits$.next(subreddits);
    }

    getAllSubreddits(): Observable<Subreddit[]> {
        return this.subreddits$;
    }
}
