import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  constructor() { }
  isActive = false ; 
  togglerStar(){
    this.isActive = !this.isActive ; 
  }

  ngOnInit(): void {
  }

}
