const analyzeArray = require("../js/analyzeArray");

test("[1, 2, 3, 4, 5]", () => {
  arr = [1, 2, 3, 4, 5, 6];
  analysis = analyzeArray(arr);
  expect(analysis.average).toBeCloseTo(3.5);
  expect(analysis.min).toBe(1);
  expect(analysis.length).toBe(arr.length);
});

test("[]", () => {
  arr = [];
  expect(analyzeArray(arr)).toEqual({
    average: undefined,
    min: Number.MAX_VALUE,
    max: Number.MIN_VALUE,
    length: 0,
  });
});

test("[12]", () => {
  arr = [12];
  expect(analyzeArray(arr)).toEqual({
    average: 12,
    min: 12,
    max: 12,
    length: 1,
  });
});
