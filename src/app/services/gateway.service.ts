import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/types/posts';
import { Subreddit } from 'src/types/subreddits';

@Injectable({
    providedIn: 'root',
})
export class GatewayService {
    private _mockPostData = 'assets/posts.json';
    private _mockSubredditData = 'assets/subreddits.json';

    private _baseUrl = 'http://localhost:3000/api/v1/';

    // APIS

    private _feedData = `${this._baseUrl}feed`;
    private _subredditsData = `${this._baseUrl}subreddits`;

    constructor(private _httpClient: HttpClient) {}

    // POSTS

    fetchPosts(): Observable<Post[]> {
        return this._httpClient.get<Post[]>(this._mockPostData);
    }

    // SUBREDDITS

    fetchSubreddits(): Observable<Subreddit[]> {
        return this._httpClient.get<Subreddit[]>(this._mockSubredditData);
    }
}
