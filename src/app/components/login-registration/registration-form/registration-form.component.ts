import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GatewayService } from 'src/app/services/gateway.service';
import { User } from 'src/types/user';
import { Error } from 'src/types/error';
import { Token } from 'src/types/token';
import { Router } from '@angular/router';

@Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent {
    user: User = {
        username: '',
        email: '',
        password: '',
    };

    error?: Error;

    constructor(private _gatewayService: GatewayService, private _router: Router) {}

    onSubmit(registerform: NgForm) {
        if (registerform.valid) {
            this._gatewayService.postRegistrationForm(this.user).subscribe(
                (success: Token) => {
                    localStorage.setItem('token', success.token);
                    this._router.navigate(['/auth/feed']);
                },
                (error: Error) => (this.error = error),
            );
        } else {
            console.log('error: NOT VALID INPUT');
        }
    }
}
