import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-welcome-page',
    templateUrl: './welcome-page.component.html',
    styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent {
    constructor(private _router: Router) {}

    loginClick(): void {
        this._router.navigate(['/login']);
    }

    registerClick(): void {
        this._router.navigate(['/register']);
    }
}
