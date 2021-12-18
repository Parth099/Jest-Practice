const capitalize = require("../js/capitalize");

test("Basic Example: abcd -> Abcd", () => {
  expect(capitalize("abcd")).toEqual("Abcd");
});

test("Wrong Data type", () => {
  expect(capitalize(1)).toBeUndefined();
});

test("Empty String", () => {
  expect(capitalize("")).toEqual("");
});

test("String Of Length 1", () => {
  expect(capitalize("c")).toEqual("C");
});

test("invalid String: \"!.,88234!\"", () => {
    expect(capitalize("!.,88234!")).toEqual("!.,88234!");
});
