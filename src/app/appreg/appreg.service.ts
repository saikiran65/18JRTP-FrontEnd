import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Citizen } from './citizen';

@Injectable({
  providedIn: 'root'
})
export class AppregService {

  constructor(private httpClient : HttpClient) { }

  appregUrl : string = "http://localhost:9098";

  registerCitizen(citizen : Citizen):Observable<any>{
    return this.httpClient.post<Citizen>(`${this.appregUrl}/register`, citizen);
  }

}
