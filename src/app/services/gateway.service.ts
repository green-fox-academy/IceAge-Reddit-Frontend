import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, PostResponse } from 'src/types/posts';
import { User } from 'src/types/user';
import { Error } from 'src/types/error';
import { Token } from 'src/types/token';

@Injectable({
    providedIn: 'root',
})
export class GatewayService {
    private _data = 'assets/posts.json';

    constructor(private _httpClient: HttpClient) {}

    fetchPosts(): Observable<PostResponse> {
        return this._httpClient.get<PostResponse>(this._data);
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
