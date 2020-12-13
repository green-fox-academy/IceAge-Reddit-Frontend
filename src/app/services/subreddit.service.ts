import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubredditResponse } from 'src/types/subreddits';

@Injectable({
    providedIn: 'root',
})
export class SubredditService {
    private _data = 'assets/subreddits.json';

    constructor(private _httpClient: HttpClient) {}

    getAllSubreddits(): Observable<SubredditResponse> {
        return this._httpClient.get<SubredditResponse>(this._data);
    }
}
