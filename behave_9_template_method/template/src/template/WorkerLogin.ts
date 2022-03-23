import { LoginModel } from "./LoginModel";
import { LoginTemplate } from "./LoginTemplate";

export class WorkerLogin extends LoginTemplate {

  public findLoginUser(loginId: string): LoginModel {
    let model: LoginModel = new LoginModel();
    model.setLoginId(loginId);
    model.setPassward("workerpassward");
    return model;
  }

  public encryptPwd(pwd: string): string {
    console.log("MD5 加密");
    return pwd;
  }
}
