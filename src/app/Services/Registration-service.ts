import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private Http: HttpClient) { }

  postUser(data:any){
    // Can be updated in environment folder=>(`${environment.apiAddress}/register`)
    return this.Http.post<any>(`${environment.apiAddress}/register`, data)
  }

  addUser(data:any){
    return  this.Http.put<any>(`${environment.apiAddress}/register`, data)
  }
}

