import { ICommand } from "./ICommand";
import { IMotherBoardAPI } from "./IMotherBoardAPI";

export class OpenCommand implements ICommand {
  motherboard: IMotherBoardAPI;
  constructor(motherboard: IMotherBoardAPI) {
    this.motherboard = motherboard;
  }
  execute() {
    this.motherboard.open();
  }
}
