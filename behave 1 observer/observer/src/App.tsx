import logo from './logo.svg';
import './App.css';
import { Newspaper } from './observer/Newspaper';
import { Observer } from './observer/Observer';

function App() {
  const subject:Newspaper = new Newspaper();

  // 添加第一个订阅人
  const reader1:Observer = new Observer();
  reader1.setName('张三')
  subject.attach(reader1);

  // 添加第二个订阅人
  const reader2:Observer = new Observer();
  reader2.setName('李四');
  subject.attach(reader2);

  subject.setContent('新冠已被消灭');

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
          <p> 观察者模式 例子 </p>
          <p> 浏览器 开发者工具 console 看输出 </p>
          
        </a>
      </header>
    </div>
  );
}

export default App;
