import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  heroBackground: string = 'url(https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/8a6cc705477a/assets/img/home/hero_photos/uteUmycsbh0UibXk-At-3A.jpg)'
  color:string = 'pink'
  constructor() { }

  ngOnInit(): void {
  }

}
