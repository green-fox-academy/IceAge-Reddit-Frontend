import { Directive, Input } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appValidatePassword]',
  providers: [{provide: NG_VALIDATORS, useExisting: ValidatePasswordDirective, multi: true}]
})
export class ValidatePasswordDirective implements Validator {
  passwordPattern = "^[^\s@]+@[^\s@]+\.[^\s@]+$";
  passwordControl = new FormControl();

  @Input ('appValidatePassword') validPassword: string;
  
  constructor() { }

  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.validPassword ? checkPassword(new RegExp(this.validPassword))(control)
                              : null;

}
}

/* validate(control: AbstractControl): {[key: string]: any} | null {
  return this.validPassword ? checkPassword(new RegExp(this.validPassword))(control)
                            : null; */

export function checkPassword(password: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    var rexE : RegExp;
    rexE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let hasAll = password.test(control.value);
    return hasAll ? null : {weakPassword: {value: control.value}} ;
  };
}
