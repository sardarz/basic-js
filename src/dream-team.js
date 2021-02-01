const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) return false;
  let names = [];
  for (let i of arr) {
    if (typeof i === "string" && i.trim() !== "") names.push(i);
  }

  let res = [];
  for (let name of names) {
    res.push(name.trim()[0]);
  }
  return res.map(x => x.toUpperCase()).sort().join``;
}
