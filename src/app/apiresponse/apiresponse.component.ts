import { Component, OnInit } from '@angular/core';
import { AppregComponent } from '../appreg/appreg.component';

@Component({
  selector: 'app-apiresponse',
  templateUrl: './apiresponse.component.html',
  styleUrls: ['./apiresponse.component.css']
})
export class ApiresponseComponent implements OnInit {

  response : string = "";

  constructor(private appRegComponent : AppregComponent) { }

  ngOnInit(): void {
    this.response = this.appRegComponent.responseData;
  }

}
