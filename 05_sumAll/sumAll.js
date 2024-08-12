const sumAll = function (num1, num2) {
  let sum = 0;
  if (
    Number.isInteger(num1) &&
    num1 >= 0 &&
    Number.isInteger(num2) &&
    num2 >= 0
  ) {
    
    if (num1 > num2) {
      let temp = num1;
      num1 = num2;
      num2 = temp;
    }
    for (let i = num1; i <= num2; i++) {
      sum += i;
    }
  } else {
    return "ERROR";
  }
  return sum;
};

console.log(sumAll(-10, 1));

// Do not edit below this line
module.exports = sumAll;
