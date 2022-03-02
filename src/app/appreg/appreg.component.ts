import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AppregService } from './appreg.service';
import { Citizen } from './citizen';

@Component({
  selector: 'app-appreg',
  templateUrl: './appreg.component.html',
  styleUrls: ['./appreg.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class AppregComponent implements OnInit {

  citizenForm !: FormGroup; // ? ! | undefined

  constructor(private appregService : AppregService,
              private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.citizenForm = this.formBuilder.group({
      fullName : new FormControl(''),
      email : new FormControl(''),
      mobile: new FormControl(''),
      dob : new FormControl(''),
      gender : new FormControl(''),
      ssn : new FormControl('')
    });
  }

  responseData : any;

  registerCitizenFn(citizenFormGroup : FormGroup){
    let citizen : Citizen = new Citizen(citizenFormGroup);

    console.log(citizen);

    this.appregService.registerCitizen(citizen).subscribe(
      data => {
        console.log(data);
        this.responseData = JSON.stringify(data);
      }
    );
    this.reset();
  }

  reset(){
    this.citizenForm.reset();
  }

}
