import logo from "./logo.svg";
import "./App.css";
import { LoggerFactory, FileLoggerFactory } from "./demo_first/Factory";
import { Logger } from "./demo_first/Logger";

function App() {
  const factory: LoggerFactory = new FileLoggerFactory();
  const logger: Logger = factory.createLogger();
  logger.writeLog();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>工厂方法模式 例子</p>
          <p>浏览器 开发者工具 console 看输出</p>
        </a>
      </header>
    </div>
  );
}

export default App;
