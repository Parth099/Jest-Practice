const revStr = require("../js/reverseString");

test("Basic Example: Hello -> olleH", () => {
  expect(revStr("Hello")).toEqual("olleH");
});

test("Empty String", () => {
  expect(revStr("")).toEqual("");
});

test("Single String", () => {
  expect(revStr("f")).toEqual("f");
});

test("not a string", () => {
  expect(revStr([])).toBeUndefined();
});
