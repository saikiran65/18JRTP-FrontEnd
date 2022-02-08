export class UserLogin{
  email = "";
  password = "";

  public constructor(init ?: Partial<UserLogin>){
    Object.assign(this, init);
  }
}
