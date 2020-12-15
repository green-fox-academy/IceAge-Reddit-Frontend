import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

@Directive({
    selector: '[appValidateEmail]',
    providers: [{ provide: NG_VALIDATORS, useExisting: ValidateEmailDirective, multi: true }],
})
export class ValidateEmailDirective implements Validator {
    @Input('appValidateEmail') emailPattern: string;

    validate(control: AbstractControl): { [key: string]: any } | null {
        // if emailPattern is present, call Validator function checkEmail with emailPattern parameter and its inner function with control, which is the input value)
        return this.emailPattern ? checkEmail(new RegExp(this.emailPattern))(control) : null;
    }
}

/* function checkEmail takes regular expression (later made from appValidateEmail) as parameter and returns a validator function, 
which checks, if that pattern from CheckEmail's parameter exists in searched string (form input). 
If input value contains RegExp, function returns null, if not, it returns validation error object. */

export function checkEmail(regexp: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const hasAll = regexp.test(control.value);
        return hasAll ? null : { error: 'Bad format of email' };
    };
}
