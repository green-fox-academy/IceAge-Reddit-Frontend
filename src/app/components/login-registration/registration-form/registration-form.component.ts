import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/types/user';
import { GatewayService } from 'src/app/services/gateway.service';

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

    constructor(private _gatewayService: GatewayService) {}

    onSubmit(registrationform: NgForm) {
        console.log('in onSubmit: ', registrationform.valid);
        if (registrationform.valid) {
            this._gatewayService.postRegistrationForm(this.user).subscribe(
                (result) => console.log('succes: ', result),
                (error) => console.log('error: ', error),
            );
        } else {
            console.log('error: NOT VALID INPUT');
        }
    }
}
