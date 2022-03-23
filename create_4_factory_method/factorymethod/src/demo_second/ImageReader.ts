import { DecodedImage } from "./DecodedImage";

export interface ImageReader {
  getDecodeImage(): DecodedImage;
}

export class GifReader implements ImageReader {
  private decodedImage!: DecodedImage;

  public GifReader(image: string) {
    this.decodedImage = new DecodedImage(image);
  }

  public getDecodeImage(): DecodedImage {
    return this.decodedImage;
  }
}

export class JpegReader implements ImageReader {
  private decodedImage!: DecodedImage;

  public JpegReader(image: string) {
    this.decodedImage = new DecodedImage(image);
  }

  public getDecodeImage(): DecodedImage {
    return this.decodedImage;
  }
}
