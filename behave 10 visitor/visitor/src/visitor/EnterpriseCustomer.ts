import { AbstractCustomer } from "./AbstractCustomer";
import { IVisitor } from "./IVisitor";

export class EnterpriseCustomer extends AbstractCustomer {
  linkman!: string;
  linkTelephone!: string;
  registerAddress!: string;
  accept(visitor: IVisitor) {
    visitor.visitEnterpriseCustomer(this);
  }
}
