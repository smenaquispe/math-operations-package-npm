import NoNumbersToOperate from "../exceptions/NoNumbersToOperate";
import MathOperation from "./MathOperation";

export default class SubstractionOperation implements MathOperation
{
    run(...numbers: Array<number>): number {
        if (numbers.length === 0) {
            throw new NoNumbersToOperate();
        }
        return numbers.reduce((acc, curr) => acc - curr);
    }
}