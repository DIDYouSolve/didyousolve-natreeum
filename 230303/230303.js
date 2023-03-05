function solution(number, k) {
  const stack = [number[0]];
  for (let i = 1; i < number.length; i++) {
    while (k != 0 && stack[stack.length - 1] < number[i]) {
      stack.pop();
      k--;
    }
    stack.push(number[i]);
  }
  stack.splice(stack.length - k, k);
  return stack.join('');
}

const number = '4177252841';
const k = 4;
console.log(solution(number, k));
