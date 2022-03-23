import "./App.css";
import { Component1, Component2 } from "./mediator/components";
import { ConcreteMediator } from "./mediator/concreteMediator";

function App() {
  const c1 = new Component1();
  const c2 = new Component2();
  const mediator = new ConcreteMediator(c1, c2);

  c1.doA();

  console.log("");

  c2.doD();

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>中介者模式 例子</p>
          <p>浏览器 开发者工具 console 看输出 </p>
        </a>
      </header>
    </div>
  );
}

export default App;
