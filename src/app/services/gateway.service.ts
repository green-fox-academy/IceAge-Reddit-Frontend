import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subreddit } from 'src/types/subreddits';
import { Post, PostResponse } from 'src/types/posts';
import { User } from 'src/types/user';
import { Error } from 'src/types/error';
import { Token } from 'src/types/token';

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

    postRegistrationForm(user: User): Observable<Token | Error> {
        return this._httpClient.post(
            'http://localhost:3000/api/v1/auth/sign-in',
            user,
        ) as Observable<Token>;
    }

    postLoginForm(user: User): Observable<Token | Error> {
        return this._httpClient.post(
            'http://localhost:3000/api/v1/auth/log-in',
            user,
        ) as Observable<Token>;
    }

    postNewPost(post: Post) {
        this._httpClient.post('http://localhost:3000/api/v1/subreddits/posts/create', post);
    }
}
