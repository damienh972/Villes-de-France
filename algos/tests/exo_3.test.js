const getMaxSeeds = require('../exos/exo_3.js');

describe("Functional Tests", () => {

  test("Whith smallest array ", () => {
    const result = getMaxSeeds([
      [1]
    ]);
    expect(result).toBe(1);
  });

  // test("With negative amount", () => {
  //   const result = getMaxSeeds([
  //     [1, -2, 3],
  //     [4, 5, -6],
  //     [-7, -3, 9]
  //   ]);
  //   expect(result).toBe(-1);
  // });

  test("With decimals", () => {
    const result = getMaxSeeds([
      [1.76, 2, 3],
      [4, 5.43, 6],
      [7, 3, 9.66]
    ]);
    expect(result.toFixed(2)).toBe("26.85");
  });

  test("With higher array ", () => {
    const result = getMaxSeeds([
      [1, 2, 3, 8, 0, 5, 3, 4, 5],
      [4, 7, 8, 6, 3, 4, 7, 0, 2],
      [7, 3, 9, 4, 9, 4, 0, 8, 1],
      [4, 7, 8, 6, 3, 4, 7, 0, 2],
      [1, 2, 3, 8, 0, 5, 3, 4, 5],
      [4, 7, 8, 6, 3, 4, 7, 0, 2],
      [4, 7, 8, 6, 3, 4, 7, 0, 2],
      [1, 2, 3, 8, 0, 5, 3, 4, 5],
      [7, 3, 9, 4, 9, 4, 0, 8, 1],
    ]);
    expect(result).toBe(83);
  });

  test("With non  2D array param", () => {
    const result = getMaxSeeds(
      [1, 2, 3, 8, 0, 5, 3, 4, 5]
    )
    expect(result).toBe(-1);
  });
});