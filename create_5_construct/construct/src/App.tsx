import logo from "./logo.svg";
import "./App.css";
import { ConcreteBuilder } from "./construct_demo_1/ConcreteBuilder";
import { Contract } from "./construct_demo_1/Contract";
import { BuildSchool } from "./construct_demo_2/Buider";
import { Director } from "./construct_demo_2/Director";

function App() {
  // 示例一
  const builder: ConcreteBuilder = new ConcreteBuilder("001", "李四");
  const doc: Contract = builder
    .buildContractId("002")
    .buildPersonName("张三")
    .build();
  console.log("doc", doc);

  // 示例二
  const schoolBuilder: BuildSchool = new BuildSchool();
  const director: Director = new Director();
  director.setBuilder(schoolBuilder);
  director.buildFullSchool();
  let school = schoolBuilder.getSchool();
  console.log("school", school);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>建造者模式 例子</p>
          <p>浏览器 开发者工具 console 看输出</p>
        </a>
      </header>
    </div>
  );
}

export default App;
