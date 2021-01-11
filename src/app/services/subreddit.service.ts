import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from 'src/types/posts';
import { Subreddit } from 'src/types/subreddits';
import { GatewayService } from './gateway.service';

@Injectable({
    providedIn: 'root',
})
export class SubredditService {
    private _subreddits: Subreddit[];

    private _singleSubreddit: Subreddit;

    private _subredditPosts: Post[];

    subreddits$: BehaviorSubject<Subreddit[]> = new BehaviorSubject(null);

    constructor(private _gateWayService: GatewayService) {}

    setSubreddits(subreddits: Subreddit[]): void {
        this._subreddits = subreddits;
        this.subreddits$.next(subreddits);
    }

    getAllSubreddits(): Observable<Subreddit[]> {
        return this.subreddits$;
    }

    setCurrentSubreddit(subreddit: Subreddit): void {
        this._singleSubreddit = subreddit;
    }

    returnSubredditPostsByName(subredditName: string): void {
        this._gateWayService.getSubredditPostsFeedByName(subredditName).subscribe((response) => {
            this._subredditPosts = response;
        });
    }

    getSubredditByName(): Subreddit {
        return this._singleSubreddit;
    }
}
