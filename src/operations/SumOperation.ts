import MathOperation from "./MathOperation";
import NoNumbersToOperate from "../exceptions/NoNumbersToOperate";

export default class SumOperation implements MathOperation
{
    run(...numbers: Array<number>): number {
        if (numbers.length === 0) {
            throw new NoNumbersToOperate();
        }
        return numbers.reduce((acc, curr) => acc + curr, 0);
    }
}