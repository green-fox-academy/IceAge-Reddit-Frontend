import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostResponse } from 'src/types/posts';
import { User } from 'src/types/user';

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
}
