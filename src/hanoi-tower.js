const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(dN, tS) {
  const turns = 2 ** dN - 1;
  const seconds = Math.floor(turns * 3600 / tS);
  return {
    turns,
    seconds
  }
};
