import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from './UserLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private loginUrl = "http://localhost:9093";

  public submitLoginForm(userLogin : UserLogin): Observable<any>{
    return this.http.post(`${this.loginUrl}/login`,userLogin,{responseType:'text'});
  }
}
