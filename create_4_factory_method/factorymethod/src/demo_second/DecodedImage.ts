export class DecodedImage {
  private image: string;

  constructor(image: string) {
    this.image = image;
  }

  public toString(): string {
    return this.image + ": is decoded";
  }
}
