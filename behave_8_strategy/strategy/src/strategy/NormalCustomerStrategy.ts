import { Strategy } from "./Strategy";

export class NormalCustomerStrategy implements Strategy {
  calcPrice(goodsPrice: number): number {
    return goodsPrice;
  }
}
