export class ForgotPwd{
  email = "";

  public constructor(init?:Partial<ForgotPwd>){
    Object.assign(this,init);
  }
}
