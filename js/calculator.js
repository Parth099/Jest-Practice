function calculator() {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;

  const divide = function (a, b) {
    if (b == 0) {
      return undefined;
    }
    return a / b;
  };
  const multiply = (a, b) => a * b;

  return { add, subtract, divide, multiply };
}

module.exports = calculator;
