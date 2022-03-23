import { AdvancedMediaPlayer } from "./AdvancedMediaPlayer";

export class Mp4Player implements AdvancedMediaPlayer {
  public playVlc(fileName: string): void {
    //do nothing
  }

  public playMp4(fileName: string): void {
    console.log("Playing mp4 file. Name: " + fileName);
  }
}
