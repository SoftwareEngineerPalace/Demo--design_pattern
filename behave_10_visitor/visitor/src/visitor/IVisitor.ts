import { EnterpriseCustomer } from "./EnterpriseCustomer";
import { PersonalCustomer } from "./PersonalCustomer";

export interface IVisitor {
  visitEnterpriseCustomer: (customer: EnterpriseCustomer) => void;
  visitPersonalCustomer: (customer: PersonalCustomer) => void;
}
