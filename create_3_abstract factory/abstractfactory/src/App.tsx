import logo from "./logo.svg";
import "./App.css";
import {
  IGUIFactory,
  MacFactory,
  WindowsFactory,
} from "./abstractfactory/factory";
import { Application } from "./abstractfactory/Application";

function App() {
  let factory: IGUIFactory;
  let app: Application;
  let osName: string = "mac";
  if (osName.includes("mac")) {
    factory = new MacFactory();
    app = new Application(factory);
  } else {
    factory = new WindowsFactory();
    app = new Application(factory);
  }
  app.paint();

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
          <p>抽象工厂模式 例子</p>
          <p>浏览器 开发者工具 console 看输出</p>
        </a>
      </header>
    </div>
  );
}

export default App;
