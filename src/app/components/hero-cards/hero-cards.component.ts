import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hero-cards',
  templateUrl: './hero-cards.component.html',
  styleUrls: ['./hero-cards.component.scss']
})
export class HeroCardsComponent implements OnInit {
  @Input() companyData : any;
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['companyData'].currentValue);
  }
}
