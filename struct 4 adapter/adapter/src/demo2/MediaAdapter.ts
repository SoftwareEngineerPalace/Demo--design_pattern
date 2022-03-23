import { AdvancedMediaPlayer } from "./AdvancedMediaPlayer";
import { MediaPlayer } from "./MediaPlayer";
import { Mp4Player } from "./Mp4Player";
import { VlcPlayer } from "./VlcPlayer";

export class MediaAdapter implements MediaPlayer {
  private advancedMusicPlayer!: AdvancedMediaPlayer;

  constructor(audioType: string) {
    if (audioType === "vlc") {
      this.advancedMusicPlayer = new VlcPlayer();
    } else if (audioType === "mp4") {
      this.advancedMusicPlayer = new Mp4Player();
    }
  }

  public play(audioType: string, fileName: string): void {
    if (audioType === "vlc") {
      this.advancedMusicPlayer.playVlc(fileName);
    } else if (audioType === "mp4") {
      this.advancedMusicPlayer.playMp4(fileName);
    }
  }
}
