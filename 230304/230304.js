function isPrime(num) {
  if (num === 1 || !num) return false;
  if (num === 2) {
    return true;
  }
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function solution(n, k) {
  let answer = 0;
  const converted = n.toString(k);
  console.log(converted);
  let num = '';
  for (let i of converted) {
    if (i === '0') {
      const integer = parseInt(num);
      if (isPrime(integer)) {
        answer++;
      }
      num = '';
    } else num += i;
  }
  const integer = parseInt(num);
  if (isPrime(integer)) {
    answer++;
  }
  return answer;
}

const n = 110011;
const k = 10;
const res = solution(n, k);
console.log(res);
