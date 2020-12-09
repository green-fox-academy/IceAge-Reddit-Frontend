import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

@Directive({
    selector: '[appValidatePassword]',
    providers: [{ provide: NG_VALIDATORS, useExisting: ValidatePasswordDirective, multi: true }],
})
export class ValidatePasswordDirective implements Validator {
    @Input('appValidatePassword') regex: string;

    validate(control: AbstractControl): { [key: string]: any } | null {
        // if regex is present, call Validator function checkPasword  with regexp parameter and its inner function with control, which is input value)
        return this.regex ? checkPassword(new RegExp(this.regex))(control) : null;
    }
}

/* function checkPassword takes regular expression (later made from appValidatePassword) as parameter and returns a validator function, 
which checks, if that pattern from parameter exists in searched string (form input). 
If input value contains RegExp, function returns null, if not, it returns validation error object. */

export function checkPassword(regexp: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const hasAll = regexp.test(control.value);
        return hasAll ? null : { error: 'weak password' };
    };
}
