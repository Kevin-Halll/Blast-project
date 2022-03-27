import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnChanges {

  @Input() companyData : any;

  heroBackground: string = 'url(https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/8a6cc705477a/assets/img/home/hero_photos/uteUmycsbh0UibXk-At-3A.jpg)'
  color:string = 'pink'
  valueChanges: number = 0;
  constructor(private _homeService:HomeService) { }

    ngOnInit(): void {
    //   this._homeService.getCompanys()
    //   .subscribe((apiReturn) =>  {
    //     this.companyData = apiReturn 
    //     this.companys = this.companyData.data
    //     console.log(this.companyData)
  
    //   })
  
    // }
    // setTimeout(() => {
    //   console.log(this.companyData);
    // }, 3 * 1000)
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['companyData'].currentValue);
    console.log(this.companyData.value);
    this.valueChanges++
    console.log(this.valueChanges);
    
  }

}
