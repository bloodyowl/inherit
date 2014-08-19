var isNative = require("./lib/isNative")

if(isNative(Object.create)) {
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
