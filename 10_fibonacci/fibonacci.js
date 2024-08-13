const fibonacci = function (num) {
  num = Number(num);
  count = 0;
  if (Number.isNaN(num) || num < 0) {
    return false;
  }
  
  let firstPrev = 1;
  let secondPrev = 0;

  for (let i = 2; i <= num; i++) {
      let current = firstPrev + secondPrev;
      secondPrev = firstPrev;
      firstPrev = current;
  }

  return firstPrev;
}
console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
