import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-stars-rating',
  templateUrl: './stars-rating.component.html',
  styleUrls: ['./stars-rating.component.css']
})
export class StarsRatingComponent implements OnChanges {

  rating:number = 4;
  cropWidth:number = 75;

  ngOnChanges(): void{
    this.cropWidth = this.rating*75/5; 
  }
}
