function solution(food) {
  let front = [];
  let back = [];
  for (let i = 1; i < food.length; i++) {
    if (food[i] % 2 == 1) food[i]--;
    for (let j = 0; j < food[i] / 2; j++) {
      front.push(i);
      back.unshift(i);
    }
  }
  var answer = `${front.join('')}0${back.join('')}`;
  return answer;
}

const arr = [1, 10, 10, 10];
console.log(solution(arr));
