import { Aggregator } from "./Aggregator";
import { ConcreteIterator } from "./ConcreteIterator";
import { Iterator } from "./Iterator";

export class Numbers implements Aggregator {
  private collection: number[] = [];

  constructor(collection: number[]) {
    this.collection = collection;
  }
  
  public createIterator(): Iterator {
    return new ConcreteIterator(this.collection);
  }
}
