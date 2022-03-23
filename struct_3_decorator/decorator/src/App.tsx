import logo from "./logo.svg";
import "./App.css";
import { AbstractComponent } from "./demo1/AbstractComponent";
import { ConcreteComponent } from "./demo1/ConcreteComponent";
import { AbstractDecorator } from "./demo1/AbstractDecorator";
import { MonthPrizeDecorator } from "./demo1/MonthPrizeDecorator";
import { SumPrizeDecorator } from "./demo1/SumPrizeDecorator";
import {
  AutoCarDecorator,
  CarDecorator,
  FlyCarDecorator,
  ICar,
  TeslaCar,
} from "./demo2/Car";

function App() {
  // demo 1
  const start = new Date();

  const compo: AbstractComponent = new ConcreteComponent();
  const month: AbstractDecorator = new MonthPrizeDecorator(compo);
  const sum: AbstractDecorator = new SumPrizeDecorator(month);

  const zhangsan = sum.calculatePrize("张三", start, new Date());
  console.log("张三 总奖金:" + zhangsan);
  console.log("");

  // demo 2
  const tesla: ICar = new TeslaCar();
  const auto_car: CarDecorator = new AutoCarDecorator(tesla);
  const fly_car: CarDecorator = new FlyCarDecorator(auto_car);
  fly_car.run();

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
          <p>装饰器模式 例子</p>
          <p>浏览器 开发者工具 console 看输出</p>
        </a>
      </header>
    </div>
  );
}

export default App;
