import logo from "./logo.svg";
import "./App.css";
import { VoteManager } from "./state/VoteManager";

function App() {
  let vm: VoteManager = new VoteManager();
  for (let i: number = 0; i < 8; i++) {
    vm.vote("u1", "A");
  }

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
          <p>状态模式 例子</p>
          <p>浏览器 开发者工具 console 看输出 </p>
        </a>
      </header>
    </div>
  );
}

export default App;
