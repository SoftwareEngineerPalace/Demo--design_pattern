import { ICommand } from "./ICommand";

export class Box {
  openCommand!: ICommand;
  setOpenCommand(command: ICommand) {
    this.openCommand = command;
  }

  resetCommand!: ICommand;
  setResetCommand(command: ICommand) {
    this.resetCommand = command;
  }

  onPressed_openButton() {
    this.openCommand.execute();
  }

  onPressed_resetButton() {
    this.resetCommand.execute();
  }
}
