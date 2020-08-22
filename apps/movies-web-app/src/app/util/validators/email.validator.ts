import { AbstractControl } from '@angular/forms';
import { checkEmail } from '../utils';

export function ValidateEmail(control: AbstractControl) {
  if (!checkEmail(control.value)) {
    return { ValidateEmail: true };
  } else {
    return null;
  }
}
