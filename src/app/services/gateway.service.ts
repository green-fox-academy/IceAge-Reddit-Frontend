import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostResponse } from 'src/types/posts';

@Injectable({
    providedIn: 'root',
})
export class GatewayService {
    private _data = 'assets/posts.json';

    constructor(private _httpClient: HttpClient) {}

    fetchPosts(): Observable<PostResponse> {
        return this._httpClient.get<PostResponse>(this._data);
    }
}
