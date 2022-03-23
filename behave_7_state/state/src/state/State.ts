import { VoteManager } from "./VoteManager";
import { VoteState } from "./VoteState";

export class NormalVoteState implements VoteState {
  vote(user: string, voteItem: string, voteManager: VoteManager): void {
    console.log("正常用户");
  }
}

export class RepeatVoteState implements VoteState {
  vote(user: string, voteItem: string, voteManager: VoteManager): void {
    console.log("请不有重复投票");
  }
}

export class SpiteVoteState implements VoteState {
  vote(user: string, voteItem: string, voteManager: VoteManager): void {
    console.log("恶意投票，取消资格");
    let s = voteManager.getMapVote().get(user);
    if (s) {
      voteManager.getMapVote().delete(user);
    }
  }
}

export class BlackVoteState implements VoteState {
    vote(user: string, voteItem: string, voteManager: VoteManager): void {
      console.log("黑名单用户");
    }
  }
  
