import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private http: HttpClient) {}

    postRegistrationForm(user: User): Observable<any> {
        // return of(user);
        return this.http.post('http://localhost:3000/api/v1/auth/sign-in', user);
    }
}
