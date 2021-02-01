const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  if (!Array.isArray(array)) throw new Error();
  if (!array.length) return [];
  let arr = array.slice();

  let res = []
  for (let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case "--double-next":
        if (i < arr.length - 1) {
          res.push(arr[i + 1]) ;
        }
        break;
      case "--double-prev":
        if (i > 0 && arr[i - 2] !== "--discard-next") {
          res.push(arr[i - 1]);
        }
        break;
      case "--discard-next":
        if (i < arr.length - 1) {
          i++;
        }
        break;
      case "--discard-prev":
        if (i > 0 && arr[i - 2] !== "--discard-next") {
          res.pop();
        }
        break;
      default: res.push(arr[i]);
    }
  }
  return res;
};
