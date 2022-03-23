export class LoginModel {
  private loginId!: string;
  private passward!: string;

  public getLoginId(): string {
    return this.loginId;
  }

  public setLoginId(loginId: string): void {
    this.loginId = loginId;
  }

  public getPassward():string{
      return this.passward;
  }

  public setPassward( passward:string):void {
      this.passward = passward;
  }
}
