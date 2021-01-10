import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/types/posts';
import { Subreddit } from 'src/types/subreddits';
import { User } from 'src/types/user';

@Injectable({
    providedIn: 'root',
})
export class GatewayService {

    private _baseUrl = 'http://localhost:3000/api/v1/';

    constructor(private _httpClient: HttpClient) {}

<<<<<<< HEAD
    // POSTS

    fetchPosts(): Observable<Post[]> {
        return this._httpClient.get<Post[]>(this._mockPostData);
=======
    getAllPosts(): Observable<Post[]> {
        return this._httpClient.get<Post[]>(`${this._baseUrl}feed`);
>>>>>>> IAR-25/Andy/CreateAPostsFeedUnitTests
    }

    getAllSubreddits(): Observable<Subreddit[]> {
        return this._httpClient.get<Subreddit[]>(`${this._baseUrl}subreddits`);
    }

<<<<<<< HEAD
    fetchSubreddits(): Observable<Subreddit[]> {
        return this._httpClient.get<Subreddit[]>(this._mockSubredditData);
=======
    postRegistrationForm(user: User): Observable<User> {
        return this._httpClient.post(`${this._baseUrl}auth/sign-in`, user) as Observable<User>;
>>>>>>> IAR-25/Andy/CreateAPostsFeedUnitTests
    }
}
