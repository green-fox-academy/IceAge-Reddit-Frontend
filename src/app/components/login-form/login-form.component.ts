import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GatewayService } from 'src/app/services/gateway.service';
import { User } from 'src/types/user';
import { Error } from 'src/types/error';
import { Token } from 'src/types/token';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
    user: User = {
        email: '',
        password: '',
    };

    errorMessage$?: Error;
    token$?: Token;

    constructor(private _gatewayService: GatewayService, private _router: Router) {}

    onSubmit(loginform: NgForm) {
        console.log('in onSubmit: ', loginform.valid);
        if (loginform.valid) {
            this._gatewayService.postLoginForm(this.user).subscribe(
                (succes: Token) => {
                    this.token$ = succes;
                    this._router.navigateByUrl('/feed');
                },
                (err: Error) => (this.errorMessage$ = err),
            );
        } else {
            console.log('error: bad login');
        }
    }
}
