const CustomError = require('../extensions/custom-error');

module.exports = function countCats(arr) {
  let counter = 0;
  for (let x of arr) {
    for (let y of x) {
      if (y === "^^") counter++;
    }
  }
  return counter;
};
