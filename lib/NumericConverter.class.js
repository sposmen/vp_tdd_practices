/**
 * @class
 */

var NumericSystem = require('./NumericSystem').NumericSystem;
var NumericSystemNotDefinedError = require('./NumericSystem').NumericSystemNotDefinedError;


function NumericConverter() {

}

/**
 *
 * @param {number} num
 * @param {string} convertionType
 * @returns {string}
 */
NumericConverter.prototype.convert = function (num, convertionType) {

  switch (convertionType){
    case NumericSystem.ROMAN:
      return this.arabicToRomanConverter.convert(num);
      break;
    case NumericSystem.BINARY:
      return this.arabicToBinaryConverter.convert(num);
      break;
  }

  throw new NumericSystemNotDefinedError('no NumericSystem identified');
};

/**
 *
 * @type {null|ArabicToRomanConverter}
 */
NumericConverter.prototype.arabicToRomanConverter = null;

/**
 *
 * @type {null|ArabicToRomanConverter}
 */
NumericConverter.prototype.arabicToBinaryConverter = null;

/**
 *
 * @param {ArabicToRomanConverter} anArabicToRomanConverter
 */
NumericConverter.prototype.setArabicToRomanConverter = function(anArabicToRomanConverter){
  this.arabicToRomanConverter = anArabicToRomanConverter;
};

/**
 *
 * @param {ArabicToRomanConverter} anArabicToBinaryConverter
 */
NumericConverter.prototype.setArabicToBinaryConverter = function(anArabicToBinaryConverter){
  this.arabicToBinaryConverter = anArabicToBinaryConverter;
};


module.exports = NumericConverter;