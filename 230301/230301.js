function solution(price, money, count) {
  let sum = 0;
  for (let i = 0; i < count; i++) {
    sum += price * (i + 1);
  }
  console.log(sum);
  if (sum > money) return sum - money;
  else return 0;
}
