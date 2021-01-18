import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private _router: Router) {}

    canActivate(): boolean {
        if (this.loggedIn()) {
            return true;
        } else {
            this._router.navigate(['/land-page']);
            return false;
        }
    }

    private loggedIn(): boolean {
        return !!localStorage.getItem('token');
    }
}
