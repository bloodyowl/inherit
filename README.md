# inherit

inherit from an object

[![browser support](https://ci.testling.com/bloodyowl/inherit.png)](https://ci.testling.com/bloodyowl/inherit)

[![Build Status](https://travis-ci.org/bloodyowl/inherit.svg)](https://travis-ci.org/bloodyowl/inherit)

## install

```sh
$ npm install bloody-inherit
```

## require

```javascript
var inherit = require("bloody-inherit")
```

## api

### inherit(proto) > object

creates an object that inherits from `proto` using prototypal inhertance
(uses `Object.create` when available).

## example

```javascript
var proto = {
  value : 1
}
var object = inherit(proto)
object.value // 1
proto.value = 2
object.value // 2
```
