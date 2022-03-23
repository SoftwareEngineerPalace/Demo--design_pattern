import { AbstractMessage } from "./AbstractMessage";

export class UrgentMessage extends AbstractMessage {
  sendMessage(message: string, toUser: string) {
    message = "加急: " + message;
    super.sendMessage(message, toUser);
  }

  watch(messageId: string) {
    return null;
  }
}
