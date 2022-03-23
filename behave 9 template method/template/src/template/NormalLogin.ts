import { LoginModel } from "./LoginModel";
import { LoginTemplate } from "./LoginTemplate";

export class NormalLogin extends LoginTemplate {
  public findLoginUser(loginId: string): LoginModel {
    let model: LoginModel = new LoginModel();
    model.setLoginId(loginId);
    model.setPassward("testpassward");
    return model;
  }
}
