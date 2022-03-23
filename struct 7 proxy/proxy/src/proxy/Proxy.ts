export interface Image {
  display(): void;
}

class RealImage implements Image {
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
    this.loadFromDisk(fileName);
  }

  public display(): void {
    console.log("Displaying " + this.fileName);
  }

  private loadFromDisk(fileName: string): void {
    console.log("Loading " + fileName);
  }
}

export class ProxyImage implements Image {
  private realImage!: RealImage;
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  public display(): void {
    if (this.realImage == null) {
      this.realImage = new RealImage(this.fileName);
    }
    this.realImage.display();
  }
}
