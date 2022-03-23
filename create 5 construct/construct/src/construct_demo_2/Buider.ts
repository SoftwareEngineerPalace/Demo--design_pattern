import { School } from "./School";

export interface IBuilder {
  produceGate(): void;
  produceWall(): void;
  produceHouse(): void;
}

export class BuildSchool implements IBuilder {
  private school!: School;
  constructor() {
    this.reset();
  }

  public reset(): void {
    this.school = new School();
  }

  public produceGate(): void {
    this.school.parts.push("gate");
  }

  public produceWall(): void {
    this.school.parts.push("wall");
  }

  public produceHouse(): void {
    this.school.parts.push("house");
  }

  public getSchool(): School {
    const result = this.school;
    this.reset();
    return result;
  }
}
