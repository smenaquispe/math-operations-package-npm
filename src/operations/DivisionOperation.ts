import MathOperation from "./MathOperation";
import NoNumbersToOperate from "../exceptions/NoNumbersToOperate";
import CantDevideByZero from "../exceptions/CantDivideByZero";

export default class DivisionOperation implements MathOperation
{
    run(...numbers: Array<number>): number {
        if (numbers.length === 0) {
            throw new NoNumbersToOperate();
        }

        if (numbers.slice(1).includes(0)) {
            throw new CantDevideByZero();
        }

        return numbers.reduce((acc, curr) => acc / curr);
    }
}