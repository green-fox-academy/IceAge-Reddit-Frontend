import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Token } from 'src/types/token';
import { Subreddit } from 'src/types/subreddits';
import { newPost, Post } from 'src/types/posts';
import { User } from 'src/types/user';
import { Error } from 'src/types/error';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class GatewayService {
    private _baseUrl = environment.BACKEND_API;
    private posts$: Post[];

    constructor(private _httpClient: HttpClient) {}

    getAllPosts(): Observable<Post[]> {
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

    postNewPost(newPost: any): Observable<Post | Error> {
        return this._httpClient.post(
            `${this._baseUrl}subreddits/posts/create`,
            newPost,
        ) as Observable<Post>;
    }

    /* postNewPost(newPost: any): Observable<Post | Error> {
        return this._httpClient.post(`${this._baseUrl}subreddits/posts/create`, newPost).pipe(
            map((post: Post) => {
                return post;
            }),
            catchError(() => {
                return throwError('Something went wrong!');
            }),
        );
         as Observable<Post>;
    } */
}
