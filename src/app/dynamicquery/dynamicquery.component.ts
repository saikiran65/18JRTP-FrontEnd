import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DynamicqueryService } from './dynamicquery.service';
import { InsurancePlanRequest } from './InsurancePlanRequest';
import { InsurancePlanResponse } from './InsurancPlanResponse';

@Component({
  selector: 'app-dynamicquery',
  templateUrl: './dynamicquery.component.html',
  styleUrls: ['./dynamicquery.component.css']
})
export class DynamicqueryComponent implements OnInit {

  insurancePlans:string[]=[];
  insurancePlanStatus:string[]=[];
  dynamicqueryFormGroup!:FormGroup;

  responseObj : InsurancePlanResponse[] = [];
  requestObj !: InsurancePlanRequest;

  constructor(private service : DynamicqueryService,
              private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.dynamicqueryFormGroup = this.formBuilder.group(
      {
        'planName' : new FormControl(''),
        'planStatus' : new FormControl('')
      }
    );


    this.service.masterInsurancePlans().subscribe(data => this.insurancePlans=data);

    this.service.masterInsurancePlanStatus().subscribe(data => this.insurancePlanStatus=data);

    this.requestObj = new InsurancePlanRequest(this.dynamicqueryFormGroup.value);
    this.service.dynamicQueryAPICall(this.requestObj).subscribe(data => this.responseObj = data);

  }

  dynamicqueryFn(formgroup :FormGroup){
    this.requestObj = new InsurancePlanRequest(formgroup.value);
    if(this.requestObj.planName == '-Select-'){
      this.requestObj.planName='';
    }
    if(this.requestObj.planStatus== '-Select-'){
      this.requestObj.planStatus=''
    }

    this.service.dynamicQueryAPICall(this.requestObj).subscribe(
      data => {this.responseObj = data;});
  }

  excelFile(){
    // console.log(this.requestObj);
    this.service.exportToMSExcelFile(this.requestObj).subscribe( response =>{
      let file = new Blob([response],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    });
  }

  pdfFile(){
    this.service.exportToPdfFile(this.requestObj).subscribe((response) => {
      let file = new Blob([response], { type: 'application/pdf' });
      var fileURL = URL.createObjectURL(file);
      // this.pdfViewer.nativeElement.data = fileURL;
      window.open(fileURL);
    });
  }

}
