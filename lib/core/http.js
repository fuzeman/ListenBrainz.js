"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _merge = _interopRequireDefault(require("lodash-amd/merge"));

var _querystring = _interopRequireDefault(require("querystring"));

var _helpers = require("./helpers");

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
//# sourceMappingURL=http.js.map
