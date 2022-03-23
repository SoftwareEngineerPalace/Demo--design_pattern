import logo from "./logo.svg";
import "./App.css";
import { IMotherBoardAPI } from "./command/IMotherBoardAPI";
import { GigaMotherBoard } from "./command/GigaMotherBoard";
import { OpenCommand } from "./command/OpenCommand";
import { Box } from "./command/Box";
import { ResetCommand } from "./command/ResetCommand";

function App() {
  const board: IMotherBoardAPI = new GigaMotherBoard();

  const command: OpenCommand = new OpenCommand(board);
  const resetCmd: ResetCommand = new ResetCommand(board)

  const box: Box = new Box();
  
  box.setOpenCommand(command);
  box.onPressed_openButton();

  box.setResetCommand(resetCmd);
  box.onPressed_resetButton()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>命令模式 例子</p>
          <p>浏览器 开发者工具 console 看输出 </p>
        </a>
      </header>
    </div>
  );
}

export default App;
