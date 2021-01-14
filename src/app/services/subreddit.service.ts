import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Subreddit, SubredditCreation } from 'src/types/subreddits';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class SubredditService {
    subreddits$: BehaviorSubject<Subreddit[]> = new BehaviorSubject(null);
    private _baseUrl = environment.BACKEND_API;

    constructor(private _httpClient: HttpClient) {}

    setSubreddits(subreddits: Subreddit[]): void {
        this.subreddits$.next(subreddits);
    }

    getAllSubreddits(): Observable<Subreddit[]> {
        return this.subreddits$;
    }

    createSubreddit(subreddit: SubredditCreation): Observable<SubredditCreation> {
        return this._httpClient.post(`${this._baseUrl}subreddits/create`, subreddit) as Observable<
            SubredditCreation
        >;
    }
}
