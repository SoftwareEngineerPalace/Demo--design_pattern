import { IBuilder } from "./Buider";

export class Director {
  private builder!: IBuilder;

  public setBuilder(builder: IBuilder): void {
    this.builder = builder;
  }

  public buildMiniSchool(): void {
    this.builder.produceWall();
  }

  public buildFullSchool(): void {
    this.builder.produceGate();
    this.builder.produceHouse();
    this.builder.produceWall();
  }
}
