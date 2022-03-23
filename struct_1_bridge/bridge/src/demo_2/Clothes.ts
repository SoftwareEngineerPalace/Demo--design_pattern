export interface Finary {
  dress(): void;
}

export class TShirt implements Finary {
  public dress(): void {
    console.log("dressed TShirt");
  }
}

export class Jacket implements Finary {
  public dress(): void {
    console.log("dressed Jacket");
  }
}

export interface IMan {
  dress(): void;
}

export class Man implements IMan {
  private finary: Finary = {} as Finary;
  constructor(finary: Finary) {
    this.finary = finary;
  }
  public dress() {
    if (this.finary) {
      this.finary.dress();
    }
  }
}
