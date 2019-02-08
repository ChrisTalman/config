(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default, ConfigError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Store; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ConfigError\", function() { return ConfigError; });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_1__);\n\r\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\nconst { readFile } = fs__WEBPACK_IMPORTED_MODULE_0__[\"promises\"];\r\n\r\n;\r\n;\r\nconst OPTIONS_SCHEMA = {\r\n    schema: joi__WEBPACK_IMPORTED_MODULE_1__[\"alternatives\"](joi__WEBPACK_IMPORTED_MODULE_1__[\"object\"](), joi__WEBPACK_IMPORTED_MODULE_1__[\"valid\"](false)).required(),\r\n    initialise: joi__WEBPACK_IMPORTED_MODULE_1__[\"boolean\"]().default(true),\r\n    file: joi__WEBPACK_IMPORTED_MODULE_1__[\"string\"]().default('./config.json')\r\n};\r\nconst JOI_OPTIONS = {\r\n    presence: 'required'\r\n};\r\nclass Store {\r\n    constructor(options) {\r\n        this._initialised = false;\r\n        this.options = this.validateOptions(options);\r\n        if (this.options.initialise)\r\n            this.initialise();\r\n    }\r\n    ;\r\n    validateOptions(options) {\r\n        const validated = joi__WEBPACK_IMPORTED_MODULE_1__[\"validate\"](options, OPTIONS_SCHEMA, JOI_OPTIONS);\r\n        if (validated.error)\r\n            throw new ConfigError({ message: validated.error.message, code: 'optionsInvalid' });\r\n        const transformed = validated.value;\r\n        return transformed;\r\n    }\r\n    ;\r\n    get initialised() {\r\n        return this._initialised;\r\n    }\r\n    ;\r\n    get data() {\r\n        if (this._initialised) {\r\n            return this._data;\r\n        }\r\n        else {\r\n            throw new ConfigError({ message: 'Config not initialised.', code: 'notInitialised' });\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n    initialise() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            if (this._initialised) {\r\n                return this._data;\r\n            }\r\n            ;\r\n            let file;\r\n            try {\r\n                file = yield readFile(this.options.file, 'utf8');\r\n            }\r\n            catch (error) {\r\n                throw new ConfigError(error);\r\n                return;\r\n            }\r\n            ;\r\n            let data;\r\n            try {\r\n                data = JSON.parse(file);\r\n            }\r\n            catch (error) {\r\n                throw new ConfigError({ message: 'Failed to parse config file as JSON.', code: 'parseFailure' });\r\n                return;\r\n            }\r\n            ;\r\n            if (typeof this.options.schema === 'object') {\r\n                const validated = joi__WEBPACK_IMPORTED_MODULE_1__[\"validate\"](data, this.options.schema);\r\n                if (validated.error)\r\n                    throw new ConfigError({ message: 'Config invalid: ' + validated.error.message + '.', code: 'configInvalid' });\r\n                data = validated.value;\r\n            }\r\n            ;\r\n            this._data = data;\r\n            this._initialised = true;\r\n            return this._data;\r\n        });\r\n    }\r\n    ;\r\n}\r\n;\r\nclass ConfigError extends Error {\r\n    constructor({ message, code }) {\r\n        super(message);\r\n        this.message = message;\r\n        this.code = code;\r\n    }\r\n    ;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"joi\");\n\n//# sourceURL=webpack:///external_%22joi%22?");

/***/ })

/******/ });
});