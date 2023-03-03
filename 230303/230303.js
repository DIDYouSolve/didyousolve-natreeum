function solution(number, k) {
  const answerArr = [];
  const sorted = number.split('').map((e) => Number(e));
  const newArr = [...sorted];
  sorted.sort((a, b) => a - b);
  const minimums = sorted.splice(0, k);
  const idx = [];
  for (let i = 0; i < newArr.length; i++) {
    if (minimums.includes(newArr[i])) {
      idx.push(i);
      minimums.splice(minimums.indexOf(newArr[i]), 1);
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    if (!idx.includes(i)) {
      answerArr.push(newArr[i]);
    }
  }
  return answerArr.join('');
}

const number = '1231234';
const k = 3;
console.log(solution(number, k));
