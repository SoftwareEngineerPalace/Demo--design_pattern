import logo from "./logo.svg";
import "./App.css";
import { Composite, Leaf, NodeComponent } from "./composite/NodeComponent";

function App() {
  const root: NodeComponent = new Composite("服装");
  const men: NodeComponent = new Composite("男装");
  const women: NodeComponent = new Composite("女装");

  const shirt: NodeComponent = new Leaf("衬衣");
  const jacket: NodeComponent = new Leaf("夹克");
  const skirt: NodeComponent = new Leaf("裙子");
  const suit: NodeComponent = new Leaf("套装");

  root.addChild(men);
  root.addChild(women);

  men.addChild(shirt);
  men.addChild(jacket);

  women.addChild(skirt);
  women.addChild(suit);

  root.printStruct("");

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
          <p>组合模式 例子</p>
          <p>浏览器 开发者工具 console 看输出</p>
        </a>
      </header>
    </div>
  );
}

export default App;
