import { Strategy } from "./Strategy";

export class Price {
  private strategy!: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public quote(goodsPrice: number): number {
    return this.strategy.calcPrice(goodsPrice);
  }
}
