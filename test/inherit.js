var tape = require("tape")
var inherit = require("..")

tape("inherit", function(test){
  test.equal(inherit({foo:1}).foo, 1)
  test.equal(inherit({foo:1}).hasOwnProperty("foo"), false)
  var object = {foo:1}
  var inheriting = inherit(object)
  test.equal(inheriting.foo, 1)
  test.equal(inheriting.hasOwnProperty("foo"), false)
  object.foo = 2
  test.equal(inheriting.foo, 2)
  test.end()
})
