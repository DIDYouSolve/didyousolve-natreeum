function solution(s) {
  let answer = 0;
  function checkBrackets(string) {
    const stack = [];
    const openB = ['(', '{', '['];
    const closeB = [')', '}', ']'];
    for (let i of string) {
      if (openB.includes(i)) {
        stack.push(i);
      } else {
        if (openB.indexOf(stack.pop()) !== closeB.indexOf(i)) {
          return false;
        }
      }
    }
    if (stack.length == 0) return true;
    else return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (checkBrackets(s)) answer++;
    const newString = s.split('');
    newString.push(newString[0]);
    newString.shift();
    s = newString.join('');
  }

  return answer;
}

const input = '[';
console.log(solution(input));
