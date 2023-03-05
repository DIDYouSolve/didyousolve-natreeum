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
  const splited = converted.split('0');
  for (let i of splited) {
    if (i.length != 0 && isPrime(Number(i))) answer++;
  }
  return answer;
}

const n = 110011;
const k = 10;
const res = solution(n, k);
console.log(res);
