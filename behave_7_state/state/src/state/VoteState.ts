import { VoteManager } from "./VoteManager";

export interface VoteState {
  vote(user: string, voteItem: string, voteManager: VoteManager): void;
}
