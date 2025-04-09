const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  }, 1);
};

const power = function(b, p) {
	return b ** p; // or Math.pow(b, p) to raise b to the power of p
};

const factorial = function(n) {
	if (n === 0) {
    return 1; // 0! = 1
  }
  return n * factorial(n - 1); // n! = n * (n-1)!
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
