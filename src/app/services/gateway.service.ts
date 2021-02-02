import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from 'src/types/token';
import { Comment, NewComment, Post, PostDetails, NewPost } from 'src/types/posts';
import { Subreddit, SubredditCreation } from 'src/types/subreddits';
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
        return this._httpClient.get<Post[]>(`${this._baseUrl}feed`);
    }

    getPostDetails(postId: number): Observable<PostDetails> {
        return this._httpClient.get<PostDetails>(`${this._baseUrl}subreddits/posts/${postId}`);
    }

    postNewComment(comment: NewComment): Observable<Comment> {
        return this._httpClient.post(`${this._baseUrl}comments/create`, comment) as Observable<
            Comment
        >;
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

    postNewPost(aNewPost: NewPost): Observable<Post | Error> {
        return this._httpClient.post(
            `${this._baseUrl}subreddits/posts/create`,
            aNewPost,
        ) as Observable<Post>;
    }

    createSubreddit(subreddit: SubredditCreation): Observable<SubredditCreation> {
        return this._httpClient.post(`${this._baseUrl}subreddits/create`, subreddit) as Observable<
            SubredditCreation
        >;
    }

    getSubredditPostsFeedByName(subredditName: string): Observable<Post[]> {
        return this._httpClient.get<Post[]>(`${this._baseUrl}feed/r/${subredditName}`);
    }
}
