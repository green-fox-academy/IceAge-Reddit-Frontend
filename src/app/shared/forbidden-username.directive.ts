import { Directive, Input } from '@angular/core';
import { FormControl, AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';


@Directive({
  selector: '[appForbiddenUsername]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenUsernameDirective, multi: true}]
})
export class ForbiddenUsernameDirective implements Validator {
  @Input('appForbiddenUsername') forbiddenUsername: string;

  constructor(
    //private validationService: ValidationService 
  ) { 
  
  }
  /*  validate(control: AbstractControl): {[key: string]: any} | null {
      return this.forbiddenName ? weakPasswordValidator(new RegExp(this.forbiddenName, 'i'))(control)
                                  : null; 

                                } */

validate(control: AbstractControl): {[key: string]: any} | null {
  return this.forbiddenUsername ? forbiddenNameValidator(new RegExp(this.forbiddenUsername,'i'))(control)
                            : null;

}
  
} 

/*  export function weakPasswordValidator(password: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const passwordOk = password.includes("1");
    return passwordOk ? null : {Error: {value: control.value}};
  };
} */
 export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenusername: {value: control.value}} : null;
  };
}