import { environment } from './../../../environments/environment';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {

  ratingForm!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.ratingForm = new FormGroup({
      companyRating: new FormControl(0),
      comments: new FormControl(''),
      // diversity: new FormControl(),
      // priceWorth: new FormControl(),
      // service: new FormControl(),
      // environment: new FormControl(),
      // cleanliness: new FormControl(), 
    })
  }

}
