function solution(n) {
  const converted = n.toString(3);
  let reversed = '';
  for (let i = converted.length; i !== 0; i--) {
    reversed += converted[i - 1];
  }
  const answer = parseInt(reversed, 3);
  return answer;
}
