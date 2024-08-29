const add = function(num1, num2) {
	return num1+num2;

};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(array) {
	return array.reduce((total,num)=> total+num, 0);
  
};

const multiply = function(array) {
  return array.reduce((product, current)=> product * current)
};

const power = function(num1, num2) {
	return num1**num2;
};

const factorial = function(n) {
	if (n === 0) return 1;
  let factor=1;

  for (let i=n; i>0; i--){
      factor *= i;
  }
  return factor;
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
