import { Flyweight } from "./Flyweight";

export class UnsharedConcreteFlyweight extends Flyweight {
  public constructor(extrinsic: string) {
    super(extrinsic);
  }

  public operate(extrinsic: number): void {
    console.log("不共享的具体Flyweight:" + extrinsic);
  }
}
