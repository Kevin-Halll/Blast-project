import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  value = ''

  searchBar = new FormGroup ({
    search: new FormControl([
      ''
    ]),
    location: new FormControl([
      'locate'
    ])
  })
  constructor() { }

  ngOnInit(): void {
  }

}
