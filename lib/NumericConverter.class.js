/**
 * @class
 */
function NumericConverter() {

}

/**
 *
 * @param {number} num
 * @param {string} convertionType
 * @returns {string}
 */
NumericConverter.prototype.convert = function (num, convertionType) {

  return this.arabicConverter.convert(num);
};

/**
 *
 * @type {null|ArabicToRomanConverter}
 */
NumericConverter.prototype.arabicConverter = null;

/**
 *
 * @param {ArabicToRomanConverter} anArabicConverter
 */
NumericConverter.prototype.setArabicConverter = function(anArabicConverter){
  this.arabicConverter = anArabicConverter;
};


module.exports = NumericConverter;