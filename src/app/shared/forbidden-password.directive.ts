import { Directive, Input } from '@angular/core';
import { FormControl, AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';
import { ValidationService } from '../services/validation-service.service';

@Directive({
  selector: '[appForbiddenPassword]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenPasswordDirective, multi: true}]
})
export class ForbiddenPasswordDirective implements Validator {
  @Input('appForbiddenpassword') forbiddenPassword: string;

  constructor(
   /*  private validationService: ValidationService */
  ) { }
   /* validate(control: AbstractControl): {[key: string]: any} | null {
      return this.forbiddenName ? weakPasswordValidator(new RegExp(this.forbiddenName, 'i'))(control)
                                  : null; */


@Input('appForbiddenName') forbiddenName: string;

validate(control: AbstractControl): {[key: string]: any} | null {
  return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
                            : null;
}
}
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  }; 
}
/* export function weakPasswordValidator(password: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const passwordOk = password.includes("1");
    return passwordOk ? null : {Error: {value: control.value}};
  };
} */
