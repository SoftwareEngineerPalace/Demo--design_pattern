import logo from "./logo.svg";
import "./App.css";
import { Flyweight } from "./flyweight/Flyweight";
import { FlyweightFactory } from "./flyweight/FlyweightFactory";
import { UnsharedConcreteFlyweight } from "./flyweight/UnsharedConcreteFlyweight";

function App() {
  let extrinsic: number = 22;

  const flyweightX: Flyweight = FlyweightFactory.getFlyweight("X");
  flyweightX.operate(++extrinsic);

  const flyweightY: Flyweight = FlyweightFactory.getFlyweight("Y");
  flyweightY.operate(++extrinsic);

  const flyweightZ: Flyweight = FlyweightFactory.getFlyweight("Z");
  flyweightZ.operate(++extrinsic);

  const flyweightReX: Flyweight = FlyweightFactory.getFlyweight("X");
  flyweightReX.operate(++extrinsic);

  const unsharedFlyweight: Flyweight = new UnsharedConcreteFlyweight("X");
  unsharedFlyweight.operate(++extrinsic);

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
          <p>享元模式 例子</p>
          <p>浏览器 开发者工具 console 看输出</p>
        </a>
      </header>
    </div>
  );
}

export default App;
