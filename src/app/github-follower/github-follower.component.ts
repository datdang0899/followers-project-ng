import { combineLatest, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowerService } from './../service/github-follower.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-follower',
  templateUrl: './github-follower.component.html',
  styleUrls: ['./github-follower.component.scss'],
})
export class GithubFollowerComponent implements OnInit {
  followers: any;

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubFollowerService
  ) {}

  ngOnInit(): void {
    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(
        switchMap((combined: any) => {
          let id = combined[0].get('id');
          let page = combined[1].get('page');

          return this.githubService.getAll();
        })
      )
      .subscribe((followers) => {
        this.followers = followers;
      });
  }
}
