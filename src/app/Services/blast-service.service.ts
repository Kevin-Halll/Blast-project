import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlastServiceService {

  constructor(private Http: HttpClient) { }

  postUser(data:any){
    return this.Http.post<any>('http://10.44.16.165:8000/api/register', data)
  }

  addUser(data:any){
    return  this.Http.put<any>('http://10.44.16.165:8000/api/register', data)
  }
}

