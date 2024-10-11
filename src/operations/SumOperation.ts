import MathOperation from "./MathOperation";

export default class SumOperation implements MathOperation
{
    run(...numbers: Array<number>): number {
        return numbers.reduce((acc, curr) => acc + curr, 0);
    }
}