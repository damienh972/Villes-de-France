const zeroSeries = require('../exos/exo_2.js');

describe("Functional Tests", () => {

  test("Whith simple number ", () => {
    const result = zeroSeries(4);
    expect(result).toBe(2);
  });

  test("With negative amount", () => {
    const result = zeroSeries(-4);
    expect(result).toBe(-1);
  });

  test("With decimals", () => {
    const result = zeroSeries(4.20);
    expect(result).toBe(-1);
  });

  test("With higher number ", () => {
    const result = zeroSeries(70099234235)
    console.log(result);
    expect(result).toBe(5);
  });

  test("With zero number", () => {
    const result = zeroSeries(0)
    expect(result).toBe(-1);
  });
});