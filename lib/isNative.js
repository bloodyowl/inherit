var fnToString = Function.prototype.toString
var objectToString = Object.prototype.toString
var isNativeRE = RegExp('^' +
    fnToString.call(toString)
      // escape RegExp special chars
      .replace(/([.*+?^=!:$(){}|[\]\/\\])/g, "\\$1")
      .replace(/toString/, ".*?")
  )

module.exports = function(fn){
  if(objectToString.call(fn) != "[object Function]") {
    return false
  }
  return isNativeRE.test(
    fnToString.call(fn)
  )
}
