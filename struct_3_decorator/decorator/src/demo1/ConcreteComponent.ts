import { AbstractComponent } from "./AbstractComponent";

export class ConcreteComponent extends AbstractComponent {
  calculatePrize(user: string, begin: Date, end: Date) {
    return 0;
  }
}
