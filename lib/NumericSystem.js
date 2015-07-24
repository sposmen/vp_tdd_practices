function NumericSystemNotDefinedError(msg) {
  this.message = msg;
  this.name = "NumericSystemNotDefinedError";
}

NumericSystemNotDefinedError.prototype.__proto__ = Error.prototype;


module.exports = {

  NumericSystem: { BINARY: 1, ROMAN: 2 },

  NumericSystemNotDefinedError: NumericSystemNotDefinedError

};