import { AbstractControl, ValidationErrors, FormControl } from '@angular/forms';

export class passwordValidations {
  static passwordIsValid(control: AbstractControl): ValidationErrors | null {
    if (control.value !== 'datdat') return { pwValid: true };
    return null;
  }

  static checkPassword(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value == 'datdat') {
          resolve({ matchOldPassword: true });
        } else resolve(null);
      }, 2000);
    });
  }

  static confirmPassword(control: AbstractControl): ValidationErrors | null {
    let newPassword: any = control.get('newPassword');
    let confirmPassword: any = control.get('confirmPassword');

    console.log(newPassword.value, confirmPassword.value);
    if (newPassword.value !== confirmPassword.value) {
      console.log('confirm password');
      return { confirmPasswordInvalid: true };
    }

    return null;
  }
}
