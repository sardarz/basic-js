const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, counter = 1, levels = []) {
    levels.push(counter)
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        this.calculateDepth(arr[i], counter + 1, levels);
      }
    }
    return Math.max(...levels);
    }
};