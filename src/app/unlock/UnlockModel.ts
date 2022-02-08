export class UnlockModel{
  email = "";
  tempPwd = "";
  newPwd = "";
  confPwd = "";

  public constructor(init?: Partial<UnlockModel>){
    Object.assign(this, init);
  }
}
