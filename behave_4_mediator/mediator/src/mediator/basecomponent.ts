import { Mediator } from "./mediator";

export class BaseComponent {
  protected mediator!: Mediator;

  constructor( ) {
  }

  public setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }
}
