import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

@Directive({
    selector: '[appForbiddenUsername]',
    providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenUsernameDirective, multi: true }],
})
export class ForbiddenUsernameDirective implements Validator {
    @Input('appForbiddenUsername') forbiddenChar: string;

    validate(control: AbstractControl): { [key: string]: any } | null {
        // if forbiddenChar is present, call Validator function forbiddenNameValidator with regexp parameter (case insensitive) and its inner function with control, which is input value)
        return this.forbiddenChar
            ? forbiddenNameValidator(new RegExp(this.forbiddenChar, 'i'))(control)
            : null;
    }
}

/* function forbiddenNameValidator takes regular expression (later made from appForbiddenUsername) as parameter and returns a validator function, 
which checks, if that pattern from forbiddenNnameValidator's parameter exists in searched string (form input). 
If input value contains forbiddenRegExp, function returns validation error object, if not, returns null. */

export function forbiddenNameValidator(forbiddenRegExp: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const forbidden = forbiddenRegExp.test(control.value);
        return forbidden ? { forbiddenusername: 'Username contains forbidden character(s)' } : null;
    };
}
