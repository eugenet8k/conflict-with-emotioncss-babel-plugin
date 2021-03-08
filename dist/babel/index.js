"use strict";

var _myComponent = require("./my-component");

_myComponent.$imports.$add("myResult", "./my-component", "myResult", _myComponent.myResult);

_myComponent.$imports.$mock({
  "./my-dependency": {
    myFunction: () => "Hello from mocked World"
  }
});

console.log((0, _myComponent.myResult)());