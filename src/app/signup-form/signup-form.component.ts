import { usernameValidators } from './username.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent {
  form: any = new FormGroup({
    account: new FormGroup({
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(4),
          usernameValidators.cannotContainSpace,
        ],
        usernameValidators.shouldBeUnique
      ),
      password: new FormControl('', Validators.required),
    }),
  });

  getFormControl(query: string) {
    return this.form.get(query);
  }

  get username(){
    return this.form.get("account.username") ; 
  }

  get password(){
    return this.form.get("account.password") ; 
  }

  login(data: any) {
    this.form.setErrors({
      invalidLogin: true,
    });
  }
}
