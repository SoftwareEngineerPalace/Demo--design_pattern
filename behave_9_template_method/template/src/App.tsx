import logo from "./logo.svg";
import "./App.css";
import { LoginModel } from "./template/LoginModel";
import { LoginTemplate } from "./template/LoginTemplate";
import { WorkerLogin } from "./template/WorkerLogin";
import { NormalLogin } from "./template/NormalLogin";

function App() {
  let model: LoginModel = new LoginModel();
  model.setLoginId("admin");
  model.setPassward("workerpassward");

  // 准备用来进行判断的对象
  let worker: LoginTemplate = new WorkerLogin();
  let normal: LoginTemplate = new NormalLogin();

  // 登录测试
  let workerLoginResult: boolean = worker.login(model);
  console.log("工作人员登录", workerLoginResult);

  let normalLoginResult: boolean = normal.login(model);
  console.log("普通人员登录", normalLoginResult);

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
          <p>模版方法模式 例子</p>
          <p>浏览器 开发者工具 console 看输出 </p>
        </a>
      </header>
    </div>
  );
}

export default App;
