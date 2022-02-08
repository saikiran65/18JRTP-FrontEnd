import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotpwdService {

  constructor(private http: HttpClient) { }

  private forgotpwdUrl = "http://localhost:9094";

  public submitForgotPwd(email: String): Observable<any>{
    return this.http.get(`${this.forgotpwdUrl}/forgot-pwd/${email}`,{responseType:'text'});
  }



}
