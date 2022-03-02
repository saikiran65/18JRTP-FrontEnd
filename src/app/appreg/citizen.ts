import { FormGroup } from "@angular/forms";

export class Citizen {

	fullName : string| undefined;
	email : string | undefined;
	mobile : number | undefined;
	dob : Date | undefined;
  gender : string | undefined;
	ssn : number | undefined;

  constructor(citizenFormGroup : FormGroup){
    this.fullName = citizenFormGroup.value.fullName;
    this.email = citizenFormGroup.value.email;
    this.mobile = citizenFormGroup.value.mobile;
    this.dob = citizenFormGroup.value.dob;
    this.gender = citizenFormGroup.value.gender;
    this.ssn = citizenFormGroup.value.ssn;
  }

}
