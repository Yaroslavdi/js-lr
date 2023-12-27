const { sum, multiplyByTwo } = require('./arrayOperations');

const numbers = [1, 2, 3, 4, 5];

function main() {
  const totalSum = sum(numbers);
  const multipliedArray = multiplyByTwo(numbers);

  console.log('Original array:', numbers);
  console.log('Sum of numbers:', totalSum);
  console.log('Array multiplied by two:', multipliedArray);
}

main();
