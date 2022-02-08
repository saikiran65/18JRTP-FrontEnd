export class InsurancePlanRequest{
  planName = "";
  planStatus = "";

  public constructor(init ?: Partial<InsurancePlanRequest>){
    Object.assign(this,init);
  }
}
