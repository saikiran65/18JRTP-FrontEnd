import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DynqueryService } from './dynquery.service';
import { InsurancePlan } from './InsurancePlan';

@Component({
  selector: 'app-dynquery',
  templateUrl: './dynquery.component.html',
  styleUrls: ['./dynquery.component.css']
})
export class DynqueryComponent implements OnInit {

  dynqueryFormGroup !: FormGroup;
  // dynqueryObj: any;
  // dynqueryObj: any;
  dynqueryObj: InsurancePlan[] = [];
  insurancePlans = [];
  insurancePlanStatus = [];

  constructor(private formBuilder : FormBuilder,
              private dynqueryService : DynqueryService)
  { }

  ngOnInit(): void {

    //form binding
    this.dynqueryFormGroup = this.formBuilder.group({
      'planId' : new FormControl(''),
      'planName' : new FormControl(''),
      'holderName' : new FormControl(''),
      'holderSsn' : new FormControl(0),
      'planStatus' : new FormControl('')
    });

    //get insurance plans to give select list in the html on load
    this.dynqueryService.masterInsurancePlans().subscribe(data =>{
      this.insurancePlans = data;
    });

    //get insurance plan status to give select list in the html on load
    this.dynqueryService.masterInsurancePlanStatus().subscribe(data => {
      this.insurancePlanStatus = data;
    });

    //get all the records from the database to display in the table on load
    this.dynqueryService.accessAllData().subscribe(data =>{
      this.dynqueryObj = data;
      console.log(this.dynqueryObj)
    });

  }

  dynquerySubmitObj !: InsurancePlan;
  dynqueryFn(formGroup : FormGroup){
    this.dynquerySubmitObj = new InsurancePlan(formGroup.value);
    let criteria = "";
    if((this.dynquerySubmitObj.planName != '' && this.dynquerySubmitObj.planName!='-Select-' ) && (this.dynquerySubmitObj.planStatus!= ''&& this.dynquerySubmitObj.planStatus!='-Select-')){
      criteria = `planName=${this.dynquerySubmitObj.planName},planStatus=${this.dynquerySubmitObj.planStatus}`;
    }else if(this.dynquerySubmitObj.planName!=''&&this.dynquerySubmitObj.planName!='-Select-'){
      criteria = `planName=${this.dynquerySubmitObj.planName}`;
    }else if(this.dynquerySubmitObj.planStatus!='' && this.dynquerySubmitObj.planStatus!='-Select-'){
      criteria = `planStatus=${this.dynquerySubmitObj.planStatus}`;
    }else{
      //-Select -Select- condition
      criteria = "";
    }

      console.log(criteria);
      this.dynqueryService.accessDynqueryAPI(criteria).subscribe(data => {
        this.dynqueryObj = data; //data here will be list of records
      });
  }

}
