import DivisionOperation from "../src/operations/DivisionOperation";
import { describe, test, expect } from "@jest/globals"

describe("Make a division", () => {
    test('Returns the correct value', () => {
        let division = new DivisionOperation();
        expect(division.run(10, 5)).toEqual(2)
    })

    test('Throws an error when no numbers are provided', () => {
        let division = new DivisionOperation();
        expect(() => division.run()).toThrowError("No numbers to operate")
    })

    test('Throws an error when dividing by zero', () => {
        let division = new DivisionOperation();
        expect(() => division.run(10, 0)).toThrowError("Division by zero is not allowed")
    })
})