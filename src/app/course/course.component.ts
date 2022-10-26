import { courseService } from './course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  // template: `
  //   <h2>{{ course.title | titlecase }}</h2>
  //   {{ course.rating | number }}<br/>
  //   {{ course.students | number: '1.1-3' }}<br/>
  //   {{ course.releaseDate | date: 'shortDate' }}<br>
  // `,
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  constructor(service: courseService) {}

  course = {
    title: 'all list of courses',
    text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea voluptatibus dolores nobis ipsam eos alias voluptate hic unde ex, maxime nisi placeat reprehenderit quasi minus assumenda deserunt, iusto perferendis!" , 
    rating: 4333,
    students: 30022,
    price: 15.99,
    releaseDate: new Date(),
  };

  ngOnInit(): void {}
}
