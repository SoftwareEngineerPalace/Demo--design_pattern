export abstract class Vehicle {
  protected workShop1!: Workshop;
  protected workShop2!: Workshop;

  constructor(workShop1: Workshop, workShop2: Workshop) {
    this.workShop1 = workShop1;
    this.workShop2 = workShop2;
  }

  abstract manufacture(): void;
}

// Refine abstraction 1 in bridge pattern
export class Car extends Vehicle {
  public constructor(workShop1: Workshop, workShop2: Workshop) {
    super(workShop1, workShop2);
  }

  public manufacture(): void {
    console.log("Car ");
    this.workShop1.work();
    this.workShop2.work();
  }
}

// Refine abstraction 2 in bridge pattern
export class Bike extends Vehicle {
  public constructor(workShop1: Workshop, workShop2: Workshop) {
    super(workShop1, workShop2);
  }

  public manufacture(): void {
    console.log("Bike ");
    this.workShop1.work();
    this.workShop2.work();
  }
}

// Implementor for bridge pattern
export interface Workshop {
  work(): void;
}

// Concrete implementation 1 for bridge pattern
export class Produce implements Workshop {
  public work(): void {
    console.log("Produced");
  }
}

// Concrete implementation 2 for bridge pattern
export class Assemble implements Workshop {
  public work(): void {
    console.log(" And");
    console.log(" Assembled.");
  }
}
