import { Strategy } from "./Strategy";

export class OldCustomerStrategy implements Strategy {
  calcPrice(goodsPrice: number): number {
    console.log("老用户 95折");
    return goodsPrice * 0.95;
  }
}
