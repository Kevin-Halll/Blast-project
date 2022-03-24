import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {


  companyData: any = {
    driveThrough: true,
    parking: false,
    delivery: false,
    dining: true,
    wifi: false,
    card: true,
    conditioning: false,
    tv: true,
    disabled: true,
    vegan: false,
    vegetarian: true


  }

  constructor() {
    let companyData = {
      driveThrough: true,
    }

  }

  ngOnInit(): void {
  }

}
