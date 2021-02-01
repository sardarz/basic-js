const CustomError = require("../extensions/custom-error");



module.exports = function dateSample(int) {
  if (typeof int !== "string") return false;
  const MODERN_ACTIVITY= 15; 
  const HALF_LIFE_PERIOD= 5730;
  const LOG_OF_TWO = 0.693;
  const K = LOG_OF_TWO / HALF_LIFE_PERIOD
  


  let number = parseFloat(int);
  if (number <= 0) return false;
  if (number > MODERN_ACTIVITY) return false;
  if (!isFinite(number)) return false;
  return Math.ceil(Math.log(MODERN_ACTIVITY / number) / K);

};
