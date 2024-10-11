import SumOperation from "../src/operations/SumOperation";
import { describe, test, expect } from "@jest/globals"

describe("Make a sum", () => {
    test('Returns the correct value', () => {
        let sum = new SumOperation();
        expect(sum.run(5, 3, 56)).toEqual(64)
    })

    test('Throws an error when no numbers are provided', () => {
        let sum = new SumOperation();
        expect(() => sum.run()).toThrowError("No numbers to operate")
    })
})