import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UnlockModel } from './UnlockModel';

@Injectable({
  providedIn: 'root'
})
export class UnlockService{

  constructor(private http : HttpClient) { }

  private unlockUrl = "http://localhost:9092";

  public submitUnlockAccForm(unlockAcc : UnlockModel): Observable<any>{
    return this.http.post(this.unlockUrl+`/unlockAcc`,unlockAcc,{responseType:'text'});
  }
}
