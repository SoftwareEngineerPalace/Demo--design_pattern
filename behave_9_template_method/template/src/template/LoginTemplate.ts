import { LoginModel } from "./LoginModel";

export abstract class LoginTemplate {
  public login(model: LoginModel): boolean {
    let dbModel: LoginModel = this.findLoginUser(model.getLoginId());
    if (dbModel) {
      let encryptPwd: string = this.encryptPwd(model.getPassward());
      model.setPassward( encryptPwd );
      return this.match( model,dbModel);
    }
    return false;
  }

  /** 寻找登录用户 */
  public abstract findLoginUser(loginId: string): LoginModel;

  /** 加密 */
  public encryptPwd(pwd: string) {
    return pwd
  }

  public match(model: LoginModel, dbModel: LoginModel) {
    if (
      model.getLoginId() === dbModel.getLoginId() &&
      model.getPassward() === dbModel.getPassward()
    ) {
      return true;
    }
    return false;
  }
}
