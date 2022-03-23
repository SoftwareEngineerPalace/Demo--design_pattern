import { AbstractDecorator } from "./AbstractDecorator";

export class SumPrizeDecorator extends AbstractDecorator {
  calculatePrize(user: string, begin: Date, end: Date) {
    const money = super.calculatePrize(user, begin, end);
    const prize = 1000 * 0.1;
    console.log(user + " 累计奖金" + prize);
    return money + prize;
  }
}
