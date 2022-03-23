import logo from "./logo.svg";
import "./App.css";
import { ShapeMakerFacade } from "./facade/Facade";

function App() {
  const shapeMaker: ShapeMakerFacade = new ShapeMakerFacade();

  shapeMaker.drawCircle();
  shapeMaker.drawRectangle();
  shapeMaker.drawSquare();
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
          <p>外观模式 例子</p>
          <p>浏览器 开发者工具 console 看输出</p>
        </a>
      </header>
    </div>
  );
}

export default App;
