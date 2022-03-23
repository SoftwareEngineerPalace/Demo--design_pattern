import { AbstractComponent } from "./AbstractComponent";

export abstract class AbstractDecorator extends AbstractComponent {
  protected comp: AbstractComponent;

  constructor(comp: AbstractComponent) {
    super();
    this.comp = comp;
  }

  calculatePrize(user: string, begin: Date, end: Date) {
    return this.comp.calculatePrize(user, begin, end);
  }
}
