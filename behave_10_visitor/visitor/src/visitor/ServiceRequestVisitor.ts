import { EnterpriseCustomer } from "./EnterpriseCustomer";
import { IVisitor } from "./IVisitor";
import { PersonalCustomer } from "./PersonalCustomer";

export class ServiceRequestVisitor implements IVisitor {
  visitEnterpriseCustomer(customer: EnterpriseCustomer) {
    console.log("企业" + customer.getName() + "提出服务请求");
  }
  visitPersonalCustomer(customer: PersonalCustomer) {
    console.log("个人" + customer.getName() + "提出服务请求");
  }
}
