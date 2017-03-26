function checkWin(bo, le) {
  return ((bo[0][0] == le && bo[1][0] == le && bo[2][0] == le) ||
  (bo[0][1] == le && bo[1][1] == le && bo[2][1] == le) ||
  (bo[0][2] == le && bo[1][2] == le && bo[2][2] == le) ||
  (bo[0][2] == le && bo[0][1] == le && bo[0][0] == le) ||
  (bo[1][2] == le && bo[1][1] == le && bo[1][0] == le) ||
  (bo[2][2] == le && bo[2][1] == le && bo[2][0] == le) ||
  (bo[0][2] == le && bo[1][1] == le && bo[2][0] == le) ||
  (bo[2][2] == le && bo[1][1] == le && bo[0][0] == le));
}

function checkClose(le) {
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      if (board[i][j] === 0) {
        copi = [board[0].slice(0), board[1].slice(0), board[2].slice(0)]
        copi[i][j] = le;
        if (checkWin(copi, le)) {
          return [i,j];
        }
      }
    }
  }
}

function legalMoves() {
  out = [];
  for (i = 0; i < 9; i++) {
    if (board[int(i/3)][i % 3] === 0) {
      out.push([int(i/3), i % 3]);
    }
  }
  return out;
}

function randMove(list) {
  out = [];
  for (i = 0; i < list.length; i++) {
    if (board[list[i][0]][list[i][1]] === 0) {
      out.push(list[i]);
    }
  }
  if (out.length === 0) {
    return false;
  }
  else {
    return choice(out);
  }
}

function mediumMove() {
  for (n = 2; n >= 1; n--) {
    see = checkClose(n);
    if (see) {
      return see;
    }
  }
  return choice(legalMoves());
}

function hardMove() {
  for (n = 2; n >= 1; n--) {
    see = checkClose(n);
    if (see) {
      return see;
    }
  }

  if ((board[0][0] === 1 || board[0][2] === 1 || board[2][2] === 1 || board[2][0] === 1) && [1,1] in legalMoves()) {
    return [1,1];
  }

  if (randMove([[0,0],[0,2],[2,2],[2,0]])) {
    return randMove([[0,0],[0,2],[2,2],[2,0]]);
  }

  if ([1,1] in legalMoves()) {
    return  [1,1];
  }

  return randMove([[0,1],[1,0],[2,1],[1,2]]);
}

function impossibleMove() {
  for (n = 2; n >= 1; n--) {
    see = checkClose(n);
    if (see) {
      return see;
    }
  }
  return choice(legalMoves());
}
