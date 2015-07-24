/**
 * Created by SPOSMEN on 7/9/15.
 */

var NumericConverter = require("../../../lib/NumericConverter.class");

describe("Validate numeric conversions", function () {
  var arabicConverter, numericConverter;

  beforeEach(function() {
    arabicConverter = jasmine.createSpyObj('arabicConverter', ['convert']);
    numericConverter = new NumericConverter;
  });

  describe("from arabic numbers to roman:", function () {
    it('1 to I', function () {
      var result;
      // Arrange
      arabicConverter.convert.and.returnValue("I");

      // Act
      numericConverter.setArabicConverter(arabicConverter);
      result = numericConverter.convert(1, 'ROMAN');

      // Assert
      expect(result).toBe("I");
      expect(arabicConverter.convert).toHaveBeenCalledWith(1);
    });
  });

});