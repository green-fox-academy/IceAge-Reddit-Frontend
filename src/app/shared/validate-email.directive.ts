import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

@Directive({
    selector: '[appValidateEmail]',
    providers: [{ provide: NG_VALIDATORS, useExisting: ValidateEmailDirective, multi: true }],
})
export class ValidateEmailDirective implements Validator {
    @Input('appValidateEmail') validEmail: string;

    constructor() {}

    validate(control: AbstractControl): { [key: string]: any } | null {
        return this.validEmail ? checkEmail(new RegExp(this.validEmail))(control) : null;
    }
}

export function checkEmail(password: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const hasAll = password.test(control.value);
        return hasAll ? null : { weakPassword: { value: control.value } };
    };
}
