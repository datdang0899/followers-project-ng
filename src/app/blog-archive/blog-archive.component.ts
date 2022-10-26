import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-archive',
  templateUrl: './blog-archive.component.html',
  styleUrls: ['./blog-archive.component.scss'],
})
export class BlogArchiveComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  year: any;
  tag: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.year = params.get('year');
      this.tag = params.get('tag');
    });
  }

  onSubmit() {
    this.router.navigate(['/']);
  }
}
