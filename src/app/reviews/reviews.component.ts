import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  title = 'Review Component';
  ratings = [1,4,5,3,4,4,5];

  constructor() { }

  ngOnInit() {
  }

}
