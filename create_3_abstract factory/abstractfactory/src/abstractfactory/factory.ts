export interface IButton {
  paint(): void;
}

export class MacButton implements IButton {
  public paint(): void {
    console.log("paint MacButton");
  }
}

export class WindowsButton implements IButton {
  public paint(): void {
    console.log("paint WindowsButton");
  }
}

/** ------------------------------------------- */

export interface ICheckbox {
  paint(): void;
}

/** MacCheckbox */
export class MacCheckbox implements ICheckbox {
  public paint(): void {
    console.log("paint MacCheckbox");
  }
}

/** WindowsCheckbox */
export class WindowsCheckbox implements ICheckbox {
  public paint(): void {
    console.log("paint WindowsCheckbox");
  }
}

/** ------------------------------------------- */

export interface IGUIFactory {
  createButton(): IButton;
  createCheckbox(): ICheckbox;
}

/** Mac 工厂 */
export class MacFactory implements IGUIFactory {
  public createButton(): IButton {
    return new MacButton();
  }

  public createCheckbox(): ICheckbox {
    return new MacCheckbox();
  }
}

/** Windows 工厂 */
export class WindowsFactory implements IGUIFactory {
  public createButton(): IButton {
    return new WindowsButton();
  }

  public createCheckbox(): ICheckbox {
    return new WindowsCheckbox();
  }
}
