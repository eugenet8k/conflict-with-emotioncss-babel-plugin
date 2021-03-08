@robertknight thanks for the suggestion of preparing the minimum reproducible env. I got really deep into building two examples, where only `babel` is used, or `babel` + `webpack`. I was able to reproduce the mentioned error with  the `webpack` based build, but comparing to the result of cleaner `babel` build perhaps might help to identify the problem.

My repo is https://github.com/eugenet8k/conflict-with-emotioncss-babel-plugin

To test `babel` based scenario:

```
npm install
npm run build:babel
npm run start:babel
```

we get:
```
> conflict-with-emotioncss-babel-plugin@1.0.0 start:babel
> node dist/babel/index.js

Hello from mocked World
```

Assuming the mocked function (https://github.com/eugenet8k/conflict-with-emotioncss-babel-plugin/blob/master/src/index.js)

With `webpack` + `babel` build I get a similar to originally posted error:

```
npm install
npm run build:webpack
npm run start:webpack
```

we get:
```
> conflict-with-emotioncss-babel-plugin@1.0.0 start:webpack
> node dist/webpack/main.js

/Users/user/Git/conflict-with-emotioncss-babel-plugin/dist/webpack/main.js:17
$imports.$add("_styled", "@emotion/styled/base", "default", _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default);
^

ReferenceError: $imports is not defined
    at Object../src/flex.js (/Users/user/Git/conflict-with-emotioncss-babel-plugin/dist/webpack/main.js:17:1)
    at __webpack_require__ (/Users/user/Git/conflict-with-emotioncss-babel-plugin/dist/webpack/main.js:170:41)
```

So the built file `main.js` has all my components together and here is the line with error https://github.com/eugenet8k/conflict-with-emotioncss-babel-plugin/blob/master/dist/webpack/main.js#L17

```
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js");

$imports.$add("_styled", "@emotion/styled/base", "default", _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default);

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

const Flex = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.default)("div",  false ? 0 : {
  target: "e1o54d4y0",
  label: "Flex"
})
```

we see `$imports.$add` without `$imports` being defined. So looking at the same built file with babel only https://github.com/eugenet8k/conflict-with-emotioncss-babel-plugin/blob/master/dist/babel/flex.js:

```
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

const Flex = (0, _base.default)("div", process.env.NODE_ENV === "production" ? {
  target: "e1o54d4y0"
}
```

I see that there are not `$import` mocks generated at all! Could that be the reason for the `webpack` build failure?