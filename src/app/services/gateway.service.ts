import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/types/posts';

@Injectable({
    providedIn: 'root',
})
export class GatewayService {
    private _mockedData = 'assets/posts.json';

    private _feedData = 'http://localhost:3000/api/v1/feed';

    constructor(private _httpClient: HttpClient) {}

    fetchPosts(): Observable<Post[]> {
        return this._httpClient.get<Post[]>(this._feedData);
    }
}
