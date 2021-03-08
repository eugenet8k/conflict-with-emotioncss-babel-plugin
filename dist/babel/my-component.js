"use strict";

exports.__esModule = true;
exports.$imports = exports.myResult = void 0;

var _helpers = require("babel-plugin-mockable-imports/lib/helpers");

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _react = _interopRequireDefault(require("react"));

var _flex = _interopRequireDefault(require("./flex"));

var _myDependency = require("./my-dependency");

var _jsxRuntime = require("@emotion/react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

const $imports = new _helpers.ImportMap();
exports.$imports = $imports;
$imports.$add("_styled", "@emotion/styled/base", "default", _base.default);
$imports.$add("React", "react", "default", _react.default);
$imports.$add("Flex", "./flex", "default", _flex.default);
$imports.$add("_jsx", "@emotion/react/jsx-runtime", "jsx", _jsxRuntime.jsx);
$imports.$add("myFunction", "./my-dependency", "myFunction", _myDependency.myFunction);

const Button = ({
  css,
  ...props
}) => (0, _jsxRuntime.jsx)("button", {
  css: ["margin-top:0;", css, process.env.NODE_ENV === "production" ? "" : ";label:Button;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9teS1jb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSzRDIiwiZmlsZSI6Ii4uLy4uL3NyYy9teS1jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCBGbGV4IGZyb20gJy4vZmxleCdcbmltcG9ydCB7IG15RnVuY3Rpb24gfSBmcm9tIFwiLi9teS1kZXBlbmRlbmN5XCI7XG5cbmNvbnN0IEJ1dHRvbiA9ICh7Y3NzLCAuLi5wcm9wc30pID0+IDxidXR0b24gY3NzPXtbe21hcmdpblRvcDogMH0sIGNzc119IHsuLi5wcm9wc30gLz5cblxuY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQucCh7d29yZEJyZWFrOiAnYnJlYWstd29yZCd9KVxuXG5jb25zdCBQYW5lbCA9IChwcm9wcykgPT4gPEZsZXggY3NzPXt7YmFja2dyb3VuZENvbG9yOiAncmVkJ319IHsuLi5wcm9wc30+XG4gIDxEZXNjcmlwdGlvbj5Tb21lIHRleHQ8L0Rlc2NyaXB0aW9uPlxuICA8QnV0dG9uIGNzcz17e2JhY2tncm91bmRDb2xvcjogJ2JsdWUnfX0vPlxuPC9GbGV4PlxuXG5leHBvcnQgY29uc3QgbXlSZXN1bHQgPSAoKSA9PiBteUZ1bmN0aW9uKCk7XG4iXX0= */"],
  ...props
});

const Description = (0, _base.default)("p", process.env.NODE_ENV === "production" ? {
  target: "e1u9koq70"
} : {
  target: "e1u9koq70",
  label: "Description"
})(process.env.NODE_ENV === "production" ? {
  name: "1sdjnkx",
  styles: "word-break:break-word"
} : {
  name: "1sdjnkx",
  styles: "word-break:break-word",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9teS1jb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT29CIiwiZmlsZSI6Ii4uLy4uL3NyYy9teS1jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCBGbGV4IGZyb20gJy4vZmxleCdcbmltcG9ydCB7IG15RnVuY3Rpb24gfSBmcm9tIFwiLi9teS1kZXBlbmRlbmN5XCI7XG5cbmNvbnN0IEJ1dHRvbiA9ICh7Y3NzLCAuLi5wcm9wc30pID0+IDxidXR0b24gY3NzPXtbe21hcmdpblRvcDogMH0sIGNzc119IHsuLi5wcm9wc30gLz5cblxuY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQucCh7d29yZEJyZWFrOiAnYnJlYWstd29yZCd9KVxuXG5jb25zdCBQYW5lbCA9IChwcm9wcykgPT4gPEZsZXggY3NzPXt7YmFja2dyb3VuZENvbG9yOiAncmVkJ319IHsuLi5wcm9wc30+XG4gIDxEZXNjcmlwdGlvbj5Tb21lIHRleHQ8L0Rlc2NyaXB0aW9uPlxuICA8QnV0dG9uIGNzcz17e2JhY2tncm91bmRDb2xvcjogJ2JsdWUnfX0vPlxuPC9GbGV4PlxuXG5leHBvcnQgY29uc3QgbXlSZXN1bHQgPSAoKSA9PiBteUZ1bmN0aW9uKCk7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

var _ref = process.env.NODE_ENV === "production" ? {
  name: "1n3rzf3",
  styles: "background-color:red"
} : {
  name: "19imvin-Panel",
  styles: "background-color:red;label:Panel;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9teS1jb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUytCIiwiZmlsZSI6Ii4uLy4uL3NyYy9teS1jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCBGbGV4IGZyb20gJy4vZmxleCdcbmltcG9ydCB7IG15RnVuY3Rpb24gfSBmcm9tIFwiLi9teS1kZXBlbmRlbmN5XCI7XG5cbmNvbnN0IEJ1dHRvbiA9ICh7Y3NzLCAuLi5wcm9wc30pID0+IDxidXR0b24gY3NzPXtbe21hcmdpblRvcDogMH0sIGNzc119IHsuLi5wcm9wc30gLz5cblxuY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQucCh7d29yZEJyZWFrOiAnYnJlYWstd29yZCd9KVxuXG5jb25zdCBQYW5lbCA9IChwcm9wcykgPT4gPEZsZXggY3NzPXt7YmFja2dyb3VuZENvbG9yOiAncmVkJ319IHsuLi5wcm9wc30+XG4gIDxEZXNjcmlwdGlvbj5Tb21lIHRleHQ8L0Rlc2NyaXB0aW9uPlxuICA8QnV0dG9uIGNzcz17e2JhY2tncm91bmRDb2xvcjogJ2JsdWUnfX0vPlxuPC9GbGV4PlxuXG5leHBvcnQgY29uc3QgbXlSZXN1bHQgPSAoKSA9PiBteUZ1bmN0aW9uKCk7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "zanegv",
  styles: "background-color:blue"
} : {
  name: "1jqrecu-Panel",
  styles: "background-color:blue;label:Panel;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9teS1jb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV1UiLCJmaWxlIjoiLi4vLi4vc3JjL215LWNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IEZsZXggZnJvbSAnLi9mbGV4J1xuaW1wb3J0IHsgbXlGdW5jdGlvbiB9IGZyb20gXCIuL215LWRlcGVuZGVuY3lcIjtcblxuY29uc3QgQnV0dG9uID0gKHtjc3MsIC4uLnByb3BzfSkgPT4gPGJ1dHRvbiBjc3M9e1t7bWFyZ2luVG9wOiAwfSwgY3NzXX0gey4uLnByb3BzfSAvPlxuXG5jb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5wKHt3b3JkQnJlYWs6ICdicmVhay13b3JkJ30pXG5cbmNvbnN0IFBhbmVsID0gKHByb3BzKSA9PiA8RmxleCBjc3M9e3tiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnfX0gey4uLnByb3BzfT5cbiAgPERlc2NyaXB0aW9uPlNvbWUgdGV4dDwvRGVzY3JpcHRpb24+XG4gIDxCdXR0b24gY3NzPXt7YmFja2dyb3VuZENvbG9yOiAnYmx1ZSd9fS8+XG48L0ZsZXg+XG5cbmV4cG9ydCBjb25zdCBteVJlc3VsdCA9ICgpID0+IG15RnVuY3Rpb24oKTtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

const Panel = props => (0, _jsxRuntime.jsxs)($imports.Flex, {
  css: _ref,
  ...props,
  children: [(0, _jsxRuntime.jsx)(Description, {
    children: "Some text"
  }), (0, _jsxRuntime.jsx)(Button, {
    css: _ref2
  })]
});

const myResult = () => $imports.myFunction();

exports.myResult = myResult;