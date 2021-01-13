import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from 'src/types/token';
import { Subreddit } from 'src/types/subreddits';
import { Post } from 'src/types/posts';
import { User } from 'src/types/user';
import { Error } from 'src/types/error';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class GatewayService {
    private _baseUrl = environment.BACKEND_API;

    constructor(private _httpClient: HttpClient) {}

    getAllPosts(): Observable<Post[]> {
        console.log('fetching feed');
        return this._httpClient.get<Post[]>(`${this._baseUrl}feed`);
    }

    getAllSubreddits(): Observable<Subreddit[]> {
        return this._httpClient.get<Subreddit[]>(`${this._baseUrl}subreddits`);
    }

    postRegistrationForm(user: User): Observable<Token | Error> {
        return this._httpClient.post(`${this._baseUrl}auth/sign-in`, user) as Observable<
            Token | Error
        >;
    }

    postLoginForm(user: User): Observable<Token | Error> {
        return this._httpClient.post(`${this._baseUrl}auth/log-in`, user) as Observable<Token>;
    }

    postNewPost(post: Post) {
        this._httpClient.post(`${this._baseUrl}subreddits/posts/create`, post);
    }
}
