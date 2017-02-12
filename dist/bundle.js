/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nvar _express = __webpack_require__(/*! express */ 5);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ 1);\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _path = __webpack_require__(/*! path */ 8);\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _open = __webpack_require__(/*! open */ 7);\n\nvar _open2 = _interopRequireDefault(_open);\n\nvar _morgan = __webpack_require__(/*! morgan */ 6);\n\nvar _morgan2 = _interopRequireDefault(_morgan);\n\nvar _errorhandler = __webpack_require__(/*! errorhandler */ 4);\n\nvar _errorhandler2 = _interopRequireDefault(_errorhandler);\n\nvar _dotenv = __webpack_require__(/*! dotenv */ 3);\n\nvar _dotenv2 = _interopRequireDefault(_dotenv);\n\nvar _chalk = __webpack_require__(/*! chalk */ 2);\n\nvar _chalk2 = _interopRequireDefault(_chalk);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Created by Federico Antonucci on 12/2/2017.\n */\n\nvar app = (0, _express2.default)();\n\n// Load environment variables ==========================================================================================\n_dotenv2.default.config();\n\n// Express config ======================================================================================================\napp.set('port', process.env.PORT || 3000);\napp.set('env', process.env.ENV || 'development');\napp.set('name', process.env.APP_NAME || 'App');\napp.set('views', _path2.default.join(__dirname, 'views'));\napp.set('view engine', 'pug');\napp.use((0, _morgan2.default)('dev'));\napp.use(_bodyParser2.default.json());\napp.use(_bodyParser2.default.urlencoded({ extended: true }));\n\napp.get('/', function (req, res) {\n  res.write('hola');\n});\n\n// Error Handler =======================================================================================================\nif (app.get('env') === 'development') {\n  app.use((0, _errorhandler2.default)());\n}\n\n// Server Start ========================================================================================================\napp.listen(app.get('port'), function (err) {\n  if (err) {\n    console.log(_chalk2.default.red('x') + err);\n  } else {\n    console.log(_chalk2.default.green('✓') + ' ' + app.get('name') + ' is running at http://localhost:' + app.get('port') + ' in ' + app.get('env') + ' mode');\n    console.log('    Press CTRL-C to stop\\n');\n    // open('http://localhost/' + port);\n  }\n});\n\nmodule.exports = app;\n/* WEBPACK VAR INJECTION */}.call(exports, \"/\"))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zZXJ2ZXIuanM/NzhjMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgRmVkZXJpY28gQW50b251Y2NpIG9uIDEyLzIvMjAxNy5cbiAqL1xuXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IG9wZW4gZnJvbSAnb3Blbic7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJ21vcmdhbic7XG5pbXBvcnQgZXJyb3JoYW5kbGVyIGZyb20gJ2Vycm9yaGFuZGxlcic7XG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudic7XG5pbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbi8vIExvYWQgZW52aXJvbm1lbnQgdmFyaWFibGVzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZG90ZW52LmNvbmZpZygpO1xuXG4vLyBFeHByZXNzIGNvbmZpZyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmFwcC5zZXQoJ3BvcnQnLCBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDApO1xuYXBwLnNldCgnZW52JywgcHJvY2Vzcy5lbnYuRU5WIHx8ICdkZXZlbG9wbWVudCcpO1xuYXBwLnNldCgnbmFtZScsIHByb2Nlc3MuZW52LkFQUF9OQU1FIHx8ICdBcHAnKTtcbmFwcC5zZXQoJ3ZpZXdzJywgcGF0aC5qb2luKF9fZGlybmFtZSwgJ3ZpZXdzJykpO1xuYXBwLnNldCgndmlldyBlbmdpbmUnLCAncHVnJyk7XG5hcHAudXNlKGxvZ2dlcignZGV2JykpO1xuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcblxuYXBwLmdldCgnLycsIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICByZXMud3JpdGUoJ2hvbGEnKTtcbn0pO1xuXG4vLyBFcnJvciBIYW5kbGVyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmIChhcHAuZ2V0KCdlbnYnKSA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBhcHAudXNlKGVycm9yaGFuZGxlcigpKVxufVxuXG4vLyBTZXJ2ZXIgU3RhcnQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmFwcC5saXN0ZW4oYXBwLmdldCgncG9ydCcpLCBmdW5jdGlvbiAoZXJyKSB7XG4gIGlmIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhjaGFsay5yZWQoJ3gnKSArIGVyciwgKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhgJHtjaGFsay5ncmVlbign4pyTJyl9ICR7YXBwLmdldCgnbmFtZScpfSBpcyBydW5uaW5nIGF0IGh0dHA6Ly9sb2NhbGhvc3Q6JHthcHAuZ2V0KCdwb3J0Jyl9IGluICR7YXBwLmdldCgnZW52Jyl9IG1vZGVgKTtcbiAgICBjb25zb2xlLmxvZygnICAgIFByZXNzIENUUkwtQyB0byBzdG9wXFxuJyk7XG4gICAgLy8gb3BlbignaHR0cDovL2xvY2FsaG9zdC8nICsgcG9ydCk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcDtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNlcnZlci5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFJQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQVpBOzs7O0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCI/NDY1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJvZHktcGFyc2VyXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/***/ (function(module, exports) {

eval("module.exports = require(\"chalk\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImNoYWxrXCI/NTNmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaGFsa1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNoYWxrXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImRvdGVudlwiPzM4ODAiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZG90ZW52XCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** external "errorhandler" ***!
  \*******************************/
/***/ (function(module, exports) {

eval("module.exports = require(\"errorhandler\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImVycm9yaGFuZGxlclwiPzJkZjYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXJyb3JoYW5kbGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXJyb3JoYW5kbGVyXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 5 */
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj9kMmQyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 6 */
/* unknown exports provided */
/* all exports used */
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiPzE5ZWYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9yZ2FuXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 7 */
/* unknown exports provided */
/* all exports used */
/*!***********************!*\
  !*** external "open" ***!
  \***********************/
/***/ (function(module, exports) {

eval("module.exports = require(\"open\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIm9wZW5cIj81OGY5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm9wZW5cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJvcGVuXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 8 */
/* unknown exports provided */
/* all exports used */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIj81YjJhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 9 */
/* unknown exports provided */
/* all exports used */
/*!*************************!*\
  !*** multi ./server.js ***!
  \*************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./server.js */0);


/***/ })
/******/ ]);