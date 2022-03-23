import "./App.css";
import { ConcreteIterator } from "./iterate/ConcreteIterator";
import { Numbers } from "./iterate/Numbers";

const App = ()=>{
  let nArray = [1, 7, 21, 657, 3, 2, 765, 13, 65];
  let numbers: Numbers = new Numbers(nArray);
  let it: ConcreteIterator = numbers.createIterator() as ConcreteIterator;

  while (it.hasNext()) {
    console.log(it.next());
  }
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>迭代器模式 例子</p>
          <p>浏览器 开发者工具 console 看输出 </p>
        </a>
      </header>
    </div>
  );
}

export default App;
