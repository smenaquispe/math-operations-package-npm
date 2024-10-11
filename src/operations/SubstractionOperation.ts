import MathOperation from "./MathOperation";

export default class SubstractionOperation implements MathOperation
{
    run(...numbers: Array<number>): number {
        return numbers.reduce((acc, curr) => acc - curr);
    }
}