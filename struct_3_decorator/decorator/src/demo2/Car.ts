export interface ICar {
  run(): void;
}

export class BenzCar implements ICar {
  public run(): void {
    console.log("Benz run");
  }
}

export class TeslaCar implements ICar {
  public run(): void {
    console.log("Tesla run");
  }
}

export class CarDecorator implements ICar {
  protected decoratedCar: ICar;
  constructor(decoratedCar: ICar) {
    this.decoratedCar = decoratedCar;
  }
  public run() {
    this.decoratedCar.run();
  }
}

export class AutoCarDecorator extends CarDecorator {
  public run(): void {
    this.decoratedCar.run();
    this.autoRun();
  }

  private autoRun(): void {
    console.log("开启自动驾驶模式");
  }
}

export class FlyCarDecorator extends CarDecorator {
  public run(): void {
    this.decoratedCar.run();
    this.fly();
  }

  private fly(): void {
    console.log("开启飞行模式");
  }
}
