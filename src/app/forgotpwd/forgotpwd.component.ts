import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgotPwd } from './ForgotPwd';
import { ForgotpwdService } from './forgotpwd.service';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.css']
})
export class ForgotpwdComponent implements OnInit {

  forgotPwdFormGroup !: FormGroup;

  constructor(private formBuilder : FormBuilder,
              private forgotPwdService: ForgotpwdService) { }

  ngOnInit(): void {
    this.forgotPwdFormGroup = this.formBuilder.group({
      'email' : new FormControl('',Validators.compose([Validators.required, Validators.email]))
    });
  }

  forgotPwdObj !: ForgotPwd;
  forgotPwdResponse = "";
  successEvent !: boolean;
  forgotPwdFn(formGroup : FormGroup){
    this.forgotPwdObj = new ForgotPwd(formGroup.value);
    this.forgotPwdService.submitForgotPwd(this.forgotPwdObj.email).subscribe( data => {
      this.forgotPwdResponse=data;
      if(this.forgotPwdResponse.includes("Sent")){
        this.successEvent=true;
      }else{
        this.successEvent=false;
      }
     });
  }

  reset(){
    this.forgotPwdResponse="";
    this.successEvent=false;
  }



}
