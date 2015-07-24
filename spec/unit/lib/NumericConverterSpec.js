/**
 * Created by SPOSMEN on 7/9/15.
 */

var NumericConverter = require("../../../lib/NumericConverter.class");
var NumericSystem = require("../../../lib/NumericSystem").NumericSystem;
var NumericSystemNotDefinedError = require("../../../lib/NumericSystem").NumericSystemNotDefinedError;

describe("Validate numeric conversions", function () {
  var numericConverter;

  beforeEach(function() {
    numericConverter = new NumericConverter;
  });

  it("with Exception if no NumericSystem is provided", function () {
    // Arrange

    // Act
    var error = function () {
      return numericConverter.convert(1);
    };

    // Assert
    expect(error).toThrowError(NumericSystemNotDefinedError, "no NumericSystem identified")
  });

  describe("from arabic numbers to roman:", function () {
    var arabicConverter;
    beforeEach(function() {
      arabicConverter = jasmine.createSpyObj('arabicConverter', ['convert']);
    });

    it('1 to I', function () {
      var result;
      // Arrange
      numericConverter.setArabicToRomanConverter(arabicConverter);

      // Stubbing
      arabicConverter.convert.and.returnValue("I");

      // Act
      result = numericConverter.convert(1, NumericSystem.ROMAN);

      // Assert
      expect(arabicConverter.convert).toHaveBeenCalledWith(1);
      expect(result).toBe("I");
    });
  });

  describe("from arabic numbers to binary:", function () {
    var binaryConverter;

    beforeEach(function() {
      binaryConverter = jasmine.createSpyObj('binaryConverter', ['convert']);
    });

    it('1 to 1', function () {
      var result;
      // Arrange
      numericConverter.setArabicToBinaryConverter(binaryConverter);

      // Stubbing
      binaryConverter.convert.and.returnValue("1");

      // Act
      result = numericConverter.convert(1, NumericSystem.BINARY);

      // Assert
      expect(binaryConverter.convert).toHaveBeenCalledWith(1);
      expect(result).toBe("1");
    });

    it('2 to 10', function () {
      var result;
      // Arrange
      numericConverter.setArabicToBinaryConverter(binaryConverter);

      // Stubbing
      binaryConverter.convert.and.returnValue("10");

      // Act
      result = numericConverter.convert(2, NumericSystem.BINARY);

      // Assert
      expect(binaryConverter.convert).toHaveBeenCalledWith(2);
      expect(result).toBe("10");
    });

    it('3 to 11', function () {
      var result;
      // Arrange
      numericConverter.setArabicToBinaryConverter(binaryConverter);

      // Stubbing
      binaryConverter.convert.and.returnValue("11");

      // Act
      result = numericConverter.convert(3, NumericSystem.BINARY);

      // Assert
      expect(binaryConverter.convert).toHaveBeenCalledWith(3);
      expect(result).toBe("11");
    });

    it('4 to 100', function () {
      var result;
      // Arrange
      numericConverter.setArabicToBinaryConverter(binaryConverter);

      // Stubbing
      binaryConverter.convert.and.returnValue("100");

      // Act
      result = numericConverter.convert(4, NumericSystem.BINARY);

      // Assert
      expect(binaryConverter.convert).toHaveBeenCalledWith(4);
      expect(result).toBe("100");
    });
  });

});