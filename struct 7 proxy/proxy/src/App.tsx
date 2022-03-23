import logo from "./logo.svg";
import "./App.css";
import { Image, ProxyImage } from "./proxy/Proxy";

function App() {
  let image: Image = new ProxyImage("test_10mb.jpg");

  //image will be loaded from disk
  image.display();
  console.log("");

  //image will not be loaded from disk
  image.display();

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
          <p>代理模式 例子</p>
          <p>浏览器 开发者工具 console 看输出</p>
        </a>
      </header>
    </div>
  );
}

export default App;
