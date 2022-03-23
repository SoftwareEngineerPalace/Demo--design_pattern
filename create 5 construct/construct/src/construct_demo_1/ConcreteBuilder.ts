import { Contract } from "./Contract";

export class ConcreteBuilder {
  contractId: string;
  personName: string;

  constructor(contractId: string, personName: string) {
    this.contractId = contractId;
    this.personName = personName;
  }

  buildPersonName(personName: string) {
    this.personName = personName;
    return this;
  }

  buildContractId(id: string) {
    this.contractId = id;
    return this;
  }

  build(): Contract {
    return new Contract(this);
  }

  getPersonName(): string {
    return this.personName;
  }

  getContractId(): string {
    return this.contractId;
  }
}
