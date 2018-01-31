(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("whatwg-fetch"), require("lodash-amd/merge"), require("querystring"));
	else if(typeof define === 'function' && define.amd)
		define(["whatwg-fetch", "lodash-amd/merge", "querystring"], factory);
	else if(typeof exports === 'object')
		exports["listenbrainz"] = factory(require("whatwg-fetch"), require("lodash-amd/merge"), require("querystring"));
	else
		root["listenbrainz"] = factory(root["whatwg-fetch"], root["lodash-amd/merge"], root["querystring"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDefined = isDefined;

function isDefined(value) {
  return typeof value !== 'undefined' && value !== null;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Client = void 0;

var _http = _interopRequireDefault(__webpack_require__(3));

var _interfaces = _interopRequireDefault(__webpack_require__(5));

var _helpers = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Client =
/*#__PURE__*/
function () {
  function Client(options) {
    _classCallCheck(this, Client);

    options = (0, _helpers.isDefined)(options) ? options : {};
    this.token = options.token || null; // Construct http client

    this.http = new _http.default(this); // Construct interfaces

    this._interfaces = this._constructInterfaces();
  }

  _createClass(Client, [{
    key: "submitListens",
    value: function submitListens(type, listens) {
      if (!(0, _helpers.isDefined)(type) || ['single', 'playing_now', 'import'].indexOf(type) < 0) {
        throw new Error('Invalid value provided for the "type" parameter');
      }

      if (!(0, _helpers.isDefined)(listens) || !Array.isArray(listens)) {
        throw new Error('Invalid value provided for the "listens" parameter');
      } // Send request


      return this.http.post('submit-listens', {
        authenticated: true,
        body: {
          'listen_type': type,
          'payload': listens
        }
      }).then(function (body) {
        if ((0, _helpers.isDefined)(body) && (0, _helpers.isDefined)(body.payload)) {
          return body.payload;
        }

        return null;
      });
    }
  }, {
    key: "_constructInterfaces",
    value: function _constructInterfaces() {
      var _this = this;

      var result = {};
      Object.keys(_interfaces.default).forEach(function (key) {
        result[key] = new _interfaces.default[key](_this);
      });
      return result;
    }
  }, {
    key: "user",
    get: function get() {
      return this._interfaces['user'];
    }
  }]);

  return Client;
}();

exports.Client = Client;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _merge = _interopRequireDefault(__webpack_require__(7));

var _querystring = _interopRequireDefault(__webpack_require__(8));

var _helpers = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HttpClient =
/*#__PURE__*/
function () {
  function HttpClient(client, baseUrl) {
    _classCallCheck(this, HttpClient);

    this._client = client;
    this._baseUrl = baseUrl || 'https://api.listenbrainz.org/1/';
  }

  _createClass(HttpClient, [{
    key: "get",
    value: function get(path, options) {
      options = (0, _merge.default)({
        params: {},
        authenticated: false,
        token: this._client.token
      }, options || {}); // Set request headers

      var headers = new Headers();

      if (options.authenticated) {
        if (!(0, _helpers.isDefined)(options.token)) {
          throw new Error('Missing required "token" parameter');
        }

        headers['Authorization'] = 'Token ' + options.token;
      } // Send request


      return fetch(this._baseUrl + path + '?' + _querystring.default.encode(options.params), {
        headers: headers
      }).then(function (response) {
        // TODO check status code
        return response.json();
      });
    }
  }, {
    key: "post",
    value: function post(path, options) {
      options = (0, _merge.default)({
        body: null,
        authenticated: false,
        token: this._client.token
      }, options || {}); // Encode body to JSON

      if ((0, _helpers.isDefined)(options.body)) {
        options.body = JSON.stringify(options.body);
      } // Set request headers


      var headers = {};

      if (options.authenticated) {
        if (!(0, _helpers.isDefined)(options.token)) {
          throw new Error('Missing required "token" parameter');
        }

        headers['Authorization'] = 'Token ' + options.token;
      } // Send request


      return fetch(this._baseUrl + path, {
        method: 'POST',
        body: options.body,
        headers: new Headers(headers)
      }).then(function (response) {
        // TODO check status code
        return response.json();
      });
    }
  }]);

  return HttpClient;
}();

exports.default = HttpClient;
module.exports = exports["default"];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helpers = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Interface =
/*#__PURE__*/
function () {
  function Interface(client) {
    _classCallCheck(this, Interface);

    this._client = (0, _helpers.isDefined)(client) ? client : null;
  }

  _createClass(Interface, [{
    key: "http",
    get: function get() {
      if (!(0, _helpers.isDefined)(this._client)) {
        return null;
      }

      return this._client.http;
    }
  }]);

  return Interface;
}();

exports.default = Interface;
module.exports = exports["default"];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "UserInterface", {
  enumerable: true,
  get: function get() {
    return _user.default;
  }
});
exports.default = void 0;

var _user = _interopRequireDefault(__webpack_require__(6));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  user: _user.default
};
exports.default = _default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = _interopRequireDefault(__webpack_require__(4));

var _helpers = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserInterface =
/*#__PURE__*/
function (_Interface) {
  _inherits(UserInterface, _Interface);

  function UserInterface() {
    _classCallCheck(this, UserInterface);

    return _possibleConstructorReturn(this, (UserInterface.__proto__ || Object.getPrototypeOf(UserInterface)).apply(this, arguments));
  }

  _createClass(UserInterface, [{
    key: "listens",
    value: function listens(username, params) {
      if (!(0, _helpers.isDefined)(username)) {
        throw new Error('Invalid value provided for the "username" parameter');
      } // Send request


      return this.http.get('user/' + username + '/listens', {
        params: params
      }).then(function (body) {
        if ((0, _helpers.isDefined)(body) && (0, _helpers.isDefined)(body.payload)) {
          return body.payload;
        }

        return null;
      });
    }
  }]);

  return UserInterface;
}(_base.default);

exports.default = UserInterface;
module.exports = exports["default"];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
});
//# sourceMappingURL=listenbrainz.js.map