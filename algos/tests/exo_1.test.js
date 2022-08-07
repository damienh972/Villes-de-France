const returnMoney = require('../exos/exo_1.js');

describe("Functional Tests", () => {
  test("One simple iteration ", () => {
    const result = returnMoney(100);
    expect(result).toBe(1);
  });

  test("Negative amount", () => {
    const result = returnMoney(-100);
    expect(result).toBe(-1);
  });

  test("With 2 decimals", () => {
    const result = returnMoney(100.45);
    expect(result).toBe(4);
  });

  test("With 5 decimals", () => {
    const result = returnMoney(100.4545)
    expect(result).toBe(4);
  });

  test("With non zero rest", () => {
    const result = returnMoney(100.44)
    expect(result).toBe(-1);
  });
});