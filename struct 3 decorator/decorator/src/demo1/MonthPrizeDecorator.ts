import { AbstractDecorator } from "./AbstractDecorator";

export class MonthPrizeDecorator extends AbstractDecorator {
  calculatePrize(user: string, begin: Date, end: Date) {
    const money = super.calculatePrize(user, begin, end);
    const prize = 10;
    console.log(user + " 当月业务奖金" + prize);
    return money + prize;
  }
}
