export class Factory {
  public parts: Array<string> = [];
  public listParts(): void {
    console.log(`${this.parts.join(", ")}`);
  }
}
