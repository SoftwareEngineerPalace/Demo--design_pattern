import logo from "./logo.svg";
import "./App.css";
import { Target, Adaptee, Adapter } from "./demo1/adapter";
import { AudioPlayer } from "./demo2/AudioPlayer";

function App() {
  // demo 1
  const target = new Target();
  console.log(`target: ${target.request()}`);

  const adaptee = new Adaptee();
  console.log(`adaptee: ${adaptee.specificRequest()}`);

  const adapter = new Adapter(adaptee);
  console.log(`adapter: ${adapter.request()}`);

  console.log("");

  // demo 2
  let audioPlayer: AudioPlayer = new AudioPlayer();

  audioPlayer.play("mp3", "beyond the horizon.mp3");
  audioPlayer.play("mp4", "alone.mp4");
  audioPlayer.play("vlc", "far far away.vlc");
  audioPlayer.play("avi", "mind me.avi");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p></p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>适配器模式 例子</p>
          <p>浏览器 开发者工具 console 看输出</p>
        </a>
      </header>
    </div>
  );
}

export default App;
