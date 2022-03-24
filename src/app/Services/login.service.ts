import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private Http: HttpClient) { }

   loginUser(data:any){
     return this.Http.post<any>(`${environment.apiAddress}/login`,data)
   }
}
