import { Component, OnInit } from '@angular/core';
import { Companys } from 'src/app/Services/Interfaces';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  companyData: any;
  companys: Companys[] = []
  happy:string = 'kevin'

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getCompanys()
    .subscribe((apiReturn) =>  {
      this.companyData = apiReturn 
      this.companys = this.companyData.data

    })
    
  }
  

}
