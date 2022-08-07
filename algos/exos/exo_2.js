function zeroSeries(M) {

  const binary = function convertToBinary(number) {
    if (number > 0) {
      return convertToBinary(parseInt(number / 2)) + (number % 2)
    }
    return '';
  }

  let count = 0;
  let pos = binary(M).indexOf("0");
  let series = [];

  while (pos != -1) {
    let prevPos = pos;
    count++;
    pos = binary(M).indexOf("0", pos + 1);
    if (prevPos + 1 !== pos) {
      series.push(count);
      count = 0;
    }
  };

  const L = Math.max(...series);
  return M <= 0 | !Number.isInteger(M) ? -1 : L;
}

module.exports = zeroSeries;
