/**
 * @class
 */
function ArabicToBinaryConverter() {

}

/**
 *
 * @param {number} arabicNum
 * @returns {string}
 */
ArabicToBinaryConverter.prototype.convert = function (arabicNum) {
  var result = '';

  if (isNaN(arabicNum)) {
    throw new TypeError('first param must be a Number');
  }

  return Number(arabicNum).toString(2);
};


module.exports = ArabicToBinaryConverter;