import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss'],
})
export class NewCourseComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: [],
      }),
      topics: fb.array([]),
    });
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

  onSubmit(value: any) {
    console.log(value);
  }
}
