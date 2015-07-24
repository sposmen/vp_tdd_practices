/**
 * Created by SPOSMEN on 7/9/15.
 */

ArabicToRomanConverter = require("../../../lib/ArabicToRomanConverter.class");

describe("Validate arabic to roman converter", function () {

  var converter;
  converter = new ArabicToRomanConverter;

  it("with Exception if param is not a number", function () {
    // Arrange

    // Act
    var error = function () {
      return converter.convert("any");
    };

    // Assert
    expect(error).toThrowError(TypeError, "first param must be a Number")
  });

  ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII']
    .forEach(function (v, i) {
      var arabicNumber = i + 1,
        itText = "changing " + arabicNumber + " to " + v;
      it(itText, function () {
        // Arrange
        var converted;
        // Act
        converted = converter.convert(arabicNumber);

        // Assert
        expect(converted).toEqual(v)
      });
    });

  describe("from an external resource", function(){
    ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII']
      .forEach(function (v, i) {
        var arabicNumber = i + 1,
          itText = "changing " + arabicNumber + " to " + v;
        it(itText, function () {
          // Arrange
          var converted;
          // Act
          converted = converter.convertByString(arabicNumber);

          // Assert
          expect(converted).toEqual(v)
        });
      });
  })

});