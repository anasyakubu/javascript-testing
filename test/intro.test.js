import { describe, test, it, expect } from "vitest";
import { calculateAverage, factorial, fizzBuzz, max } from "../src/intro";

describe("max", () => {
  it("should return the first argument if it greater", () => {
    expect(max(2, 1)).toBe(2);
  });

  it("should return the second argument if it greater", () => {
    expect(max(1, 2)).toBe(2);
  });

  it("should return the First argument if it agugement are equal", () => {
    expect(max(2, 2)).toBe(2);
  });
});

describe("FizzBuzz", () => {
  it("Should Return FizzBuzz if divide by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("Should Return fizz if divide by 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  it("Should Return Buzz if divide by 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  it("Should Return String if not divide by 5 or 3", () => {
    expect(fizzBuzz("1")).toBe("1");
  });
});

describe("CalculateAverage", () => {
  it("Should return NAN if given and empty array", () => {
    expect(calculateAverage([])).toBe(NaN);
  });

  it("Should calculate the average of an array with single element", () => {
    expect(calculateAverage([1])).toBe(1);
  });

  it("Should calculate the average of an array with two element", () => {
    expect(calculateAverage([1, 2])).toBe(1.5);
  });

  it("Should calculate the average of an array with thre element", () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });
});

describe("factorial", () => {
  it("should return 1 if given 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return 1 if given 1", () => {
    expect(factorial(1)).toBe(1);
  });

  it("should return 2 if given 2", () => {
    expect(factorial(2)).toBe(2);
  });

  it("should return 6 if given 3", () => {
    expect(factorial(3)).toBe(6);
  });

  it("should return 24 if given 4", () => {
    expect(factorial(4)).toBe(24);
  });

  it("should return undefine if given a negative number", () => {
    expect(factorial(-1)).toBeUndefined();
  });
});
