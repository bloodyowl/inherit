var tape = require("tape")
var isNative = require("../lib/isNative")

tape("isNative", function(test){
  function foo(){}
  foo.toString = function(){return toString.toString()}
  test.equal(isNative(foo), false)
  test.equal(isNative(Object.prototype.hasOwnProperty), true)
  test.end()
})
