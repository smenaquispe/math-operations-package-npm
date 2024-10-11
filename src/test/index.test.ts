import SumOperation from "../operations/SumOperation";
import { describe, test, expect } from "@jest/globals"

describe("Make a sum", () => {
    test('Returns the correct value', () => {
        let sum = new SumOperation();
        expect(sum.run(5, 3, 56)).toEqual(64)
    })
})
