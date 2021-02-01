const CustomError = require("../extensions/custom-error");

const chainMaker = {
  res: [],
  getLength() {
    this.res.length;
  },
  addLink(value) {
    if (value === undefined) value = "";
    else value = value
    this.res.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position)) {
      this.res = [];
      throw new Error()
    };
    this.res.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.res.reverse();
    return this;
  },
  finishChain() {
    let str = this.res.join("~~");
    this.res = [];
    return str;
  }
};

module.exports = chainMaker;
