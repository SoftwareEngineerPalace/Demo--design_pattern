import logo from "./logo.svg";
import "./App.css";
import { ObjectStructure } from "./visitor/ObjectStructure";
import { AbstractCustomer } from "./visitor/AbstractCustomer";
import { EnterpriseCustomer } from "./visitor/EnterpriseCustomer";
import { ServiceRequestVisitor } from "./visitor/ServiceRequestVisitor";
import { PreAnalyzeVisitor } from "./visitor/PreAnalyzeVisitor";
import { PersonalCustomer } from "./visitor/PersonalCustomer";

function App() {
  const customers: ObjectStructure = new ObjectStructure();

  const nokia: AbstractCustomer = new EnterpriseCustomer();
  nokia.setName("nokia");
  customers.addElement(nokia);

  const apple: AbstractCustomer = new EnterpriseCustomer();
  apple.setName("apple");
  customers.addElement(apple);

  const jason: PersonalCustomer = new PersonalCustomer();
  jason.setName("jason");
  customers.addElement(jason);

  const service_visiter: ServiceRequestVisitor = new ServiceRequestVisitor();
  customers.handleRequest(service_visiter);

  const predilect_visitor: PreAnalyzeVisitor = new PreAnalyzeVisitor();
  customers.handleRequest(predilect_visitor);

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
          <p>访问者模式 例子</p>
          <p>浏览器 开发者工具 console 看输出 </p>
        </a>
      </header>
    </div>
  );
}

export default App;
