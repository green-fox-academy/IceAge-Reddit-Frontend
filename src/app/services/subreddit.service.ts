import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Subreddit } from 'src/types/subreddits';

@Injectable({
    providedIn: 'root',
})
export class SubredditService {
    private _subreddits: Subreddit[];

    subreddits$: BehaviorSubject<Subreddit[]> = new BehaviorSubject(null);

    setSubreddits(subreddits: Subreddit[]): void {
        this._subreddits = subreddits;
        this.subreddits$.next(subreddits);
    }

    getAllSubreddits(): Observable<Subreddit[]> {
        return this.subreddits$;
    }
}
