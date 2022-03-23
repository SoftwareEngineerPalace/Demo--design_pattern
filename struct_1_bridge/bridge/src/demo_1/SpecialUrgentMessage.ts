import { AbstractMessage } from "./AbstractMessage";

export class SpecialUrgentMessage extends AbstractMessage {
  hurry(messageId: string) {
    console.log("hurry messageId", messageId);
  }
  sendMessage(message: string, toUser: string) {
    message = "特急: " + message;
    super.sendMessage(message, toUser);
  }
}
