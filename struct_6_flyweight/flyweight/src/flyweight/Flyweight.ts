export abstract class Flyweight {

  //内部状态
  public intrinsic!: string;

  //外部状态
  protected extrinsic!: string;

  //要求享元角色必须接受外部状态
  constructor (extrinsic: string) {
    this.extrinsic = extrinsic;
  }

  //定义业务操作
  public abstract operate(extrinsic: number): void;

  public getIntrinsic(): string {
    return this.intrinsic;
  }

  public setIntrinsic(intrinsic: string): void {
    this.intrinsic = intrinsic;
  }
}
