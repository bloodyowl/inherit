var fnToString = Function.prototype.toString
var isNativeRE = RegExp('^' +
    fnToString.call(toString)
      // escape RegExp special chars
      .replace(/([.*+?^=!:$(){}|[\]\/\\])/g, "\\$1")
      .replace(/toString/, ".*?")
  )


if(Object.create && isNativeRE.test(Object.create)) {
  module.exports = function(object){
    return Object.create(object)
  }
} else {
  module.exports = function(object){
    function F(){}
    F.prototype = object
    return new F()
  }
}
