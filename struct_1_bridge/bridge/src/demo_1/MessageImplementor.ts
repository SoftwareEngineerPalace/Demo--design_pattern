export interface MessageImplementor {
  send: (message: string, toUser: string) => void;
}
