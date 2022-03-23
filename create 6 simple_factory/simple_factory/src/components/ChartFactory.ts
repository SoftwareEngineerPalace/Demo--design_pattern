import { HistogramChart } from "./HistogramChart";
import { IChart } from "./IChart";
import { PieChart } from "./PieChart";

export default class ChartFactory {
  static getChart(arg: string): IChart {
    let chart: IChart;
    if (arg === "histogram") {
      chart = new HistogramChart();
    } else if (arg === "pie") {
      chart = new PieChart();
    } else {
      chart = new PieChart();
    }
    return chart;
  }
}
