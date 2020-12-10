import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/types/posts';

@Injectable({
    providedIn: 'root',
})
export class GatewayService {
    // private _mockData = 'assets/posts.json';

    private _baseUrl = 'http://localhost:3000/api/v1/';

    private _feedData = `${this._baseUrl}feed`;

    constructor(private _httpClient: HttpClient) {}

    fetchPosts(): Observable<Post[]> {
        return this._httpClient.get<Post[]>(this._feedData);
    }
}
