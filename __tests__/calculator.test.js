const calculator = require("../js/calculator");
const calc = calculator();

test("Add: 1 + 1 = 2", () => {
  expect(calc.add(1, 1)).toBe(2);
});

test("subtract: 1 - 17 = -16", () => {
  expect(calc.subtract(1, 17)).toBe(-16);
});

test("divide: 1/5 = 0.2", () => {
  expect(calc.divide(1, 5)).toBeCloseTo(.2);
});

test("divide: 1/0 = UDE", () => {
  expect(calc.divide(1, 0)).toBeUndefined();
});

test("mult: 17*17 = 289", () => {
    expect(calc.multiply(17, 17)).toBe(289);
  });
