import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { PostResponse } from 'src/types/posts';
import { User } from 'src/types/user';
import { catchError } from 'rxjs/operators';
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

    postRegistrationForm(user: User): Observable<User> {
        return this._httpClient.post(
            'http://localhost:3000/api/v1/auth/sign-in',
            user,
        ) as Observable<User>;
    }

    postLoginForm(user: User): Observable<Token | Error> {
        return this._httpClient.post(
            'http://localhost:3000/api/v1/auth/log-in',
            user,
        ) as Observable<Token>;
    }

    private handleHttpError(error: HttpErrorResponse): Observable<Error> {
        let httpError = new Error();
        httpError.message = error.error;
        return throwError(httpError);
    }
}
