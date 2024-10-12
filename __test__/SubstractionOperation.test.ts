import SubstractionOperation from "../src/operations/SubstractionOperation";
import { describe, test, expect } from "@jest/globals";

describe("Make a substraction", () => {
    test("Returns the correct value", () => {
        let res = new SubstractionOperation();
        expect(res.run(5,3,2)).toEqual(0)
    })

    test("Throws an error when no numbers are provided", () => {
        let res = new SubstractionOperation();
        expect(() => res.run()).toThrowError("No numbers to operate")
    })
})
 