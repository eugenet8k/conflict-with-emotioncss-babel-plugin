exports.id = "npm.babel-plugin-mockable-imports";
exports.ids = ["npm.babel-plugin-mockable-imports"];
exports.modules = {

/***/ "./node_modules/babel-plugin-mockable-imports/lib/helpers.js":
/*!*******************************************************************!*\
  !*** ./node_modules/babel-plugin-mockable-imports/lib/helpers.js ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MockingError =
/*#__PURE__*/
function (_Error) {
  _inheritsLoose(MockingError, _Error);

  function MockingError(msg) {
    return _Error.call(this, msg) || this;
  }

  return MockingError;
}(_wrapNativeSuper(Error));
/**
 * Object exposed by modules that have been processed by this plugin.
 *
 * The processed modules create an instance of `ImportMap` and register
 * mockable imports using `$add`. Test modules import the `ImportMap` from
 * the module under test and call `$mock` and `$restore` methods to mock
 * dependencies.
 */


var ImportMap =
/*#__PURE__*/
function () {
  function ImportMap(imports) {
    if (imports === void 0) {
      imports = {};
    }

    /**
     * A mapping of import local name (or alias) to metadata about where
     * the import came from.
     */
    this.$meta = imports;
    this.$restore();
  }
  /**
   * Register an import.
   *
   * The `value` of the import will become available as a property named
   * `alias` on this instance.
   */


  var _proto = ImportMap.prototype;

  _proto.$add = function $add(alias, source, symbol, value) {
    if (isSpecialMethod(alias)) {
      return;
    }

    this.$meta[alias] = [source, symbol, value];
    this[alias] = value;
  }
  /**
   * Replace true imports with mocks.
   *
   * If mocks are already active when this is called, the mocks in `imports`
   * are merged with the active mocks.
   *
   * @param {Object|Function} imports -
   *   An object whose keys are file paths (as used by the module being
   *   tested, *not* the test module) and values are objects mapping export
   *   names to mock values. As a convenience, the value can also be a
   *   function in which case it is treated as a mock for the module's
   *   default export.
   *
   *   Alternatively this can be a function which accepts
   *   (source, symbol, value) arguments and returns either a mock for
   *   that import or `null`/`undefined` to avoid mocking that import.
   *   This second form is useful for mocking many imports at once.
   */
  ;

  _proto.$mock = function $mock(imports) {
    var _this = this;

    if (typeof imports === "function") {
      var mocks = {};
      Object.keys(this.$meta).forEach(function (alias) {
        var _this$$meta$alias = _this.$meta[alias],
            source = _this$$meta$alias[0],
            symbol = _this$$meta$alias[1],
            value = _this$$meta$alias[2];
        var mock = imports(source, symbol, value);

        if (mock != null) {
          mocks[source] = mocks[source] || {};
          mocks[source][symbol] = mock;
        }
      });
      this.$mock(mocks);
      return;
    }

    Object.keys(imports).forEach(function (source) {
      var sourceImports = imports[source];
      var esImports = sourceImports;

      if (typeof esImports === "function") {
        esImports = {
          "default": esImports
        };
      } // Handle namespace ES imports (`import * as foo from "foo"`).


      var namespaceAliases = Object.keys(_this.$meta).filter(function (alias) {
        var _this$$meta$alias2 = _this.$meta[alias],
            source_ = _this$$meta$alias2[0],
            symbol_ = _this$$meta$alias2[1];
        return source_ === source && symbol_ === "*";
      });
      namespaceAliases.forEach(function (alias) {
        _this[alias] = esImports;
      }); // Handle CJS imports (`var foo = require("bar")`).

      var cjsAliases = Object.keys(_this.$meta).filter(function (alias) {
        var _this$$meta$alias3 = _this.$meta[alias],
            source_ = _this$$meta$alias3[0],
            symbol_ = _this$$meta$alias3[1];
        return source_ === source && symbol_ === "<CJS>";
      });
      cjsAliases.forEach(function (alias) {
        _this[alias] = sourceImports;
      }); // Handle named ES imports (`import { foo } from "..."`) or
      // destructured CJS imports (`var { foo } = require("...")`).

      Object.keys(esImports).forEach(function (symbol) {
        var aliases = Object.keys(_this.$meta).filter(function (alias) {
          var _this$$meta$alias4 = _this.$meta[alias],
              source_ = _this$$meta$alias4[0],
              symbol_ = _this$$meta$alias4[1];
          return source_ === source && symbol_ === symbol;
        });

        if (aliases.length === 0 && namespaceAliases.length === 0 && cjsAliases.length === 0) {
          throw new Error("Module does not import \"" + symbol + "\" from \"" + source + "\"");
        }

        aliases.forEach(function (alias) {
          _this[alias] = esImports[symbol];
        });
      });
    });
  }
  /**
   * Replace mocks with the original imports.
   *
   * If called with no arguments, all mocks are undone. To restore specific
   * mocks, pass an object whose keys are module paths and values are either
   * a boolean indicating whether to restore all mocks for that module, or an
   * object whose keys are symbols and values are booleans indicating whether
   * to restore mocks for the specific symbol.
   *
   * In other words, if an argument is passed, it has the same shape as the
   * argument to `$mock`, but the values are booleans indicating whether to
   * restore a mock rather than mock values.
   *
   * This function does nothing if called when no mocks are active. This enables
   * `$restore()` to be called unconditionally in a test cleanup function even
   * if the set of symbols that are mocked varies depending on the test.
   *
   * @param
   */
  ;

  _proto.$restore = function $restore(imports) {
    var _this2 = this;

    Object.keys(this.$meta).forEach(function (alias) {
      if (isSpecialMethod(alias)) {
        // Skip imports which conflict with special methods.
        return;
      }

      var _this2$$meta$alias = _this2.$meta[alias],
          source = _this2$$meta$alias[0],
          symbol = _this2$$meta$alias[1],
          value = _this2$$meta$alias[2];
      var restoreMock = // `$restore()` restores all mocks.
      typeof imports === "undefined" || // `$restore({ './module': true })` restores all mocks for './module'
      imports[source] === true || // `$restore({ './module': { foo: true }})` restores mock for `foo` from
      // './module'.
      typeof imports[source] === "object" && imports[source][symbol] === true;

      if (restoreMock) {
        _this2[alias] = value;
      }
    });
  };

  return ImportMap;
}();

function isSpecialMethod(name) {
  return ImportMap.prototype.hasOwnProperty(name);
}

module.exports = {
  ImportMap: ImportMap,
  MockingError: MockingError
};

/***/ })

};
;