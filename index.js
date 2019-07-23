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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Store; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ConfigError\", function() { return ConfigError; });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var gaze__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gaze */ \"gaze\");\n/* harmony import */ var gaze__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gaze__WEBPACK_IMPORTED_MODULE_3__);\n\r\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\nconst { readFile } = fs__WEBPACK_IMPORTED_MODULE_0__[\"promises\"];\r\n\r\n\r\n\r\n;\r\n;\r\nconst OPTIONS_SCHEMA = {\r\n    schema: joi__WEBPACK_IMPORTED_MODULE_2___default.a.alternatives(joi__WEBPACK_IMPORTED_MODULE_2___default.a.object(), joi__WEBPACK_IMPORTED_MODULE_2___default.a.valid(false)).required(),\r\n    initialise: joi__WEBPACK_IMPORTED_MODULE_2___default.a.boolean().default(true).optional(),\r\n    file: joi__WEBPACK_IMPORTED_MODULE_2___default.a.string().default('./config.json').optional(),\r\n    live: joi__WEBPACK_IMPORTED_MODULE_2___default.a.boolean().default(false).optional()\r\n};\r\nconst JOI_OPTIONS = {\r\n    presence: 'required'\r\n};\r\nconst CONFIG_DATA_SCHEMA_JOI_OPTIONS = {\r\n    presence: 'required'\r\n};\r\nclass Store {\r\n    constructor(options) {\r\n        this._initialised = false;\r\n        this._proxy = {};\r\n        this.options = this.validateOptions(options);\r\n        if (this.options.initialise)\r\n            this.initialiseSync();\r\n        this.listenUnhandledRejections();\r\n    }\r\n    ;\r\n    validateOptions(options) {\r\n        if (typeof options !== 'object' || options === null) {\r\n            throw new Error('Constructor must specify \\'options\\' object.');\r\n        }\r\n        ;\r\n        const validated = joi__WEBPACK_IMPORTED_MODULE_2___default.a.validate(options, OPTIONS_SCHEMA, JOI_OPTIONS);\r\n        if (validated.error)\r\n            throw new ConfigError({ message: validated.error.message, code: 'optionsInvalid' });\r\n        const transformed = validated.value;\r\n        return transformed;\r\n    }\r\n    ;\r\n    get initialised() {\r\n        return this._initialised;\r\n    }\r\n    ;\r\n    get data() {\r\n        if (this._initialised) {\r\n            return this._proxy;\r\n        }\r\n        else {\r\n            throw new ConfigError({ message: 'Config not initialised.', code: 'notInitialised' });\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n    initialise() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            if (this._initialised)\r\n                return this._proxy;\r\n            const data = yield this.load();\r\n            this.listenSource();\r\n            this._initialised = true;\r\n            return data;\r\n        });\r\n    }\r\n    ;\r\n    load() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let source;\r\n            try {\r\n                source = yield readFile(this.options.file, 'utf8');\r\n            }\r\n            catch (error) {\r\n                throw new ConfigError(error);\r\n            }\r\n            ;\r\n            const data = this.applySource({ source });\r\n            return data;\r\n        });\r\n    }\r\n    ;\r\n    initialiseSync() {\r\n        if (this._initialised)\r\n            return this._proxy;\r\n        let source;\r\n        try {\r\n            source = Object(fs__WEBPACK_IMPORTED_MODULE_0__[\"readFileSync\"])(this.options.file, 'utf8');\r\n        }\r\n        catch (error) {\r\n            throw new ConfigError(error);\r\n        }\r\n        ;\r\n        const data = this.applySource({ source });\r\n        this.listenSource();\r\n        this._initialised = true;\r\n        return data;\r\n    }\r\n    ;\r\n    applySource({ source }) {\r\n        let data;\r\n        try {\r\n            data = JSON.parse(source);\r\n        }\r\n        catch (error) {\r\n            throw new ConfigError({ message: 'Failed to parse config file as JSON.', code: 'parseFailure' });\r\n        }\r\n        ;\r\n        if (typeof this.options.schema === 'object') {\r\n            const validated = joi__WEBPACK_IMPORTED_MODULE_2___default.a.validate(data, this.options.schema, CONFIG_DATA_SCHEMA_JOI_OPTIONS);\r\n            if (validated.error)\r\n                throw new ConfigError({ message: 'Config invalid: ' + validated.error.message + '.', code: 'configInvalid' });\r\n            data = validated.value;\r\n        }\r\n        ;\r\n        this.purgeProxy();\r\n        this.applyDataToProxy({ data });\r\n        return this._proxy;\r\n    }\r\n    ;\r\n    listenSource() {\r\n        if (!this.options.live)\r\n            return;\r\n        this.filePathExpression = new RegExp('^' + Object(path__WEBPACK_IMPORTED_MODULE_1__[\"join\"])(process.cwd(), this.options.file) + '$');\r\n        const gaze = new gaze__WEBPACK_IMPORTED_MODULE_3__[\"Gaze\"](this.options.file);\r\n        gaze.on('all', (changeType, filePath) => this.handleSourceChange({ changeType, filePath }));\r\n    }\r\n    ;\r\n    handleSourceChange({ changeType, filePath }) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const relevantFilePath = this.filePathExpression.test(filePath);\r\n            if (!relevantFilePath)\r\n                return;\r\n            if (changeType === 'added' || changeType === 'changed') {\r\n                yield this.load();\r\n            }\r\n            else if (changeType === 'deleted') {\r\n                throw new ConfigError({ message: 'Config file deleted.', code: 'fileDeleted' });\r\n            }\r\n            else {\r\n                throw new ConfigError({ message: 'Unexpected file change type.', code: 'unexpected' });\r\n            }\r\n            ;\r\n        });\r\n    }\r\n    ;\r\n    applyDataToProxy({ data }) {\r\n        for (let { 0: key, 1: value } of Object.entries(data)) {\r\n            this._proxy[key] = value;\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n    purgeProxy() {\r\n        const keys = Object.keys(this._proxy);\r\n        for (let key of keys) {\r\n            delete this._proxy[key];\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n    listenUnhandledRejections() {\r\n        process.on('unhandledRejection', this.throwUnhandledRejection);\r\n    }\r\n    ;\r\n    throwUnhandledRejection(rejection) {\r\n        if (!(rejection instanceof ConfigError))\r\n            return;\r\n        throw rejection;\r\n    }\r\n    ;\r\n}\r\n;\r\nclass ConfigError extends Error {\r\n    constructor({ message, code }) {\r\n        super(message);\r\n        this.message = message;\r\n        this.code = code;\r\n    }\r\n    ;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "gaze":
/*!***********************!*\
  !*** external "gaze" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"gaze\");\n\n//# sourceURL=webpack:///external_%22gaze%22?");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"joi\");\n\n//# sourceURL=webpack:///external_%22joi%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });
});