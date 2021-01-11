import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from 'src/types/token';
import { Post } from 'src/types/posts';
import { Subreddit } from 'src/types/subreddits';
import { User } from 'src/types/user';
import { Error } from 'src/types/error';

@Injectable({
    providedIn: 'root',
})
export class GatewayService {
    private _baseUrl = 'http://localhost:3000/api/v1/';

    constructor(private _httpClient: HttpClient) {}

    getAllPosts(): Observable<Post[]> {
        return this._httpClient.get<Post[]>(`${this._baseUrl}feed`);
    }

    getAllSubreddits(): Observable<Subreddit[]> {
        return this._httpClient.get<Subreddit[]>(`${this._baseUrl}subreddits`);
    }

    postRegistrationForm(user: User): Observable<User> {
        return this._httpClient.post(`${this._baseUrl}auth/sign-in`, user) as Observable<User>;
    }

    postLoginForm(user: User): Observable<Token | Error> {
        return this._httpClient.post(
            'http://localhost:3000/api/v1/auth/log-in',
            user,
        ) as Observable<Token>;
    }
}
