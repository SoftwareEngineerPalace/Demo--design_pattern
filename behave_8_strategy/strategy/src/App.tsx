import logo from "./logo.svg";
import "./App.css";
import { Strategy } from "./strategy/Strategy";
import { LargeCustomerStrategy } from "./strategy/LargeCustomerStrategy";
import { Price } from "./strategy/Price";

function App() {
  let strategy: Strategy = new LargeCustomerStrategy();
  let ctx: Price = new Price(strategy);
  let quote: number = ctx.quote(1000);
  console.log("最后报价是", quote);

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
          <p>策略模式 例子</p>
          <p>浏览器 开发者工具 console 看输出 </p>
        </a>
      </header>
    </div>
  );
}

export default App;
