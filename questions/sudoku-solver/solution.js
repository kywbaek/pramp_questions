function getCandidates(board, row, col) {
  const candidates = [];
  for (let num=1;num<=9;num++) {
    num = num.toString();
    let collision = false;
    for (let i=0;i<9;i++) {
      if ((board[row][i] === num) || (board[i][col] === num) || (board[row-(row%3)+Math.floor(i/3)][col-(col%3)+(i%3)] === num)) {
        collision = true;
        break;
      }
    };
    if (!collision) {
      candidates.push(num);
    }
  }
  return candidates;
}

function sudokuSolve(board) {
  let row = -1;
  let col = -1;
  let candidates = null;

  for (let r=0;r<9;r++) {
    for (let c=0;c<9;c++) {
      if (board[r][c] === '.') {
        let newCandidates = getCandidates(board, r, c);
        if ((candidates === null) || (newCandidates.length < candidates.length)) {
          candidates = newCandidates;
          row = r;
          col = c;
        }
      }
    }
  }
  if (candidates === []) {
    return false;
  }
  if (candidates === null) {
    return true;
  }
  for (let i=0;i<candidates.length;i++) {
    board[row][col] = candidates[i];
    if (sudokuSolve(board)) {
      return true;
    }
    board[row][col] = '.';
  }
  return false;
}

console.log(sudokuSolve(
[[".","8","9",".","4",".","6",".","5"],[".","7",".",".",".","8",".","4","1"],["5","6",".","9",".",".",".",".","8"],[".",".",".","7",".","5",".","9","."],[".","9",".","4",".","1",".","5","."],[".","3",".","9",".","6",".","1","."],["8",".",".",".",".",".",".",".","7"],[".","2",".","8",".",".",".","6","."],[".",".","6",".","7",".",".","8","."]]))
