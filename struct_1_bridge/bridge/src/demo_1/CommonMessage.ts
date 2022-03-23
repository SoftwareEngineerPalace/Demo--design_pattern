import { AbstractMessage } from "./AbstractMessage";
import { MessageImplementor } from "./MessageImplementor";

export class CommonMessage extends AbstractMessage {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(impl: MessageImplementor) {
    super(impl);
  }

  sendMessage(message: string, toUser: string) {
    super.sendMessage(message, toUser);
  }
}
