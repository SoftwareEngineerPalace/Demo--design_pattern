import { IVisitor } from "./IVisitor";

export abstract class AbstractCustomer {
  customId!: string;
  name!: string;
  abstract accept(visitor: IVisitor): void;
  setName(name: string) {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
}
