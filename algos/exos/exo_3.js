// ***** PSEUDO-CODE ***** 
// E = [x[y]];
// deplacement vers E[x + 1][y] | E[x][y + 1]
// a = x.lenght, b = y.lenght et c = 1,
// pour c allant de 1 a x.lenght par pas de 1, faire
// totalX = E[x + c][y] + E[x + (c + 1)][y]
// totalY = E[x][y + c] + E[x][y + (c + 1)]
// si totalX > totalY déplacement vers E[x + 1][y] sinon déplacement vers E[x][y + 1]

function getMaxSeeds(E) {

  let chessboard = E;
  let seeds = [chessboard[0][0]];
  let totalI = 0;
  let totalJ = 0;
  let position = [0, 0];

  while (position[0] < chessboard[0].length -1 | position[1] < chessboard.length -1) {

    for (let i = position[0]; i < chessboard[0].length; i++) {
      totalI += chessboard[position[1]][i];
    };

    for (let j = position[1]; j < chessboard.length; j++) {
      totalJ += chessboard[j][position[0]];
    };

    if (totalI > totalJ) {
      position[0] += 1;
      
    } else {
      position[1] += 1;
    }
    
    seeds.push(chessboard[position[1]][position[0]]);
    totalI = 0;
    totalJ = 0;
  };

  const M = seeds.reduce((a, b) => a + b, 0);
  return E === null | E === undefined | !E[0][0] ? -1 :M;
};

module.exports = getMaxSeeds;
