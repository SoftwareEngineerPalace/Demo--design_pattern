import { Strategy } from "./Strategy";

export class LargeCustomerStrategy implements Strategy {
  calcPrice(goodsPrice: number): number {
    console.log("大客户 9 折");
    return goodsPrice * 0.9;
  }
}
