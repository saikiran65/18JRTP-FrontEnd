import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';
import { UserLogin } from './UserLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoginForm !: FormGroup;

  constructor(private formBuilder : FormBuilder,
              private route : ActivatedRoute,
              private loginService : LoginService)
  { }

  ngOnInit(): void {

    //setting the login form
    this.userLoginForm = this.formBuilder.group({
    'email' : new FormControl('',Validators.compose([Validators.required])),
    'password' : new FormControl('',Validators.compose([Validators.required]))
    });
  }

  userLoginObj !: UserLogin;
  loginResponse = "";
  userLogin(formGroup : FormGroup){
    this.userLoginObj = new UserLogin(formGroup.value);
    this.loginService.submitLoginForm(this.userLoginObj).subscribe( data => {this.loginResponse = data;} );
  }

  reset(){
    this.loginResponse = "";
  }

}
