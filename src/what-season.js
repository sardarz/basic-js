const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  console.log("date: " + date);

  if (!isValidDate(date)) throw new Error()

  function getSeason(m) {
    if (m >= 2 && m <= 4) return "spring";
    if (m >= 5 && m <= 7) return "summer";
    if (m >= 8 && m <= 10) return "autumn";
    return "winter"
  }

  function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
  }

  return getSeason(date.getMonth())

};




