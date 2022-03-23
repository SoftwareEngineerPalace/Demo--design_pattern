import logo from "./logo.svg";
import "./App.css";
import { MessageImplementor } from "./demo_1/MessageImplementor";
import { MessageSMS } from "./demo_1/MessageSMS";
import { AbstractMessage } from "./demo_1/AbstractMessage";
import { CommonMessage } from "./demo_1/CommonMessage";
import { UrgentMessage } from "./demo_1/UrgentMessage";
import { SpecialUrgentMessage } from "./demo_1/SpecialUrgentMessage";
import { MessageEmail } from "./demo_1/MessageEmail";
import { Man, TShirt } from "./demo_2/Clothes";
import { DrawingAPI2, CircleShape } from "./demo_3/Draw";
import { Vehicle, Car, Produce, Assemble, Bike } from "./demo_4/Vehicle";

function App() {
  // demo 1

  const bySMS: MessageImplementor = new MessageSMS();
  const msg: AbstractMessage = new CommonMessage(bySMS);
  msg.sendMessage("请你喝茶", "小李");

  const urgent: AbstractMessage = new UrgentMessage(bySMS);
  urgent.sendMessage("请你喝茶", "小李");

  const specialUrgent: AbstractMessage = new SpecialUrgentMessage(bySMS);
  specialUrgent.sendMessage("请你喝茶", "小李");

  const byEmail: MessageImplementor = new MessageEmail();

  const msg_byEmail: AbstractMessage = new CommonMessage(byEmail);
  msg_byEmail.sendMessage("请你喝茶", "小李");

  const urgent_byEmail: AbstractMessage = new UrgentMessage(byEmail);
  urgent_byEmail.sendMessage("请你喝茶", "小李");

  const specialUrgent_byEmail: AbstractMessage = new SpecialUrgentMessage(
    byEmail
  );
  specialUrgent_byEmail.sendMessage("请你喝茶", "小李");

  // demo 2
  const shirt: TShirt = new TShirt();
  const man: Man = new Man(shirt);
  man.dress();

  // demo 3
  const draw_method: DrawingAPI2 = new DrawingAPI2();
  const circle: CircleShape = new CircleShape(0, 0, 10, draw_method);
  circle.draw();

  // demo 4
  const vehicle1: Vehicle = new Car(new Produce(), new Assemble());
  vehicle1.manufacture();
  
  const vehicle2: Vehicle = new Bike(new Produce(), new Assemble());
  vehicle2.manufacture();

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
          <p>桥接模式 例子</p>
          <p>浏览器 开发者工具 console 看输出</p>
        </a>
      </header>
    </div>
  );
}

export default App;
