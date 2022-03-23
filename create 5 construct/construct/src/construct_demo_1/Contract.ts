import { ConcreteBuilder } from "./ConcreteBuilder";

export class Contract {
  constractId: string;

  personName: string;

  constructor(builder: ConcreteBuilder) {
    this.constractId = builder.getContractId();
    this.personName = builder.getPersonName();
  }
}
