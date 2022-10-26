import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  category: any[] = [
    {
      id: 1,
      name: 'Development',
    },
    {
      id: 2,
      name: 'Art',
    },
    {
      id: 3,
      name: 'Language',
    },
  ];
  onSubmit(f: any) {
    console.log(f);
  }
}
