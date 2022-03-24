import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { ApiCall } from './Interfaces';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = 'https://laravel-blast-dev.herokuapp.com/api/v1/company'

  constructor(private http: HttpClient) { }

  getCompanys(): Observable<ApiCall[]> {
    return this.http.get<ApiCall[]>(this.apiUrl)
  }
}
