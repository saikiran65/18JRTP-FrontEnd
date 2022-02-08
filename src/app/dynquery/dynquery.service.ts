import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynqueryService {

  constructor(private http : HttpClient) { }

  private dynqueryUrl = "http://localhost:8099";

  public masterInsurancePlans():Observable<any>{
    return this.http.get(`${this.dynqueryUrl}/insurancePlans`);
  }

  public masterInsurancePlanStatus():Observable<any>{
    return this.http.get(`${this.dynqueryUrl}/planStatus`);
  }

  public accessAllData():Observable<any> {
    return this.http.get(`${this.dynqueryUrl}/findAll`,{responseType:"json"});
  }

  public accessDynqueryAPI(criteria : String):Observable<any> {
    if(criteria==null){
      return this.accessAllData();
    }
    return this.http.get(`${this.dynqueryUrl}/anyParam?criteria=${criteria}`,{responseType:'json'});
  }

}
