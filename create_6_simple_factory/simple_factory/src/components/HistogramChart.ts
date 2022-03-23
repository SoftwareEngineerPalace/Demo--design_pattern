import { IChart } from "./IChart";

export class HistogramChart implements IChart {
  constructor(){
    console.log('创建 Histogram Chart')
  }
  display() {
    console.log("show Histogram Chart");
  }
}
