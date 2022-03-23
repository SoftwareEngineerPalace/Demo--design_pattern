import { Iterator } from "./Iterator";
export interface Aggregator {
  createIterator(): Iterator;
}