import { describe, test, it, expect } from "vitest";
import { max, fizzBuzz, Avg, fact } from "../intro";

describe("max", () => {
  it("should return first argument if it is greater", () => {
    //  Arrange: Turn on tv
    // const a = 2;
    // const b = 1;
    // ACT: Press power button
    // const res = max(a, b);
    // Assert: verify tv is off
    // expect(res).toBe(2);
    expect(max(2, 1)).toBe(2);
  });

  it("should return second argument if it is greater", () => {
    expect(max(2, 3)).toBe(3);
  });

  it("should return both argument are equal", () => {
    expect(max(3, 3)).toBe(3);
  });
});

describe("FizzBuz", () => {
  it("should return number divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    // expect(fizzBuzz(15)).toBeDefined();-- It check wether it exist or not
  });

  it("should return number divisible by 3", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });

  it("should return number divisible and 5", () => {
    expect(fizzBuzz(25)).toBe("Buzz");
  });
});

describe("Avg", () => {
  it("should return a number", () => {
    expect(Avg([])).toBe(NaN);
  });
  it("Calculate Avg of an array with single number", () => {
    expect(Avg([1])).toBe(1);
  });

  it("Calculate Avg of an array with two number", () => {
    expect(Avg([1, 2])).toBe(1.5);
  });

  it("Calculate Avg of an array with three number", () => {
    expect(Avg([1, 2, 3])).toBe(2);
  });
});

describe("Factorial", () => {
  it("Factorial of 0 number", () => {
    expect(fact(0)).toBe(1);
  });
  it("Factorial of 1 number", () => {
    expect(fact(1)).toBe(1);
  });
  it("Factorial of 1 number", () => {
    expect(fact(2)).toBe(2);
  });
  it("Factorial of a number", () => {
    expect(fact(3)).toBe(6);
  });
  it("Factorial of a number", () => {
    expect(fact(5)).toBe(120);
  });

  it("Factorial of -1 number", () => {
    expect(fact(-1)).toBeUndefined();
  });
});
