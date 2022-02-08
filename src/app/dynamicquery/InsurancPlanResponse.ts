export class InsurancePlanResponse{
  planId = "";
  planName = "";
  holderName = "";
  holderSsn = 0;
  planStatus = "";

  public constructor(init ?: Partial<InsurancePlanResponse>){
    Object.assign(this,init);
  }
}
