/**
 * @class
 */
function ArabicToRomanConverter() {

}

/**
 *
 * @param {number} arabicNum
 * @returns {string}
 */
ArabicToRomanConverter.prototype.convert = function (arabicNum) {
  var result = '';

  if (isNaN(arabicNum)) {
    throw new TypeError('first param must be a Number');
  }

  if (arabicNum >= 4 && arabicNum <= 8) {
    result = 'V';
    arabicNum = arabicNum - 5
  }

  if (arabicNum >= 9 && arabicNum <= 13) {
    result = 'X';
    arabicNum = arabicNum - 10
  }

  if (arabicNum < 0) {
    result = 'I' + result
  }

  result += new Array(arabicNum + 1).join('I');

  return result;
};


/**
 *
 * @type {string[]}
 */
ArabicToRomanConverter.prototype.keys = [
  "", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
  "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
  "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"
];

/**
 *
 * @param {number} arabicNum
 * @returns {string}
 */
ArabicToRomanConverter.prototype.convertByString = function (arabicNum) {
  if (isNaN(arabicNum)) {
    throw new TypeError('first param must be a Number');
  }
  var digits = String(+arabicNum).split(""), result = "", i = 3;
  while (i--) result = (this.keys[+digits.pop() + (i * 10)] || "") + result;
  return Array(+digits.join("") + 1).join("M") + result;
};


module.exports = ArabicToRomanConverter;