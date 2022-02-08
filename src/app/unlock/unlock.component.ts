import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UnlockService } from './unlock.service';
import { UnlockModel } from './UnlockModel';

@Component({
  selector: 'app-unlock',
  templateUrl: './unlock.component.html',
  styleUrls: ['./unlock.component.css']
})
export class UnlockComponent implements OnInit {

  unlockAccForm !: FormGroup; //form binding form group

  constructor(private unlockService : UnlockService,
              private formBuilder : FormBuilder,
              private route : ActivatedRoute) { }

  private unlockAccObj !: UnlockModel;
  userEmail = "";     //to store the queryParam
  unlockAccMsg = "";  //to store the unlockAccAPI response
  ngOnInit(): void {

    //getting the queryParams and setting to local variable
    this.route.queryParams.subscribe(data => {this.userEmail = data['email'];});

    //setting the userUnlockAccount form
    this.unlockAccForm = this.formBuilder.group({
      'email' : new FormControl(this.userEmail),
      'tempPwd' : new FormControl('',Validators.compose([Validators.required])),
      'newPwd' : new FormControl('',Validators.compose([Validators.required])),
      'confPwd' : new FormControl('',Validators.compose([Validators.required]))
    });
  }

  unlockAcc(formGroup : FormGroup){
    this.unlockAccObj = new UnlockModel(formGroup.value);
    this.unlockService.submitUnlockAccForm(this.unlockAccObj).subscribe(data => {
      this.unlockAccMsg = data;
    });
    this.unlockAccForm.patchValue(new UnlockModel()); //*patching object to formGroup
  }

  isPwdsMatch!:boolean;
  pwdCheckMsg='';
  checkPwd(emailEvent : any){
    let newPwd : string = this.unlockAccForm.get('newPwd')?.value;
    let confPwd : string = emailEvent.target.value;
    if(newPwd!=confPwd){
      this.pwdCheckMsg="*Passwords Mismatched";
      this.isPwdsMatch=false;
    }else{
      this.isPwdsMatch=true;
      this.pwdCheckMsg='';
    }
    // console.log(newPwd+"   >>>>>> "+emailEvent.target.value+">>>>>"+this.isPwdsMatch);
  }

  proceed : boolean = true; //to allow the unlock button enabled only if the newPwd,confPwds are matched along with the valid formGroup
  unlockConf(){
      alert(this.unlockAccMsg);
    if(!this.isPwdsMatch){
      this.proceed = false;
    }
  }

  reset(){
    this.pwdCheckMsg='';
  }

}
