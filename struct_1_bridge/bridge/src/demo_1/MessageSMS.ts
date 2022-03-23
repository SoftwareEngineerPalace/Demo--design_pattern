import { MessageImplementor } from "./MessageImplementor";

export class MessageSMS implements MessageImplementor {
  send(message: string, toUser: string) {
    console.log("用 SMS 发送消息 " + message + ' 给: ' + toUser);
  }
}


