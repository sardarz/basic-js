const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type = true) {
    this.alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.reversed = !type;
  }

  encrypt(str, key) {
    if (!str || !key) throw new Error();
    str = str.toUpperCase();
    key = key.toUpperCase();
    let shifted = [];
    let counter = 0;
    let strCounter = 0;
    while (shifted.length < str.length) {
      if (this.alph.includes(str[strCounter])) {
        let shiftBy = this.alph.indexOf(key[counter++]);
        let idx = this.alph.indexOf(str[strCounter++])
        shifted.push(this.alph[idx + shiftBy])
        if (counter >= key.length) counter = 0;
      } else {
        shifted.push(str[strCounter++])
      }
    }
    return this.reversed ? shifted.slice(0).reverse().join`` : shifted.join``;
  }

  decrypt(str, key) {
    if (!str || !key) throw new Error();
    str = str.toUpperCase();
    key = key.toUpperCase();
    let shifted = [];
    let counter = 0;
    let strCounter = 0;
    while (shifted.length < str.length) {
      if (this.alph.includes(str[strCounter])) {
        let shiftBy = this.alph.indexOf(key[counter++]);
        let idx = this.alph.lastIndexOf(str[strCounter++])
        shifted.push(this.alph[idx - shiftBy])
        if (counter >= key.length) counter = 0;
      } else {
        shifted.push(str[strCounter++])
      }
    }
    return this.reversed ? shifted.slice(0).reverse().join`` : shifted.join``;
  }
}

module.exports = VigenereCipheringMachine;
