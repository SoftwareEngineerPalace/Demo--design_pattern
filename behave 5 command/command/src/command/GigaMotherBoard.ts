import { IMotherBoardAPI } from "./IMotherBoardAPI";

export class GigaMotherBoard implements IMotherBoardAPI {
  open() {
    console.log("机器正常运行起来了");
  }
  reset() {
    console.log("机器正在重启");
  }
}
