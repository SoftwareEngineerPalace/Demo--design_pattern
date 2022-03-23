import logo from "./logo.svg";
import "./App.css";
import { CareTaker } from "./momento/CareTaker";
import { Originator } from "./momento/Originator";
import { State } from "./momento/State";

function App() {
  var state: State = new State("第一个状态");
  let originator: Originator = new Originator(state);

  var careTaker: CareTaker = new CareTaker();
  careTaker.Memento = originator.createMemento();

  originator.State = new State("第二个状态");
  console.log('-分隔-')
  originator.setMemento(careTaker.Memento);

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
          <p>备忘录模式 例子</p>
          <p>浏览器 开发者工具 console 看输出 </p>
        </a>
      </header>
    </div>
  );
}

export default App;
