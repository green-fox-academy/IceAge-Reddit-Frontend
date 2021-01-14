import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-welcome-page',
    templateUrl: './welcome-page.component.html',
    styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent {
    constructor(private _router: Router) {}

    onLoginClick(): void {
        this._router.navigate(['/login']);
    }

    onRegisterClick(): void {
        this._router.navigate(['/register']);
    }
}
