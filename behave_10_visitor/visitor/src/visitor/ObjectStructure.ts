import { AbstractCustomer } from "./AbstractCustomer";
import { IVisitor } from "./IVisitor";

export class ObjectStructure {
  private customers: AbstractCustomer[] = [];

  handleRequest(visitor: IVisitor) {
    for (let customer of this.customers) {
      customer.accept(visitor);
    }
  }

  addElement(customer: AbstractCustomer) {
    this.customers.push(customer);
  }
}
