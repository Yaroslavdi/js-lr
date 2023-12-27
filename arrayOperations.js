const _ = require('lodash');

function sum(numbers) {
  return _.sum(numbers);
}

function multiplyByTwo(numbers) {
  return _.map(numbers, (num) => num * 2);
}

module.exports = {
  sum,
  multiplyByTwo,
};
