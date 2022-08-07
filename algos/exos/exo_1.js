const L = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.10, 0.05];

function returnMoney(M) {
  let money = M;
  let i = 0;
  let r = 0;

  while (money >= 0.05) {
    if (money - L[i] >= 0) {
      money = money.toFixed(2) - L[i];
      r++
    } else {
      i++
    }
  };

  const P = money !== 0 ? -1 : r;
  return P;
}
module.exports = returnMoney;