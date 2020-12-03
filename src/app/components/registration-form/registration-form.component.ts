import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/data/data.service';
import { User } from 'src/app/data/user';

@Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
    user: User = {
        username: '',
        email: '',
        password: '',
    };

    constructor(private dataService: DataService) {}

    ngOnInit(): void {}

    onSubmit(registrationform: NgForm) {
        console.log('in onSubmit: ', registrationform.valid);
        if (registrationform.valid) {
            this.dataService.postRegistrationForm(this.user).subscribe(
                (result) => console.log('succes: ', result),
                (error) => console.log('error: ', error),
            );
        } else {
            console.log('error: NOT VALID INPUT');
        }
    }
}
