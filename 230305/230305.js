function solution(board) {
  const col = board.length;
  const row = board[0].length;
  if (col == 1 || row == 1) return 1;
  let maxLength = 0;

  for (let i = 1; i < col; i++) {
    for (let j = 1; j < row; j++) {
      if (board[i][j] === 0) continue;
      const u = board[i - 1][j];
      const l = board[i][j - 1];
      const lu = board[i - 1][j - 1];
      board[i][j] = Math.min(u, l, lu) + 1;
      if (maxLength < board[i][j]) maxLength = board[i][j];
    }
  }
  return maxLength * maxLength;
}

const board = [
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 1, 0],
];
console.log(solution(board));
