import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss'],
})
export class GithubProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      let id = +params.get('id');
      console.log(id);
    });
  }

  onSubmit() {
    this.router.navigate(['/followers'], {
      queryParams: {
        page: 2,
        order: 'old',
      },
    });
  }
}
