import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor (private _router: Router) {}

	canActivate(): boolean {
		if(this.loggedIn()) {
			return true;
		} else {
			// TODO implement after log-in/sign-in page is implemented
			// it will redirect user to
			// this._router.navigate('/landing-page')
			return false;
		}
	}

	private loggedIn() {
		return !!localStorage.getItem('token');
	}
}
