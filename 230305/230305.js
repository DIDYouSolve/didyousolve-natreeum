function solution(board) {
  const col = board.length;
  const row = board[0].length;
  if (col == 1 || row == 1) return 1;
  // 가장 긴 변의 길이 변수를 선언한다
  let maxLength = 0;

  for (let i = 1; i < col; i++) {
    for (let j = 1; j < row; j++) {
      // 주어진 board배열의 요소를 돌면서 0인지 아닌지 판별
      if (board[i][j] === 0) continue;
      // 0이 아닌경우
      const u = board[i - 1][j];
      const l = board[i][j - 1];
      const lu = board[i - 1][j - 1];
      // 위, 왼쪽, 왼쪽 위 의 요소 중 최소값을 구하고, 그 최소값에 1을 더하면 해당 위치의 값이 된다.
      board[i][j] = Math.min(u, l, lu) + 1;
      // 해당 위치의 값과 가장 긴 변의 길이를 비교해서 할당한다.
      if (maxLength < board[i][j]) maxLength = board[i][j];
    }
  }
  // 가장 긴 변의 길이^2 가 답이다.
  return maxLength * maxLength;
}

const board = [
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 1, 0],
];
console.log(solution(board));
