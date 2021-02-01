const CustomError = require("../extensions/custom-error");

module.exports = function repeater(string, options) {
  let str = String(string)
  let repeatTimes = options.repeatTimes || 0;
  let separator = options.separator || "+";
  let addition = String(options.addition) || "";
  let additionSeparator = options.additionSeparator || "|"
  let additionRepeatTimes = options.additionRepeatTimes || 0;
  if (repeatTimes === 0) {
    return str + addition
  }

  let res = [];

  for (let i = 0; i < repeatTimes; i++) {
    let innerStr = str;
    let additionStr = [];
    for (let y = 0; y < additionRepeatTimes; y++) {
      additionStr.push(addition);
    }
    if (additionStr) {
      res.push(innerStr + additionStr.join(additionSeparator));
    }
  }
  return res.join(separator);
};
  