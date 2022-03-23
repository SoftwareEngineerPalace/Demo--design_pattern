import { MessageImplementor } from "./MessageImplementor";

export abstract class AbstractMessage {
  impl!: MessageImplementor;

  constructor(impl: MessageImplementor) {
    this.impl = impl;
  }

  sendMessage(message: string, toUser: string) {
    this.impl.send(message, toUser);
  }
}
