import { Flyweight } from "./Flyweight";

export class ConcreteFlyweight extends Flyweight {
  //接受外部状态
  constructor(extrinsic: string) {
    super(extrinsic);
  }

  //根据外部状态进行逻辑处理
  public operate(extrinsic: number): void {
    console.log("具体Flyweight:" + extrinsic);
  }
}
