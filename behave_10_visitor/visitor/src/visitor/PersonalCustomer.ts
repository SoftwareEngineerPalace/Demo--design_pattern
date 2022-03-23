import { AbstractCustomer } from "./AbstractCustomer";
import { IVisitor } from "./IVisitor";

export class PersonalCustomer extends AbstractCustomer {
  telephone!: number;
  age!: number;
  accept(visitor:IVisitor){
      visitor.visitPersonalCustomer(this);
  }
}
