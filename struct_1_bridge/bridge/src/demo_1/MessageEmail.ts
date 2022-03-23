import { MessageImplementor } from "./MessageImplementor";

export class MessageEmail implements MessageImplementor {
  send(message: string, toUser: string) {
    console.log("用 email 发送消息 " + message + " 给: " + toUser);
  }
}
