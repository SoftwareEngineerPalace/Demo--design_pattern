import { EnterpriseCustomer } from "./EnterpriseCustomer";
import { IVisitor } from "./IVisitor";
import { PersonalCustomer } from "./PersonalCustomer";

export class PreAnalyzeVisitor implements IVisitor {
  visitEnterpriseCustomer(customer: EnterpriseCustomer) {
    console.log("现在对企业" + customer.getName() + "进行产品偏好分析");
  }
  visitPersonalCustomer(customer: PersonalCustomer) {
    console.log("现在对个人" + customer.getName() + "进行产品偏好分析");
  }
}
