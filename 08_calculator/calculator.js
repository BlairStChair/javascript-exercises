const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arrayToPass) {
  const sumOfAllItems = arrayToPass.reduce((total, currentItem) => {
    
  return total + currentItem;
}, 0);
  return sumOfAllItems;
}

const multiply = function(arrayToPass) {
  const multiplyAllItems = arrayToPass.reduce((total, currentItem) => {
    
    return total * currentItem;
  }, 1);
    return multiplyAllItems;
};

const power = function(a, b) {
	const powerAToB = a ** b;
  return powerAToB;
};

const factorial = function(a) {
	let factoriall = 1;
	for(let i = a; i > 0; i--){
    factoriall *= i;
  }
  return factoriall;
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
