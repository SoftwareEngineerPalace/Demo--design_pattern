/** Implementer */
export interface IDrawingAPI {
  drawCircle(x: number, y: number, radius: number): void;
}

/** Concrete Implementer 1 */
export class DrawingAPI1 implements IDrawingAPI {
  public drawCircle(x: number, y: number, radius: number): void {
    console.log("DrawingAPI 1 drawCircle x=", x, "y=", y, "radius=", radius);
  }
}

/** Concrete Implementer 2 */
export class DrawingAPI2 implements IDrawingAPI {
  public drawCircle(x: number, y: number, radius: number): void {
    console.log("DrawingAPI 2 drawCircle x=", x, "y=", y, "radius=", radius);
  }
}

/** Abstration */
export interface Shape {
  draw(): void; // low level
  resizeByPercentage(pct: number): void; // high level
}

/** Refined Abstration */
export class CircleShape implements Shape {
  private x: number;
  private y: number;
  private radius: number;
  private drawingAPI: IDrawingAPI;
  constructor(x: number, y: number, radius: number, drawingAPI: IDrawingAPI) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.drawingAPI = drawingAPI;
  }

  public draw(): void {
    this.drawingAPI.drawCircle(this.x, this.y, this.radius);
  }
  
  public resizeByPercentage(pct: number) {
    this.radius *= pct;
  }
}
