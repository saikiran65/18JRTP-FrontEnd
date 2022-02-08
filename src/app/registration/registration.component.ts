import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { regExpEscape } from '@ng-bootstrap/ng-bootstrap/util/util';
import { map } from 'rxjs';
import { RegServiceService } from './reg-service.service';
import { Registration } from './Registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public addUserForm !: FormGroup;
  public countries=[];
  public states=[];
  public cities=[];
  public reg : Registration = new Registration();

  constructor(private service : RegServiceService,
              private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.service.getCountries().subscribe(data => {this.countries = data;});

    this.addUserForm = this.formBuilder.group({
      'userFirstName' : new FormControl('',Validators.compose([Validators.minLength(2),Validators.maxLength(20)])),
      'userLastName' : new FormControl('',Validators.compose([Validators.minLength(2),Validators.maxLength(20)])),
      'userEmail' : new FormControl('',Validators.compose([Validators.email,Validators.required])),
      // 'phno' : new FormControl('',Validators.compose([Validators.pattern(/^[6-9]\\d{9}$/)])),
      'userPhNo' : new FormControl('',Validators.compose([Validators.required])),
      'userDob' : new FormControl('',Validators.required),
      'userGender' : new FormControl('',Validators.required),
      'userCountry' : new FormControl('-Select-',Validators.required),
      'userState' : new FormControl('-Select-',Validators.required),
      'userCity' : new FormControl('-Select-',Validators.required),
    });
  }

  addUser(fr : FormGroup){
    this.reg = new Registration(fr.value);
    this.reg.userCountry = parseInt(fr.get('userCountry')?.value);  // converting string to int
    this.reg.userState = parseInt(fr.get('userState')?.value);
    this.reg.userCity = parseInt(fr.get('userCity')?.value);
    this.service.addUser(this.reg).subscribe(data => console.log(data));
  }

  onSelect(cntr:any){
    let cid = cntr.target.value;
    if(cid !="-Select-"){
      this.service.getStates(cid).subscribe( data => {this.states = data;});
    }else{
      this.states=[];
      this.cities=[];
    }
  }

  onStateSelect(st:any){  //event will donot have data type so any
    let sid = st.target.value;
    if(sid != "-Select-"){
      this.service.getCities(sid).subscribe( data => {this.cities = data;});
    }
  }

  uniqueEmailMsg = "";
  onEmail(emailEvent : any){
    let eml = emailEvent.target.value;
      this.service.checkUniqueEmail(eml).subscribe(data =>
        {
        if(data == "NOT UNIQUE"){
          this.uniqueEmailMsg = "This Email is Already Registered, Choose different Email Id.";
          // this.addUserForm.setValue({email:eml});
        }else{
          this.uniqueEmailMsg = "";
        }
      });
  }


}
