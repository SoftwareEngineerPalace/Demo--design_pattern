import { IButton, ICheckbox, IGUIFactory } from "./factory";

export class Application {
  private button: IButton;
  private checkbox: ICheckbox;

  constructor(factory: IGUIFactory) {
    this.button = factory.createButton();
    this.checkbox = factory.createCheckbox();
  }

  public paint(): void {
    this.button.paint();
    this.checkbox.paint();
  }
}
