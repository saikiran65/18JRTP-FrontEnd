import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registration } from './Registration';

@Injectable({
  providedIn: 'root'
})
export class RegServiceService {

  constructor(private http : HttpClient) { }

  private baseUrl : String = "http://localhost:9091";

  public checkUniqueEmail(email : string):Observable<any>{
    return this.http.get(this.baseUrl+`/checkEmail/${email}`,{responseType: 'text'});
  }

  public getCountries():Observable<any>{
   return this.http.get(this.baseUrl+"/countries");
  }

  public getStates(id: number):Observable<any>{
    return this.http.get(this.baseUrl+`/states/${id}`);
  }

   public getCities(id : number):Observable<any>{
    return this.http.get(this.baseUrl+`/cities/${id}`);
  }

  public addUser(reg : Registration){
   console.log(reg);
   return this.http.post(this.baseUrl+"/saveUser",reg,{responseType: 'text'});
  }

}
