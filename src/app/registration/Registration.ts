export class Registration{
  userFirstName : string = "";
  userLastName : string = "";
  userEmail : string = "";
  userPhNo : number = 0;
  userDob : Date | string = "";
  userGender : string = "";
  userCountry : number = 0;
  userState : number = 0;
  userCity : number = 0;

  public constructor(init?: Partial<Registration>){
    Object.assign(this, init);
  }

  // constructor(firstName:string,lastName:string,email:string,phno:number,dob:Date,gender:string,country:number,state:number,city:number){
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.email = email;
  //   this.phno = phno;
  //   this.dob = dob;
  //   this.gender = gender;
  //   this.country = country;
  //   this.state = state;
  //   this.city = city;
  // }
}
