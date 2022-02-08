export class InsurancePlan{
  planId = "";
  planName = "";
  holderName = "";
  holderSsn = 0;
  planStatus = "";

  public constructor(init ?: Partial<InsurancePlan>) {
    Object.assign(this, init);
  }
}
