import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  contactMethods = [
    {
      id: 1,
      name: 'Email',
    },
    {
      id: 2,
      name: 'Phone',
    },
  ];

  constructor() {}
  log(x: any) {
    console.log(x);
  }

  onSubmit(f: any) {
    console.log(f);
  }
}
