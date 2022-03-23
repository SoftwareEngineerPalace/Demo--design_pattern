import {
  BlackVoteState,
  NormalVoteState,
  RepeatVoteState,
  SpiteVoteState,
} from "./State";
import { VoteState } from "./VoteState";

export class VoteManager {
  private state!: VoteState;
  private mapVote: Map<string, string> = new Map();
  private mapVoteCount: Map<string, number> = new Map<string, number>();

  public getMapVote(): Map<string, string> {
    return this.mapVote;
  }

  public vote(user: string, voteItem: string) {
    let oldVoteCount: number = this.mapVoteCount.get(user) as number;
    if (!oldVoteCount) {
      oldVoteCount = 0;
    }
    oldVoteCount++;
    this.mapVoteCount.set(user, oldVoteCount);
    // console.log('user oldVoteCount=', oldVoteCount)
    // 判断该用户投票的类型
    if (oldVoteCount === 0) {
      this.state = new NormalVoteState();
    } else if (1 <= oldVoteCount && oldVoteCount < 5) {
      this.state = new RepeatVoteState();
    } else if (5 <= oldVoteCount && oldVoteCount < 8) {
      this.state = new SpiteVoteState();
    } else if (oldVoteCount >= 8) {
      this.state = new BlackVoteState();
    }
    // console.log('this.state', this.state)
    if (this.state) {
      this.state.vote(user, voteItem, this);
    }
  }
}
