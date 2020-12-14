import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/types/posts';
import { Subreddit } from 'src/types/subreddits';
import { Token } from 'src/types/token';
import { User } from 'src/types/user';

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
        return this._httpClient.get<Post[]>(this._feedData);
    }

    // SUBREDDITS

    fetchSubreddits(): Observable<Subreddit[]> {
        return this._httpClient.get<Subreddit[]>(this._subredditsData);
    }

    postRegistrationForm(user: User): Observable<Token> {
        return this._httpClient.post(
            'http://localhost:3000/api/v1/auth/sign-in',
            user,
        ) as Observable<Token>;
    }
}
