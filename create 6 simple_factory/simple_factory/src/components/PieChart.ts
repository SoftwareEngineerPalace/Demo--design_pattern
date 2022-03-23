import { IChart } from "./IChart";

export class PieChart implements IChart {
  constructor() {
    console.log("创建 PieChart");
  }
  display() {
    console.log("show PieChart");
  }
}
