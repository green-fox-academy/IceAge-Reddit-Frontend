import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    // constructor(private _router: Router) {}

    canActivate(): boolean {
        if (this.loggedIn()) {
            return true;
        } else {
            // TODO implement after log-in/sign-in page and landing-page is implemented
            // it will redirect user to
            // this._router.navigate('/landing-page')
            return false;
        }
    }

    private loggedIn(): boolean {
        return !!localStorage.getItem('token');
    }
}
