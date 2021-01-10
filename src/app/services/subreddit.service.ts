import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Subreddit } from 'src/types/subreddits';
import { GatewayService } from 'src/app/services/gateway.service';

@Injectable({
    providedIn: 'root',
})
export class SubredditService {
    subreddits$: BehaviorSubject<Subreddit[]> = new BehaviorSubject(null);

    setSubreddits(subreddits: Subreddit[]): void {
        this.subreddits$.next(subreddits);
    }

    getAllSubreddits(): Observable<Subreddit[]> {
        return this.subreddits$;
    }

    getSubreddit(subredditName: string): Subreddit {
        const result = this._subreddits.find(({name}) => name === subredditName);
        return result;
    }
}
