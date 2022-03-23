import logo from "./logo.svg";
import "./App.css";
import ChartFactory from "./components/ChartFactory";
import { IChart } from "./components/IChart";
// import ReactDOM from 'react-dom';

function App() {
  const chart: IChart = ChartFactory.getChart("histogram");
  chart.display();

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
          <p>简单工厂模式 例子</p>
          <p>浏览器 开发者工具 console 看输出</p>
        </a>
      </header>
    </div>
  );
}

export default App;
