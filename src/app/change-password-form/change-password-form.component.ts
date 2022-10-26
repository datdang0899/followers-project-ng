import { passwordValidations } from './password.validators';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { Component, Pipe } from '@angular/core';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.scss'],
})
export class ChangePasswordFormComponent {
  form: any;
  constructor(fb: FormBuilder) {
    this.form = fb.group(
      {
        oldPassword: [
          '',
          [Validators.required, passwordValidations.passwordIsValid],
        ],
        newPassword: [
          '',
          [Validators.required],
          [passwordValidations.checkPassword],
        ],
        confirmPassword: ['', [Validators.required]],
      },
      { validator: passwordValidations.confirmPassword }
    );
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
}
