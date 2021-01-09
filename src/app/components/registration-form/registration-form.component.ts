import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/types/user';
import { GatewayService } from 'src/app/services/gateway.service';
import { Token } from 'src/types/token';
import { Error } from 'src/types/error';
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

    errorMessage$?: Error;
    token$?: Token;

    constructor(private _gatewayService: GatewayService, private _router: Router) {}

    onSubmit(registerForm: NgForm) {
        if (registerForm.valid) {
            this._gatewayService.postRegistrationForm(this.user).subscribe(
                (success: Token) => {
                    this.token$ = success;
                    localStorage.setItem('token', success.token);
                    this._router.navigate(['/feed']);
                },
                (error: Error) => (this.errorMessage$ = error),
            );
        } else {
            console.log('error: NOT VALID INPUT');
        }
    }
}
