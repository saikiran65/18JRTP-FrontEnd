import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsurancePlanRequest } from './InsurancePlanRequest';
import { InsurancePlanResponse } from './InsurancPlanResponse';

@Injectable({
  providedIn: 'root'
})
export class DynamicqueryService {

  constructor(private http: HttpClient) { }

  // private dynamicQueryUrl= "http://localhost:8090";
  private dynamicQueryUrl = "https://dynamic-query-app.herokuapp.com";

  public dynamicQueryAPICall(request : InsurancePlanRequest):Observable<any>{
    return this.http.post(`${this.dynamicQueryUrl}/search`,request);
  }

  public masterInsurancePlans():Observable<any> {
    return this.http.get(`${this.dynamicQueryUrl}/insurancePlans`);
  }

  public masterInsurancePlanStatus():Observable<any> {
    return this.http.get(`${this.dynamicQueryUrl}/planStatus`);
  }

  public exportToMSExcelFile(reqObj : InsurancePlanRequest):Observable<any>{
    return this.http.post(`${this.dynamicQueryUrl}/export-to-excel`,reqObj,{responseType:'blob'});
  }

  public exportToPdfFile(reqObj : InsurancePlanRequest):Observable<any>{
   return this.http.post(`${this.dynamicQueryUrl}/export-to-pdf`,reqObj,{responseType:'blob'});
  }

}
