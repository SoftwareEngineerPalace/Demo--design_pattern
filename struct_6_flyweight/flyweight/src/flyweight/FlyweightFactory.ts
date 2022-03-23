import { ConcreteFlyweight } from "./ConcreteFlyweight";
import { Flyweight } from "./Flyweight";

export class FlyweightFactory {
  //定义一个池容器
  private static pool: Map<String, Flyweight> = new Map<String, Flyweight>();

  //享元工厂
  public static getFlyweight(extrinsic: string): Flyweight {
    let flyweight!: Flyweight ;

    if (this.pool.has(extrinsic)) {
      //池中有该对象
      flyweight = this.pool.get(extrinsic) as Flyweight;
      console.log("已有 " + extrinsic + " 直接从池中取---->");
    } else {
      //根据外部状态创建享元对象
      flyweight = new ConcreteFlyweight(extrinsic);
      //放入池中
      this.pool.set(extrinsic, flyweight);
      console.log("创建 " + extrinsic + " 并从池中取出---->");
    }

    return flyweight;
  }
}
