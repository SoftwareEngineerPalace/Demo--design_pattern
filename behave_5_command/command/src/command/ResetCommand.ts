import { ICommand } from "./ICommand";
import { IMotherBoardAPI } from "./IMotherBoardAPI";

export class ResetCommand implements ICommand {
  motherBoard!: IMotherBoardAPI;

  constructor(motherBoard: IMotherBoardAPI) {
    this.motherBoard = motherBoard;
  }

  execute() {
    this.motherBoard.reset();
  }
}
