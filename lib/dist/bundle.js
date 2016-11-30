(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("exampleLib", [], factory);
	else if(typeof exports === 'object')
		exports["exampleLib"] = factory();
	else
		root["exampleLib"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	return __webpack_require__(__webpack_require__.s = 145);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* exports provided: scheduleMicroTask, global, getTypeNameForDebugging, isPresent, isBlank, isStrictStringMap, isDate, stringify, NumberWrapper, looseIdentical, isJsObject, print, warn, setValueOnPath, getSymbolIterator, isPrimitive, escapeRegExp */
/* exports used: global, stringify, isBlank, isPresent, isJsObject, getSymbolIterator, print, warn, looseIdentical, getTypeNameForDebugging, isPrimitive, scheduleMicroTask */
/*!********************************************!*\
  !*** ./~/@angular/core/src/facade/lang.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (immutable) */ exports["l"] = scheduleMicroTask;
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return _global; });
/* harmony export (immutable) */ exports["j"] = getTypeNameForDebugging;
/* harmony export (immutable) */ exports["d"] = isPresent;
/* harmony export (immutable) */ exports["c"] = isBlank;
/* unused harmony export isStrictStringMap */
/* unused harmony export isDate */
/* harmony export (immutable) */ exports["b"] = stringify;
/* unused harmony export NumberWrapper */
/* harmony export (immutable) */ exports["i"] = looseIdentical;
/* harmony export (immutable) */ exports["e"] = isJsObject;
/* harmony export (immutable) */ exports["g"] = print;
/* harmony export (immutable) */ exports["h"] = warn;
/* unused harmony export setValueOnPath */
/* harmony export (immutable) */ exports["f"] = getSymbolIterator;
/* harmony export (immutable) */ exports["k"] = isPrimitive;
/* unused harmony export escapeRegExp */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var globalScope;
if (typeof window === 'undefined') {
    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
        // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
        globalScope = self;
    }
    else {
        globalScope = global;
    }
}
else {
    globalScope = window;
}
function scheduleMicroTask(fn) {
    Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
}
// Need to declare a new variable for global here since TypeScript
// exports the original value of the symbol.
var _global = globalScope;

function getTypeNameForDebugging(type) {
    return type['name'] || typeof type;
}
// TODO: remove calls to assert in production environment
// Note: Can't just export this and import in in other files
// as `assert` is a reserved keyword in Dart
_global.assert = function assert(condition) {
    // TODO: to be fixed properly via #2830, noop for now
};
function isPresent(obj) {
    return obj != null;
}
function isBlank(obj) {
    return obj == null;
}
var STRING_MAP_PROTO = Object.getPrototypeOf({});
function isStrictStringMap(obj) {
    return typeof obj === 'object' && obj !== null && Object.getPrototypeOf(obj) === STRING_MAP_PROTO;
}
function isDate(obj) {
    return obj instanceof Date && !isNaN(obj.valueOf());
}
function stringify(token) {
    if (typeof token === 'string') {
        return token;
    }
    if (token == null) {
        return '' + token;
    }
    if (token.overriddenName) {
        return token.overriddenName;
    }
    if (token.name) {
        return token.name;
    }
    var res = token.toString();
    var newLineIndex = res.indexOf('\n');
    return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
}
var NumberWrapper = (function () {
    function NumberWrapper() {
    }
    NumberWrapper.parseIntAutoRadix = function (text) {
        var result = parseInt(text);
        if (isNaN(result)) {
            throw new Error('Invalid integer literal when parsing ' + text);
        }
        return result;
    };
    NumberWrapper.isNumeric = function (value) { return !isNaN(value - parseFloat(value)); };
    return NumberWrapper;
}());
// JS has NaN !== NaN
function looseIdentical(a, b) {
    return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
}
function isJsObject(o) {
    return o !== null && (typeof o === 'function' || typeof o === 'object');
}
function print(obj) {
    console.log(obj);
}
function warn(obj) {
    console.warn(obj);
}
function setValueOnPath(global, path, value) {
    var parts = path.split('.');
    var obj = global;
    while (parts.length > 1) {
        var name_1 = parts.shift();
        if (obj.hasOwnProperty(name_1) && obj[name_1] != null) {
            obj = obj[name_1];
        }
        else {
            obj = obj[name_1] = {};
        }
    }
    if (obj === undefined || obj === null) {
        obj = {};
    }
    obj[parts.shift()] = value;
}
var _symbolIterator = null;
function getSymbolIterator() {
    if (!_symbolIterator) {
        if (globalScope.Symbol && Symbol.iterator) {
            _symbolIterator = Symbol.iterator;
        }
        else {
            // es6-shim specific logic
            var keys = Object.getOwnPropertyNames(Map.prototype);
            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                if (key !== 'entries' && key !== 'size' &&
                    Map.prototype[key] === Map.prototype['entries']) {
                    _symbolIterator = key;
                }
            }
        }
    }
    return _symbolIterator;
}
function isPrimitive(obj) {
    return !isJsObject(obj);
}
function escapeRegExp(s) {
    return s.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
}
//# sourceMappingURL=lang.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/buildin/global.js */ 49)))

/***/ },
/* 1 */
/* exports provided: assertPlatform, destroyPlatform, getPlatform, createPlatform, ApplicationRef, enableProdMode, isDevMode, createPlatformFactory, PlatformRef, APP_ID, PACKAGE_ROOT_URL, APP_BOOTSTRAP_LISTENER, PLATFORM_INITIALIZER, ApplicationInitStatus, APP_INITIALIZER, DebugElement, DebugNode, asNativeElements, getDebugNode, Testability, TestabilityRegistry, setTestabilityGetter, TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID, ApplicationModule, wtfCreateScope, wtfLeave, wtfStartTimeRange, wtfEndTimeRange, Type, EventEmitter, ErrorHandler, AnimationTransitionEvent, AnimationPlayer, Sanitizer, SecurityContext, Attribute, ContentChild, ContentChildren, Query, ViewChild, ViewChildren, ANALYZE_FOR_ENTRY_COMPONENTS, Component, Directive, HostBinding, HostListener, Input, Output, Pipe, OnDestroy, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, AfterContentChecked, OnInit, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule, ViewEncapsulation, Class, forwardRef, resolveForwardRef, Injector, ReflectiveInjector, ResolvedReflectiveFactory, ReflectiveKey, OpaqueToken, NgZone, RenderComponentType, Renderer, RootRenderer, COMPILER_OPTIONS, CompilerFactory, ModuleWithComponentFactories, Compiler, ComponentFactory, ComponentRef, ComponentFactoryResolver, ElementRef, NgModuleFactory, NgModuleRef, NgModuleFactoryLoader, getModuleFactory, QueryList, SystemJsNgModuleLoader, SystemJsNgModuleLoaderConfig, TemplateRef, ViewContainerRef, EmbeddedViewRef, ViewRef, ChangeDetectionStrategy, ChangeDetectorRef, CollectionChangeRecord, DefaultIterableDiffer, IterableDiffers, KeyValueChangeRecord, KeyValueDiffers, SimpleChange, WrappedValue, platformCore, __core_private__, AUTO_STYLE, AnimationEntryMetadata, AnimationStateMetadata, AnimationStateDeclarationMetadata, AnimationStateTransitionMetadata, AnimationMetadata, AnimationKeyframesSequenceMetadata, AnimationStyleMetadata, AnimationAnimateMetadata, AnimationWithStepsMetadata, AnimationSequenceMetadata, AnimationGroupMetadata, animate, group, sequence, style, state, keyframes, transition, trigger, Inject, Optional, Injectable, Self, SkipSelf, Host */
/* all exports used */
/*!**********************************!*\
  !*** ./~/@angular/core/index.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_core__ = __webpack_require__(/*! ./src/core */ 117);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "assertPlatform", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "destroyPlatform", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "getPlatform", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "createPlatform", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ApplicationRef", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "enableProdMode", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "isDevMode", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "createPlatformFactory", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "PlatformRef", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "APP_ID", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "PACKAGE_ROOT_URL", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "APP_BOOTSTRAP_LISTENER", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "PLATFORM_INITIALIZER", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ApplicationInitStatus", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "APP_INITIALIZER", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "DebugElement", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "DebugNode", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "asNativeElements", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "getDebugNode", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Testability", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "TestabilityRegistry", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "setTestabilityGetter", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["v"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "TRANSLATIONS", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["w"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "TRANSLATIONS_FORMAT", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["x"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "LOCALE_ID", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ApplicationModule", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "wtfCreateScope", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["A"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "wtfLeave", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["B"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "wtfStartTimeRange", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["C"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "wtfEndTimeRange", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["D"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Type", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["E"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "EventEmitter", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["F"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ErrorHandler", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["G"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "AnimationTransitionEvent", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["H"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "AnimationPlayer", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["I"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Sanitizer", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["J"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "SecurityContext", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["K"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Attribute", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["L"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ContentChild", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["M"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ContentChildren", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["N"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Query", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["O"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ViewChild", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["P"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ViewChildren", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["Q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ANALYZE_FOR_ENTRY_COMPONENTS", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["R"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Component", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["S"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Directive", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["T"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "HostBinding", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["U"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "HostListener", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["V"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Input", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["W"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Output", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["X"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Pipe", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["Y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "OnDestroy", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["Z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "AfterContentInit", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_0"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "AfterViewChecked", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_1"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "AfterViewInit", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_2"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "DoCheck", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_3"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "OnChanges", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_4"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "AfterContentChecked", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_5"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "OnInit", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_6"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "CUSTOM_ELEMENTS_SCHEMA", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_7"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "NO_ERRORS_SCHEMA", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_8"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "NgModule", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_9"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ViewEncapsulation", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_10"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Class", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_11"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "forwardRef", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_12"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "resolveForwardRef", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_13"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Injector", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_14"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ReflectiveInjector", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_15"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ResolvedReflectiveFactory", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_16"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ReflectiveKey", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_17"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "OpaqueToken", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_18"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "NgZone", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_19"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "RenderComponentType", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_20"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Renderer", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_21"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "RootRenderer", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_22"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "COMPILER_OPTIONS", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_23"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "CompilerFactory", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_24"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ModuleWithComponentFactories", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_25"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Compiler", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_26"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ComponentFactory", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_27"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ComponentRef", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_28"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ComponentFactoryResolver", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_29"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ElementRef", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_30"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "NgModuleFactory", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_31"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "NgModuleRef", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_32"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "NgModuleFactoryLoader", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_33"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "getModuleFactory", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_34"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "QueryList", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_35"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "SystemJsNgModuleLoader", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_36"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "SystemJsNgModuleLoaderConfig", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_37"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "TemplateRef", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_38"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ViewContainerRef", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_39"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "EmbeddedViewRef", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_40"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ViewRef", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_41"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ChangeDetectionStrategy", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_42"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "ChangeDetectorRef", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_43"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "CollectionChangeRecord", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_44"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "DefaultIterableDiffer", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_45"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "IterableDiffers", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_46"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "KeyValueChangeRecord", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_47"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "KeyValueDiffers", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_48"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "SimpleChange", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_49"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "WrappedValue", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_50"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "platformCore", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_51"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "__core_private__", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_52"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "AUTO_STYLE", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_53"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "AnimationEntryMetadata", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_54"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "AnimationStateMetadata", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_55"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "AnimationStateDeclarationMetadata", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_56"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "AnimationStateTransitionMetadata", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_57"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "AnimationMetadata", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_58"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "AnimationKeyframesSequenceMetadata", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_59"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "AnimationStyleMetadata", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_60"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "AnimationAnimateMetadata", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_61"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "AnimationWithStepsMetadata", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_62"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "AnimationSequenceMetadata", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_63"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "AnimationGroupMetadata", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_64"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "animate", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_65"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "group", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_66"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "sequence", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_67"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "style", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_68"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "state", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_69"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "keyframes", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_70"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "transition", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_71"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "trigger", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_72"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Inject", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_73"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Optional", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_74"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Injectable", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_75"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Self", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_76"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "SkipSelf", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_77"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Host", function() { return __WEBPACK_IMPORTED_MODULE_0__src_core__["_78"]; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the core package.
 */

//# sourceMappingURL=index.js.map

/***/ },
/* 2 */
/* exports provided: scheduleMicroTask, global, getTypeNameForDebugging, isPresent, isBlank, isStrictStringMap, isDate, stringify, NumberWrapper, looseIdentical, isJsObject, print, warn, setValueOnPath, getSymbolIterator, isPrimitive, escapeRegExp */
/* exports used: isPresent, isBlank, isJsObject, getSymbolIterator, stringify, getTypeNameForDebugging, isDate, NumberWrapper */
/*!**********************************************!*\
  !*** ./~/@angular/common/src/facade/lang.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export scheduleMicroTask */
/* unused harmony export global */
/* harmony export (immutable) */ exports["f"] = getTypeNameForDebugging;
/* harmony export (immutable) */ exports["a"] = isPresent;
/* harmony export (immutable) */ exports["b"] = isBlank;
/* unused harmony export isStrictStringMap */
/* harmony export (immutable) */ exports["g"] = isDate;
/* harmony export (immutable) */ exports["e"] = stringify;
/* harmony export (binding) */ __webpack_require__.d(exports, "h", function() { return NumberWrapper; });
/* unused harmony export looseIdentical */
/* harmony export (immutable) */ exports["c"] = isJsObject;
/* unused harmony export print */
/* unused harmony export warn */
/* unused harmony export setValueOnPath */
/* harmony export (immutable) */ exports["d"] = getSymbolIterator;
/* unused harmony export isPrimitive */
/* unused harmony export escapeRegExp */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var globalScope;
if (typeof window === 'undefined') {
    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
        // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
        globalScope = self;
    }
    else {
        globalScope = global;
    }
}
else {
    globalScope = window;
}
function scheduleMicroTask(fn) {
    Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
}
// Need to declare a new variable for global here since TypeScript
// exports the original value of the symbol.
var _global = globalScope;

function getTypeNameForDebugging(type) {
    return type['name'] || typeof type;
}
// TODO: remove calls to assert in production environment
// Note: Can't just export this and import in in other files
// as `assert` is a reserved keyword in Dart
_global.assert = function assert(condition) {
    // TODO: to be fixed properly via #2830, noop for now
};
function isPresent(obj) {
    return obj != null;
}
function isBlank(obj) {
    return obj == null;
}
var STRING_MAP_PROTO = Object.getPrototypeOf({});
function isStrictStringMap(obj) {
    return typeof obj === 'object' && obj !== null && Object.getPrototypeOf(obj) === STRING_MAP_PROTO;
}
function isDate(obj) {
    return obj instanceof Date && !isNaN(obj.valueOf());
}
function stringify(token) {
    if (typeof token === 'string') {
        return token;
    }
    if (token == null) {
        return '' + token;
    }
    if (token.overriddenName) {
        return token.overriddenName;
    }
    if (token.name) {
        return token.name;
    }
    var res = token.toString();
    var newLineIndex = res.indexOf('\n');
    return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
}
var NumberWrapper = (function () {
    function NumberWrapper() {
    }
    NumberWrapper.parseIntAutoRadix = function (text) {
        var result = parseInt(text);
        if (isNaN(result)) {
            throw new Error('Invalid integer literal when parsing ' + text);
        }
        return result;
    };
    NumberWrapper.isNumeric = function (value) { return !isNaN(value - parseFloat(value)); };
    return NumberWrapper;
}());
// JS has NaN !== NaN
function looseIdentical(a, b) {
    return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
}
function isJsObject(o) {
    return o !== null && (typeof o === 'function' || typeof o === 'object');
}
function print(obj) {
    console.log(obj);
}
function warn(obj) {
    console.warn(obj);
}
function setValueOnPath(global, path, value) {
    var parts = path.split('.');
    var obj = global;
    while (parts.length > 1) {
        var name_1 = parts.shift();
        if (obj.hasOwnProperty(name_1) && obj[name_1] != null) {
            obj = obj[name_1];
        }
        else {
            obj = obj[name_1] = {};
        }
    }
    if (obj === undefined || obj === null) {
        obj = {};
    }
    obj[parts.shift()] = value;
}
var _symbolIterator = null;
function getSymbolIterator() {
    if (!_symbolIterator) {
        if (globalScope.Symbol && Symbol.iterator) {
            _symbolIterator = Symbol.iterator;
        }
        else {
            // es6-shim specific logic
            var keys = Object.getOwnPropertyNames(Map.prototype);
            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                if (key !== 'entries' && key !== 'size' &&
                    Map.prototype[key] === Map.prototype['entries']) {
                    _symbolIterator = key;
                }
            }
        }
    }
    return _symbolIterator;
}
function isPrimitive(obj) {
    return !isJsObject(obj);
}
function escapeRegExp(s) {
    return s.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
}
//# sourceMappingURL=lang.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/buildin/global.js */ 49)))

/***/ },
/* 3 */
/* exports provided: unimplemented, BaseError, WrappedError */
/* exports used: unimplemented, BaseError, WrappedError */
/*!**********************************************!*\
  !*** ./~/@angular/core/src/facade/errors.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = unimplemented;
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return BaseError; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return WrappedError; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function unimplemented() {
    throw new Error('unimplemented');
}
/**
 * @stable
 */
var BaseError = (function (_super) {
    __extends(BaseError, _super);
    function BaseError(message) {
        // Errors don't use current this, instead they create a new instance.
        // We have to do forward all of our api to the nativeInstance.
        var nativeError = _super.call(this, message);
        this._nativeError = nativeError;
    }
    Object.defineProperty(BaseError.prototype, "message", {
        get: function () { return this._nativeError.message; },
        set: function (message) { this._nativeError.message = message; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseError.prototype, "name", {
        get: function () { return this._nativeError.name; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseError.prototype, "stack", {
        get: function () { return this._nativeError.stack; },
        set: function (value) { this._nativeError.stack = value; },
        enumerable: true,
        configurable: true
    });
    BaseError.prototype.toString = function () { return this._nativeError.toString(); };
    return BaseError;
}(Error));
/**
 * @stable
 */
var WrappedError = (function (_super) {
    __extends(WrappedError, _super);
    function WrappedError(message, error) {
        _super.call(this, message + " caused by: " + (error instanceof Error ? error.message : error));
        this.originalError = error;
    }
    Object.defineProperty(WrappedError.prototype, "stack", {
        get: function () {
            return (this.originalError instanceof Error ? this.originalError : this._nativeError)
                .stack;
        },
        enumerable: true,
        configurable: true
    });
    return WrappedError;
}(BaseError));
//# sourceMappingURL=errors.js.map

/***/ },
/* 4 */
/* exports provided: forwardRef, resolveForwardRef, Injector, ReflectiveInjector, ResolvedReflectiveFactory, ReflectiveKey, OpaqueToken, Inject, Optional, Injectable, Self, SkipSelf, Host */
/* exports used: OpaqueToken, Injectable, Inject, Optional, SkipSelf, ReflectiveInjector, Injector, forwardRef, resolveForwardRef, ResolvedReflectiveFactory, ReflectiveKey, Self, Host */
/*!***********************************!*\
  !*** ./~/@angular/core/src/di.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__di_metadata__ = __webpack_require__(/*! ./di/metadata */ 16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__di_forward_ref__ = __webpack_require__(/*! ./di/forward_ref */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__di_injector__ = __webpack_require__(/*! ./di/injector */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__di_reflective_injector__ = __webpack_require__(/*! ./di/reflective_injector */ 120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__di_reflective_provider__ = __webpack_require__(/*! ./di/reflective_provider */ 36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__di_reflective_key__ = __webpack_require__(/*! ./di/reflective_key */ 35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__di_opaque_token__ = __webpack_require__(/*! ./di/opaque_token */ 34);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__di_metadata__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__di_metadata__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__di_metadata__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__di_metadata__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "l", function() { return __WEBPACK_IMPORTED_MODULE_0__di_metadata__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "m", function() { return __WEBPACK_IMPORTED_MODULE_0__di_metadata__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__di_forward_ref__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__di_forward_ref__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__di_injector__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__di_reflective_injector__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "j", function() { return __WEBPACK_IMPORTED_MODULE_4__di_reflective_provider__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "k", function() { return __WEBPACK_IMPORTED_MODULE_5__di_reflective_key__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__di_opaque_token__["a"]; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * The `di` module provides dependency injection container services.
 */







//# sourceMappingURL=di.js.map

/***/ },
/* 5 */
/* exports provided: InvalidPipeArgumentError */
/* exports used: InvalidPipeArgumentError */
/*!********************************************************************!*\
  !*** ./~/@angular/common/src/pipes/invalid_pipe_argument_error.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_errors__ = __webpack_require__(/*! ../facade/errors */ 95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return InvalidPipeArgumentError; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var InvalidPipeArgumentError = (function (_super) {
    __extends(InvalidPipeArgumentError, _super);
    function InvalidPipeArgumentError(type, value) {
        _super.call(this, "Invalid argument '" + value + "' for pipe '" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["e" /* stringify */])(type) + "'");
    }
    return InvalidPipeArgumentError;
}(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* BaseError */]));
//# sourceMappingURL=invalid_pipe_argument_error.js.map

/***/ },
/* 6 */
/* exports provided: Class, makeDecorator, makeParamDecorator, makePropDecorator */
/* exports used: makeParamDecorator, makePropDecorator, makeDecorator, Class */
/*!************************************************!*\
  !*** ./~/@angular/core/src/util/decorators.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 0);
/* harmony export (immutable) */ exports["d"] = Class;
/* harmony export (immutable) */ exports["c"] = makeDecorator;
/* harmony export (immutable) */ exports["a"] = makeParamDecorator;
/* harmony export (immutable) */ exports["b"] = makePropDecorator;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var _nextClassId = 0;
var Reflect = __WEBPACK_IMPORTED_MODULE_0__facade_lang__["a" /* global */].Reflect;
function extractAnnotation(annotation) {
    if (typeof annotation === 'function' && annotation.hasOwnProperty('annotation')) {
        // it is a decorator, extract annotation
        annotation = annotation.annotation;
    }
    return annotation;
}
function applyParams(fnOrArray, key) {
    if (fnOrArray === Object || fnOrArray === String || fnOrArray === Function ||
        fnOrArray === Number || fnOrArray === Array) {
        throw new Error("Can not use native " + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(fnOrArray) + " as constructor");
    }
    if (typeof fnOrArray === 'function') {
        return fnOrArray;
    }
    if (Array.isArray(fnOrArray)) {
        var annotations = fnOrArray;
        var annoLength = annotations.length - 1;
        var fn = fnOrArray[annoLength];
        if (typeof fn !== 'function') {
            throw new Error("Last position of Class method array must be Function in key " + key + " was '" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(fn) + "'");
        }
        if (annoLength != fn.length) {
            throw new Error("Number of annotations (" + annoLength + ") does not match number of arguments (" + fn.length + ") in the function: " + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(fn));
        }
        var paramsAnnotations = [];
        for (var i = 0, ii = annotations.length - 1; i < ii; i++) {
            var paramAnnotations = [];
            paramsAnnotations.push(paramAnnotations);
            var annotation = annotations[i];
            if (Array.isArray(annotation)) {
                for (var j = 0; j < annotation.length; j++) {
                    paramAnnotations.push(extractAnnotation(annotation[j]));
                }
            }
            else if (typeof annotation === 'function') {
                paramAnnotations.push(extractAnnotation(annotation));
            }
            else {
                paramAnnotations.push(annotation);
            }
        }
        Reflect.defineMetadata('parameters', paramsAnnotations, fn);
        return fn;
    }
    throw new Error("Only Function or Array is supported in Class definition for key '" + key + "' is '" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(fnOrArray) + "'");
}
/**
 * Provides a way for expressing ES6 classes with parameter annotations in ES5.
 *
 * ## Basic Example
 *
 * ```
 * var Greeter = ng.Class({
 *   constructor: function(name) {
 *     this.name = name;
 *   },
 *
 *   greet: function() {
 *     alert('Hello ' + this.name + '!');
 *   }
 * });
 * ```
 *
 * is equivalent to ES6:
 *
 * ```
 * class Greeter {
 *   constructor(name) {
 *     this.name = name;
 *   }
 *
 *   greet() {
 *     alert('Hello ' + this.name + '!');
 *   }
 * }
 * ```
 *
 * or equivalent to ES5:
 *
 * ```
 * var Greeter = function (name) {
 *   this.name = name;
 * }
 *
 * Greeter.prototype.greet = function () {
 *   alert('Hello ' + this.name + '!');
 * }
 * ```
 *
 * ### Example with parameter annotations
 *
 * ```
 * var MyService = ng.Class({
 *   constructor: [String, [new Optional(), Service], function(name, myService) {
 *     ...
 *   }]
 * });
 * ```
 *
 * is equivalent to ES6:
 *
 * ```
 * class MyService {
 *   constructor(name: string, @Optional() myService: Service) {
 *     ...
 *   }
 * }
 * ```
 *
 * ### Example with inheritance
 *
 * ```
 * var Shape = ng.Class({
 *   constructor: (color) {
 *     this.color = color;
 *   }
 * });
 *
 * var Square = ng.Class({
 *   extends: Shape,
 *   constructor: function(color, size) {
 *     Shape.call(this, color);
 *     this.size = size;
 *   }
 * });
 * ```
 * @stable
 */
function Class(clsDef) {
    var constructor = applyParams(clsDef.hasOwnProperty('constructor') ? clsDef.constructor : undefined, 'constructor');
    var proto = constructor.prototype;
    if (clsDef.hasOwnProperty('extends')) {
        if (typeof clsDef.extends === 'function') {
            constructor.prototype = proto =
                Object.create(clsDef.extends.prototype);
        }
        else {
            throw new Error("Class definition 'extends' property must be a constructor function was: " + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(clsDef.extends));
        }
    }
    for (var key in clsDef) {
        if (key !== 'extends' && key !== 'prototype' && clsDef.hasOwnProperty(key)) {
            proto[key] = applyParams(clsDef[key], key);
        }
    }
    if (this && this.annotations instanceof Array) {
        Reflect.defineMetadata('annotations', this.annotations, constructor);
    }
    var constructorName = constructor['name'];
    if (!constructorName || constructorName === 'constructor') {
        constructor['overriddenName'] = "class" + _nextClassId++;
    }
    return constructor;
}
function makeDecorator(name, props, parentClass, chainFn) {
    if (chainFn === void 0) { chainFn = null; }
    var metaCtor = makeMetadataCtor([props]);
    function DecoratorFactory(objOrType) {
        if (!(Reflect && Reflect.getMetadata)) {
            throw 'reflect-metadata shim is required when using class decorators';
        }
        if (this instanceof DecoratorFactory) {
            metaCtor.call(this, objOrType);
            return this;
        }
        var annotationInstance = new DecoratorFactory(objOrType);
        var chainAnnotation = typeof this === 'function' && Array.isArray(this.annotations) ? this.annotations : [];
        chainAnnotation.push(annotationInstance);
        var TypeDecorator = function TypeDecorator(cls) {
            var annotations = Reflect.getOwnMetadata('annotations', cls) || [];
            annotations.push(annotationInstance);
            Reflect.defineMetadata('annotations', annotations, cls);
            return cls;
        };
        TypeDecorator.annotations = chainAnnotation;
        TypeDecorator.Class = Class;
        if (chainFn)
            chainFn(TypeDecorator);
        return TypeDecorator;
    }
    if (parentClass) {
        DecoratorFactory.prototype = Object.create(parentClass.prototype);
    }
    DecoratorFactory.prototype.toString = function () { return ("@" + name); };
    DecoratorFactory.annotationCls = DecoratorFactory;
    return DecoratorFactory;
}
function makeMetadataCtor(props) {
    return function ctor() {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        props.forEach(function (prop, i) {
            var argVal = args[i];
            if (Array.isArray(prop)) {
                // plain parameter
                _this[prop[0]] = argVal === undefined ? prop[1] : argVal;
            }
            else {
                for (var propName in prop) {
                    _this[propName] =
                        argVal && argVal.hasOwnProperty(propName) ? argVal[propName] : prop[propName];
                }
            }
        });
    };
}
function makeParamDecorator(name, props, parentClass) {
    var metaCtor = makeMetadataCtor(props);
    function ParamDecoratorFactory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (this instanceof ParamDecoratorFactory) {
            metaCtor.apply(this, args);
            return this;
        }
        var annotationInstance = new ((_a = ParamDecoratorFactory).bind.apply(_a, [void 0].concat(args)))();
        ParamDecorator.annotation = annotationInstance;
        return ParamDecorator;
        function ParamDecorator(cls, unusedKey, index) {
            var parameters = Reflect.getMetadata('parameters', cls) || [];
            // there might be gaps if some in between parameters do not have annotations.
            // we pad with nulls.
            while (parameters.length <= index) {
                parameters.push(null);
            }
            parameters[index] = parameters[index] || [];
            parameters[index].push(annotationInstance);
            Reflect.defineMetadata('parameters', parameters, cls);
            return cls;
        }
        var _a;
    }
    if (parentClass) {
        ParamDecoratorFactory.prototype = Object.create(parentClass.prototype);
    }
    ParamDecoratorFactory.prototype.toString = function () { return ("@" + name); };
    ParamDecoratorFactory.annotationCls = ParamDecoratorFactory;
    return ParamDecoratorFactory;
}
function makePropDecorator(name, props, parentClass) {
    var metaCtor = makeMetadataCtor(props);
    function PropDecoratorFactory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (this instanceof PropDecoratorFactory) {
            metaCtor.apply(this, args);
            return this;
        }
        var decoratorInstance = new ((_a = PropDecoratorFactory).bind.apply(_a, [void 0].concat(args)))();
        return function PropDecorator(target, name) {
            var meta = Reflect.getOwnMetadata('propMetadata', target.constructor) || {};
            meta[name] = meta.hasOwnProperty(name) && meta[name] || [];
            meta[name].unshift(decoratorInstance);
            Reflect.defineMetadata('propMetadata', meta, target.constructor);
        };
        var _a;
    }
    if (parentClass) {
        PropDecoratorFactory.prototype = Object.create(parentClass.prototype);
    }
    PropDecoratorFactory.prototype.toString = function () { return ("@" + name); };
    PropDecoratorFactory.annotationCls = PropDecoratorFactory;
    return PropDecoratorFactory;
}
//# sourceMappingURL=decorators.js.map

/***/ },
/* 7 */
/* exports provided: THROW_IF_NOT_FOUND, Injector */
/* exports used: THROW_IF_NOT_FOUND, Injector */
/*!********************************************!*\
  !*** ./~/@angular/core/src/di/injector.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_errors__ = __webpack_require__(/*! ../facade/errors */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return THROW_IF_NOT_FOUND; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Injector; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var _THROW_IF_NOT_FOUND = new Object();
var THROW_IF_NOT_FOUND = _THROW_IF_NOT_FOUND;
var _NullInjector = (function () {
    function _NullInjector() {
    }
    _NullInjector.prototype.get = function (token, notFoundValue) {
        if (notFoundValue === void 0) { notFoundValue = _THROW_IF_NOT_FOUND; }
        if (notFoundValue === _THROW_IF_NOT_FOUND) {
            throw new Error("No provider for " + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* stringify */])(token) + "!");
        }
        return notFoundValue;
    };
    return _NullInjector;
}());
/**
 * @whatItDoes Injector interface
 * @howToUse
 * ```
 * const injector: Injector = ...;
 * injector.get(...);
 * ```
 *
 * @description
 * For more details, see the {@linkDocs guide/dependency-injection "Dependency Injection Guide"}.
 *
 * ### Example
 *
 * {@example core/di/ts/injector_spec.ts region='Injector'}
 *
 * `Injector` returns itself when given `Injector` as a token:
 * {@example core/di/ts/injector_spec.ts region='injectInjector'}
 *
 * @stable
 */
var Injector = (function () {
    function Injector() {
    }
    /**
     * Retrieves an instance from the injector based on the provided token.
     * If not found:
     * - Throws {@link NoProviderError} if no `notFoundValue` that is not equal to
     * Injector.THROW_IF_NOT_FOUND is given
     * - Returns the `notFoundValue` otherwise
     */
    Injector.prototype.get = function (token, notFoundValue) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); };
    Injector.THROW_IF_NOT_FOUND = _THROW_IF_NOT_FOUND;
    Injector.NULL = new _NullInjector();
    return Injector;
}());
//# sourceMappingURL=injector.js.map

/***/ },
/* 8 */
/* exports provided: StringMapWrapper, ListWrapper, isListLikeIterable, areIterablesEqual, iterateListLike */
/* exports used: isListLikeIterable, iterateListLike, areIterablesEqual, ListWrapper, StringMapWrapper */
/*!**************************************************!*\
  !*** ./~/@angular/core/src/facade/collection.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lang__ = __webpack_require__(/*! ./lang */ 0);
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return StringMapWrapper; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return ListWrapper; });
/* harmony export (immutable) */ exports["a"] = isListLikeIterable;
/* harmony export (immutable) */ exports["c"] = areIterablesEqual;
/* harmony export (immutable) */ exports["b"] = iterateListLike;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Wraps Javascript Objects
 */
var StringMapWrapper = (function () {
    function StringMapWrapper() {
    }
    StringMapWrapper.merge = function (m1, m2) {
        var m = {};
        for (var _i = 0, _a = Object.keys(m1); _i < _a.length; _i++) {
            var k = _a[_i];
            m[k] = m1[k];
        }
        for (var _b = 0, _c = Object.keys(m2); _b < _c.length; _b++) {
            var k = _c[_b];
            m[k] = m2[k];
        }
        return m;
    };
    StringMapWrapper.equals = function (m1, m2) {
        var k1 = Object.keys(m1);
        var k2 = Object.keys(m2);
        if (k1.length != k2.length) {
            return false;
        }
        for (var i = 0; i < k1.length; i++) {
            var key = k1[i];
            if (m1[key] !== m2[key]) {
                return false;
            }
        }
        return true;
    };
    return StringMapWrapper;
}());
var ListWrapper = (function () {
    function ListWrapper() {
    }
    ListWrapper.removeAll = function (list, items) {
        for (var i = 0; i < items.length; ++i) {
            var index = list.indexOf(items[i]);
            if (index > -1) {
                list.splice(index, 1);
            }
        }
    };
    ListWrapper.remove = function (list, el) {
        var index = list.indexOf(el);
        if (index > -1) {
            list.splice(index, 1);
            return true;
        }
        return false;
    };
    ListWrapper.equals = function (a, b) {
        if (a.length != b.length)
            return false;
        for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i])
                return false;
        }
        return true;
    };
    ListWrapper.flatten = function (list) {
        return list.reduce(function (flat, item) {
            var flatItem = Array.isArray(item) ? ListWrapper.flatten(item) : item;
            return flat.concat(flatItem);
        }, []);
    };
    return ListWrapper;
}());
function isListLikeIterable(obj) {
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["e" /* isJsObject */])(obj))
        return false;
    return Array.isArray(obj) ||
        (!(obj instanceof Map) &&
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["f" /* getSymbolIterator */])() in obj); // JS Iterable have a Symbol.iterator prop
}
function areIterablesEqual(a, b, comparator) {
    var iterator1 = a[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["f" /* getSymbolIterator */])()]();
    var iterator2 = b[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["f" /* getSymbolIterator */])()]();
    while (true) {
        var item1 = iterator1.next();
        var item2 = iterator2.next();
        if (item1.done && item2.done)
            return true;
        if (item1.done || item2.done)
            return false;
        if (!comparator(item1.value, item2.value))
            return false;
    }
}
function iterateListLike(obj, fn) {
    if (Array.isArray(obj)) {
        for (var i = 0; i < obj.length; i++) {
            fn(obj[i]);
        }
    }
    else {
        var iterator = obj[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["f" /* getSymbolIterator */])()]();
        var item = void 0;
        while (!((item = iterator.next()).done)) {
            fn(item.value);
        }
    }
}
//# sourceMappingURL=collection.js.map

/***/ },
/* 9 */
/* exports provided: ComponentStillLoadingError, ModuleWithComponentFactories, Compiler, COMPILER_OPTIONS, CompilerFactory */
/* exports used: CompilerFactory, Compiler, ComponentStillLoadingError, COMPILER_OPTIONS, ModuleWithComponentFactories */
/*!************************************************!*\
  !*** ./~/@angular/core/src/linker/compiler.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__di__ = __webpack_require__(/*! ../di */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_errors__ = __webpack_require__(/*! ../facade/errors */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 0);
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return ComponentStillLoadingError; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return ModuleWithComponentFactories; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Compiler; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return COMPILER_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CompilerFactory; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * Indicates that a component is still being loaded in a synchronous compile.
 *
 * @stable
 */
var ComponentStillLoadingError = (function (_super) {
    __extends(ComponentStillLoadingError, _super);
    function ComponentStillLoadingError(compType) {
        _super.call(this, "Can't compile synchronously as " + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* stringify */])(compType) + " is still being loaded!");
        this.compType = compType;
    }
    return ComponentStillLoadingError;
}(__WEBPACK_IMPORTED_MODULE_1__facade_errors__["b" /* BaseError */]));
/**
 * Combination of NgModuleFactory and ComponentFactorys.
 *
 * @experimental
 */
var ModuleWithComponentFactories = (function () {
    function ModuleWithComponentFactories(ngModuleFactory, componentFactories) {
        this.ngModuleFactory = ngModuleFactory;
        this.componentFactories = componentFactories;
    }
    return ModuleWithComponentFactories;
}());
function _throwError() {
    throw new Error("Runtime compiler is not loaded");
}
/**
 * Low-level service for running the angular compiler during runtime
 * to create {@link ComponentFactory}s, which
 * can later be used to create and render a Component instance.
 *
 * Each `@NgModule` provides an own `Compiler` to its injector,
 * that will use the directives/pipes of the ng module for compilation
 * of components.
 * @stable
 */
var Compiler = (function () {
    function Compiler() {
    }
    /**
     * Compiles the given NgModule and all of its components. All templates of the components listed
     * in `entryComponents`
     * have to be inlined. Otherwise throws a {@link ComponentStillLoadingError}.
     */
    Compiler.prototype.compileModuleSync = function (moduleType) { throw _throwError(); };
    /**
     * Compiles the given NgModule and all of its components
     */
    Compiler.prototype.compileModuleAsync = function (moduleType) { throw _throwError(); };
    /**
     * Same as {@link compileModuleSync} but also creates ComponentFactories for all components.
     */
    Compiler.prototype.compileModuleAndAllComponentsSync = function (moduleType) {
        throw _throwError();
    };
    /**
     * Same as {@link compileModuleAsync} but also creates ComponentFactories for all components.
     */
    Compiler.prototype.compileModuleAndAllComponentsAsync = function (moduleType) {
        throw _throwError();
    };
    /**
     * Clears all caches.
     */
    Compiler.prototype.clearCache = function () { };
    /**
     * Clears the cache for the given component/ngModule.
     */
    Compiler.prototype.clearCacheFor = function (type) { };
    return Compiler;
}());
/**
 * Token to provide CompilerOptions in the platform injector.
 *
 * @experimental
 */
var COMPILER_OPTIONS = new __WEBPACK_IMPORTED_MODULE_0__di__["a" /* OpaqueToken */]('compilerOptions');
/**
 * A factory for creating a Compiler
 *
 * @experimental
 */
var CompilerFactory = (function () {
    function CompilerFactory() {
    }
    return CompilerFactory;
}());
//# sourceMappingURL=compiler.js.map

/***/ },
/* 10 */
/* exports provided: NgLocalization, getPluralCategory, NgLocaleLocalization, Plural, getPluralCase */
/* exports used: NgLocalization, getPluralCategory, NgLocaleLocalization */
/*!***********************************************!*\
  !*** ./~/@angular/common/src/localization.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NgLocalization; });
/* harmony export (immutable) */ exports["b"] = getPluralCategory;
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return NgLocaleLocalization; });
/* unused harmony export Plural */
/* unused harmony export getPluralCase */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * @experimental
 */
var NgLocalization = (function () {
    function NgLocalization() {
    }
    return NgLocalization;
}());
/**
 * Returns the plural category for a given value.
 * - "=value" when the case exists,
 * - the plural category otherwise
 *
 * @internal
 */
function getPluralCategory(value, cases, ngLocalization) {
    var nbCase = "=" + value;
    return cases.indexOf(nbCase) > -1 ? nbCase : ngLocalization.getPluralCategory(value);
}
/**
 * Returns the plural case based on the locale
 *
 * @experimental
 */
var NgLocaleLocalization = (function (_super) {
    __extends(NgLocaleLocalization, _super);
    function NgLocaleLocalization(_locale) {
        _super.call(this);
        this._locale = _locale;
    }
    NgLocaleLocalization.prototype.getPluralCategory = function (value) {
        var plural = getPluralCase(this._locale, value);
        switch (plural) {
            case Plural.Zero:
                return 'zero';
            case Plural.One:
                return 'one';
            case Plural.Two:
                return 'two';
            case Plural.Few:
                return 'few';
            case Plural.Many:
                return 'many';
            default:
                return 'other';
        }
    };
    NgLocaleLocalization.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    NgLocaleLocalization.ctorParameters = [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
    ];
    return NgLocaleLocalization;
}(NgLocalization));
// This is generated code DO NOT MODIFY
// see angular2/script/cldr/gen_plural_rules.js
/** @experimental */
var Plural;
(function (Plural) {
    Plural[Plural["Zero"] = 0] = "Zero";
    Plural[Plural["One"] = 1] = "One";
    Plural[Plural["Two"] = 2] = "Two";
    Plural[Plural["Few"] = 3] = "Few";
    Plural[Plural["Many"] = 4] = "Many";
    Plural[Plural["Other"] = 5] = "Other";
})(Plural || (Plural = {}));
/**
 * Returns the plural case based on the locale
 *
 * @experimental
 */
function getPluralCase(locale, nLike) {
    // TODO(vicb): lazy compute
    if (typeof nLike === 'string') {
        nLike = parseInt(nLike, 10);
    }
    var n = nLike;
    var nDecimal = n.toString().replace(/^[^.]*\.?/, '');
    var i = Math.floor(Math.abs(n));
    var v = nDecimal.length;
    var f = parseInt(nDecimal, 10);
    var t = parseInt(n.toString().replace(/^[^.]*\.?|0+$/g, ''), 10) || 0;
    var lang = locale.split('-')[0].toLowerCase();
    switch (lang) {
        case 'af':
        case 'asa':
        case 'az':
        case 'bem':
        case 'bez':
        case 'bg':
        case 'brx':
        case 'ce':
        case 'cgg':
        case 'chr':
        case 'ckb':
        case 'ee':
        case 'el':
        case 'eo':
        case 'es':
        case 'eu':
        case 'fo':
        case 'fur':
        case 'gsw':
        case 'ha':
        case 'haw':
        case 'hu':
        case 'jgo':
        case 'jmc':
        case 'ka':
        case 'kk':
        case 'kkj':
        case 'kl':
        case 'ks':
        case 'ksb':
        case 'ky':
        case 'lb':
        case 'lg':
        case 'mas':
        case 'mgo':
        case 'ml':
        case 'mn':
        case 'nb':
        case 'nd':
        case 'ne':
        case 'nn':
        case 'nnh':
        case 'nyn':
        case 'om':
        case 'or':
        case 'os':
        case 'ps':
        case 'rm':
        case 'rof':
        case 'rwk':
        case 'saq':
        case 'seh':
        case 'sn':
        case 'so':
        case 'sq':
        case 'ta':
        case 'te':
        case 'teo':
        case 'tk':
        case 'tr':
        case 'ug':
        case 'uz':
        case 'vo':
        case 'vun':
        case 'wae':
        case 'xog':
            if (n === 1)
                return Plural.One;
            return Plural.Other;
        case 'agq':
        case 'bas':
        case 'cu':
        case 'dav':
        case 'dje':
        case 'dua':
        case 'dyo':
        case 'ebu':
        case 'ewo':
        case 'guz':
        case 'kam':
        case 'khq':
        case 'ki':
        case 'kln':
        case 'kok':
        case 'ksf':
        case 'lrc':
        case 'lu':
        case 'luo':
        case 'luy':
        case 'mer':
        case 'mfe':
        case 'mgh':
        case 'mua':
        case 'mzn':
        case 'nmg':
        case 'nus':
        case 'qu':
        case 'rn':
        case 'rw':
        case 'sbp':
        case 'twq':
        case 'vai':
        case 'yav':
        case 'yue':
        case 'zgh':
        case 'ak':
        case 'ln':
        case 'mg':
        case 'pa':
        case 'ti':
            if (n === Math.floor(n) && n >= 0 && n <= 1)
                return Plural.One;
            return Plural.Other;
        case 'am':
        case 'as':
        case 'bn':
        case 'fa':
        case 'gu':
        case 'hi':
        case 'kn':
        case 'mr':
        case 'zu':
            if (i === 0 || n === 1)
                return Plural.One;
            return Plural.Other;
        case 'ar':
            if (n === 0)
                return Plural.Zero;
            if (n === 1)
                return Plural.One;
            if (n === 2)
                return Plural.Two;
            if (n % 100 === Math.floor(n % 100) && n % 100 >= 3 && n % 100 <= 10)
                return Plural.Few;
            if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 99)
                return Plural.Many;
            return Plural.Other;
        case 'ast':
        case 'ca':
        case 'de':
        case 'en':
        case 'et':
        case 'fi':
        case 'fy':
        case 'gl':
        case 'it':
        case 'nl':
        case 'sv':
        case 'sw':
        case 'ur':
        case 'yi':
            if (i === 1 && v === 0)
                return Plural.One;
            return Plural.Other;
        case 'be':
            if (n % 10 === 1 && !(n % 100 === 11))
                return Plural.One;
            if (n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 4 &&
                !(n % 100 >= 12 && n % 100 <= 14))
                return Plural.Few;
            if (n % 10 === 0 || n % 10 === Math.floor(n % 10) && n % 10 >= 5 && n % 10 <= 9 ||
                n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 14)
                return Plural.Many;
            return Plural.Other;
        case 'br':
            if (n % 10 === 1 && !(n % 100 === 11 || n % 100 === 71 || n % 100 === 91))
                return Plural.One;
            if (n % 10 === 2 && !(n % 100 === 12 || n % 100 === 72 || n % 100 === 92))
                return Plural.Two;
            if (n % 10 === Math.floor(n % 10) && (n % 10 >= 3 && n % 10 <= 4 || n % 10 === 9) &&
                !(n % 100 >= 10 && n % 100 <= 19 || n % 100 >= 70 && n % 100 <= 79 ||
                    n % 100 >= 90 && n % 100 <= 99))
                return Plural.Few;
            if (!(n === 0) && n % 1e6 === 0)
                return Plural.Many;
            return Plural.Other;
        case 'bs':
        case 'hr':
        case 'sr':
            if (v === 0 && i % 10 === 1 && !(i % 100 === 11) || f % 10 === 1 && !(f % 100 === 11))
                return Plural.One;
            if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 &&
                !(i % 100 >= 12 && i % 100 <= 14) ||
                f % 10 === Math.floor(f % 10) && f % 10 >= 2 && f % 10 <= 4 &&
                    !(f % 100 >= 12 && f % 100 <= 14))
                return Plural.Few;
            return Plural.Other;
        case 'cs':
        case 'sk':
            if (i === 1 && v === 0)
                return Plural.One;
            if (i === Math.floor(i) && i >= 2 && i <= 4 && v === 0)
                return Plural.Few;
            if (!(v === 0))
                return Plural.Many;
            return Plural.Other;
        case 'cy':
            if (n === 0)
                return Plural.Zero;
            if (n === 1)
                return Plural.One;
            if (n === 2)
                return Plural.Two;
            if (n === 3)
                return Plural.Few;
            if (n === 6)
                return Plural.Many;
            return Plural.Other;
        case 'da':
            if (n === 1 || !(t === 0) && (i === 0 || i === 1))
                return Plural.One;
            return Plural.Other;
        case 'dsb':
        case 'hsb':
            if (v === 0 && i % 100 === 1 || f % 100 === 1)
                return Plural.One;
            if (v === 0 && i % 100 === 2 || f % 100 === 2)
                return Plural.Two;
            if (v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 3 && i % 100 <= 4 ||
                f % 100 === Math.floor(f % 100) && f % 100 >= 3 && f % 100 <= 4)
                return Plural.Few;
            return Plural.Other;
        case 'ff':
        case 'fr':
        case 'hy':
        case 'kab':
            if (i === 0 || i === 1)
                return Plural.One;
            return Plural.Other;
        case 'fil':
            if (v === 0 && (i === 1 || i === 2 || i === 3) ||
                v === 0 && !(i % 10 === 4 || i % 10 === 6 || i % 10 === 9) ||
                !(v === 0) && !(f % 10 === 4 || f % 10 === 6 || f % 10 === 9))
                return Plural.One;
            return Plural.Other;
        case 'ga':
            if (n === 1)
                return Plural.One;
            if (n === 2)
                return Plural.Two;
            if (n === Math.floor(n) && n >= 3 && n <= 6)
                return Plural.Few;
            if (n === Math.floor(n) && n >= 7 && n <= 10)
                return Plural.Many;
            return Plural.Other;
        case 'gd':
            if (n === 1 || n === 11)
                return Plural.One;
            if (n === 2 || n === 12)
                return Plural.Two;
            if (n === Math.floor(n) && (n >= 3 && n <= 10 || n >= 13 && n <= 19))
                return Plural.Few;
            return Plural.Other;
        case 'gv':
            if (v === 0 && i % 10 === 1)
                return Plural.One;
            if (v === 0 && i % 10 === 2)
                return Plural.Two;
            if (v === 0 &&
                (i % 100 === 0 || i % 100 === 20 || i % 100 === 40 || i % 100 === 60 || i % 100 === 80))
                return Plural.Few;
            if (!(v === 0))
                return Plural.Many;
            return Plural.Other;
        case 'he':
            if (i === 1 && v === 0)
                return Plural.One;
            if (i === 2 && v === 0)
                return Plural.Two;
            if (v === 0 && !(n >= 0 && n <= 10) && n % 10 === 0)
                return Plural.Many;
            return Plural.Other;
        case 'is':
            if (t === 0 && i % 10 === 1 && !(i % 100 === 11) || !(t === 0))
                return Plural.One;
            return Plural.Other;
        case 'ksh':
            if (n === 0)
                return Plural.Zero;
            if (n === 1)
                return Plural.One;
            return Plural.Other;
        case 'kw':
        case 'naq':
        case 'se':
        case 'smn':
            if (n === 1)
                return Plural.One;
            if (n === 2)
                return Plural.Two;
            return Plural.Other;
        case 'lag':
            if (n === 0)
                return Plural.Zero;
            if ((i === 0 || i === 1) && !(n === 0))
                return Plural.One;
            return Plural.Other;
        case 'lt':
            if (n % 10 === 1 && !(n % 100 >= 11 && n % 100 <= 19))
                return Plural.One;
            if (n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 9 &&
                !(n % 100 >= 11 && n % 100 <= 19))
                return Plural.Few;
            if (!(f === 0))
                return Plural.Many;
            return Plural.Other;
        case 'lv':
        case 'prg':
            if (n % 10 === 0 || n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19 ||
                v === 2 && f % 100 === Math.floor(f % 100) && f % 100 >= 11 && f % 100 <= 19)
                return Plural.Zero;
            if (n % 10 === 1 && !(n % 100 === 11) || v === 2 && f % 10 === 1 && !(f % 100 === 11) ||
                !(v === 2) && f % 10 === 1)
                return Plural.One;
            return Plural.Other;
        case 'mk':
            if (v === 0 && i % 10 === 1 || f % 10 === 1)
                return Plural.One;
            return Plural.Other;
        case 'mt':
            if (n === 1)
                return Plural.One;
            if (n === 0 || n % 100 === Math.floor(n % 100) && n % 100 >= 2 && n % 100 <= 10)
                return Plural.Few;
            if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19)
                return Plural.Many;
            return Plural.Other;
        case 'pl':
            if (i === 1 && v === 0)
                return Plural.One;
            if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 &&
                !(i % 100 >= 12 && i % 100 <= 14))
                return Plural.Few;
            if (v === 0 && !(i === 1) && i % 10 === Math.floor(i % 10) && i % 10 >= 0 && i % 10 <= 1 ||
                v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9 ||
                v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 12 && i % 100 <= 14)
                return Plural.Many;
            return Plural.Other;
        case 'pt':
            if (n === Math.floor(n) && n >= 0 && n <= 2 && !(n === 2))
                return Plural.One;
            return Plural.Other;
        case 'ro':
            if (i === 1 && v === 0)
                return Plural.One;
            if (!(v === 0) || n === 0 ||
                !(n === 1) && n % 100 === Math.floor(n % 100) && n % 100 >= 1 && n % 100 <= 19)
                return Plural.Few;
            return Plural.Other;
        case 'ru':
        case 'uk':
            if (v === 0 && i % 10 === 1 && !(i % 100 === 11))
                return Plural.One;
            if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 &&
                !(i % 100 >= 12 && i % 100 <= 14))
                return Plural.Few;
            if (v === 0 && i % 10 === 0 ||
                v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9 ||
                v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 11 && i % 100 <= 14)
                return Plural.Many;
            return Plural.Other;
        case 'shi':
            if (i === 0 || n === 1)
                return Plural.One;
            if (n === Math.floor(n) && n >= 2 && n <= 10)
                return Plural.Few;
            return Plural.Other;
        case 'si':
            if (n === 0 || n === 1 || i === 0 && f === 1)
                return Plural.One;
            return Plural.Other;
        case 'sl':
            if (v === 0 && i % 100 === 1)
                return Plural.One;
            if (v === 0 && i % 100 === 2)
                return Plural.Two;
            if (v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 3 && i % 100 <= 4 || !(v === 0))
                return Plural.Few;
            return Plural.Other;
        case 'tzm':
            if (n === Math.floor(n) && n >= 0 && n <= 1 || n === Math.floor(n) && n >= 11 && n <= 99)
                return Plural.One;
            return Plural.Other;
        default:
            return Plural.Other;
    }
}
//# sourceMappingURL=localization.js.map

/***/ },
/* 11 */
/* exports provided: LocationStrategy, APP_BASE_HREF */
/* exports used: LocationStrategy, APP_BASE_HREF */
/*!*************************************************************!*\
  !*** ./~/@angular/common/src/location/location_strategy.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LocationStrategy; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return APP_BASE_HREF; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * `LocationStrategy` is responsible for representing and reading route state
 * from the browser's URL. Angular provides two strategies:
 * {@link HashLocationStrategy} and {@link PathLocationStrategy} (default).
 *
 * This is used under the hood of the {@link Location} service.
 *
 * Applications should use the {@link Router} or {@link Location} services to
 * interact with application route state.
 *
 * For instance, {@link HashLocationStrategy} produces URLs like
 * `http://example.com#/foo`, and {@link PathLocationStrategy} produces
 * `http://example.com/foo` as an equivalent URL.
 *
 * See these two classes for more.
 *
 * @stable
 */
var LocationStrategy = (function () {
    function LocationStrategy() {
    }
    return LocationStrategy;
}());
/**
 * The `APP_BASE_HREF` token represents the base href to be used with the
 * {@link PathLocationStrategy}.
 *
 * If you're using {@link PathLocationStrategy}, you must provide a provider to a string
 * representing the URL prefix that should be preserved when generating and recognizing
 * URLs.
 *
 * ### Example
 *
 * ```typescript
 * import {Component, NgModule} from '@angular/core';
 * import {APP_BASE_HREF} from '@angular/common';
 *
 * @NgModule({
 *   providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
 * })
 * class AppModule {}
 * ```
 *
 * @stable
 */
var APP_BASE_HREF = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('appBaseHref');
//# sourceMappingURL=location_strategy.js.map

/***/ },
/* 12 */
/* exports provided: APP_ID, _appIdRandomProviderFactory, APP_ID_RANDOM_PROVIDER, PLATFORM_INITIALIZER, APP_BOOTSTRAP_LISTENER, PACKAGE_ROOT_URL */
/* exports used: PLATFORM_INITIALIZER, APP_BOOTSTRAP_LISTENER, APP_ID_RANDOM_PROVIDER, APP_ID, PACKAGE_ROOT_URL */
/*!***************************************************!*\
  !*** ./~/@angular/core/src/application_tokens.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__di__ = __webpack_require__(/*! ./di */ 4);
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return APP_ID; });
/* unused harmony export _appIdRandomProviderFactory */
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return APP_ID_RANDOM_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PLATFORM_INITIALIZER; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return APP_BOOTSTRAP_LISTENER; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return PACKAGE_ROOT_URL; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * A DI Token representing a unique string id assigned to the application by Angular and used
 * primarily for prefixing application attributes and CSS styles when
 * {@link ViewEncapsulation#Emulated} is being used.
 *
 * If you need to avoid randomly generated value to be used as an application id, you can provide
 * a custom value via a DI provider <!-- TODO: provider --> configuring the root {@link Injector}
 * using this token.
 * @experimental
 */
var APP_ID = new __WEBPACK_IMPORTED_MODULE_0__di__["a" /* OpaqueToken */]('AppId');
function _appIdRandomProviderFactory() {
    return "" + _randomChar() + _randomChar() + _randomChar();
}
/**
 * Providers that will generate a random APP_ID_TOKEN.
 * @experimental
 */
var APP_ID_RANDOM_PROVIDER = {
    provide: APP_ID,
    useFactory: _appIdRandomProviderFactory,
    deps: [],
};
function _randomChar() {
    return String.fromCharCode(97 + Math.floor(Math.random() * 25));
}
/**
 * A function that will be executed when a platform is initialized.
 * @experimental
 */
var PLATFORM_INITIALIZER = new __WEBPACK_IMPORTED_MODULE_0__di__["a" /* OpaqueToken */]('Platform Initializer');
/**
 * All callbacks provided via this token will be called for every component that is bootstrapped.
 * Signature of the callback:
 *
 * `(componentRef: ComponentRef) => void`.
 *
 * @experimental
 */
var APP_BOOTSTRAP_LISTENER = new __WEBPACK_IMPORTED_MODULE_0__di__["a" /* OpaqueToken */]('appBootstrapListener');
/**
 * A token which indicates the root directory of the application
 * @experimental
 */
var PACKAGE_ROOT_URL = new __WEBPACK_IMPORTED_MODULE_0__di__["a" /* OpaqueToken */]('Application Packages Root URL');
//# sourceMappingURL=application_tokens.js.map

/***/ },
/* 13 */
/* exports provided: SimpleChange, UNINITIALIZED, ValueUnwrapper, WrappedValue, devModeEqual, looseIdentical, ChangeDetectorRef, ChangeDetectionStrategy, ChangeDetectorStatus, isDefaultChangeDetectionStrategy, CollectionChangeRecord, DefaultIterableDifferFactory, DefaultIterableDiffer, KeyValueChangeRecord, DefaultKeyValueDifferFactory, IterableDiffers, KeyValueDiffers, keyValDiff, iterableDiff, defaultIterableDiffers, defaultKeyValueDiffers */
/* exports used: devModeEqual, defaultIterableDiffers, defaultKeyValueDiffers, IterableDiffers, KeyValueDiffers, ChangeDetectorStatus, ChangeDetectionStrategy, ChangeDetectorRef, CollectionChangeRecord, DefaultIterableDiffer, KeyValueChangeRecord, SimpleChange, WrappedValue */
/*!******************************************************************!*\
  !*** ./~/@angular/core/src/change_detection/change_detection.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__differs_default_iterable_differ__ = __webpack_require__(/*! ./differs/default_iterable_differ */ 31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__differs_default_keyvalue_differ__ = __webpack_require__(/*! ./differs/default_keyvalue_differ */ 60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__differs_iterable_differs__ = __webpack_require__(/*! ./differs/iterable_differs */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__differs_keyvalue_differs__ = __webpack_require__(/*! ./differs/keyvalue_differs */ 62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__change_detection_util__ = __webpack_require__(/*! ./change_detection_util */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__change_detector_ref__ = __webpack_require__(/*! ./change_detector_ref */ 116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__(/*! ./constants */ 15);
/* unused harmony export keyValDiff */
/* unused harmony export iterableDiff */
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return defaultIterableDiffers; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return defaultKeyValueDiffers; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "l", function() { return __WEBPACK_IMPORTED_MODULE_4__change_detection_util__["d"]; });
/* unused harmony reexport UNINITIALIZED */
/* unused harmony reexport ValueUnwrapper */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "m", function() { return __WEBPACK_IMPORTED_MODULE_4__change_detection_util__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__change_detection_util__["b"]; });
/* unused harmony reexport looseIdentical */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__change_detector_ref__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__constants__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__constants__["b"]; });
/* unused harmony reexport isDefaultChangeDetectionStrategy */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__differs_default_iterable_differ__["b"]; });
/* unused harmony reexport DefaultIterableDifferFactory */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "j", function() { return __WEBPACK_IMPORTED_MODULE_0__differs_default_iterable_differ__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "k", function() { return __WEBPACK_IMPORTED_MODULE_1__differs_default_keyvalue_differ__["b"]; });
/* unused harmony reexport DefaultKeyValueDifferFactory */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__differs_iterable_differs__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__differs_keyvalue_differs__["a"]; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */












/**
 * Structural diffing for `Object`s and `Map`s.
 */
var keyValDiff = [new __WEBPACK_IMPORTED_MODULE_1__differs_default_keyvalue_differ__["a" /* DefaultKeyValueDifferFactory */]()];
/**
 * Structural diffing for `Iterable` types such as `Array`s.
 */
var iterableDiff = [new __WEBPACK_IMPORTED_MODULE_0__differs_default_iterable_differ__["a" /* DefaultIterableDifferFactory */]()];
var defaultIterableDiffers = new __WEBPACK_IMPORTED_MODULE_2__differs_iterable_differs__["a" /* IterableDiffers */](iterableDiff);
var defaultKeyValueDiffers = new __WEBPACK_IMPORTED_MODULE_3__differs_keyvalue_differs__["a" /* KeyValueDiffers */](keyValDiff);
//# sourceMappingURL=change_detection.js.map

/***/ },
/* 14 */
/* exports provided: looseIdentical, UNINITIALIZED, devModeEqual, WrappedValue, ValueUnwrapper, SimpleChange */
/* exports used: UNINITIALIZED, devModeEqual, ValueUnwrapper, SimpleChange, WrappedValue */
/*!***********************************************************************!*\
  !*** ./~/@angular/core/src/change_detection/change_detection_util.js ***!
  \***********************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_collection__ = __webpack_require__(/*! ../facade/collection */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UNINITIALIZED; });
/* harmony export (immutable) */ exports["b"] = devModeEqual;
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return WrappedValue; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return ValueUnwrapper; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return SimpleChange; });
/* unused harmony reexport looseIdentical */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



var UNINITIALIZED = {
    toString: function () { return 'CD_INIT_VALUE'; }
};
function devModeEqual(a, b) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_collection__["a" /* isListLikeIterable */])(a) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_collection__["a" /* isListLikeIterable */])(b)) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_collection__["c" /* areIterablesEqual */])(a, b, devModeEqual);
    }
    else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_collection__["a" /* isListLikeIterable */])(a) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["k" /* isPrimitive */])(a) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_collection__["a" /* isListLikeIterable */])(b) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["k" /* isPrimitive */])(b)) {
        return true;
    }
    else {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["i" /* looseIdentical */])(a, b);
    }
}
/**
 * Indicates that the result of a {@link Pipe} transformation has changed even though the
 * reference
 * has not changed.
 *
 * The wrapped value will be unwrapped by change detection, and the unwrapped value will be stored.
 *
 * Example:
 *
 * ```
 * if (this._latestValue === this._latestReturnedValue) {
 *    return this._latestReturnedValue;
 *  } else {
 *    this._latestReturnedValue = this._latestValue;
 *    return WrappedValue.wrap(this._latestValue); // this will force update
 *  }
 * ```
 * @stable
 */
var WrappedValue = (function () {
    function WrappedValue(wrapped) {
        this.wrapped = wrapped;
    }
    WrappedValue.wrap = function (value) { return new WrappedValue(value); };
    return WrappedValue;
}());
/**
 * Helper class for unwrapping WrappedValue s
 */
var ValueUnwrapper = (function () {
    function ValueUnwrapper() {
        this.hasWrappedValue = false;
    }
    ValueUnwrapper.prototype.unwrap = function (value) {
        if (value instanceof WrappedValue) {
            this.hasWrappedValue = true;
            return value.wrapped;
        }
        return value;
    };
    ValueUnwrapper.prototype.reset = function () { this.hasWrappedValue = false; };
    return ValueUnwrapper;
}());
/**
 * Represents a basic change from a previous to a new value.
 * @stable
 */
var SimpleChange = (function () {
    function SimpleChange(previousValue, currentValue) {
        this.previousValue = previousValue;
        this.currentValue = currentValue;
    }
    /**
     * Check whether the new value is the first value assigned.
     */
    SimpleChange.prototype.isFirstChange = function () { return this.previousValue === UNINITIALIZED; };
    return SimpleChange;
}());
//# sourceMappingURL=change_detection_util.js.map

/***/ },
/* 15 */
/* exports provided: ChangeDetectionStrategy, ChangeDetectorStatus, isDefaultChangeDetectionStrategy */
/* exports used: ChangeDetectionStrategy, ChangeDetectorStatus, isDefaultChangeDetectionStrategy */
/*!***********************************************************!*\
  !*** ./~/@angular/core/src/change_detection/constants.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChangeDetectionStrategy; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return ChangeDetectorStatus; });
/* harmony export (immutable) */ exports["c"] = isDefaultChangeDetectionStrategy;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Describes within the change detector which strategy will be used the next time change
 * detection is triggered.
 * @stable
 */
var ChangeDetectionStrategy;
(function (ChangeDetectionStrategy) {
    /**
     * `OnPush` means that the change detector's mode will be set to `CheckOnce` during hydration.
     */
    ChangeDetectionStrategy[ChangeDetectionStrategy["OnPush"] = 0] = "OnPush";
    /**
     * `Default` means that the change detector's mode will be set to `CheckAlways` during hydration.
     */
    ChangeDetectionStrategy[ChangeDetectionStrategy["Default"] = 1] = "Default";
})(ChangeDetectionStrategy || (ChangeDetectionStrategy = {}));
/**
 * Describes the status of the detector.
 */
var ChangeDetectorStatus;
(function (ChangeDetectorStatus) {
    /**
     * `CheckOnce` means that after calling detectChanges the mode of the change detector
     * will become `Checked`.
     */
    ChangeDetectorStatus[ChangeDetectorStatus["CheckOnce"] = 0] = "CheckOnce";
    /**
     * `Checked` means that the change detector should be skipped until its mode changes to
     * `CheckOnce`.
     */
    ChangeDetectorStatus[ChangeDetectorStatus["Checked"] = 1] = "Checked";
    /**
     * `CheckAlways` means that after calling detectChanges the mode of the change detector
     * will remain `CheckAlways`.
     */
    ChangeDetectorStatus[ChangeDetectorStatus["CheckAlways"] = 2] = "CheckAlways";
    /**
     * `Detached` means that the change detector sub tree is not a part of the main tree and
     * should be skipped.
     */
    ChangeDetectorStatus[ChangeDetectorStatus["Detached"] = 3] = "Detached";
    /**
     * `Errored` means that the change detector encountered an error checking a binding
     * or calling a directive lifecycle method and is now in an inconsistent state. Change
     * detectors in this state will no longer detect changes.
     */
    ChangeDetectorStatus[ChangeDetectorStatus["Errored"] = 4] = "Errored";
    /**
     * `Destroyed` means that the change detector is destroyed.
     */
    ChangeDetectorStatus[ChangeDetectorStatus["Destroyed"] = 5] = "Destroyed";
})(ChangeDetectorStatus || (ChangeDetectorStatus = {}));
function isDefaultChangeDetectionStrategy(changeDetectionStrategy) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["c" /* isBlank */])(changeDetectionStrategy) ||
        changeDetectionStrategy === ChangeDetectionStrategy.Default;
}
//# sourceMappingURL=constants.js.map

/***/ },
/* 16 */
/* exports provided: Inject, Optional, Injectable, Self, SkipSelf, Host */
/* exports used: Injectable, Inject, Optional, Self, Host, SkipSelf */
/*!********************************************!*\
  !*** ./~/@angular/core/src/di/metadata.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_decorators__ = __webpack_require__(/*! ../util/decorators */ 6);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Inject; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return Optional; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Injectable; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return Self; });
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return SkipSelf; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return Host; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Inject decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var Inject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_decorators__["a" /* makeParamDecorator */])('Inject', [['token', undefined]]);
/**
 * Optional decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var Optional = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_decorators__["a" /* makeParamDecorator */])('Optional', []);
/**
 * Injectable decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var Injectable = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_decorators__["a" /* makeParamDecorator */])('Injectable', []);
/**
 * Self decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var Self = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_decorators__["a" /* makeParamDecorator */])('Self', []);
/**
 * SkipSelf decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var SkipSelf = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_decorators__["a" /* makeParamDecorator */])('SkipSelf', []);
/**
 * Host decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var Host = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_decorators__["a" /* makeParamDecorator */])('Host', []);
//# sourceMappingURL=metadata.js.map

/***/ },
/* 17 */
/* exports provided: NoComponentFactoryError, ComponentFactoryResolver, CodegenComponentFactoryResolver */
/* exports used: ComponentFactoryResolver, CodegenComponentFactoryResolver */
/*!******************************************************************!*\
  !*** ./~/@angular/core/src/linker/component_factory_resolver.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_errors__ = __webpack_require__(/*! ../facade/errors */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 0);
/* unused harmony export NoComponentFactoryError */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ComponentFactoryResolver; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return CodegenComponentFactoryResolver; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * @stable
 */
var NoComponentFactoryError = (function (_super) {
    __extends(NoComponentFactoryError, _super);
    function NoComponentFactoryError(component) {
        _super.call(this, "No component factory found for " + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* stringify */])(component));
        this.component = component;
    }
    return NoComponentFactoryError;
}(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["b" /* BaseError */]));
var _NullComponentFactoryResolver = (function () {
    function _NullComponentFactoryResolver() {
    }
    _NullComponentFactoryResolver.prototype.resolveComponentFactory = function (component) {
        throw new NoComponentFactoryError(component);
    };
    return _NullComponentFactoryResolver;
}());
/**
 * @stable
 */
var ComponentFactoryResolver = (function () {
    function ComponentFactoryResolver() {
    }
    ComponentFactoryResolver.NULL = new _NullComponentFactoryResolver();
    return ComponentFactoryResolver;
}());
var CodegenComponentFactoryResolver = (function () {
    function CodegenComponentFactoryResolver(factories, _parent) {
        this._parent = _parent;
        this._factories = new Map();
        for (var i = 0; i < factories.length; i++) {
            var factory = factories[i];
            this._factories.set(factory.componentType, factory);
        }
    }
    CodegenComponentFactoryResolver.prototype.resolveComponentFactory = function (component) {
        var result = this._factories.get(component);
        if (!result) {
            result = this._parent.resolveComponentFactory(component);
        }
        return result;
    };
    return CodegenComponentFactoryResolver;
}());
//# sourceMappingURL=component_factory_resolver.js.map

/***/ },
/* 18 */
/* exports provided: ElementRef */
/* exports used: ElementRef */
/*!***************************************************!*\
  !*** ./~/@angular/core/src/linker/element_ref.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ElementRef; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A wrapper around a native element inside of a View.
 *
 * An `ElementRef` is backed by a render-specific element. In the browser, this is usually a DOM
 * element.
 *
 * @security Permitting direct access to the DOM can make your application more vulnerable to
 * XSS attacks. Carefully review any use of `ElementRef` in your code. For more detail, see the
 * [Security Guide](http://g.co/ng/security).
 *
 * @stable
 */
// Note: We don't expose things like `Injector`, `ViewContainer`, ... here,
// i.e. users have to ask for what they need. With that, we can build better analysis tools
// and could do better codegen in the future.
var ElementRef = (function () {
    function ElementRef(nativeElement) {
        this.nativeElement = nativeElement;
    }
    return ElementRef;
}());
//# sourceMappingURL=element_ref.js.map

/***/ },
/* 19 */
/* exports provided: ViewType */
/* exports used: ViewType */
/*!*************************************************!*\
  !*** ./~/@angular/core/src/linker/view_type.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ViewType; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ViewType;
(function (ViewType) {
    // A view that contains the host element with bound component directive.
    // Contains a COMPONENT view
    ViewType[ViewType["HOST"] = 0] = "HOST";
    // The view of the component
    // Can contain 0 to n EMBEDDED views
    ViewType[ViewType["COMPONENT"] = 1] = "COMPONENT";
    // A view that is embedded into another View via a <template> element
    // inside of a COMPONENT view
    ViewType[ViewType["EMBEDDED"] = 2] = "EMBEDDED";
})(ViewType || (ViewType = {}));
//# sourceMappingURL=view_type.js.map

/***/ },
/* 20 */
/* exports provided: ViewUtils, createRenderComponentType, addToArray, interpolate, inlineInterpolate, checkBinding, castByValue, EMPTY_ARRAY, EMPTY_MAP, pureProxy1, pureProxy2, pureProxy3, pureProxy4, pureProxy5, pureProxy6, pureProxy7, pureProxy8, pureProxy9, pureProxy10, setBindingDebugInfoForChanges, setBindingDebugInfo, createRenderElement, selectOrCreateRenderHostElement, subscribeToRenderElement, noop, InlineArray2, InlineArray4, InlineArray8, InlineArray16, InlineArrayDynamic, EMPTY_INLINE_ARRAY */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/@angular/core/src/linker/view_utils.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__ = __webpack_require__(/*! ../change_detection/change_detection */ 13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__change_detection_change_detection_util__ = __webpack_require__(/*! ../change_detection/change_detection_util */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__di__ = __webpack_require__(/*! ../di */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__render_api__ = __webpack_require__(/*! ../render/api */ 41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__security__ = __webpack_require__(/*! ../security */ 80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__errors__ = __webpack_require__(/*! ./errors */ 69);
/* harmony export (binding) */ __webpack_require__.d(exports, "ViewUtils", function() { return ViewUtils; });
/* harmony export (immutable) */ exports["createRenderComponentType"] = createRenderComponentType;
/* harmony export (immutable) */ exports["addToArray"] = addToArray;
/* harmony export (immutable) */ exports["interpolate"] = interpolate;
/* harmony export (immutable) */ exports["inlineInterpolate"] = inlineInterpolate;
/* harmony export (immutable) */ exports["checkBinding"] = checkBinding;
/* harmony export (immutable) */ exports["castByValue"] = castByValue;
/* harmony export (binding) */ __webpack_require__.d(exports, "EMPTY_ARRAY", function() { return EMPTY_ARRAY; });
/* harmony export (binding) */ __webpack_require__.d(exports, "EMPTY_MAP", function() { return EMPTY_MAP; });
/* harmony export (immutable) */ exports["pureProxy1"] = pureProxy1;
/* harmony export (immutable) */ exports["pureProxy2"] = pureProxy2;
/* harmony export (immutable) */ exports["pureProxy3"] = pureProxy3;
/* harmony export (immutable) */ exports["pureProxy4"] = pureProxy4;
/* harmony export (immutable) */ exports["pureProxy5"] = pureProxy5;
/* harmony export (immutable) */ exports["pureProxy6"] = pureProxy6;
/* harmony export (immutable) */ exports["pureProxy7"] = pureProxy7;
/* harmony export (immutable) */ exports["pureProxy8"] = pureProxy8;
/* harmony export (immutable) */ exports["pureProxy9"] = pureProxy9;
/* harmony export (immutable) */ exports["pureProxy10"] = pureProxy10;
/* harmony export (immutable) */ exports["setBindingDebugInfoForChanges"] = setBindingDebugInfoForChanges;
/* harmony export (immutable) */ exports["setBindingDebugInfo"] = setBindingDebugInfo;
/* harmony export (immutable) */ exports["createRenderElement"] = createRenderElement;
/* harmony export (immutable) */ exports["selectOrCreateRenderHostElement"] = selectOrCreateRenderHostElement;
/* harmony export (immutable) */ exports["subscribeToRenderElement"] = subscribeToRenderElement;
/* harmony export (immutable) */ exports["noop"] = noop;
/* harmony export (binding) */ __webpack_require__.d(exports, "InlineArray2", function() { return InlineArray2; });
/* harmony export (binding) */ __webpack_require__.d(exports, "InlineArray4", function() { return InlineArray4; });
/* harmony export (binding) */ __webpack_require__.d(exports, "InlineArray8", function() { return InlineArray8; });
/* harmony export (binding) */ __webpack_require__.d(exports, "InlineArray16", function() { return InlineArray16; });
/* harmony export (binding) */ __webpack_require__.d(exports, "InlineArrayDynamic", function() { return InlineArrayDynamic; });
/* harmony export (binding) */ __webpack_require__.d(exports, "EMPTY_INLINE_ARRAY", function() { return EMPTY_INLINE_ARRAY; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */







var ViewUtils = (function () {
    function ViewUtils(_renderer, sanitizer) {
        this._renderer = _renderer;
        this._nextCompTypeId = 0;
        this.sanitizer = sanitizer;
    }
    /** @internal */
    ViewUtils.prototype.renderComponent = function (renderComponentType) {
        return this._renderer.renderComponent(renderComponentType);
    };
    ViewUtils.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_2__di__["b" /* Injectable */] },
    ];
    /** @nocollapse */
    ViewUtils.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_4__render_api__["a" /* RootRenderer */], },
        { type: __WEBPACK_IMPORTED_MODULE_5__security__["a" /* Sanitizer */], },
    ];
    return ViewUtils;
}());
var nextRenderComponentTypeId = 0;
function createRenderComponentType(templateUrl, slotCount, encapsulation, styles, animations) {
    return new __WEBPACK_IMPORTED_MODULE_4__render_api__["b" /* RenderComponentType */]("" + nextRenderComponentTypeId++, templateUrl, slotCount, encapsulation, styles, animations);
}
function addToArray(e, array) {
    array.push(e);
}
function interpolate(valueCount, constAndInterp) {
    var result = '';
    for (var i = 0; i < valueCount * 2; i = i + 2) {
        result = result + constAndInterp[i] + _toStringWithNull(constAndInterp[i + 1]);
    }
    return result + constAndInterp[valueCount * 2];
}
function inlineInterpolate(valueCount, c0, a1, c1, a2, c2, a3, c3, a4, c4, a5, c5, a6, c6, a7, c7, a8, c8, a9, c9) {
    switch (valueCount) {
        case 1:
            return c0 + _toStringWithNull(a1) + c1;
        case 2:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2;
        case 3:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3;
        case 4:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3 + _toStringWithNull(a4) + c4;
        case 5:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5;
        case 6:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) + c6;
        case 7:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
                c6 + _toStringWithNull(a7) + c7;
        case 8:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
                c6 + _toStringWithNull(a7) + c7 + _toStringWithNull(a8) + c8;
        case 9:
            return c0 + _toStringWithNull(a1) + c1 + _toStringWithNull(a2) + c2 + _toStringWithNull(a3) +
                c3 + _toStringWithNull(a4) + c4 + _toStringWithNull(a5) + c5 + _toStringWithNull(a6) +
                c6 + _toStringWithNull(a7) + c7 + _toStringWithNull(a8) + c8 + _toStringWithNull(a9) + c9;
        default:
            throw new Error("Does not support more than 9 expressions");
    }
}
function _toStringWithNull(v) {
    return v != null ? v.toString() : '';
}
function checkBinding(throwOnChange, oldValue, newValue) {
    if (throwOnChange) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["a" /* devModeEqual */])(oldValue, newValue)) {
            throw new __WEBPACK_IMPORTED_MODULE_6__errors__["a" /* ExpressionChangedAfterItHasBeenCheckedError */](oldValue, newValue);
        }
        return false;
    }
    else {
        return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(oldValue, newValue);
    }
}
function castByValue(input, value) {
    return input;
}
var EMPTY_ARRAY = [];
var EMPTY_MAP = {};
function pureProxy1(fn) {
    var result;
    var v0 = __WEBPACK_IMPORTED_MODULE_1__change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    return function (p0) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v0, p0)) {
            v0 = p0;
            result = fn(p0);
        }
        return result;
    };
}
function pureProxy2(fn) {
    var result;
    var v0 = __WEBPACK_IMPORTED_MODULE_1__change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    var v1 = __WEBPACK_IMPORTED_MODULE_1__change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    return function (p0, p1) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v0, p0) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v1, p1)) {
            v0 = p0;
            v1 = p1;
            result = fn(p0, p1);
        }
        return result;
    };
}
function pureProxy3(fn) {
    var result;
    var v0 = __WEBPACK_IMPORTED_MODULE_1__change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    var v1 = __WEBPACK_IMPORTED_MODULE_1__change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    var v2 = __WEBPACK_IMPORTED_MODULE_1__change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    return function (p0, p1, p2) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v0, p0) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v1, p1) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v2, p2)) {
            v0 = p0;
            v1 = p1;
            v2 = p2;
            result = fn(p0, p1, p2);
        }
        return result;
    };
}
function pureProxy4(fn) {
    var result;
    var v0, v1, v2, v3;
    v0 = v1 = v2 = v3 = __WEBPACK_IMPORTED_MODULE_1__change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    return function (p0, p1, p2, p3) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v0, p0) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v1, p1) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v2, p2) ||
            !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v3, p3)) {
            v0 = p0;
            v1 = p1;
            v2 = p2;
            v3 = p3;
            result = fn(p0, p1, p2, p3);
        }
        return result;
    };
}
function pureProxy5(fn) {
    var result;
    var v0, v1, v2, v3, v4;
    v0 = v1 = v2 = v3 = v4 = __WEBPACK_IMPORTED_MODULE_1__change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    return function (p0, p1, p2, p3, p4) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v0, p0) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v1, p1) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v2, p2) ||
            !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v3, p3) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v4, p4)) {
            v0 = p0;
            v1 = p1;
            v2 = p2;
            v3 = p3;
            v4 = p4;
            result = fn(p0, p1, p2, p3, p4);
        }
        return result;
    };
}
function pureProxy6(fn) {
    var result;
    var v0, v1, v2, v3, v4, v5;
    v0 = v1 = v2 = v3 = v4 = v5 = __WEBPACK_IMPORTED_MODULE_1__change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    return function (p0, p1, p2, p3, p4, p5) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v0, p0) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v1, p1) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v2, p2) ||
            !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v3, p3) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v4, p4) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v5, p5)) {
            v0 = p0;
            v1 = p1;
            v2 = p2;
            v3 = p3;
            v4 = p4;
            v5 = p5;
            result = fn(p0, p1, p2, p3, p4, p5);
        }
        return result;
    };
}
function pureProxy7(fn) {
    var result;
    var v0, v1, v2, v3, v4, v5, v6;
    v0 = v1 = v2 = v3 = v4 = v5 = v6 = __WEBPACK_IMPORTED_MODULE_1__change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    return function (p0, p1, p2, p3, p4, p5, p6) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v0, p0) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v1, p1) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v2, p2) ||
            !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v3, p3) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v4, p4) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v5, p5) ||
            !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v6, p6)) {
            v0 = p0;
            v1 = p1;
            v2 = p2;
            v3 = p3;
            v4 = p4;
            v5 = p5;
            v6 = p6;
            result = fn(p0, p1, p2, p3, p4, p5, p6);
        }
        return result;
    };
}
function pureProxy8(fn) {
    var result;
    var v0, v1, v2, v3, v4, v5, v6, v7;
    v0 = v1 = v2 = v3 = v4 = v5 = v6 = v7 = __WEBPACK_IMPORTED_MODULE_1__change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    return function (p0, p1, p2, p3, p4, p5, p6, p7) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v0, p0) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v1, p1) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v2, p2) ||
            !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v3, p3) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v4, p4) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v5, p5) ||
            !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v6, p6) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v7, p7)) {
            v0 = p0;
            v1 = p1;
            v2 = p2;
            v3 = p3;
            v4 = p4;
            v5 = p5;
            v6 = p6;
            v7 = p7;
            result = fn(p0, p1, p2, p3, p4, p5, p6, p7);
        }
        return result;
    };
}
function pureProxy9(fn) {
    var result;
    var v0, v1, v2, v3, v4, v5, v6, v7, v8;
    v0 = v1 = v2 = v3 = v4 = v5 = v6 = v7 = v8 = __WEBPACK_IMPORTED_MODULE_1__change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    return function (p0, p1, p2, p3, p4, p5, p6, p7, p8) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v0, p0) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v1, p1) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v2, p2) ||
            !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v3, p3) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v4, p4) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v5, p5) ||
            !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v6, p6) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v7, p7) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v8, p8)) {
            v0 = p0;
            v1 = p1;
            v2 = p2;
            v3 = p3;
            v4 = p4;
            v5 = p5;
            v6 = p6;
            v7 = p7;
            v8 = p8;
            result = fn(p0, p1, p2, p3, p4, p5, p6, p7, p8);
        }
        return result;
    };
}
function pureProxy10(fn) {
    var result;
    var v0, v1, v2, v3, v4, v5, v6, v7, v8, v9;
    v0 = v1 = v2 = v3 = v4 = v5 = v6 = v7 = v8 = v9 = __WEBPACK_IMPORTED_MODULE_1__change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    return function (p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v0, p0) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v1, p1) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v2, p2) ||
            !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v3, p3) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v4, p4) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v5, p5) ||
            !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v6, p6) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v7, p7) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v8, p8) ||
            !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["i" /* looseIdentical */])(v9, p9)) {
            v0 = p0;
            v1 = p1;
            v2 = p2;
            v3 = p3;
            v4 = p4;
            v5 = p5;
            v6 = p6;
            v7 = p7;
            v8 = p8;
            v9 = p9;
            result = fn(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9);
        }
        return result;
    };
}
function setBindingDebugInfoForChanges(renderer, el, changes) {
    Object.keys(changes).forEach(function (propName) {
        setBindingDebugInfo(renderer, el, propName, changes[propName].currentValue);
    });
}
function setBindingDebugInfo(renderer, el, propName, value) {
    try {
        renderer.setBindingDebugInfo(el, "ng-reflect-" + camelCaseToDashCase(propName), value ? value.toString() : null);
    }
    catch (e) {
        renderer.setBindingDebugInfo(el, "ng-reflect-" + camelCaseToDashCase(propName), '[ERROR] Exception while trying to serialize the value');
    }
}
var CAMEL_CASE_REGEXP = /([A-Z])/g;
function camelCaseToDashCase(input) {
    return input.replace(CAMEL_CASE_REGEXP, function () {
        var m = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            m[_i - 0] = arguments[_i];
        }
        return '-' + m[1].toLowerCase();
    });
}
function createRenderElement(renderer, parentElement, name, attrs, debugInfo) {
    var el = renderer.createElement(parentElement, name, debugInfo);
    for (var i = 0; i < attrs.length; i += 2) {
        renderer.setElementAttribute(el, attrs.get(i), attrs.get(i + 1));
    }
    return el;
}
function selectOrCreateRenderHostElement(renderer, elementName, attrs, rootSelectorOrNode, debugInfo) {
    var hostElement;
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["d" /* isPresent */])(rootSelectorOrNode)) {
        hostElement = renderer.selectRootElement(rootSelectorOrNode, debugInfo);
        for (var i = 0; i < attrs.length; i += 2) {
            renderer.setElementAttribute(hostElement, attrs.get(i), attrs.get(i + 1));
        }
    }
    else {
        hostElement = createRenderElement(renderer, null, elementName, attrs, debugInfo);
    }
    return hostElement;
}
function subscribeToRenderElement(view, element, eventNamesAndTargets, listener) {
    var disposables = createEmptyInlineArray(eventNamesAndTargets.length / 2);
    for (var i = 0; i < eventNamesAndTargets.length; i += 2) {
        var eventName = eventNamesAndTargets.get(i);
        var eventTarget = eventNamesAndTargets.get(i + 1);
        var disposable = void 0;
        if (eventTarget) {
            disposable = view.renderer.listenGlobal(eventTarget, eventName, listener.bind(view, eventTarget + ":" + eventName));
        }
        else {
            disposable = view.renderer.listen(element, eventName, listener.bind(view, eventName));
        }
        disposables.set(i / 2, disposable);
    }
    return disposeInlineArray.bind(null, disposables);
}
function disposeInlineArray(disposables) {
    for (var i = 0; i < disposables.length; i++) {
        disposables.get(i)();
    }
}
function noop() { }
function createEmptyInlineArray(length) {
    var ctor;
    if (length <= 2) {
        ctor = InlineArray2;
    }
    else if (length <= 4) {
        ctor = InlineArray4;
    }
    else if (length <= 8) {
        ctor = InlineArray8;
    }
    else if (length <= 16) {
        ctor = InlineArray16;
    }
    else {
        ctor = InlineArrayDynamic;
    }
    return new ctor(length);
}
var InlineArray0 = (function () {
    function InlineArray0() {
        this.length = 0;
    }
    InlineArray0.prototype.get = function (index) { return undefined; };
    InlineArray0.prototype.set = function (index, value) { };
    return InlineArray0;
}());
var InlineArray2 = (function () {
    function InlineArray2(length, _v0, _v1) {
        this.length = length;
        this._v0 = _v0;
        this._v1 = _v1;
    }
    InlineArray2.prototype.get = function (index) {
        switch (index) {
            case 0:
                return this._v0;
            case 1:
                return this._v1;
            default:
                return undefined;
        }
    };
    InlineArray2.prototype.set = function (index, value) {
        switch (index) {
            case 0:
                this._v0 = value;
                break;
            case 1:
                this._v1 = value;
                break;
        }
    };
    return InlineArray2;
}());
var InlineArray4 = (function () {
    function InlineArray4(length, _v0, _v1, _v2, _v3) {
        this.length = length;
        this._v0 = _v0;
        this._v1 = _v1;
        this._v2 = _v2;
        this._v3 = _v3;
    }
    InlineArray4.prototype.get = function (index) {
        switch (index) {
            case 0:
                return this._v0;
            case 1:
                return this._v1;
            case 2:
                return this._v2;
            case 3:
                return this._v3;
            default:
                return undefined;
        }
    };
    InlineArray4.prototype.set = function (index, value) {
        switch (index) {
            case 0:
                this._v0 = value;
                break;
            case 1:
                this._v1 = value;
                break;
            case 2:
                this._v2 = value;
                break;
            case 3:
                this._v3 = value;
                break;
        }
    };
    return InlineArray4;
}());
var InlineArray8 = (function () {
    function InlineArray8(length, _v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7) {
        this.length = length;
        this._v0 = _v0;
        this._v1 = _v1;
        this._v2 = _v2;
        this._v3 = _v3;
        this._v4 = _v4;
        this._v5 = _v5;
        this._v6 = _v6;
        this._v7 = _v7;
    }
    InlineArray8.prototype.get = function (index) {
        switch (index) {
            case 0:
                return this._v0;
            case 1:
                return this._v1;
            case 2:
                return this._v2;
            case 3:
                return this._v3;
            case 4:
                return this._v4;
            case 5:
                return this._v5;
            case 6:
                return this._v6;
            case 7:
                return this._v7;
            default:
                return undefined;
        }
    };
    InlineArray8.prototype.set = function (index, value) {
        switch (index) {
            case 0:
                this._v0 = value;
                break;
            case 1:
                this._v1 = value;
                break;
            case 2:
                this._v2 = value;
                break;
            case 3:
                this._v3 = value;
                break;
            case 4:
                this._v4 = value;
                break;
            case 5:
                this._v5 = value;
                break;
            case 6:
                this._v6 = value;
                break;
            case 7:
                this._v7 = value;
                break;
        }
    };
    return InlineArray8;
}());
var InlineArray16 = (function () {
    function InlineArray16(length, _v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14, _v15) {
        this.length = length;
        this._v0 = _v0;
        this._v1 = _v1;
        this._v2 = _v2;
        this._v3 = _v3;
        this._v4 = _v4;
        this._v5 = _v5;
        this._v6 = _v6;
        this._v7 = _v7;
        this._v8 = _v8;
        this._v9 = _v9;
        this._v10 = _v10;
        this._v11 = _v11;
        this._v12 = _v12;
        this._v13 = _v13;
        this._v14 = _v14;
        this._v15 = _v15;
    }
    InlineArray16.prototype.get = function (index) {
        switch (index) {
            case 0:
                return this._v0;
            case 1:
                return this._v1;
            case 2:
                return this._v2;
            case 3:
                return this._v3;
            case 4:
                return this._v4;
            case 5:
                return this._v5;
            case 6:
                return this._v6;
            case 7:
                return this._v7;
            case 8:
                return this._v8;
            case 9:
                return this._v9;
            case 10:
                return this._v10;
            case 11:
                return this._v11;
            case 12:
                return this._v12;
            case 13:
                return this._v13;
            case 14:
                return this._v14;
            case 15:
                return this._v15;
            default:
                return undefined;
        }
    };
    InlineArray16.prototype.set = function (index, value) {
        switch (index) {
            case 0:
                this._v0 = value;
                break;
            case 1:
                this._v1 = value;
                break;
            case 2:
                this._v2 = value;
                break;
            case 3:
                this._v3 = value;
                break;
            case 4:
                this._v4 = value;
                break;
            case 5:
                this._v5 = value;
                break;
            case 6:
                this._v6 = value;
                break;
            case 7:
                this._v7 = value;
                break;
            case 8:
                this._v8 = value;
                break;
            case 9:
                this._v9 = value;
                break;
            case 10:
                this._v10 = value;
                break;
            case 11:
                this._v11 = value;
                break;
            case 12:
                this._v12 = value;
                break;
            case 13:
                this._v13 = value;
                break;
            case 14:
                this._v14 = value;
                break;
            case 15:
                this._v15 = value;
                break;
        }
    };
    return InlineArray16;
}());
var InlineArrayDynamic = (function () {
    // Note: We still take the length argument so this class can be created
    // in the same ways as the other classes!
    function InlineArrayDynamic(length) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        this.length = length;
        this._values = values;
    }
    InlineArrayDynamic.prototype.get = function (index) { return this._values[index]; };
    InlineArrayDynamic.prototype.set = function (index, value) { this._values[index] = value; };
    return InlineArrayDynamic;
}());
var EMPTY_INLINE_ARRAY = new InlineArray0();
//# sourceMappingURL=view_utils.js.map

/***/ },
/* 21 */
/* exports provided: wtfEnabled, wtfCreateScope, wtfLeave, wtfStartTimeRange, wtfEndTimeRange */
/* exports used: wtfLeave, wtfCreateScope, wtfStartTimeRange, wtfEndTimeRange */
/*!************************************************!*\
  !*** ./~/@angular/core/src/profile/profile.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wtf_impl__ = __webpack_require__(/*! ./wtf_impl */ 132);
/* unused harmony export wtfEnabled */
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return wtfCreateScope; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return wtfLeave; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return wtfStartTimeRange; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return wtfEndTimeRange; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * True if WTF is enabled.
 */
var wtfEnabled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__wtf_impl__["a" /* detectWTF */])();
function noopScope(arg0, arg1) {
    return null;
}
/**
 * Create trace scope.
 *
 * Scopes must be strictly nested and are analogous to stack frames, but
 * do not have to follow the stack frames. Instead it is recommended that they follow logical
 * nesting. You may want to use
 * [Event
 * Signatures](http://google.github.io/tracing-framework/instrumenting-code.html#custom-events)
 * as they are defined in WTF.
 *
 * Used to mark scope entry. The return value is used to leave the scope.
 *
 *     var myScope = wtfCreateScope('MyClass#myMethod(ascii someVal)');
 *
 *     someMethod() {
 *        var s = myScope('Foo'); // 'Foo' gets stored in tracing UI
 *        // DO SOME WORK HERE
 *        return wtfLeave(s, 123); // Return value 123
 *     }
 *
 * Note, adding try-finally block around the work to ensure that `wtfLeave` gets called can
 * negatively impact the performance of your application. For this reason we recommend that
 * you don't add them to ensure that `wtfLeave` gets called. In production `wtfLeave` is a noop and
 * so try-finally block has no value. When debugging perf issues, skipping `wtfLeave`, do to
 * exception, will produce incorrect trace, but presence of exception signifies logic error which
 * needs to be fixed before the app should be profiled. Add try-finally only when you expect that
 * an exception is expected during normal execution while profiling.
 *
 * @experimental
 */
var wtfCreateScope = wtfEnabled ? __WEBPACK_IMPORTED_MODULE_0__wtf_impl__["b" /* createScope */] : function (signature, flags) { return noopScope; };
/**
 * Used to mark end of Scope.
 *
 * - `scope` to end.
 * - `returnValue` (optional) to be passed to the WTF.
 *
 * Returns the `returnValue for easy chaining.
 * @experimental
 */
var wtfLeave = wtfEnabled ? __WEBPACK_IMPORTED_MODULE_0__wtf_impl__["c" /* leave */] : function (s, r) { return r; };
/**
 * Used to mark Async start. Async are similar to scope but they don't have to be strictly nested.
 * The return value is used in the call to [endAsync]. Async ranges only work if WTF has been
 * enabled.
 *
 *     someMethod() {
 *        var s = wtfStartTimeRange('HTTP:GET', 'some.url');
 *        var future = new Future.delay(5).then((_) {
 *          wtfEndTimeRange(s);
 *        });
 *     }
 * @experimental
 */
var wtfStartTimeRange = wtfEnabled ? __WEBPACK_IMPORTED_MODULE_0__wtf_impl__["d" /* startTimeRange */] : function (rangeType, action) { return null; };
/**
 * Ends a async time range operation.
 * [range] is the return value from [wtfStartTimeRange] Async ranges only work if WTF has been
 * enabled.
 * @experimental
 */
var wtfEndTimeRange = wtfEnabled ? __WEBPACK_IMPORTED_MODULE_0__wtf_impl__["e" /* endTimeRange */] : function (r) { return null; };
//# sourceMappingURL=profile.js.map

/***/ },
/* 22 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./src/sample.component.ts ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ 1);
var SampleComponent = (function () {
    function SampleComponent() {
    }
    SampleComponent = __decorate([
        core_1.Component({
            selector: 'sampleComponent',
            template: "<h1>Sample component from library</h1>"
        }), 
        __metadata('design:paramtypes', [])
    ], SampleComponent);
    return SampleComponent;
}());
exports.SampleComponent = SampleComponent;


/***/ },
/* 23 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./src/sample.directive.ts ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ 1);
var SampleDirective = (function () {
    function SampleDirective(el) {
        this.el = el;
    }
    SampleDirective = __decorate([
        core_1.Directive({
            selector: '[sampleDirective]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], SampleDirective);
    return SampleDirective;
}());
exports.SampleDirective = SampleDirective;


/***/ },
/* 24 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** ./src/sample.pipe.ts ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ 1);
/**
 * Transforms any input value
 */
var SamplePipe = (function () {
    function SamplePipe() {
    }
    SamplePipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return value;
    };
    SamplePipe = __decorate([
        core_1.Pipe({
            name: 'samplePipe'
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SamplePipe);
    return SamplePipe;
}());
exports.SamplePipe = SamplePipe;


/***/ },
/* 25 */
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./src/sample.service.ts ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ 1);
var SampleService = (function () {
    function SampleService() {
    }
    SampleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SampleService);
    return SampleService;
}());
exports.SampleService = SampleService;


/***/ },
/* 26 */
/* exports provided: Location */
/* exports used: Location */
/*!****************************************************!*\
  !*** ./~/@angular/common/src/location/location.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__location_strategy__ = __webpack_require__(/*! ./location_strategy */ 11);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Location; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * `Location` is a service that applications can use to interact with a browser's URL.
 * Depending on which {@link LocationStrategy} is used, `Location` will either persist
 * to the URL's path or the URL's hash segment.
 *
 * Note: it's better to use {@link Router#navigate} service to trigger route changes. Use
 * `Location` only if you need to interact with or create normalized URLs outside of
 * routing.
 *
 * `Location` is responsible for normalizing the URL against the application's base href.
 * A normalized URL is absolute from the URL host, includes the application's base href, and has no
 * trailing slash:
 * - `/my/app/user/123` is normalized
 * - `my/app/user/123` **is not** normalized
 * - `/my/app/user/123/` **is not** normalized
 *
 * ### Example
 *
 * ```
 * import {Component} from '@angular/core';
 * import {Location} from '@angular/common';
 *
 * @Component({selector: 'app-component'})
 * class AppCmp {
 *   constructor(location: Location) {
 *     location.go('/foo');
 *   }
 * }
 * ```
 *
 * @stable
 */
var Location = (function () {
    function Location(platformStrategy) {
        var _this = this;
        /** @internal */
        this._subject = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._platformStrategy = platformStrategy;
        var browserBaseHref = this._platformStrategy.getBaseHref();
        this._baseHref = Location.stripTrailingSlash(_stripIndexHtml(browserBaseHref));
        this._platformStrategy.onPopState(function (ev) {
            _this._subject.emit({
                'url': _this.path(true),
                'pop': true,
                'type': ev.type,
            });
        });
    }
    /**
     * Returns the normalized URL path.
     */
    // TODO: vsavkin. Remove the boolean flag and always include hash once the deprecated router is
    // removed.
    Location.prototype.path = function (includeHash) {
        if (includeHash === void 0) { includeHash = false; }
        return this.normalize(this._platformStrategy.path(includeHash));
    };
    /**
     * Normalizes the given path and compares to the current normalized path.
     */
    Location.prototype.isCurrentPathEqualTo = function (path, query) {
        if (query === void 0) { query = ''; }
        return this.path() == this.normalize(path + Location.normalizeQueryParams(query));
    };
    /**
     * Given a string representing a URL, returns the normalized URL path without leading or
     * trailing slashes.
     */
    Location.prototype.normalize = function (url) {
        return Location.stripTrailingSlash(_stripBaseHref(this._baseHref, _stripIndexHtml(url)));
    };
    /**
     * Given a string representing a URL, returns the platform-specific external URL path.
     * If the given URL doesn't begin with a leading slash (`'/'`), this method adds one
     * before normalizing. This method will also add a hash if `HashLocationStrategy` is
     * used, or the `APP_BASE_HREF` if the `PathLocationStrategy` is in use.
     */
    Location.prototype.prepareExternalUrl = function (url) {
        if (url.length > 0 && !url.startsWith('/')) {
            url = '/' + url;
        }
        return this._platformStrategy.prepareExternalUrl(url);
    };
    // TODO: rename this method to pushState
    /**
     * Changes the browsers URL to the normalized version of the given URL, and pushes a
     * new item onto the platform's history.
     */
    Location.prototype.go = function (path, query) {
        if (query === void 0) { query = ''; }
        this._platformStrategy.pushState(null, '', path, query);
    };
    /**
     * Changes the browsers URL to the normalized version of the given URL, and replaces
     * the top item on the platform's history stack.
     */
    Location.prototype.replaceState = function (path, query) {
        if (query === void 0) { query = ''; }
        this._platformStrategy.replaceState(null, '', path, query);
    };
    /**
     * Navigates forward in the platform's history.
     */
    Location.prototype.forward = function () { this._platformStrategy.forward(); };
    /**
     * Navigates back in the platform's history.
     */
    Location.prototype.back = function () { this._platformStrategy.back(); };
    /**
     * Subscribe to the platform's `popState` events.
     */
    Location.prototype.subscribe = function (onNext, onThrow, onReturn) {
        if (onThrow === void 0) { onThrow = null; }
        if (onReturn === void 0) { onReturn = null; }
        return this._subject.subscribe({ next: onNext, error: onThrow, complete: onReturn });
    };
    /**
     * Given a string of url parameters, prepend with '?' if needed, otherwise return parameters as
     * is.
     */
    Location.normalizeQueryParams = function (params) {
        return (params.length > 0 && params.substring(0, 1) != '?') ? ('?' + params) : params;
    };
    /**
     * Given 2 parts of a url, join them with a slash if needed.
     */
    Location.joinWithSlash = function (start, end) {
        if (start.length == 0) {
            return end;
        }
        if (end.length == 0) {
            return start;
        }
        var slashes = 0;
        if (start.endsWith('/')) {
            slashes++;
        }
        if (end.startsWith('/')) {
            slashes++;
        }
        if (slashes == 2) {
            return start + end.substring(1);
        }
        if (slashes == 1) {
            return start + end;
        }
        return start + '/' + end;
    };
    /**
     * If url has a trailing slash, remove it, otherwise return url as is.
     */
    Location.stripTrailingSlash = function (url) {
        if (/\/$/g.test(url)) {
            url = url.substring(0, url.length - 1);
        }
        return url;
    };
    Location.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    Location.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_1__location_strategy__["a" /* LocationStrategy */], },
    ];
    return Location;
}());
function _stripBaseHref(baseHref, url) {
    if (baseHref.length > 0 && url.startsWith(baseHref)) {
        return url.substring(baseHref.length);
    }
    return url;
}
function _stripIndexHtml(url) {
    if (/\/index.html$/g.test(url)) {
        // '/index.html'.length == 11
        return url.substring(0, url.length - 11);
    }
    return url;
}
//# sourceMappingURL=location.js.map

/***/ },
/* 27 */
/* exports provided: PlatformLocation */
/* exports used: PlatformLocation */
/*!*************************************************************!*\
  !*** ./~/@angular/common/src/location/platform_location.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PlatformLocation; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * This class should not be used directly by an application developer. Instead, use
 * {@link Location}.
 *
 * `PlatformLocation` encapsulates all calls to DOM apis, which allows the Router to be platform
 * agnostic.
 * This means that we can have different implementation of `PlatformLocation` for the different
 * platforms
 * that angular supports. For example, the default `PlatformLocation` is {@link
 * BrowserPlatformLocation},
 * however when you run your app in a WebWorker you use {@link WebWorkerPlatformLocation}.
 *
 * The `PlatformLocation` class is used directly by all implementations of {@link LocationStrategy}
 * when
 * they need to interact with the DOM apis like pushState, popState, etc...
 *
 * {@link LocationStrategy} in turn is used by the {@link Location} service which is used directly
 * by
 * the {@link Router} in order to navigate between routes. Since all interactions between {@link
 * Router} /
 * {@link Location} / {@link LocationStrategy} and DOM apis flow through the `PlatformLocation`
 * class
 * they are all platform independent.
 *
 * @stable
 */
var PlatformLocation = (function () {
    function PlatformLocation() {
    }
    Object.defineProperty(PlatformLocation.prototype, "pathname", {
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformLocation.prototype, "search", {
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformLocation.prototype, "hash", {
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    return PlatformLocation;
}());
//# sourceMappingURL=platform_location.js.map

/***/ },
/* 28 */
/* exports provided: AnimationPlayer, NoOpAnimationPlayer */
/* exports used: NoOpAnimationPlayer, AnimationPlayer */
/*!***********************************************************!*\
  !*** ./~/@angular/core/src/animation/animation_player.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 0);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return AnimationPlayer; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NoOpAnimationPlayer; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @experimental Animation support is experimental.
 */
var AnimationPlayer = (function () {
    function AnimationPlayer() {
    }
    Object.defineProperty(AnimationPlayer.prototype, "parentPlayer", {
        get: function () { throw new Error('NOT IMPLEMENTED: Base Class'); },
        set: function (player) { throw new Error('NOT IMPLEMENTED: Base Class'); },
        enumerable: true,
        configurable: true
    });
    return AnimationPlayer;
}());
var NoOpAnimationPlayer = (function () {
    function NoOpAnimationPlayer() {
        var _this = this;
        this._onDoneFns = [];
        this._onStartFns = [];
        this._started = false;
        this.parentPlayer = null;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["l" /* scheduleMicroTask */])(function () { return _this._onFinish(); });
    }
    /** @internal */
    NoOpAnimationPlayer.prototype._onFinish = function () {
        this._onDoneFns.forEach(function (fn) { return fn(); });
        this._onDoneFns = [];
    };
    NoOpAnimationPlayer.prototype.onStart = function (fn) { this._onStartFns.push(fn); };
    NoOpAnimationPlayer.prototype.onDone = function (fn) { this._onDoneFns.push(fn); };
    NoOpAnimationPlayer.prototype.hasStarted = function () { return this._started; };
    NoOpAnimationPlayer.prototype.init = function () { };
    NoOpAnimationPlayer.prototype.play = function () {
        if (!this.hasStarted()) {
            this._onStartFns.forEach(function (fn) { return fn(); });
            this._onStartFns = [];
        }
        this._started = true;
    };
    NoOpAnimationPlayer.prototype.pause = function () { };
    NoOpAnimationPlayer.prototype.restart = function () { };
    NoOpAnimationPlayer.prototype.finish = function () { this._onFinish(); };
    NoOpAnimationPlayer.prototype.destroy = function () { };
    NoOpAnimationPlayer.prototype.reset = function () { };
    NoOpAnimationPlayer.prototype.setPosition = function (p) { };
    NoOpAnimationPlayer.prototype.getPosition = function () { return 0; };
    return NoOpAnimationPlayer;
}());
//# sourceMappingURL=animation_player.js.map

/***/ },
/* 29 */
/* exports provided: APP_INITIALIZER, ApplicationInitStatus */
/* exports used: ApplicationInitStatus, APP_INITIALIZER */
/*!*************************************************!*\
  !*** ./~/@angular/core/src/application_init.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_util_lang__ = __webpack_require__(/*! ../src/util/lang */ 44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__di__ = __webpack_require__(/*! ./di */ 4);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return APP_INITIALIZER; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ApplicationInitStatus; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * A function that will be executed when an application is initialized.
 * @experimental
 */
var APP_INITIALIZER = new __WEBPACK_IMPORTED_MODULE_1__di__["a" /* OpaqueToken */]('Application Initializer');
/**
 * A class that reflects the state of running {@link APP_INITIALIZER}s.
 *
 * @experimental
 */
var ApplicationInitStatus = (function () {
    function ApplicationInitStatus(appInits) {
        var _this = this;
        this._done = false;
        var asyncInitPromises = [];
        if (appInits) {
            for (var i = 0; i < appInits.length; i++) {
                var initResult = appInits[i]();
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__src_util_lang__["a" /* isPromise */])(initResult)) {
                    asyncInitPromises.push(initResult);
                }
            }
        }
        this._donePromise = Promise.all(asyncInitPromises).then(function () { _this._done = true; });
        if (asyncInitPromises.length === 0) {
            this._done = true;
        }
    }
    Object.defineProperty(ApplicationInitStatus.prototype, "done", {
        get: function () { return this._done; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationInitStatus.prototype, "donePromise", {
        get: function () { return this._donePromise; },
        enumerable: true,
        configurable: true
    });
    ApplicationInitStatus.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__di__["b" /* Injectable */] },
    ];
    /** @nocollapse */
    ApplicationInitStatus.ctorParameters = [
        { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__di__["c" /* Inject */], args: [APP_INITIALIZER,] }, { type: __WEBPACK_IMPORTED_MODULE_1__di__["d" /* Optional */] },] },
    ];
    return ApplicationInitStatus;
}());
//# sourceMappingURL=application_init.js.map

/***/ },
/* 30 */
/* exports provided: enableProdMode, isDevMode, createPlatform, createPlatformFactory, assertPlatform, destroyPlatform, getPlatform, PlatformRef, PlatformRef_, ApplicationRef, ApplicationRef_ */
/* exports used: PlatformRef_, PlatformRef, createPlatformFactory, ApplicationRef_, ApplicationRef, assertPlatform, destroyPlatform, getPlatform, createPlatform, enableProdMode, isDevMode */
/*!************************************************!*\
  !*** ./~/@angular/core/src/application_ref.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_error_handler__ = __webpack_require__(/*! ../src/error_handler */ 65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_facade_collection__ = __webpack_require__(/*! ../src/facade/collection */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_facade_errors__ = __webpack_require__(/*! ../src/facade/errors */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_facade_lang__ = __webpack_require__(/*! ../src/facade/lang */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_util_lang__ = __webpack_require__(/*! ../src/util/lang */ 44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__application_init__ = __webpack_require__(/*! ./application_init */ 29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__application_tokens__ = __webpack_require__(/*! ./application_tokens */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__console__ = __webpack_require__(/*! ./console */ 32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__di__ = __webpack_require__(/*! ./di */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__linker_compiler__ = __webpack_require__(/*! ./linker/compiler */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__linker_component_factory__ = __webpack_require__(/*! ./linker/component_factory */ 38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__linker_component_factory_resolver__ = __webpack_require__(/*! ./linker/component_factory_resolver */ 17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_profile__ = __webpack_require__(/*! ./profile/profile */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__testability_testability__ = __webpack_require__(/*! ./testability/testability */ 42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__zone_ng_zone__ = __webpack_require__(/*! ./zone/ng_zone */ 45);
/* harmony export (immutable) */ exports["j"] = enableProdMode;
/* harmony export (immutable) */ exports["k"] = isDevMode;
/* harmony export (immutable) */ exports["i"] = createPlatform;
/* harmony export (immutable) */ exports["c"] = createPlatformFactory;
/* harmony export (immutable) */ exports["f"] = assertPlatform;
/* harmony export (immutable) */ exports["g"] = destroyPlatform;
/* harmony export (immutable) */ exports["h"] = getPlatform;
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return PlatformRef; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PlatformRef_; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return ApplicationRef; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return ApplicationRef_; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};















var _devMode = true;
var _runModeLocked = false;
var _platform;
/**
 * Disable Angular's development mode, which turns off assertions and other
 * checks within the framework.
 *
 * One important assertion this disables verifies that a change detection pass
 * does not result in additional changes to any bindings (also known as
 * unidirectional data flow).
 *
 * @stable
 */
function enableProdMode() {
    if (_runModeLocked) {
        throw new Error('Cannot enable prod mode after platform setup.');
    }
    _devMode = false;
}
/**
 * Returns whether Angular is in development mode. After called once,
 * the value is locked and won't change any more.
 *
 * By default, this is true, unless a user calls `enableProdMode` before calling this.
 *
 * @experimental APIs related to application bootstrap are currently under review.
 */
function isDevMode() {
    _runModeLocked = true;
    return _devMode;
}
/**
 * Creates a platform.
 * Platforms have to be eagerly created via this function.
 *
 * @experimental APIs related to application bootstrap are currently under review.
 */
function createPlatform(injector) {
    if (_platform && !_platform.destroyed) {
        throw new Error('There can be only one platform. Destroy the previous one to create a new one.');
    }
    _platform = injector.get(PlatformRef);
    var inits = injector.get(__WEBPACK_IMPORTED_MODULE_6__application_tokens__["a" /* PLATFORM_INITIALIZER */], null);
    if (inits)
        inits.forEach(function (init) { return init(); });
    return _platform;
}
/**
 * Creates a factory for a platform
 *
 * @experimental APIs related to application bootstrap are currently under review.
 */
function createPlatformFactory(parentPlaformFactory, name, providers) {
    if (providers === void 0) { providers = []; }
    var marker = new __WEBPACK_IMPORTED_MODULE_8__di__["a" /* OpaqueToken */]("Platform: " + name);
    return function (extraProviders) {
        if (extraProviders === void 0) { extraProviders = []; }
        if (!getPlatform()) {
            if (parentPlaformFactory) {
                parentPlaformFactory(providers.concat(extraProviders).concat({ provide: marker, useValue: true }));
            }
            else {
                createPlatform(__WEBPACK_IMPORTED_MODULE_8__di__["f" /* ReflectiveInjector */].resolveAndCreate(providers.concat(extraProviders).concat({ provide: marker, useValue: true })));
            }
        }
        return assertPlatform(marker);
    };
}
/**
 * Checks that there currently is a platform
 * which contains the given token as a provider.
 *
 * @experimental APIs related to application bootstrap are currently under review.
 */
function assertPlatform(requiredToken) {
    var platform = getPlatform();
    if (!platform) {
        throw new Error('No platform exists!');
    }
    if (!platform.injector.get(requiredToken, null)) {
        throw new Error('A platform with a different configuration has been created. Please destroy it first.');
    }
    return platform;
}
/**
 * Destroy the existing platform.
 *
 * @experimental APIs related to application bootstrap are currently under review.
 */
function destroyPlatform() {
    if (_platform && !_platform.destroyed) {
        _platform.destroy();
    }
}
/**
 * Returns the current platform.
 *
 * @experimental APIs related to application bootstrap are currently under review.
 */
function getPlatform() {
    return _platform && !_platform.destroyed ? _platform : null;
}
/**
 * The Angular platform is the entry point for Angular on a web page. Each page
 * has exactly one platform, and services (such as reflection) which are common
 * to every Angular application running on the page are bound in its scope.
 *
 * A page's platform is initialized implicitly when {@link bootstrap}() is called, or
 * explicitly by calling {@link createPlatform}().
 *
 * @stable
 */
var PlatformRef = (function () {
    function PlatformRef() {
    }
    /**
     * Creates an instance of an `@NgModule` for the given platform
     * for offline compilation.
     *
     * ## Simple Example
     *
     * ```typescript
     * my_module.ts:
     *
     * @NgModule({
     *   imports: [BrowserModule]
     * })
     * class MyModule {}
     *
     * main.ts:
     * import {MyModuleNgFactory} from './my_module.ngfactory';
     * import {platformBrowser} from '@angular/platform-browser';
     *
     * let moduleRef = platformBrowser().bootstrapModuleFactory(MyModuleNgFactory);
     * ```
     *
     * @experimental APIs related to application bootstrap are currently under review.
     */
    PlatformRef.prototype.bootstrapModuleFactory = function (moduleFactory) {
        throw __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__src_facade_errors__["a" /* unimplemented */])();
    };
    /**
     * Creates an instance of an `@NgModule` for a given platform using the given runtime compiler.
     *
     * ## Simple Example
     *
     * ```typescript
     * @NgModule({
     *   imports: [BrowserModule]
     * })
     * class MyModule {}
     *
     * let moduleRef = platformBrowser().bootstrapModule(MyModule);
     * ```
     * @stable
     */
    PlatformRef.prototype.bootstrapModule = function (moduleType, compilerOptions) {
        if (compilerOptions === void 0) { compilerOptions = []; }
        throw __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__src_facade_errors__["a" /* unimplemented */])();
    };
    Object.defineProperty(PlatformRef.prototype, "injector", {
        /**
         * Retrieve the platform {@link Injector}, which is the parent injector for
         * every Angular application on the page and provides singleton providers.
         */
        get: function () { throw __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__src_facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(PlatformRef.prototype, "destroyed", {
        get: function () { throw __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__src_facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    return PlatformRef;
}());
function _callAndReportToErrorHandler(errorHandler, callback) {
    try {
        var result = callback();
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__src_util_lang__["a" /* isPromise */])(result)) {
            return result.catch(function (e) {
                errorHandler.handleError(e);
                // rethrow as the exception handler might not do it
                throw e;
            });
        }
        return result;
    }
    catch (e) {
        errorHandler.handleError(e);
        // rethrow as the exception handler might not do it
        throw e;
    }
}
var PlatformRef_ = (function (_super) {
    __extends(PlatformRef_, _super);
    function PlatformRef_(_injector) {
        _super.call(this);
        this._injector = _injector;
        this._modules = [];
        this._destroyListeners = [];
        this._destroyed = false;
    }
    PlatformRef_.prototype.onDestroy = function (callback) { this._destroyListeners.push(callback); };
    Object.defineProperty(PlatformRef_.prototype, "injector", {
        get: function () { return this._injector; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformRef_.prototype, "destroyed", {
        get: function () { return this._destroyed; },
        enumerable: true,
        configurable: true
    });
    PlatformRef_.prototype.destroy = function () {
        if (this._destroyed) {
            throw new Error('The platform has already been destroyed!');
        }
        this._modules.slice().forEach(function (module) { return module.destroy(); });
        this._destroyListeners.forEach(function (listener) { return listener(); });
        this._destroyed = true;
    };
    PlatformRef_.prototype.bootstrapModuleFactory = function (moduleFactory) {
        return this._bootstrapModuleFactoryWithZone(moduleFactory, null);
    };
    PlatformRef_.prototype._bootstrapModuleFactoryWithZone = function (moduleFactory, ngZone) {
        var _this = this;
        // Note: We need to create the NgZone _before_ we instantiate the module,
        // as instantiating the module creates some providers eagerly.
        // So we create a mini parent injector that just contains the new NgZone and
        // pass that as parent to the NgModuleFactory.
        if (!ngZone)
            ngZone = new __WEBPACK_IMPORTED_MODULE_14__zone_ng_zone__["a" /* NgZone */]({ enableLongStackTrace: isDevMode() });
        // Attention: Don't use ApplicationRef.run here,
        // as we want to be sure that all possible constructor calls are inside `ngZone.run`!
        return ngZone.run(function () {
            var ngZoneInjector = __WEBPACK_IMPORTED_MODULE_8__di__["f" /* ReflectiveInjector */].resolveAndCreate([{ provide: __WEBPACK_IMPORTED_MODULE_14__zone_ng_zone__["a" /* NgZone */], useValue: ngZone }], _this.injector);
            var moduleRef = moduleFactory.create(ngZoneInjector);
            var exceptionHandler = moduleRef.injector.get(__WEBPACK_IMPORTED_MODULE_0__src_error_handler__["a" /* ErrorHandler */], null);
            if (!exceptionHandler) {
                throw new Error('No ErrorHandler. Is platform module (BrowserModule) included?');
            }
            moduleRef.onDestroy(function () { return __WEBPACK_IMPORTED_MODULE_1__src_facade_collection__["d" /* ListWrapper */].remove(_this._modules, moduleRef); });
            ngZone.onError.subscribe({ next: function (error) { exceptionHandler.handleError(error); } });
            return _callAndReportToErrorHandler(exceptionHandler, function () {
                var initStatus = moduleRef.injector.get(__WEBPACK_IMPORTED_MODULE_5__application_init__["a" /* ApplicationInitStatus */]);
                return initStatus.donePromise.then(function () {
                    _this._moduleDoBootstrap(moduleRef);
                    return moduleRef;
                });
            });
        });
    };
    PlatformRef_.prototype.bootstrapModule = function (moduleType, compilerOptions) {
        if (compilerOptions === void 0) { compilerOptions = []; }
        return this._bootstrapModuleWithZone(moduleType, compilerOptions, null);
    };
    PlatformRef_.prototype._bootstrapModuleWithZone = function (moduleType, compilerOptions, ngZone, componentFactoryCallback) {
        var _this = this;
        if (compilerOptions === void 0) { compilerOptions = []; }
        var compilerFactory = this.injector.get(__WEBPACK_IMPORTED_MODULE_9__linker_compiler__["a" /* CompilerFactory */]);
        var compiler = compilerFactory.createCompiler(Array.isArray(compilerOptions) ? compilerOptions : [compilerOptions]);
        // ugly internal api hack: generate host component factories for all declared components and
        // pass the factories into the callback - this is used by UpdateAdapter to get hold of all
        // factories.
        if (componentFactoryCallback) {
            return compiler.compileModuleAndAllComponentsAsync(moduleType)
                .then(function (_a) {
                var ngModuleFactory = _a.ngModuleFactory, componentFactories = _a.componentFactories;
                componentFactoryCallback(componentFactories);
                return _this._bootstrapModuleFactoryWithZone(ngModuleFactory, ngZone);
            });
        }
        return compiler.compileModuleAsync(moduleType)
            .then(function (moduleFactory) { return _this._bootstrapModuleFactoryWithZone(moduleFactory, ngZone); });
    };
    PlatformRef_.prototype._moduleDoBootstrap = function (moduleRef) {
        var appRef = moduleRef.injector.get(ApplicationRef);
        if (moduleRef.bootstrapFactories.length > 0) {
            moduleRef.bootstrapFactories.forEach(function (compFactory) { return appRef.bootstrap(compFactory); });
        }
        else if (moduleRef.instance.ngDoBootstrap) {
            moduleRef.instance.ngDoBootstrap(appRef);
        }
        else {
            throw new Error(("The module " + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__src_facade_lang__["b" /* stringify */])(moduleRef.instance.constructor) + " was bootstrapped, but it does not declare \"@NgModule.bootstrap\" components nor a \"ngDoBootstrap\" method. ") +
                "Please define one of these.");
        }
    };
    PlatformRef_.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_8__di__["b" /* Injectable */] },
    ];
    /** @nocollapse */
    PlatformRef_.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_8__di__["g" /* Injector */], },
    ];
    return PlatformRef_;
}(PlatformRef));
/**
 * A reference to an Angular application running on a page.
 *
 * For more about Angular applications, see the documentation for {@link bootstrap}.
 *
 * @stable
 */
var ApplicationRef = (function () {
    function ApplicationRef() {
    }
    Object.defineProperty(ApplicationRef.prototype, "componentTypes", {
        /**
         * Get a list of component types registered to this application.
         * This list is populated even before the component is created.
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__src_facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ApplicationRef.prototype, "components", {
        /**
         * Get a list of components registered to this application.
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__src_facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    ;
    return ApplicationRef;
}());
var ApplicationRef_ = (function (_super) {
    __extends(ApplicationRef_, _super);
    function ApplicationRef_(_zone, _console, _injector, _exceptionHandler, _componentFactoryResolver, _initStatus, _testabilityRegistry, _testability) {
        var _this = this;
        _super.call(this);
        this._zone = _zone;
        this._console = _console;
        this._injector = _injector;
        this._exceptionHandler = _exceptionHandler;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._initStatus = _initStatus;
        this._testabilityRegistry = _testabilityRegistry;
        this._testability = _testability;
        this._bootstrapListeners = [];
        this._rootComponents = [];
        this._rootComponentTypes = [];
        this._changeDetectorRefs = [];
        this._runningTick = false;
        this._enforceNoNewChanges = false;
        this._enforceNoNewChanges = isDevMode();
        this._zone.onMicrotaskEmpty.subscribe({ next: function () { _this._zone.run(function () { _this.tick(); }); } });
    }
    ApplicationRef_.prototype.registerChangeDetector = function (changeDetector) {
        this._changeDetectorRefs.push(changeDetector);
    };
    ApplicationRef_.prototype.unregisterChangeDetector = function (changeDetector) {
        __WEBPACK_IMPORTED_MODULE_1__src_facade_collection__["d" /* ListWrapper */].remove(this._changeDetectorRefs, changeDetector);
    };
    ApplicationRef_.prototype.bootstrap = function (componentOrFactory) {
        var _this = this;
        if (!this._initStatus.done) {
            throw new Error('Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.');
        }
        var componentFactory;
        if (componentOrFactory instanceof __WEBPACK_IMPORTED_MODULE_10__linker_component_factory__["a" /* ComponentFactory */]) {
            componentFactory = componentOrFactory;
        }
        else {
            componentFactory = this._componentFactoryResolver.resolveComponentFactory(componentOrFactory);
        }
        this._rootComponentTypes.push(componentFactory.componentType);
        var compRef = componentFactory.create(this._injector, [], componentFactory.selector);
        compRef.onDestroy(function () { _this._unloadComponent(compRef); });
        var testability = compRef.injector.get(__WEBPACK_IMPORTED_MODULE_13__testability_testability__["a" /* Testability */], null);
        if (testability) {
            compRef.injector.get(__WEBPACK_IMPORTED_MODULE_13__testability_testability__["b" /* TestabilityRegistry */])
                .registerApplication(compRef.location.nativeElement, testability);
        }
        this._loadComponent(compRef);
        if (isDevMode()) {
            this._console.log("Angular 2 is running in the development mode. Call enableProdMode() to enable the production mode.");
        }
        return compRef;
    };
    /** @internal */
    ApplicationRef_.prototype._loadComponent = function (componentRef) {
        this._changeDetectorRefs.push(componentRef.changeDetectorRef);
        this.tick();
        this._rootComponents.push(componentRef);
        // Get the listeners lazily to prevent DI cycles.
        var listeners = this._injector.get(__WEBPACK_IMPORTED_MODULE_6__application_tokens__["b" /* APP_BOOTSTRAP_LISTENER */], [])
            .concat(this._bootstrapListeners);
        listeners.forEach(function (listener) { return listener(componentRef); });
    };
    /** @internal */
    ApplicationRef_.prototype._unloadComponent = function (componentRef) {
        if (this._rootComponents.indexOf(componentRef) == -1) {
            return;
        }
        this.unregisterChangeDetector(componentRef.changeDetectorRef);
        __WEBPACK_IMPORTED_MODULE_1__src_facade_collection__["d" /* ListWrapper */].remove(this._rootComponents, componentRef);
    };
    ApplicationRef_.prototype.tick = function () {
        if (this._runningTick) {
            throw new Error('ApplicationRef.tick is called recursively');
        }
        var scope = ApplicationRef_._tickScope();
        try {
            this._runningTick = true;
            this._changeDetectorRefs.forEach(function (detector) { return detector.detectChanges(); });
            if (this._enforceNoNewChanges) {
                this._changeDetectorRefs.forEach(function (detector) { return detector.checkNoChanges(); });
            }
        }
        finally {
            this._runningTick = false;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__profile_profile__["a" /* wtfLeave */])(scope);
        }
    };
    ApplicationRef_.prototype.ngOnDestroy = function () {
        // TODO(alxhub): Dispose of the NgZone.
        this._rootComponents.slice().forEach(function (component) { return component.destroy(); });
    };
    Object.defineProperty(ApplicationRef_.prototype, "componentTypes", {
        get: function () { return this._rootComponentTypes; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationRef_.prototype, "components", {
        get: function () { return this._rootComponents; },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    ApplicationRef_._tickScope = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__profile_profile__["b" /* wtfCreateScope */])('ApplicationRef#tick()');
    ApplicationRef_.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_8__di__["b" /* Injectable */] },
    ];
    /** @nocollapse */
    ApplicationRef_.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_14__zone_ng_zone__["a" /* NgZone */], },
        { type: __WEBPACK_IMPORTED_MODULE_7__console__["a" /* Console */], },
        { type: __WEBPACK_IMPORTED_MODULE_8__di__["g" /* Injector */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__src_error_handler__["a" /* ErrorHandler */], },
        { type: __WEBPACK_IMPORTED_MODULE_11__linker_component_factory_resolver__["a" /* ComponentFactoryResolver */], },
        { type: __WEBPACK_IMPORTED_MODULE_5__application_init__["a" /* ApplicationInitStatus */], },
        { type: __WEBPACK_IMPORTED_MODULE_13__testability_testability__["b" /* TestabilityRegistry */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_8__di__["d" /* Optional */] },] },
        { type: __WEBPACK_IMPORTED_MODULE_13__testability_testability__["a" /* Testability */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_8__di__["d" /* Optional */] },] },
    ];
    return ApplicationRef_;
}(ApplicationRef));
//# sourceMappingURL=application_ref.js.map

/***/ },
/* 31 */
/* exports provided: DefaultIterableDifferFactory, DefaultIterableDiffer, CollectionChangeRecord */
/* exports used: DefaultIterableDifferFactory, CollectionChangeRecord, DefaultIterableDiffer */
/*!*********************************************************************************!*\
  !*** ./~/@angular/core/src/change_detection/differs/default_iterable_differ.js ***!
  \*********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_collection__ = __webpack_require__(/*! ../../facade/collection */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(/*! ../../facade/lang */ 0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DefaultIterableDifferFactory; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return DefaultIterableDiffer; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return CollectionChangeRecord; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var DefaultIterableDifferFactory = (function () {
    function DefaultIterableDifferFactory() {
    }
    DefaultIterableDifferFactory.prototype.supports = function (obj) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_collection__["a" /* isListLikeIterable */])(obj); };
    DefaultIterableDifferFactory.prototype.create = function (cdRef, trackByFn) {
        return new DefaultIterableDiffer(trackByFn);
    };
    return DefaultIterableDifferFactory;
}());
var trackByIdentity = function (index, item) { return item; };
/**
 * @stable
 */
var DefaultIterableDiffer = (function () {
    function DefaultIterableDiffer(_trackByFn) {
        this._trackByFn = _trackByFn;
        this._length = null;
        this._collection = null;
        // Keeps track of the used records at any point in time (during & across `_check()` calls)
        this._linkedRecords = null;
        // Keeps track of the removed records at any point in time during `_check()` calls.
        this._unlinkedRecords = null;
        this._previousItHead = null;
        this._itHead = null;
        this._itTail = null;
        this._additionsHead = null;
        this._additionsTail = null;
        this._movesHead = null;
        this._movesTail = null;
        this._removalsHead = null;
        this._removalsTail = null;
        // Keeps track of records where custom track by is the same, but item identity has changed
        this._identityChangesHead = null;
        this._identityChangesTail = null;
        this._trackByFn = this._trackByFn || trackByIdentity;
    }
    Object.defineProperty(DefaultIterableDiffer.prototype, "collection", {
        get: function () { return this._collection; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultIterableDiffer.prototype, "length", {
        get: function () { return this._length; },
        enumerable: true,
        configurable: true
    });
    DefaultIterableDiffer.prototype.forEachItem = function (fn) {
        var record;
        for (record = this._itHead; record !== null; record = record._next) {
            fn(record);
        }
    };
    DefaultIterableDiffer.prototype.forEachOperation = function (fn) {
        var nextIt = this._itHead;
        var nextRemove = this._removalsHead;
        var addRemoveOffset = 0;
        var moveOffsets = null;
        while (nextIt || nextRemove) {
            // Figure out which is the next record to process
            // Order: remove, add, move
            var record = !nextRemove ||
                nextIt &&
                    nextIt.currentIndex < getPreviousIndex(nextRemove, addRemoveOffset, moveOffsets) ?
                nextIt :
                nextRemove;
            var adjPreviousIndex = getPreviousIndex(record, addRemoveOffset, moveOffsets);
            var currentIndex = record.currentIndex;
            // consume the item, and adjust the addRemoveOffset and update moveDistance if necessary
            if (record === nextRemove) {
                addRemoveOffset--;
                nextRemove = nextRemove._nextRemoved;
            }
            else {
                nextIt = nextIt._next;
                if (record.previousIndex == null) {
                    addRemoveOffset++;
                }
                else {
                    // INVARIANT:  currentIndex < previousIndex
                    if (!moveOffsets)
                        moveOffsets = [];
                    var localMovePreviousIndex = adjPreviousIndex - addRemoveOffset;
                    var localCurrentIndex = currentIndex - addRemoveOffset;
                    if (localMovePreviousIndex != localCurrentIndex) {
                        for (var i = 0; i < localMovePreviousIndex; i++) {
                            var offset = i < moveOffsets.length ? moveOffsets[i] : (moveOffsets[i] = 0);
                            var index = offset + i;
                            if (localCurrentIndex <= index && index < localMovePreviousIndex) {
                                moveOffsets[i] = offset + 1;
                            }
                        }
                        var previousIndex = record.previousIndex;
                        moveOffsets[previousIndex] = localCurrentIndex - localMovePreviousIndex;
                    }
                }
            }
            if (adjPreviousIndex !== currentIndex) {
                fn(record, adjPreviousIndex, currentIndex);
            }
        }
    };
    DefaultIterableDiffer.prototype.forEachPreviousItem = function (fn) {
        var record;
        for (record = this._previousItHead; record !== null; record = record._nextPrevious) {
            fn(record);
        }
    };
    DefaultIterableDiffer.prototype.forEachAddedItem = function (fn) {
        var record;
        for (record = this._additionsHead; record !== null; record = record._nextAdded) {
            fn(record);
        }
    };
    DefaultIterableDiffer.prototype.forEachMovedItem = function (fn) {
        var record;
        for (record = this._movesHead; record !== null; record = record._nextMoved) {
            fn(record);
        }
    };
    DefaultIterableDiffer.prototype.forEachRemovedItem = function (fn) {
        var record;
        for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
            fn(record);
        }
    };
    DefaultIterableDiffer.prototype.forEachIdentityChange = function (fn) {
        var record;
        for (record = this._identityChangesHead; record !== null; record = record._nextIdentityChange) {
            fn(record);
        }
    };
    DefaultIterableDiffer.prototype.diff = function (collection) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["c" /* isBlank */])(collection))
            collection = [];
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_collection__["a" /* isListLikeIterable */])(collection)) {
            throw new Error("Error trying to diff '" + collection + "'");
        }
        if (this.check(collection)) {
            return this;
        }
        else {
            return null;
        }
    };
    DefaultIterableDiffer.prototype.onDestroy = function () { };
    // todo(vicb): optim for UnmodifiableListView (frozen arrays)
    DefaultIterableDiffer.prototype.check = function (collection) {
        var _this = this;
        this._reset();
        var record = this._itHead;
        var mayBeDirty = false;
        var index;
        var item;
        var itemTrackBy;
        if (Array.isArray(collection)) {
            var list = collection;
            this._length = collection.length;
            for (var index_1 = 0; index_1 < this._length; index_1++) {
                item = list[index_1];
                itemTrackBy = this._trackByFn(index_1, item);
                if (record === null || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["i" /* looseIdentical */])(record.trackById, itemTrackBy)) {
                    record = this._mismatch(record, item, itemTrackBy, index_1);
                    mayBeDirty = true;
                }
                else {
                    if (mayBeDirty) {
                        // TODO(misko): can we limit this to duplicates only?
                        record = this._verifyReinsertion(record, item, itemTrackBy, index_1);
                    }
                    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["i" /* looseIdentical */])(record.item, item))
                        this._addIdentityChange(record, item);
                }
                record = record._next;
            }
        }
        else {
            index = 0;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_collection__["b" /* iterateListLike */])(collection, function (item /** TODO #9100 */) {
                itemTrackBy = _this._trackByFn(index, item);
                if (record === null || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["i" /* looseIdentical */])(record.trackById, itemTrackBy)) {
                    record = _this._mismatch(record, item, itemTrackBy, index);
                    mayBeDirty = true;
                }
                else {
                    if (mayBeDirty) {
                        // TODO(misko): can we limit this to duplicates only?
                        record = _this._verifyReinsertion(record, item, itemTrackBy, index);
                    }
                    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["i" /* looseIdentical */])(record.item, item))
                        _this._addIdentityChange(record, item);
                }
                record = record._next;
                index++;
            });
            this._length = index;
        }
        this._truncate(record);
        this._collection = collection;
        return this.isDirty;
    };
    Object.defineProperty(DefaultIterableDiffer.prototype, "isDirty", {
        /* CollectionChanges is considered dirty if it has any additions, moves, removals, or identity
         * changes.
         */
        get: function () {
            return this._additionsHead !== null || this._movesHead !== null ||
                this._removalsHead !== null || this._identityChangesHead !== null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Reset the state of the change objects to show no changes. This means set previousKey to
     * currentKey, and clear all of the queues (additions, moves, removals).
     * Set the previousIndexes of moved and added items to their currentIndexes
     * Reset the list of additions, moves and removals
     *
     * @internal
     */
    DefaultIterableDiffer.prototype._reset = function () {
        if (this.isDirty) {
            var record = void 0;
            var nextRecord = void 0;
            for (record = this._previousItHead = this._itHead; record !== null; record = record._next) {
                record._nextPrevious = record._next;
            }
            for (record = this._additionsHead; record !== null; record = record._nextAdded) {
                record.previousIndex = record.currentIndex;
            }
            this._additionsHead = this._additionsTail = null;
            for (record = this._movesHead; record !== null; record = nextRecord) {
                record.previousIndex = record.currentIndex;
                nextRecord = record._nextMoved;
            }
            this._movesHead = this._movesTail = null;
            this._removalsHead = this._removalsTail = null;
            this._identityChangesHead = this._identityChangesTail = null;
        }
    };
    /**
     * This is the core function which handles differences between collections.
     *
     * - `record` is the record which we saw at this position last time. If null then it is a new
     *   item.
     * - `item` is the current item in the collection
     * - `index` is the position of the item in the collection
     *
     * @internal
     */
    DefaultIterableDiffer.prototype._mismatch = function (record, item, itemTrackBy, index) {
        // The previous record after which we will append the current one.
        var previousRecord;
        if (record === null) {
            previousRecord = this._itTail;
        }
        else {
            previousRecord = record._prev;
            // Remove the record from the collection since we know it does not match the item.
            this._remove(record);
        }
        // Attempt to see if we have seen the item before.
        record = this._linkedRecords === null ? null : this._linkedRecords.get(itemTrackBy, index);
        if (record !== null) {
            // We have seen this before, we need to move it forward in the collection.
            // But first we need to check if identity changed, so we can update in view if necessary
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["i" /* looseIdentical */])(record.item, item))
                this._addIdentityChange(record, item);
            this._moveAfter(record, previousRecord, index);
        }
        else {
            // Never seen it, check evicted list.
            record = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(itemTrackBy);
            if (record !== null) {
                // It is an item which we have evicted earlier: reinsert it back into the list.
                // But first we need to check if identity changed, so we can update in view if necessary
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["i" /* looseIdentical */])(record.item, item))
                    this._addIdentityChange(record, item);
                this._reinsertAfter(record, previousRecord, index);
            }
            else {
                // It is a new item: add it.
                record =
                    this._addAfter(new CollectionChangeRecord(item, itemTrackBy), previousRecord, index);
            }
        }
        return record;
    };
    /**
     * This check is only needed if an array contains duplicates. (Short circuit of nothing dirty)
     *
     * Use case: `[a, a]` => `[b, a, a]`
     *
     * If we did not have this check then the insertion of `b` would:
     *   1) evict first `a`
     *   2) insert `b` at `0` index.
     *   3) leave `a` at index `1` as is. <-- this is wrong!
     *   3) reinsert `a` at index 2. <-- this is wrong!
     *
     * The correct behavior is:
     *   1) evict first `a`
     *   2) insert `b` at `0` index.
     *   3) reinsert `a` at index 1.
     *   3) move `a` at from `1` to `2`.
     *
     *
     * Double check that we have not evicted a duplicate item. We need to check if the item type may
     * have already been removed:
     * The insertion of b will evict the first 'a'. If we don't reinsert it now it will be reinserted
     * at the end. Which will show up as the two 'a's switching position. This is incorrect, since a
     * better way to think of it is as insert of 'b' rather then switch 'a' with 'b' and then add 'a'
     * at the end.
     *
     * @internal
     */
    DefaultIterableDiffer.prototype._verifyReinsertion = function (record, item, itemTrackBy, index) {
        var reinsertRecord = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(itemTrackBy);
        if (reinsertRecord !== null) {
            record = this._reinsertAfter(reinsertRecord, record._prev, index);
        }
        else if (record.currentIndex != index) {
            record.currentIndex = index;
            this._addToMoves(record, index);
        }
        return record;
    };
    /**
     * Get rid of any excess {@link CollectionChangeRecord}s from the previous collection
     *
     * - `record` The first excess {@link CollectionChangeRecord}.
     *
     * @internal
     */
    DefaultIterableDiffer.prototype._truncate = function (record) {
        // Anything after that needs to be removed;
        while (record !== null) {
            var nextRecord = record._next;
            this._addToRemovals(this._unlink(record));
            record = nextRecord;
        }
        if (this._unlinkedRecords !== null) {
            this._unlinkedRecords.clear();
        }
        if (this._additionsTail !== null) {
            this._additionsTail._nextAdded = null;
        }
        if (this._movesTail !== null) {
            this._movesTail._nextMoved = null;
        }
        if (this._itTail !== null) {
            this._itTail._next = null;
        }
        if (this._removalsTail !== null) {
            this._removalsTail._nextRemoved = null;
        }
        if (this._identityChangesTail !== null) {
            this._identityChangesTail._nextIdentityChange = null;
        }
    };
    /** @internal */
    DefaultIterableDiffer.prototype._reinsertAfter = function (record, prevRecord, index) {
        if (this._unlinkedRecords !== null) {
            this._unlinkedRecords.remove(record);
        }
        var prev = record._prevRemoved;
        var next = record._nextRemoved;
        if (prev === null) {
            this._removalsHead = next;
        }
        else {
            prev._nextRemoved = next;
        }
        if (next === null) {
            this._removalsTail = prev;
        }
        else {
            next._prevRemoved = prev;
        }
        this._insertAfter(record, prevRecord, index);
        this._addToMoves(record, index);
        return record;
    };
    /** @internal */
    DefaultIterableDiffer.prototype._moveAfter = function (record, prevRecord, index) {
        this._unlink(record);
        this._insertAfter(record, prevRecord, index);
        this._addToMoves(record, index);
        return record;
    };
    /** @internal */
    DefaultIterableDiffer.prototype._addAfter = function (record, prevRecord, index) {
        this._insertAfter(record, prevRecord, index);
        if (this._additionsTail === null) {
            // todo(vicb)
            // assert(this._additionsHead === null);
            this._additionsTail = this._additionsHead = record;
        }
        else {
            // todo(vicb)
            // assert(_additionsTail._nextAdded === null);
            // assert(record._nextAdded === null);
            this._additionsTail = this._additionsTail._nextAdded = record;
        }
        return record;
    };
    /** @internal */
    DefaultIterableDiffer.prototype._insertAfter = function (record, prevRecord, index) {
        // todo(vicb)
        // assert(record != prevRecord);
        // assert(record._next === null);
        // assert(record._prev === null);
        var next = prevRecord === null ? this._itHead : prevRecord._next;
        // todo(vicb)
        // assert(next != record);
        // assert(prevRecord != record);
        record._next = next;
        record._prev = prevRecord;
        if (next === null) {
            this._itTail = record;
        }
        else {
            next._prev = record;
        }
        if (prevRecord === null) {
            this._itHead = record;
        }
        else {
            prevRecord._next = record;
        }
        if (this._linkedRecords === null) {
            this._linkedRecords = new _DuplicateMap();
        }
        this._linkedRecords.put(record);
        record.currentIndex = index;
        return record;
    };
    /** @internal */
    DefaultIterableDiffer.prototype._remove = function (record) {
        return this._addToRemovals(this._unlink(record));
    };
    /** @internal */
    DefaultIterableDiffer.prototype._unlink = function (record) {
        if (this._linkedRecords !== null) {
            this._linkedRecords.remove(record);
        }
        var prev = record._prev;
        var next = record._next;
        // todo(vicb)
        // assert((record._prev = null) === null);
        // assert((record._next = null) === null);
        if (prev === null) {
            this._itHead = next;
        }
        else {
            prev._next = next;
        }
        if (next === null) {
            this._itTail = prev;
        }
        else {
            next._prev = prev;
        }
        return record;
    };
    /** @internal */
    DefaultIterableDiffer.prototype._addToMoves = function (record, toIndex) {
        // todo(vicb)
        // assert(record._nextMoved === null);
        if (record.previousIndex === toIndex) {
            return record;
        }
        if (this._movesTail === null) {
            // todo(vicb)
            // assert(_movesHead === null);
            this._movesTail = this._movesHead = record;
        }
        else {
            // todo(vicb)
            // assert(_movesTail._nextMoved === null);
            this._movesTail = this._movesTail._nextMoved = record;
        }
        return record;
    };
    /** @internal */
    DefaultIterableDiffer.prototype._addToRemovals = function (record) {
        if (this._unlinkedRecords === null) {
            this._unlinkedRecords = new _DuplicateMap();
        }
        this._unlinkedRecords.put(record);
        record.currentIndex = null;
        record._nextRemoved = null;
        if (this._removalsTail === null) {
            // todo(vicb)
            // assert(_removalsHead === null);
            this._removalsTail = this._removalsHead = record;
            record._prevRemoved = null;
        }
        else {
            // todo(vicb)
            // assert(_removalsTail._nextRemoved === null);
            // assert(record._nextRemoved === null);
            record._prevRemoved = this._removalsTail;
            this._removalsTail = this._removalsTail._nextRemoved = record;
        }
        return record;
    };
    /** @internal */
    DefaultIterableDiffer.prototype._addIdentityChange = function (record, item) {
        record.item = item;
        if (this._identityChangesTail === null) {
            this._identityChangesTail = this._identityChangesHead = record;
        }
        else {
            this._identityChangesTail = this._identityChangesTail._nextIdentityChange = record;
        }
        return record;
    };
    DefaultIterableDiffer.prototype.toString = function () {
        var list = [];
        this.forEachItem(function (record /** TODO #9100 */) { return list.push(record); });
        var previous = [];
        this.forEachPreviousItem(function (record /** TODO #9100 */) { return previous.push(record); });
        var additions = [];
        this.forEachAddedItem(function (record /** TODO #9100 */) { return additions.push(record); });
        var moves = [];
        this.forEachMovedItem(function (record /** TODO #9100 */) { return moves.push(record); });
        var removals = [];
        this.forEachRemovedItem(function (record /** TODO #9100 */) { return removals.push(record); });
        var identityChanges = [];
        this.forEachIdentityChange(function (record /** TODO #9100 */) { return identityChanges.push(record); });
        return 'collection: ' + list.join(', ') + '\n' +
            'previous: ' + previous.join(', ') + '\n' +
            'additions: ' + additions.join(', ') + '\n' +
            'moves: ' + moves.join(', ') + '\n' +
            'removals: ' + removals.join(', ') + '\n' +
            'identityChanges: ' + identityChanges.join(', ') + '\n';
    };
    return DefaultIterableDiffer;
}());
/**
 * @stable
 */
var CollectionChangeRecord = (function () {
    function CollectionChangeRecord(item, trackById) {
        this.item = item;
        this.trackById = trackById;
        this.currentIndex = null;
        this.previousIndex = null;
        /** @internal */
        this._nextPrevious = null;
        /** @internal */
        this._prev = null;
        /** @internal */
        this._next = null;
        /** @internal */
        this._prevDup = null;
        /** @internal */
        this._nextDup = null;
        /** @internal */
        this._prevRemoved = null;
        /** @internal */
        this._nextRemoved = null;
        /** @internal */
        this._nextAdded = null;
        /** @internal */
        this._nextMoved = null;
        /** @internal */
        this._nextIdentityChange = null;
    }
    CollectionChangeRecord.prototype.toString = function () {
        return this.previousIndex === this.currentIndex ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* stringify */])(this.item) :
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* stringify */])(this.item) + '[' +
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* stringify */])(this.previousIndex) + '->' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* stringify */])(this.currentIndex) + ']';
    };
    return CollectionChangeRecord;
}());
// A linked list of CollectionChangeRecords with the same CollectionChangeRecord.item
var _DuplicateItemRecordList = (function () {
    function _DuplicateItemRecordList() {
        /** @internal */
        this._head = null;
        /** @internal */
        this._tail = null;
    }
    /**
     * Append the record to the list of duplicates.
     *
     * Note: by design all records in the list of duplicates hold the same value in record.item.
     */
    _DuplicateItemRecordList.prototype.add = function (record) {
        if (this._head === null) {
            this._head = this._tail = record;
            record._nextDup = null;
            record._prevDup = null;
        }
        else {
            // todo(vicb)
            // assert(record.item ==  _head.item ||
            //       record.item is num && record.item.isNaN && _head.item is num && _head.item.isNaN);
            this._tail._nextDup = record;
            record._prevDup = this._tail;
            record._nextDup = null;
            this._tail = record;
        }
    };
    // Returns a CollectionChangeRecord having CollectionChangeRecord.trackById == trackById and
    // CollectionChangeRecord.currentIndex >= afterIndex
    _DuplicateItemRecordList.prototype.get = function (trackById, afterIndex) {
        var record;
        for (record = this._head; record !== null; record = record._nextDup) {
            if ((afterIndex === null || afterIndex < record.currentIndex) &&
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["i" /* looseIdentical */])(record.trackById, trackById)) {
                return record;
            }
        }
        return null;
    };
    /**
     * Remove one {@link CollectionChangeRecord} from the list of duplicates.
     *
     * Returns whether the list of duplicates is empty.
     */
    _DuplicateItemRecordList.prototype.remove = function (record) {
        // todo(vicb)
        // assert(() {
        //  // verify that the record being removed is in the list.
        //  for (CollectionChangeRecord cursor = _head; cursor != null; cursor = cursor._nextDup) {
        //    if (identical(cursor, record)) return true;
        //  }
        //  return false;
        //});
        var prev = record._prevDup;
        var next = record._nextDup;
        if (prev === null) {
            this._head = next;
        }
        else {
            prev._nextDup = next;
        }
        if (next === null) {
            this._tail = prev;
        }
        else {
            next._prevDup = prev;
        }
        return this._head === null;
    };
    return _DuplicateItemRecordList;
}());
var _DuplicateMap = (function () {
    function _DuplicateMap() {
        this.map = new Map();
    }
    _DuplicateMap.prototype.put = function (record) {
        var key = record.trackById;
        var duplicates = this.map.get(key);
        if (!duplicates) {
            duplicates = new _DuplicateItemRecordList();
            this.map.set(key, duplicates);
        }
        duplicates.add(record);
    };
    /**
     * Retrieve the `value` using key. Because the CollectionChangeRecord value may be one which we
     * have already iterated over, we use the afterIndex to pretend it is not there.
     *
     * Use case: `[a, b, c, a, a]` if we are at index `3` which is the second `a` then asking if we
     * have any more `a`s needs to return the last `a` not the first or second.
     */
    _DuplicateMap.prototype.get = function (trackById, afterIndex) {
        if (afterIndex === void 0) { afterIndex = null; }
        var key = trackById;
        var recordList = this.map.get(key);
        return recordList ? recordList.get(trackById, afterIndex) : null;
    };
    /**
     * Removes a {@link CollectionChangeRecord} from the list of duplicates.
     *
     * The list of duplicates also is removed from the map if it gets empty.
     */
    _DuplicateMap.prototype.remove = function (record) {
        var key = record.trackById;
        var recordList = this.map.get(key);
        // Remove the list of duplicates when it gets empty
        if (recordList.remove(record)) {
            this.map.delete(key);
        }
        return record;
    };
    Object.defineProperty(_DuplicateMap.prototype, "isEmpty", {
        get: function () { return this.map.size === 0; },
        enumerable: true,
        configurable: true
    });
    _DuplicateMap.prototype.clear = function () { this.map.clear(); };
    _DuplicateMap.prototype.toString = function () { return '_DuplicateMap(' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* stringify */])(this.map) + ')'; };
    return _DuplicateMap;
}());
function getPreviousIndex(item, addRemoveOffset, moveOffsets) {
    var previousIndex = item.previousIndex;
    if (previousIndex === null)
        return previousIndex;
    var moveOffset = 0;
    if (moveOffsets && previousIndex < moveOffsets.length) {
        moveOffset = moveOffsets[previousIndex];
    }
    return previousIndex + addRemoveOffset + moveOffset;
}
//# sourceMappingURL=default_iterable_differ.js.map

/***/ },
/* 32 */
/* exports provided: Console */
/* exports used: Console */
/*!****************************************!*\
  !*** ./~/@angular/core/src/console.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__di__ = __webpack_require__(/*! ./di */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(/*! ./facade/lang */ 0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Console; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var Console = (function () {
    function Console() {
    }
    Console.prototype.log = function (message) { __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["g" /* print */])(message); };
    // Note: for reporting errors use `DOM.logError()` as it is platform specific
    Console.prototype.warn = function (message) { __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["h" /* warn */])(message); };
    Console.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__di__["b" /* Injectable */] },
    ];
    /** @nocollapse */
    Console.ctorParameters = [];
    return Console;
}());
//# sourceMappingURL=console.js.map

/***/ },
/* 33 */
/* exports provided: forwardRef, resolveForwardRef */
/* exports used: resolveForwardRef, forwardRef */
/*!***********************************************!*\
  !*** ./~/@angular/core/src/di/forward_ref.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 0);
/* harmony export (immutable) */ exports["b"] = forwardRef;
/* harmony export (immutable) */ exports["a"] = resolveForwardRef;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Allows to refer to references which are not yet defined.
 *
 * For instance, `forwardRef` is used when the `token` which we need to refer to for the purposes of
 * DI is declared,
 * but not yet defined. It is also used when the `token` which we use when creating a query is not
 * yet defined.
 *
 * ### Example
 * {@example core/di/ts/forward_ref/forward_ref_spec.ts region='forward_ref'}
 * @experimental
 */
function forwardRef(forwardRefFn) {
    forwardRefFn.__forward_ref__ = forwardRef;
    forwardRefFn.toString = function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(this()); };
    return forwardRefFn;
}
/**
 * Lazily retrieves the reference value from a forwardRef.
 *
 * Acts as the identity function when given a non-forward-ref value.
 *
 * ### Example ([live demo](http://plnkr.co/edit/GU72mJrk1fiodChcmiDR?p=preview))
 *
 * {@example core/di/ts/forward_ref/forward_ref_spec.ts region='resolve_forward_ref'}
 *
 * See: {@link forwardRef}
 * @experimental
 */
function resolveForwardRef(type) {
    if (typeof type === 'function' && type.hasOwnProperty('__forward_ref__') &&
        type.__forward_ref__ === forwardRef) {
        return type();
    }
    else {
        return type;
    }
}
//# sourceMappingURL=forward_ref.js.map

/***/ },
/* 34 */
/* exports provided: OpaqueToken */
/* exports used: OpaqueToken */
/*!************************************************!*\
  !*** ./~/@angular/core/src/di/opaque_token.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__metadata__ = __webpack_require__(/*! ./metadata */ 16);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return OpaqueToken; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Creates a token that can be used in a DI Provider.
 *
 * ### Example ([live demo](http://plnkr.co/edit/Ys9ezXpj2Mnoy3Uc8KBp?p=preview))
 *
 * ```typescript
 * var t = new OpaqueToken("value");
 *
 * var injector = Injector.resolveAndCreate([
 *   {provide: t, useValue: "bindingValue"}
 * ]);
 *
 * expect(injector.get(t)).toEqual("bindingValue");
 * ```
 *
 * Using an `OpaqueToken` is preferable to using strings as tokens because of possible collisions
 * caused by multiple providers using the same string as two different tokens.
 *
 * Using an `OpaqueToken` is preferable to using an `Object` as tokens because it provides better
 * error messages.
 * @stable
 */
// so that metadata is gathered for this class
var OpaqueToken = (function () {
    function OpaqueToken(_desc) {
        this._desc = _desc;
    }
    OpaqueToken.prototype.toString = function () { return "Token " + this._desc; };
    OpaqueToken.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__metadata__["a" /* Injectable */] },
    ];
    /** @nocollapse */
    OpaqueToken.ctorParameters = [
        null,
    ];
    return OpaqueToken;
}());
//# sourceMappingURL=opaque_token.js.map

/***/ },
/* 35 */
/* exports provided: ReflectiveKey, KeyRegistry */
/* exports used: ReflectiveKey */
/*!**************************************************!*\
  !*** ./~/@angular/core/src/di/reflective_key.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__forward_ref__ = __webpack_require__(/*! ./forward_ref */ 33);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ReflectiveKey; });
/* unused harmony export KeyRegistry */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * A unique object used for retrieving items from the {@link ReflectiveInjector}.
 *
 * Keys have:
 * - a system-wide unique `id`.
 * - a `token`.
 *
 * `Key` is used internally by {@link ReflectiveInjector} because its system-wide unique `id` allows
 * the
 * injector to store created objects in a more efficient way.
 *
 * `Key` should not be created directly. {@link ReflectiveInjector} creates keys automatically when
 * resolving
 * providers.
 * @experimental
 */
var ReflectiveKey = (function () {
    /**
     * Private
     */
    function ReflectiveKey(token, id) {
        this.token = token;
        this.id = id;
        if (!token) {
            throw new Error('Token must be defined!');
        }
    }
    Object.defineProperty(ReflectiveKey.prototype, "displayName", {
        /**
         * Returns a stringified token.
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(this.token); },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves a `Key` for a token.
     */
    ReflectiveKey.get = function (token) {
        return _globalKeyRegistry.get(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__forward_ref__["a" /* resolveForwardRef */])(token));
    };
    Object.defineProperty(ReflectiveKey, "numberOfKeys", {
        /**
         * @returns the number of keys registered in the system.
         */
        get: function () { return _globalKeyRegistry.numberOfKeys; },
        enumerable: true,
        configurable: true
    });
    return ReflectiveKey;
}());
/**
 * @internal
 */
var KeyRegistry = (function () {
    function KeyRegistry() {
        this._allKeys = new Map();
    }
    KeyRegistry.prototype.get = function (token) {
        if (token instanceof ReflectiveKey)
            return token;
        if (this._allKeys.has(token)) {
            return this._allKeys.get(token);
        }
        var newKey = new ReflectiveKey(token, ReflectiveKey.numberOfKeys);
        this._allKeys.set(token, newKey);
        return newKey;
    };
    Object.defineProperty(KeyRegistry.prototype, "numberOfKeys", {
        get: function () { return this._allKeys.size; },
        enumerable: true,
        configurable: true
    });
    return KeyRegistry;
}());
var _globalKeyRegistry = new KeyRegistry();
//# sourceMappingURL=reflective_key.js.map

/***/ },
/* 36 */
/* exports provided: ReflectiveDependency, ResolvedReflectiveProvider_, ResolvedReflectiveFactory, resolveReflectiveProviders, mergeResolvedReflectiveProviders, constructDependencies */
/* exports used: resolveReflectiveProviders, constructDependencies, ResolvedReflectiveFactory */
/*!*******************************************************!*\
  !*** ./~/@angular/core/src/di/reflective_provider.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reflection_reflection__ = __webpack_require__(/*! ../reflection/reflection */ 39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type__ = __webpack_require__(/*! ../type */ 43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forward_ref__ = __webpack_require__(/*! ./forward_ref */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__metadata__ = __webpack_require__(/*! ./metadata */ 16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reflective_errors__ = __webpack_require__(/*! ./reflective_errors */ 64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reflective_key__ = __webpack_require__(/*! ./reflective_key */ 35);
/* unused harmony export ReflectiveDependency */
/* unused harmony export ResolvedReflectiveProvider_ */
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return ResolvedReflectiveFactory; });
/* harmony export (immutable) */ exports["a"] = resolveReflectiveProviders;
/* unused harmony export mergeResolvedReflectiveProviders */
/* harmony export (immutable) */ exports["b"] = constructDependencies;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 * `Dependency` is used by the framework to extend DI.
 * This is internal to Angular and should not be used directly.
 */
var ReflectiveDependency = (function () {
    function ReflectiveDependency(key, optional, lowerBoundVisibility, upperBoundVisibility, properties) {
        this.key = key;
        this.optional = optional;
        this.lowerBoundVisibility = lowerBoundVisibility;
        this.upperBoundVisibility = upperBoundVisibility;
        this.properties = properties;
    }
    ReflectiveDependency.fromKey = function (key) {
        return new ReflectiveDependency(key, false, null, null, []);
    };
    return ReflectiveDependency;
}());
var _EMPTY_LIST = [];
var ResolvedReflectiveProvider_ = (function () {
    function ResolvedReflectiveProvider_(key, resolvedFactories, multiProvider) {
        this.key = key;
        this.resolvedFactories = resolvedFactories;
        this.multiProvider = multiProvider;
    }
    Object.defineProperty(ResolvedReflectiveProvider_.prototype, "resolvedFactory", {
        get: function () { return this.resolvedFactories[0]; },
        enumerable: true,
        configurable: true
    });
    return ResolvedReflectiveProvider_;
}());
/**
 * An internal resolved representation of a factory function created by resolving {@link
 * Provider}.
 * @experimental
 */
var ResolvedReflectiveFactory = (function () {
    function ResolvedReflectiveFactory(
        /**
         * Factory function which can return an instance of an object represented by a key.
         */
        factory, 
        /**
         * Arguments (dependencies) to the `factory` function.
         */
        dependencies) {
        this.factory = factory;
        this.dependencies = dependencies;
    }
    return ResolvedReflectiveFactory;
}());
/**
 * Resolve a single provider.
 */
function resolveReflectiveFactory(provider) {
    var factoryFn;
    var resolvedDeps;
    if (provider.useClass) {
        var useClass = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__forward_ref__["a" /* resolveForwardRef */])(provider.useClass);
        factoryFn = __WEBPACK_IMPORTED_MODULE_0__reflection_reflection__["a" /* reflector */].factory(useClass);
        resolvedDeps = _dependenciesFor(useClass);
    }
    else if (provider.useExisting) {
        factoryFn = function (aliasInstance) { return aliasInstance; };
        resolvedDeps = [ReflectiveDependency.fromKey(__WEBPACK_IMPORTED_MODULE_5__reflective_key__["a" /* ReflectiveKey */].get(provider.useExisting))];
    }
    else if (provider.useFactory) {
        factoryFn = provider.useFactory;
        resolvedDeps = constructDependencies(provider.useFactory, provider.deps);
    }
    else {
        factoryFn = function () { return provider.useValue; };
        resolvedDeps = _EMPTY_LIST;
    }
    return new ResolvedReflectiveFactory(factoryFn, resolvedDeps);
}
/**
 * Converts the {@link Provider} into {@link ResolvedProvider}.
 *
 * {@link Injector} internally only uses {@link ResolvedProvider}, {@link Provider} contains
 * convenience provider syntax.
 */
function resolveReflectiveProvider(provider) {
    return new ResolvedReflectiveProvider_(__WEBPACK_IMPORTED_MODULE_5__reflective_key__["a" /* ReflectiveKey */].get(provider.provide), [resolveReflectiveFactory(provider)], provider.multi);
}
/**
 * Resolve a list of Providers.
 */
function resolveReflectiveProviders(providers) {
    var normalized = _normalizeProviders(providers, []);
    var resolved = normalized.map(resolveReflectiveProvider);
    var resolvedProviderMap = mergeResolvedReflectiveProviders(resolved, new Map());
    return Array.from(resolvedProviderMap.values());
}
/**
 * Merges a list of ResolvedProviders into a list where
 * each key is contained exactly once and multi providers
 * have been merged.
 */
function mergeResolvedReflectiveProviders(providers, normalizedProvidersMap) {
    for (var i = 0; i < providers.length; i++) {
        var provider = providers[i];
        var existing = normalizedProvidersMap.get(provider.key.id);
        if (existing) {
            if (provider.multiProvider !== existing.multiProvider) {
                throw new __WEBPACK_IMPORTED_MODULE_4__reflective_errors__["a" /* MixingMultiProvidersWithRegularProvidersError */](existing, provider);
            }
            if (provider.multiProvider) {
                for (var j = 0; j < provider.resolvedFactories.length; j++) {
                    existing.resolvedFactories.push(provider.resolvedFactories[j]);
                }
            }
            else {
                normalizedProvidersMap.set(provider.key.id, provider);
            }
        }
        else {
            var resolvedProvider = void 0;
            if (provider.multiProvider) {
                resolvedProvider = new ResolvedReflectiveProvider_(provider.key, provider.resolvedFactories.slice(), provider.multiProvider);
            }
            else {
                resolvedProvider = provider;
            }
            normalizedProvidersMap.set(provider.key.id, resolvedProvider);
        }
    }
    return normalizedProvidersMap;
}
function _normalizeProviders(providers, res) {
    providers.forEach(function (b) {
        if (b instanceof __WEBPACK_IMPORTED_MODULE_1__type__["a" /* Type */]) {
            res.push({ provide: b, useClass: b });
        }
        else if (b && typeof b == 'object' && b.provide !== undefined) {
            res.push(b);
        }
        else if (b instanceof Array) {
            _normalizeProviders(b, res);
        }
        else {
            throw new __WEBPACK_IMPORTED_MODULE_4__reflective_errors__["b" /* InvalidProviderError */](b);
        }
    });
    return res;
}
function constructDependencies(typeOrFunc, dependencies) {
    if (!dependencies) {
        return _dependenciesFor(typeOrFunc);
    }
    else {
        var params_1 = dependencies.map(function (t) { return [t]; });
        return dependencies.map(function (t) { return _extractToken(typeOrFunc, t, params_1); });
    }
}
function _dependenciesFor(typeOrFunc) {
    var params = __WEBPACK_IMPORTED_MODULE_0__reflection_reflection__["a" /* reflector */].parameters(typeOrFunc);
    if (!params)
        return [];
    if (params.some(function (p) { return p == null; })) {
        throw new __WEBPACK_IMPORTED_MODULE_4__reflective_errors__["c" /* NoAnnotationError */](typeOrFunc, params);
    }
    return params.map(function (p) { return _extractToken(typeOrFunc, p, params); });
}
function _extractToken(typeOrFunc, metadata, params) {
    var depProps = [];
    var token = null;
    var optional = false;
    if (!Array.isArray(metadata)) {
        if (metadata instanceof __WEBPACK_IMPORTED_MODULE_3__metadata__["b" /* Inject */]) {
            return _createDependency(metadata.token, optional, null, null, depProps);
        }
        else {
            return _createDependency(metadata, optional, null, null, depProps);
        }
    }
    var lowerBoundVisibility = null;
    var upperBoundVisibility = null;
    for (var i = 0; i < metadata.length; ++i) {
        var paramMetadata = metadata[i];
        if (paramMetadata instanceof __WEBPACK_IMPORTED_MODULE_1__type__["a" /* Type */]) {
            token = paramMetadata;
        }
        else if (paramMetadata instanceof __WEBPACK_IMPORTED_MODULE_3__metadata__["b" /* Inject */]) {
            token = paramMetadata.token;
        }
        else if (paramMetadata instanceof __WEBPACK_IMPORTED_MODULE_3__metadata__["c" /* Optional */]) {
            optional = true;
        }
        else if (paramMetadata instanceof __WEBPACK_IMPORTED_MODULE_3__metadata__["d" /* Self */]) {
            upperBoundVisibility = paramMetadata;
        }
        else if (paramMetadata instanceof __WEBPACK_IMPORTED_MODULE_3__metadata__["e" /* Host */]) {
            upperBoundVisibility = paramMetadata;
        }
        else if (paramMetadata instanceof __WEBPACK_IMPORTED_MODULE_3__metadata__["f" /* SkipSelf */]) {
            lowerBoundVisibility = paramMetadata;
        }
    }
    token = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__forward_ref__["a" /* resolveForwardRef */])(token);
    if (token != null) {
        return _createDependency(token, optional, lowerBoundVisibility, upperBoundVisibility, depProps);
    }
    else {
        throw new __WEBPACK_IMPORTED_MODULE_4__reflective_errors__["c" /* NoAnnotationError */](typeOrFunc, params);
    }
}
function _createDependency(token, optional, lowerBoundVisibility, upperBoundVisibility, depProps) {
    return new ReflectiveDependency(__WEBPACK_IMPORTED_MODULE_5__reflective_key__["a" /* ReflectiveKey */].get(token), optional, lowerBoundVisibility, upperBoundVisibility, depProps);
}
//# sourceMappingURL=reflective_provider.js.map

/***/ },
/* 37 */
/* exports provided: Observable, Subject, EventEmitter */
/* exports used: EventEmitter */
/*!*********************************************!*\
  !*** ./~/@angular/core/src/facade/async.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(/*! rxjs/Subject */ 82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(/*! rxjs/Observable */ 81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EventEmitter; });
/* unused harmony reexport Observable */
/* unused harmony reexport Subject */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * Use by directives and components to emit custom Events.
 *
 * ### Examples
 *
 * In the following example, `Zippy` alternatively emits `open` and `close` events when its
 * title gets clicked:
 *
 * ```
 * @Component({
 *   selector: 'zippy',
 *   template: `
 *   <div class="zippy">
 *     <div (click)="toggle()">Toggle</div>
 *     <div [hidden]="!visible">
 *       <ng-content></ng-content>
 *     </div>
 *  </div>`})
 * export class Zippy {
 *   visible: boolean = true;
 *   @Output() open: EventEmitter<any> = new EventEmitter();
 *   @Output() close: EventEmitter<any> = new EventEmitter();
 *
 *   toggle() {
 *     this.visible = !this.visible;
 *     if (this.visible) {
 *       this.open.emit(null);
 *     } else {
 *       this.close.emit(null);
 *     }
 *   }
 * }
 * ```
 *
 * The events payload can be accessed by the parameter `$event` on the components output event
 * handler:
 *
 * ```
 * <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
 * ```
 *
 * Uses Rx.Observable but provides an adapter to make it work as specified here:
 * https://github.com/jhusain/observable-spec
 *
 * Once a reference implementation of the spec is available, switch to it.
 * @stable
 */
var EventEmitter = (function (_super) {
    __extends(EventEmitter, _super);
    /**
     * Creates an instance of [EventEmitter], which depending on [isAsync],
     * delivers events synchronously or asynchronously.
     */
    function EventEmitter(isAsync) {
        if (isAsync === void 0) { isAsync = false; }
        _super.call(this);
        this.__isAsync = isAsync;
    }
    EventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
    EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
        var schedulerFn;
        var errorFn = function (err) { return null; };
        var completeFn = function () { return null; };
        if (generatorOrNext && typeof generatorOrNext === 'object') {
            schedulerFn = this.__isAsync ? function (value) {
                setTimeout(function () { return generatorOrNext.next(value); });
            } : function (value) { generatorOrNext.next(value); };
            if (generatorOrNext.error) {
                errorFn = this.__isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
                    function (err) { generatorOrNext.error(err); };
            }
            if (generatorOrNext.complete) {
                completeFn = this.__isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
                    function () { generatorOrNext.complete(); };
            }
        }
        else {
            schedulerFn = this.__isAsync ? function (value) { setTimeout(function () { return generatorOrNext(value); }); } :
                function (value) { generatorOrNext(value); };
            if (error) {
                errorFn =
                    this.__isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
            }
            if (complete) {
                completeFn =
                    this.__isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
            }
        }
        return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
    };
    return EventEmitter;
}(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]));
//# sourceMappingURL=async.js.map

/***/ },
/* 38 */
/* exports provided: ComponentRef, ComponentRef_, ComponentFactory */
/* exports used: ComponentFactory, ComponentRef_, ComponentRef */
/*!*********************************************************!*\
  !*** ./~/@angular/core/src/linker/component_factory.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_errors__ = __webpack_require__(/*! ../facade/errors */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__element_ref__ = __webpack_require__(/*! ./element_ref */ 18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_utils__ = __webpack_require__(/*! ./view_utils */ 20);
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return ComponentRef; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return ComponentRef_; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ComponentFactory; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * Represents an instance of a Component created via a {@link ComponentFactory}.
 *
 * `ComponentRef` provides access to the Component Instance as well other objects related to this
 * Component Instance and allows you to destroy the Component Instance via the {@link #destroy}
 * method.
 * @stable
 */
var ComponentRef = (function () {
    function ComponentRef() {
    }
    Object.defineProperty(ComponentRef.prototype, "location", {
        /**
         * Location of the Host Element of this Component Instance.
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentRef.prototype, "injector", {
        /**
         * The injector on which the component instance exists.
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentRef.prototype, "instance", {
        /**
         * The instance of the Component.
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ComponentRef.prototype, "hostView", {
        /**
         * The {@link ViewRef} of the Host View of this Component instance.
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ComponentRef.prototype, "changeDetectorRef", {
        /**
         * The {@link ChangeDetectorRef} of the Component instance.
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentRef.prototype, "componentType", {
        /**
         * The component type.
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    return ComponentRef;
}());
var ComponentRef_ = (function (_super) {
    __extends(ComponentRef_, _super);
    function ComponentRef_(_index, _parentView, _nativeElement, _component) {
        _super.call(this);
        this._index = _index;
        this._parentView = _parentView;
        this._nativeElement = _nativeElement;
        this._component = _component;
    }
    Object.defineProperty(ComponentRef_.prototype, "location", {
        get: function () { return new __WEBPACK_IMPORTED_MODULE_1__element_ref__["a" /* ElementRef */](this._nativeElement); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentRef_.prototype, "injector", {
        get: function () { return this._parentView.injector(this._index); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentRef_.prototype, "instance", {
        get: function () { return this._component; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ComponentRef_.prototype, "hostView", {
        get: function () { return this._parentView.ref; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ComponentRef_.prototype, "changeDetectorRef", {
        get: function () { return this._parentView.ref; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ComponentRef_.prototype, "componentType", {
        get: function () { return this._component.constructor; },
        enumerable: true,
        configurable: true
    });
    ComponentRef_.prototype.destroy = function () { this._parentView.detachAndDestroy(); };
    ComponentRef_.prototype.onDestroy = function (callback) { this.hostView.onDestroy(callback); };
    return ComponentRef_;
}(ComponentRef));
/**
 * @experimental
 */
var EMPTY_CONTEXT = new Object();
/**
 * @stable
 */
var ComponentFactory = (function () {
    function ComponentFactory(selector, _viewClass, _componentType) {
        this.selector = selector;
        this._viewClass = _viewClass;
        this._componentType = _componentType;
    }
    Object.defineProperty(ComponentFactory.prototype, "componentType", {
        get: function () { return this._componentType; },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a new component.
     */
    ComponentFactory.prototype.create = function (injector, projectableNodes, rootSelectorOrNode) {
        if (projectableNodes === void 0) { projectableNodes = null; }
        if (rootSelectorOrNode === void 0) { rootSelectorOrNode = null; }
        var vu = injector.get(__WEBPACK_IMPORTED_MODULE_2__view_utils__["ViewUtils"]);
        if (!projectableNodes) {
            projectableNodes = [];
        }
        var hostView = new this._viewClass(vu, null, null, null);
        return hostView.createHostView(rootSelectorOrNode, injector, projectableNodes);
    };
    return ComponentFactory;
}());
//# sourceMappingURL=component_factory.js.map

/***/ },
/* 39 */
/* exports provided: Reflector, reflector */
/* exports used: reflector, Reflector */
/*!******************************************************!*\
  !*** ./~/@angular/core/src/reflection/reflection.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reflection_capabilities__ = __webpack_require__(/*! ./reflection_capabilities */ 78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reflector__ = __webpack_require__(/*! ./reflector */ 79);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return reflector; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__reflector__["a"]; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * The {@link Reflector} used internally in Angular to access metadata
 * about symbols.
 */
var reflector = new __WEBPACK_IMPORTED_MODULE_1__reflector__["a" /* Reflector */](new __WEBPACK_IMPORTED_MODULE_0__reflection_capabilities__["a" /* ReflectionCapabilities */]());
//# sourceMappingURL=reflection.js.map

/***/ },
/* 40 */
/* exports provided: ReflectorReader */
/* exports used: ReflectorReader */
/*!************************************************************!*\
  !*** ./~/@angular/core/src/reflection/reflector_reader.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ReflectorReader; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Provides read-only access to reflection data about symbols. Used internally by Angular
 * to power dependency injection and compilation.
 */
var ReflectorReader = (function () {
    function ReflectorReader() {
    }
    return ReflectorReader;
}());
//# sourceMappingURL=reflector_reader.js.map

/***/ },
/* 41 */
/* exports provided: RenderComponentType, RenderDebugInfo, Renderer, RootRenderer */
/* exports used: RootRenderer, RenderComponentType, RenderDebugInfo, Renderer */
/*!*******************************************!*\
  !*** ./~/@angular/core/src/render/api.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_errors__ = __webpack_require__(/*! ../facade/errors */ 3);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return RenderComponentType; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return RenderDebugInfo; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return Renderer; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RootRenderer; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @experimental
 */
// TODO (matsko): add typing for the animation function
var RenderComponentType = (function () {
    function RenderComponentType(id, templateUrl, slotCount, encapsulation, styles, animations) {
        this.id = id;
        this.templateUrl = templateUrl;
        this.slotCount = slotCount;
        this.encapsulation = encapsulation;
        this.styles = styles;
        this.animations = animations;
    }
    return RenderComponentType;
}());
var RenderDebugInfo = (function () {
    function RenderDebugInfo() {
    }
    Object.defineProperty(RenderDebugInfo.prototype, "injector", {
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderDebugInfo.prototype, "component", {
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderDebugInfo.prototype, "providerTokens", {
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderDebugInfo.prototype, "references", {
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderDebugInfo.prototype, "context", {
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderDebugInfo.prototype, "source", {
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    return RenderDebugInfo;
}());
/**
 * @experimental
 */
var Renderer = (function () {
    function Renderer() {
    }
    return Renderer;
}());
/**
 * Injectable service that provides a low-level interface for modifying the UI.
 *
 * Use this service to bypass Angular's templating and make custom UI changes that can't be
 * expressed declaratively. For example if you need to set a property or an attribute whose name is
 * not statically known, use {@link #setElementProperty} or {@link #setElementAttribute}
 * respectively.
 *
 * If you are implementing a custom renderer, you must implement this interface.
 *
 * The default Renderer implementation is `DomRenderer`. Also available is `WebWorkerRenderer`.
 * @experimental
 */
var RootRenderer = (function () {
    function RootRenderer() {
    }
    return RootRenderer;
}());
//# sourceMappingURL=api.js.map

/***/ },
/* 42 */
/* exports provided: Testability, TestabilityRegistry, setTestabilityGetter */
/* exports used: Testability, TestabilityRegistry, setTestabilityGetter */
/*!********************************************************!*\
  !*** ./~/@angular/core/src/testability/testability.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__di__ = __webpack_require__(/*! ../di */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zone_ng_zone__ = __webpack_require__(/*! ../zone/ng_zone */ 45);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Testability; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return TestabilityRegistry; });
/* harmony export (immutable) */ exports["c"] = setTestabilityGetter;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * The Testability service provides testing hooks that can be accessed from
 * the browser and by services such as Protractor. Each bootstrapped Angular
 * application on the page will have an instance of Testability.
 * @experimental
 */
var Testability = (function () {
    function Testability(_ngZone) {
        this._ngZone = _ngZone;
        /** @internal */
        this._pendingCount = 0;
        /** @internal */
        this._isZoneStable = true;
        /**
         * Whether any work was done since the last 'whenStable' callback. This is
         * useful to detect if this could have potentially destabilized another
         * component while it is stabilizing.
         * @internal
         */
        this._didWork = false;
        /** @internal */
        this._callbacks = [];
        this._watchAngularEvents();
    }
    /** @internal */
    Testability.prototype._watchAngularEvents = function () {
        var _this = this;
        this._ngZone.onUnstable.subscribe({
            next: function () {
                _this._didWork = true;
                _this._isZoneStable = false;
            }
        });
        this._ngZone.runOutsideAngular(function () {
            _this._ngZone.onStable.subscribe({
                next: function () {
                    __WEBPACK_IMPORTED_MODULE_2__zone_ng_zone__["a" /* NgZone */].assertNotInAngularZone();
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["l" /* scheduleMicroTask */])(function () {
                        _this._isZoneStable = true;
                        _this._runCallbacksIfReady();
                    });
                }
            });
        });
    };
    Testability.prototype.increasePendingRequestCount = function () {
        this._pendingCount += 1;
        this._didWork = true;
        return this._pendingCount;
    };
    Testability.prototype.decreasePendingRequestCount = function () {
        this._pendingCount -= 1;
        if (this._pendingCount < 0) {
            throw new Error('pending async requests below zero');
        }
        this._runCallbacksIfReady();
        return this._pendingCount;
    };
    Testability.prototype.isStable = function () {
        return this._isZoneStable && this._pendingCount == 0 && !this._ngZone.hasPendingMacrotasks;
    };
    /** @internal */
    Testability.prototype._runCallbacksIfReady = function () {
        var _this = this;
        if (this.isStable()) {
            // Schedules the call backs in a new frame so that it is always async.
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["l" /* scheduleMicroTask */])(function () {
                while (_this._callbacks.length !== 0) {
                    (_this._callbacks.pop())(_this._didWork);
                }
                _this._didWork = false;
            });
        }
        else {
            // Not Ready
            this._didWork = true;
        }
    };
    Testability.prototype.whenStable = function (callback) {
        this._callbacks.push(callback);
        this._runCallbacksIfReady();
    };
    Testability.prototype.getPendingRequestCount = function () { return this._pendingCount; };
    /** @deprecated use findProviders */
    Testability.prototype.findBindings = function (using, provider, exactMatch) {
        // TODO(juliemr): implement.
        return [];
    };
    Testability.prototype.findProviders = function (using, provider, exactMatch) {
        // TODO(juliemr): implement.
        return [];
    };
    Testability.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__di__["b" /* Injectable */] },
    ];
    /** @nocollapse */
    Testability.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_2__zone_ng_zone__["a" /* NgZone */], },
    ];
    return Testability;
}());
/**
 * A global registry of {@link Testability} instances for specific elements.
 * @experimental
 */
var TestabilityRegistry = (function () {
    function TestabilityRegistry() {
        /** @internal */
        this._applications = new Map();
        _testabilityGetter.addToWindow(this);
    }
    TestabilityRegistry.prototype.registerApplication = function (token, testability) {
        this._applications.set(token, testability);
    };
    TestabilityRegistry.prototype.getTestability = function (elem) { return this._applications.get(elem); };
    TestabilityRegistry.prototype.getAllTestabilities = function () { return Array.from(this._applications.values()); };
    TestabilityRegistry.prototype.getAllRootElements = function () { return Array.from(this._applications.keys()); };
    TestabilityRegistry.prototype.findTestabilityInTree = function (elem, findInAncestors) {
        if (findInAncestors === void 0) { findInAncestors = true; }
        return _testabilityGetter.findTestabilityInTree(this, elem, findInAncestors);
    };
    TestabilityRegistry.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__di__["b" /* Injectable */] },
    ];
    /** @nocollapse */
    TestabilityRegistry.ctorParameters = [];
    return TestabilityRegistry;
}());
var _NoopGetTestability = (function () {
    function _NoopGetTestability() {
    }
    _NoopGetTestability.prototype.addToWindow = function (registry) { };
    _NoopGetTestability.prototype.findTestabilityInTree = function (registry, elem, findInAncestors) {
        return null;
    };
    return _NoopGetTestability;
}());
/**
 * Set the {@link GetTestability} implementation used by the Angular testing framework.
 * @experimental
 */
function setTestabilityGetter(getter) {
    _testabilityGetter = getter;
}
var _testabilityGetter = new _NoopGetTestability();
//# sourceMappingURL=testability.js.map

/***/ },
/* 43 */
/* exports provided: Type */
/* exports used: Type */
/*!*************************************!*\
  !*** ./~/@angular/core/src/type.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Type; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @whatItDoes Represents a type that a Component or other object is instances of.
 *
 * @description
 *
 * An example of a `Type` is `MyCustomComponent` class, which in JavaScript is be represented by
 * the `MyCustomComponent` constructor function.
 *
 * @stable
 */
var Type = Function;
//# sourceMappingURL=type.js.map

/***/ },
/* 44 */
/* exports provided: isPromise */
/* exports used: isPromise */
/*!******************************************!*\
  !*** ./~/@angular/core/src/util/lang.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = isPromise;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function isPromise(obj) {
    // allow any Promise/A+ compliant thenable.
    // It's up to the caller to ensure that obj.then conforms to the spec
    return !!obj && typeof obj.then === 'function';
}
//# sourceMappingURL=lang.js.map

/***/ },
/* 45 */
/* exports provided: NgZone */
/* exports used: NgZone */
/*!*********************************************!*\
  !*** ./~/@angular/core/src/zone/ng_zone.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_async__ = __webpack_require__(/*! ../facade/async */ 37);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NgZone; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * An injectable service for executing work inside or outside of the Angular zone.
 *
 * The most common use of this service is to optimize performance when starting a work consisting of
 * one or more asynchronous tasks that don't require UI updates or error handling to be handled by
 * Angular. Such tasks can be kicked off via {@link runOutsideAngular} and if needed, these tasks
 * can reenter the Angular zone via {@link run}.
 *
 * <!-- TODO: add/fix links to:
 *   - docs explaining zones and the use of zones in Angular and change-detection
 *   - link to runOutsideAngular/run (throughout this file!)
 *   -->
 *
 * ### Example
 * ```
 * import {Component, NgZone} from '@angular/core';
 * import {NgIf} from '@angular/common';
 *
 * @Component({
 *   selector: 'ng-zone-demo'.
 *   template: `
 *     <h2>Demo: NgZone</h2>
 *
 *     <p>Progress: {{progress}}%</p>
 *     <p *ngIf="progress >= 100">Done processing {{label}} of Angular zone!</p>
 *
 *     <button (click)="processWithinAngularZone()">Process within Angular zone</button>
 *     <button (click)="processOutsideOfAngularZone()">Process outside of Angular zone</button>
 *   `,
 * })
 * export class NgZoneDemo {
 *   progress: number = 0;
 *   label: string;
 *
 *   constructor(private _ngZone: NgZone) {}
 *
 *   // Loop inside the Angular zone
 *   // so the UI DOES refresh after each setTimeout cycle
 *   processWithinAngularZone() {
 *     this.label = 'inside';
 *     this.progress = 0;
 *     this._increaseProgress(() => console.log('Inside Done!'));
 *   }
 *
 *   // Loop outside of the Angular zone
 *   // so the UI DOES NOT refresh after each setTimeout cycle
 *   processOutsideOfAngularZone() {
 *     this.label = 'outside';
 *     this.progress = 0;
 *     this._ngZone.runOutsideAngular(() => {
 *       this._increaseProgress(() => {
 *       // reenter the Angular zone and display done
 *       this._ngZone.run(() => {console.log('Outside Done!') });
 *     }}));
 *   }
 *
 *   _increaseProgress(doneCallback: () => void) {
 *     this.progress += 1;
 *     console.log(`Current progress: ${this.progress}%`);
 *
 *     if (this.progress < 100) {
 *       window.setTimeout(() => this._increaseProgress(doneCallback)), 10)
 *     } else {
 *       doneCallback();
 *     }
 *   }
 * }
 * ```
 * @experimental
 */
var NgZone = (function () {
    function NgZone(_a) {
        var _b = _a.enableLongStackTrace, enableLongStackTrace = _b === void 0 ? false : _b;
        this._hasPendingMicrotasks = false;
        this._hasPendingMacrotasks = false;
        this._isStable = true;
        this._nesting = 0;
        this._onUnstable = new __WEBPACK_IMPORTED_MODULE_0__facade_async__["a" /* EventEmitter */](false);
        this._onMicrotaskEmpty = new __WEBPACK_IMPORTED_MODULE_0__facade_async__["a" /* EventEmitter */](false);
        this._onStable = new __WEBPACK_IMPORTED_MODULE_0__facade_async__["a" /* EventEmitter */](false);
        this._onErrorEvents = new __WEBPACK_IMPORTED_MODULE_0__facade_async__["a" /* EventEmitter */](false);
        if (typeof Zone == 'undefined') {
            throw new Error('Angular requires Zone.js prolyfill.');
        }
        Zone.assertZonePatched();
        this.outer = this.inner = Zone.current;
        if (Zone['wtfZoneSpec']) {
            this.inner = this.inner.fork(Zone['wtfZoneSpec']);
        }
        if (enableLongStackTrace && Zone['longStackTraceZoneSpec']) {
            this.inner = this.inner.fork(Zone['longStackTraceZoneSpec']);
        }
        this.forkInnerZoneWithAngularBehavior();
    }
    NgZone.isInAngularZone = function () { return Zone.current.get('isAngularZone') === true; };
    NgZone.assertInAngularZone = function () {
        if (!NgZone.isInAngularZone()) {
            throw new Error('Expected to be in Angular Zone, but it is not!');
        }
    };
    NgZone.assertNotInAngularZone = function () {
        if (NgZone.isInAngularZone()) {
            throw new Error('Expected to not be in Angular Zone, but it is!');
        }
    };
    /**
     * Executes the `fn` function synchronously within the Angular zone and returns value returned by
     * the function.
     *
     * Running functions via `run` allows you to reenter Angular zone from a task that was executed
     * outside of the Angular zone (typically started via {@link runOutsideAngular}).
     *
     * Any future tasks or microtasks scheduled from within this function will continue executing from
     * within the Angular zone.
     *
     * If a synchronous error happens it will be rethrown and not reported via `onError`.
     */
    NgZone.prototype.run = function (fn) { return this.inner.run(fn); };
    /**
     * Same as `run`, except that synchronous errors are caught and forwarded via `onError` and not
     * rethrown.
     */
    NgZone.prototype.runGuarded = function (fn) { return this.inner.runGuarded(fn); };
    /**
     * Executes the `fn` function synchronously in Angular's parent zone and returns value returned by
     * the function.
     *
     * Running functions via `runOutsideAngular` allows you to escape Angular's zone and do work that
     * doesn't trigger Angular change-detection or is subject to Angular's error handling.
     *
     * Any future tasks or microtasks scheduled from within this function will continue executing from
     * outside of the Angular zone.
     *
     * Use {@link run} to reenter the Angular zone and do work that updates the application model.
     */
    NgZone.prototype.runOutsideAngular = function (fn) { return this.outer.run(fn); };
    Object.defineProperty(NgZone.prototype, "onUnstable", {
        /**
         * Notifies when code enters Angular Zone. This gets fired first on VM Turn.
         */
        get: function () { return this._onUnstable; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgZone.prototype, "onMicrotaskEmpty", {
        /**
         * Notifies when there is no more microtasks enqueue in the current VM Turn.
         * This is a hint for Angular to do change detection, which may enqueue more microtasks.
         * For this reason this event can fire multiple times per VM Turn.
         */
        get: function () { return this._onMicrotaskEmpty; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgZone.prototype, "onStable", {
        /**
         * Notifies when the last `onMicrotaskEmpty` has run and there are no more microtasks, which
         * implies we are about to relinquish VM turn.
         * This event gets called just once.
         */
        get: function () { return this._onStable; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgZone.prototype, "onError", {
        /**
         * Notify that an error has been delivered.
         */
        get: function () { return this._onErrorEvents; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgZone.prototype, "isStable", {
        /**
         * Whether there are no outstanding microtasks or macrotasks.
         */
        get: function () { return this._isStable; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgZone.prototype, "hasPendingMicrotasks", {
        get: function () { return this._hasPendingMicrotasks; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgZone.prototype, "hasPendingMacrotasks", {
        get: function () { return this._hasPendingMacrotasks; },
        enumerable: true,
        configurable: true
    });
    NgZone.prototype.checkStable = function () {
        var _this = this;
        if (this._nesting == 0 && !this._hasPendingMicrotasks && !this._isStable) {
            try {
                this._nesting++;
                this._onMicrotaskEmpty.emit(null);
            }
            finally {
                this._nesting--;
                if (!this._hasPendingMicrotasks) {
                    try {
                        this.runOutsideAngular(function () { return _this._onStable.emit(null); });
                    }
                    finally {
                        this._isStable = true;
                    }
                }
            }
        }
    };
    NgZone.prototype.forkInnerZoneWithAngularBehavior = function () {
        var _this = this;
        this.inner = this.inner.fork({
            name: 'angular',
            properties: { 'isAngularZone': true },
            onInvokeTask: function (delegate, current, target, task, applyThis, applyArgs) {
                try {
                    _this.onEnter();
                    return delegate.invokeTask(target, task, applyThis, applyArgs);
                }
                finally {
                    _this.onLeave();
                }
            },
            onInvoke: function (delegate, current, target, callback, applyThis, applyArgs, source) {
                try {
                    _this.onEnter();
                    return delegate.invoke(target, callback, applyThis, applyArgs, source);
                }
                finally {
                    _this.onLeave();
                }
            },
            onHasTask: function (delegate, current, target, hasTaskState) {
                delegate.hasTask(target, hasTaskState);
                if (current === target) {
                    // We are only interested in hasTask events which originate from our zone
                    // (A child hasTask event is not interesting to us)
                    if (hasTaskState.change == 'microTask') {
                        _this.setHasMicrotask(hasTaskState.microTask);
                    }
                    else if (hasTaskState.change == 'macroTask') {
                        _this.setHasMacrotask(hasTaskState.macroTask);
                    }
                }
            },
            onHandleError: function (delegate, current, target, error) {
                delegate.handleError(target, error);
                _this.triggerError(error);
                return false;
            }
        });
    };
    NgZone.prototype.onEnter = function () {
        this._nesting++;
        if (this._isStable) {
            this._isStable = false;
            this._onUnstable.emit(null);
        }
    };
    NgZone.prototype.onLeave = function () {
        this._nesting--;
        this.checkStable();
    };
    NgZone.prototype.setHasMicrotask = function (hasMicrotasks) {
        this._hasPendingMicrotasks = hasMicrotasks;
        this.checkStable();
    };
    NgZone.prototype.setHasMacrotask = function (hasMacrotasks) { this._hasPendingMacrotasks = hasMacrotasks; };
    NgZone.prototype.triggerError = function (error) { this._onErrorEvents.emit(error); };
    return NgZone;
}());
//# sourceMappingURL=ng_zone.js.map

/***/ },
/* 46 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ./~/rxjs/Subscription.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var isArray_1 = __webpack_require__(/*! ./util/isArray */ 141);
var isObject_1 = __webpack_require__(/*! ./util/isObject */ 142);
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ 85);
var tryCatch_1 = __webpack_require__(/*! ./util/tryCatch */ 144);
var errorObject_1 = __webpack_require__(/*! ./util/errorObject */ 84);
var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ 140);
/**
 * Represents a disposable resource, such as the execution of an Observable. A
 * Subscription has one important method, `unsubscribe`, that takes no argument
 * and just disposes the resource held by the subscription.
 *
 * Additionally, subscriptions may be grouped together through the `add()`
 * method, which will attach a child Subscription to the current Subscription.
 * When a Subscription is unsubscribed, all its children (and its grandchildren)
 * will be unsubscribed as well.
 *
 * @class Subscription
 */
var Subscription = (function () {
    /**
     * @param {function(): void} [unsubscribe] A function describing how to
     * perform the disposal of resources when the `unsubscribe` method is called.
     */
    function Subscription(unsubscribe) {
        /**
         * A flag to indicate whether this Subscription has already been unsubscribed.
         * @type {boolean}
         */
        this.closed = false;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    /**
     * Disposes the resources held by the subscription. May, for instance, cancel
     * an ongoing Observable execution or cancel any other type of work that
     * started when the Subscription was created.
     * @return {void}
     */
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        this.closed = true;
        var _a = this, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this._subscriptions = null;
        if (isFunction_1.isFunction(_unsubscribe)) {
            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
            if (trial === errorObject_1.errorObject) {
                hasErrors = true;
                (errors = errors || []).push(errorObject_1.errorObject.e);
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                    if (trial === errorObject_1.errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = errorObject_1.errorObject.e;
                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(err.errors);
                        }
                        else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    /**
     * Adds a tear down to be called during the unsubscribe() of this
     * Subscription.
     *
     * If the tear down being added is a subscription that is already
     * unsubscribed, is the same reference `add` is being called on, or is
     * `Subscription.EMPTY`, it will not be added.
     *
     * If this subscription is already in an `closed` state, the passed
     * tear down logic will be executed immediately.
     *
     * @param {TeardownLogic} teardown The additional logic to execute on
     * teardown.
     * @return {Subscription} Returns the Subscription used or created to be
     * added to the inner subscriptions list. This Subscription can be used with
     * `remove()` to remove the passed teardown logic from the inner subscriptions
     * list.
     */
    Subscription.prototype.add = function (teardown) {
        if (!teardown || (teardown === Subscription.EMPTY)) {
            return Subscription.EMPTY;
        }
        if (teardown === this) {
            return this;
        }
        var sub = teardown;
        switch (typeof teardown) {
            case 'function':
                sub = new Subscription(teardown);
            case 'object':
                if (sub.closed || typeof sub.unsubscribe !== 'function') {
                    break;
                }
                else if (this.closed) {
                    sub.unsubscribe();
                }
                else {
                    (this._subscriptions || (this._subscriptions = [])).push(sub);
                }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        return sub;
    };
    /**
     * Removes a Subscription from the internal list of subscriptions that will
     * unsubscribe during the unsubscribe process of this Subscription.
     * @param {Subscription} subscription The subscription to remove.
     * @return {void}
     */
    Subscription.prototype.remove = function (subscription) {
        // HACK: This might be redundant because of the logic in `add()`
        if (subscription == null || (subscription === this) || (subscription === Subscription.EMPTY)) {
            return;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
//# sourceMappingURL=Subscription.js.map

/***/ },
/* 47 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./~/rxjs/symbol/rxSubscriber.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var root_1 = __webpack_require__(/*! ../util/root */ 48);
var Symbol = root_1.root.Symbol;
exports.$$rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
    Symbol.for('rxSubscriber') : '@@rxSubscriber';
//# sourceMappingURL=rxSubscriber.js.map

/***/ },
/* 48 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./~/rxjs/util/root.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {"use strict";
var objectTypes = {
    'boolean': false,
    'function': true,
    'object': true,
    'number': false,
    'string': false,
    'undefined': false
};
exports.root = (objectTypes[typeof self] && self) || (objectTypes[typeof window] && window);
var freeGlobal = objectTypes[typeof global] && global;
if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
    exports.root = freeGlobal;
}
//# sourceMappingURL=root.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/buildin/global.js */ 49)))

/***/ },
/* 49 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/***/ function(module, exports) {

var g;

// This works in non-strict mode
g = (function() { return this; })();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ },
/* 50 */
/* exports provided: NgClass, NgFor, NgIf, NgPlural, NgPluralCase, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet, COMMON_DIRECTIVES */
/* exports used: COMMON_DIRECTIVES, NgClass, NgFor, NgIf, NgPlural, NgPluralCase, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet */
/*!***************************************************!*\
  !*** ./~/@angular/common/src/directives/index.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_class__ = __webpack_require__(/*! ./ng_class */ 88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_for__ = __webpack_require__(/*! ./ng_for */ 89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_if__ = __webpack_require__(/*! ./ng_if */ 90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_plural__ = __webpack_require__(/*! ./ng_plural */ 91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_style__ = __webpack_require__(/*! ./ng_style */ 92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_switch__ = __webpack_require__(/*! ./ng_switch */ 51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_template_outlet__ = __webpack_require__(/*! ./ng_template_outlet */ 93);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return COMMON_DIRECTIVES; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */







/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__ng_class__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__ng_for__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__ng_if__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__ng_plural__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__ng_plural__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__ng_style__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__ng_switch__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "i", function() { return __WEBPACK_IMPORTED_MODULE_5__ng_switch__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "j", function() { return __WEBPACK_IMPORTED_MODULE_5__ng_switch__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "k", function() { return __WEBPACK_IMPORTED_MODULE_6__ng_template_outlet__["a"]; });

/**
 * A collection of Angular directives that are likely to be used in each and every Angular
 * application.
 */
var COMMON_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_0__ng_class__["a" /* NgClass */],
    __WEBPACK_IMPORTED_MODULE_1__ng_for__["a" /* NgFor */],
    __WEBPACK_IMPORTED_MODULE_2__ng_if__["a" /* NgIf */],
    __WEBPACK_IMPORTED_MODULE_6__ng_template_outlet__["a" /* NgTemplateOutlet */],
    __WEBPACK_IMPORTED_MODULE_4__ng_style__["a" /* NgStyle */],
    __WEBPACK_IMPORTED_MODULE_5__ng_switch__["b" /* NgSwitch */],
    __WEBPACK_IMPORTED_MODULE_5__ng_switch__["c" /* NgSwitchCase */],
    __WEBPACK_IMPORTED_MODULE_5__ng_switch__["d" /* NgSwitchDefault */],
    __WEBPACK_IMPORTED_MODULE_3__ng_plural__["a" /* NgPlural */],
    __WEBPACK_IMPORTED_MODULE_3__ng_plural__["b" /* NgPluralCase */],
];
//# sourceMappingURL=index.js.map

/***/ },
/* 51 */
/* exports provided: SwitchView, NgSwitch, NgSwitchCase, NgSwitchDefault */
/* exports used: SwitchView, NgSwitch, NgSwitchCase, NgSwitchDefault */
/*!*******************************************************!*\
  !*** ./~/@angular/common/src/directives/ng_switch.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SwitchView; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return NgSwitch; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return NgSwitchCase; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return NgSwitchDefault; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var SwitchView = (function () {
    function SwitchView(_viewContainerRef, _templateRef) {
        this._viewContainerRef = _viewContainerRef;
        this._templateRef = _templateRef;
        this._created = false;
    }
    SwitchView.prototype.create = function () {
        this._created = true;
        this._viewContainerRef.createEmbeddedView(this._templateRef);
    };
    SwitchView.prototype.destroy = function () {
        this._created = false;
        this._viewContainerRef.clear();
    };
    SwitchView.prototype.enforceState = function (created) {
        if (created && !this._created) {
            this.create();
        }
        else if (!created && this._created) {
            this.destroy();
        }
    };
    return SwitchView;
}());
/**
 * @ngModule CommonModule
 *
 * @whatItDoes Adds / removes DOM sub-trees when the nest match expressions matches the switch
 *             expression.
 *
 * @howToUse
 * ```
 *     <container-element [ngSwitch]="switch_expression">
 *       <some-element *ngSwitchCase="match_expression_1">...</some-element>
 *       <some-element *ngSwitchCase="match_expression_2">...</some-element>
 *       <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
 *       <ng-container *ngSwitchCase="match_expression_3">
 *         <!-- use a ng-container to group multiple root nodes -->
 *         <inner-element></inner-element>
 *         <inner-other-element></inner-other-element>
 *       </ng-container>
 *       <some-element *ngSwitchDefault>...</some-element>
 *     </container-element>
 * ```
 * @description
 *
 * `NgSwitch` stamps out nested views when their match expression value matches the value of the
 * switch expression.
 *
 * In other words:
 * - you define a container element (where you place the directive with a switch expression on the
 * `[ngSwitch]="..."` attribute)
 * - you define inner views inside the `NgSwitch` and place a `*ngSwitchCase` attribute on the view
 * root elements.
 *
 * Elements within `NgSwitch` but outside of a `NgSwitchCase` or `NgSwitchDefault` directives will
 * be preserved at the location.
 *
 * The `ngSwitchCase` directive informs the parent `NgSwitch` of which view to display when the
 * expression is evaluated.
 * When no matching expression is found on a `ngSwitchCase` view, the `ngSwitchDefault` view is
 * stamped out.
 *
 * @stable
 */
var NgSwitch = (function () {
    function NgSwitch() {
        this._defaultUsed = false;
        this._caseCount = 0;
        this._lastCaseCheckIndex = 0;
        this._lastCasesMatched = false;
    }
    Object.defineProperty(NgSwitch.prototype, "ngSwitch", {
        set: function (newValue) {
            this._ngSwitch = newValue;
            if (this._caseCount === 0) {
                this._updateDefaultCases(true);
            }
        },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    NgSwitch.prototype._addCase = function () { return this._caseCount++; };
    /** @internal */
    NgSwitch.prototype._addDefault = function (view) {
        if (!this._defaultViews) {
            this._defaultViews = [];
        }
        this._defaultViews.push(view);
    };
    /** @internal */
    NgSwitch.prototype._matchCase = function (value) {
        var matched = value == this._ngSwitch;
        this._lastCasesMatched = this._lastCasesMatched || matched;
        this._lastCaseCheckIndex++;
        if (this._lastCaseCheckIndex === this._caseCount) {
            this._updateDefaultCases(!this._lastCasesMatched);
            this._lastCaseCheckIndex = 0;
            this._lastCasesMatched = false;
        }
        return matched;
    };
    NgSwitch.prototype._updateDefaultCases = function (useDefault) {
        if (this._defaultViews && useDefault !== this._defaultUsed) {
            this._defaultUsed = useDefault;
            for (var i = 0; i < this._defaultViews.length; i++) {
                var defaultView = this._defaultViews[i];
                defaultView.enforceState(useDefault);
            }
        }
    };
    NgSwitch.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngSwitch]' },] },
    ];
    /** @nocollapse */
    NgSwitch.ctorParameters = [];
    NgSwitch.propDecorators = {
        'ngSwitch': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return NgSwitch;
}());
/**
 * @ngModule CommonModule
 *
 * @whatItDoes Creates a view that will be added/removed from the parent {@link NgSwitch} when the
 *             given expression evaluate to respectively the same/different value as the switch
 *             expression.
 *
 * @howToUse
 * ```
 * <container-element [ngSwitch]="switch_expression">
 *   <some-element *ngSwitchCase="match_expression_1">...</some-element>
 * </container-element>
 *```
 * @description
 *
 * Insert the sub-tree when the expression evaluates to the same value as the enclosing switch
 * expression.
 *
 * If multiple match expressions match the switch expression value, all of them are displayed.
 *
 * See {@link NgSwitch} for more details and example.
 *
 * @stable
 */
var NgSwitchCase = (function () {
    function NgSwitchCase(viewContainer, templateRef, ngSwitch) {
        this.ngSwitch = ngSwitch;
        ngSwitch._addCase();
        this._view = new SwitchView(viewContainer, templateRef);
    }
    NgSwitchCase.prototype.ngDoCheck = function () { this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase)); };
    NgSwitchCase.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngSwitchCase]' },] },
    ];
    /** @nocollapse */
    NgSwitchCase.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
        { type: NgSwitch, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
    ];
    NgSwitchCase.propDecorators = {
        'ngSwitchCase': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return NgSwitchCase;
}());
/**
 * @ngModule CommonModule
 * @whatItDoes Creates a view that is added to the parent {@link NgSwitch} when no case expressions
 * match the
 *             switch expression.
 *
 * @howToUse
 * ```
 * <container-element [ngSwitch]="switch_expression">
 *   <some-element *ngSwitchCase="match_expression_1">...</some-element>
 *   <some-other-element *ngSwitchDefault>...</some-other-element>
 * </container-element>
 * ```
 *
 * @description
 *
 * Insert the sub-tree when no case expressions evaluate to the same value as the enclosing switch
 * expression.
 *
 * See {@link NgSwitch} for more details and example.
 *
 * @stable
 */
var NgSwitchDefault = (function () {
    function NgSwitchDefault(viewContainer, templateRef, ngSwitch) {
        ngSwitch._addDefault(new SwitchView(viewContainer, templateRef));
    }
    NgSwitchDefault.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngSwitchDefault]' },] },
    ];
    /** @nocollapse */
    NgSwitchDefault.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
        { type: NgSwitch, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
    ];
    return NgSwitchDefault;
}());
//# sourceMappingURL=ng_switch.js.map

/***/ },
/* 52 */
/* exports provided: NumberFormatStyle, NumberFormatter, DateFormatter */
/* exports used: DateFormatter, NumberFormatStyle, NumberFormatter */
/*!**********************************************!*\
  !*** ./~/@angular/common/src/facade/intl.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return NumberFormatStyle; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return NumberFormatter; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DateFormatter; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var NumberFormatStyle;
(function (NumberFormatStyle) {
    NumberFormatStyle[NumberFormatStyle["Decimal"] = 0] = "Decimal";
    NumberFormatStyle[NumberFormatStyle["Percent"] = 1] = "Percent";
    NumberFormatStyle[NumberFormatStyle["Currency"] = 2] = "Currency";
})(NumberFormatStyle || (NumberFormatStyle = {}));
var NumberFormatter = (function () {
    function NumberFormatter() {
    }
    NumberFormatter.format = function (num, locale, style, _a) {
        var _b = _a === void 0 ? {} : _a, minimumIntegerDigits = _b.minimumIntegerDigits, minimumFractionDigits = _b.minimumFractionDigits, maximumFractionDigits = _b.maximumFractionDigits, currency = _b.currency, _c = _b.currencyAsSymbol, currencyAsSymbol = _c === void 0 ? false : _c;
        var options = {
            minimumIntegerDigits: minimumIntegerDigits,
            minimumFractionDigits: minimumFractionDigits,
            maximumFractionDigits: maximumFractionDigits,
            style: NumberFormatStyle[style].toLowerCase()
        };
        if (style == NumberFormatStyle.Currency) {
            options.currency = currency;
            options.currencyDisplay = currencyAsSymbol ? 'symbol' : 'code';
        }
        return new Intl.NumberFormat(locale, options).format(num);
    };
    return NumberFormatter;
}());
var DATE_FORMATS_SPLIT = /((?:[^yMLdHhmsazZEwGjJ']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|J+|j+|m+|s+|a|z|Z|G+|w+))(.*)/;
var PATTERN_ALIASES = {
    'yMMMdjms': datePartGetterFactory(combine([
        digitCondition('year', 1),
        nameCondition('month', 3),
        digitCondition('day', 1),
        digitCondition('hour', 1),
        digitCondition('minute', 1),
        digitCondition('second', 1),
    ])),
    'yMdjm': datePartGetterFactory(combine([
        digitCondition('year', 1), digitCondition('month', 1), digitCondition('day', 1),
        digitCondition('hour', 1), digitCondition('minute', 1)
    ])),
    'yMMMMEEEEd': datePartGetterFactory(combine([
        digitCondition('year', 1), nameCondition('month', 4), nameCondition('weekday', 4),
        digitCondition('day', 1)
    ])),
    'yMMMMd': datePartGetterFactory(combine([digitCondition('year', 1), nameCondition('month', 4), digitCondition('day', 1)])),
    'yMMMd': datePartGetterFactory(combine([digitCondition('year', 1), nameCondition('month', 3), digitCondition('day', 1)])),
    'yMd': datePartGetterFactory(combine([digitCondition('year', 1), digitCondition('month', 1), digitCondition('day', 1)])),
    'jms': datePartGetterFactory(combine([digitCondition('hour', 1), digitCondition('second', 1), digitCondition('minute', 1)])),
    'jm': datePartGetterFactory(combine([digitCondition('hour', 1), digitCondition('minute', 1)]))
};
var DATE_FORMATS = {
    yyyy: datePartGetterFactory(digitCondition('year', 4)),
    yy: datePartGetterFactory(digitCondition('year', 2)),
    y: datePartGetterFactory(digitCondition('year', 1)),
    MMMM: datePartGetterFactory(nameCondition('month', 4)),
    MMM: datePartGetterFactory(nameCondition('month', 3)),
    MM: datePartGetterFactory(digitCondition('month', 2)),
    M: datePartGetterFactory(digitCondition('month', 1)),
    LLLL: datePartGetterFactory(nameCondition('month', 4)),
    L: datePartGetterFactory(nameCondition('month', 1)),
    dd: datePartGetterFactory(digitCondition('day', 2)),
    d: datePartGetterFactory(digitCondition('day', 1)),
    HH: digitModifier(hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 2), false)))),
    H: hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), false))),
    hh: digitModifier(hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 2), true)))),
    h: hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), true))),
    jj: datePartGetterFactory(digitCondition('hour', 2)),
    j: datePartGetterFactory(digitCondition('hour', 1)),
    mm: digitModifier(datePartGetterFactory(digitCondition('minute', 2))),
    m: datePartGetterFactory(digitCondition('minute', 1)),
    ss: digitModifier(datePartGetterFactory(digitCondition('second', 2))),
    s: datePartGetterFactory(digitCondition('second', 1)),
    // while ISO 8601 requires fractions to be prefixed with `.` or `,`
    // we can be just safely rely on using `sss` since we currently don't support single or two digit
    // fractions
    sss: datePartGetterFactory(digitCondition('second', 3)),
    EEEE: datePartGetterFactory(nameCondition('weekday', 4)),
    EEE: datePartGetterFactory(nameCondition('weekday', 3)),
    EE: datePartGetterFactory(nameCondition('weekday', 2)),
    E: datePartGetterFactory(nameCondition('weekday', 1)),
    a: hourClockExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), true))),
    Z: timeZoneGetter('short'),
    z: timeZoneGetter('long'),
    ww: datePartGetterFactory({}),
    // first Thursday of the year. not support ?
    w: datePartGetterFactory({}),
    // of the year not support ?
    G: datePartGetterFactory(nameCondition('era', 1)),
    GG: datePartGetterFactory(nameCondition('era', 2)),
    GGG: datePartGetterFactory(nameCondition('era', 3)),
    GGGG: datePartGetterFactory(nameCondition('era', 4))
};
function digitModifier(inner) {
    return function (date, locale) {
        var result = inner(date, locale);
        return result.length == 1 ? '0' + result : result;
    };
}
function hourClockExtractor(inner) {
    return function (date, locale) { return inner(date, locale).split(' ')[1]; };
}
function hourExtractor(inner) {
    return function (date, locale) { return inner(date, locale).split(' ')[0]; };
}
function intlDateFormat(date, locale, options) {
    return new Intl.DateTimeFormat(locale, options).format(date).replace(/[\u200e\u200f]/g, '');
}
function timeZoneGetter(timezone) {
    // To workaround `Intl` API restriction for single timezone let format with 24 hours
    var options = { hour: '2-digit', hour12: false, timeZoneName: timezone };
    return function (date, locale) {
        var result = intlDateFormat(date, locale, options);
        // Then extract first 3 letters that related to hours
        return result ? result.substring(3) : '';
    };
}
function hour12Modify(options, value) {
    options.hour12 = value;
    return options;
}
function digitCondition(prop, len) {
    var result = {};
    result[prop] = len === 2 ? '2-digit' : 'numeric';
    return result;
}
function nameCondition(prop, len) {
    var result = {};
    if (len < 4) {
        result[prop] = len > 1 ? 'short' : 'narrow';
    }
    else {
        result[prop] = 'long';
    }
    return result;
}
function combine(options) {
    return (_a = Object).assign.apply(_a, [{}].concat(options));
    var _a;
}
function datePartGetterFactory(ret) {
    return function (date, locale) { return intlDateFormat(date, locale, ret); };
}
var DATE_FORMATTER_CACHE = new Map();
function dateFormatter(format, date, locale) {
    var fn = PATTERN_ALIASES[format];
    if (fn)
        return fn(date, locale);
    var parts = DATE_FORMATTER_CACHE.get(format);
    if (!parts) {
        parts = [];
        var match = void 0;
        DATE_FORMATS_SPLIT.exec(format);
        while (format) {
            match = DATE_FORMATS_SPLIT.exec(format);
            if (match) {
                parts = parts.concat(match.slice(1));
                format = parts.pop();
            }
            else {
                parts.push(format);
                format = null;
            }
        }
        DATE_FORMATTER_CACHE.set(format, parts);
    }
    return parts.reduce(function (text, part) {
        var fn = DATE_FORMATS[part];
        return text + (fn ? fn(date, locale) : partToTime(part));
    }, '');
}
function partToTime(part) {
    return part === '\'\'' ? '\'' : part.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
}
var DateFormatter = (function () {
    function DateFormatter() {
    }
    DateFormatter.format = function (date, locale, pattern) {
        return dateFormatter(pattern, date, locale);
    };
    return DateFormatter;
}());
//# sourceMappingURL=intl.js.map

/***/ },
/* 53 */
/* exports provided: AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, UpperCasePipe, COMMON_PIPES */
/* exports used: COMMON_PIPES, LowerCasePipe, DatePipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, AsyncPipe, CurrencyPipe, DecimalPipe, PercentPipe, SlicePipe, UpperCasePipe */
/*!**********************************************!*\
  !*** ./~/@angular/common/src/pipes/index.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__async_pipe__ = __webpack_require__(/*! ./async_pipe */ 99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__date_pipe__ = __webpack_require__(/*! ./date_pipe */ 100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__i18n_plural_pipe__ = __webpack_require__(/*! ./i18n_plural_pipe */ 101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__i18n_select_pipe__ = __webpack_require__(/*! ./i18n_select_pipe */ 102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__json_pipe__ = __webpack_require__(/*! ./json_pipe */ 103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lowercase_pipe__ = __webpack_require__(/*! ./lowercase_pipe */ 104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__number_pipe__ = __webpack_require__(/*! ./number_pipe */ 105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__slice_pipe__ = __webpack_require__(/*! ./slice_pipe */ 106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__uppercase_pipe__ = __webpack_require__(/*! ./uppercase_pipe */ 107);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return COMMON_PIPES; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/* harmony reexport (binding) */ __webpack_require__.d(exports, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__async_pipe__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__number_pipe__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__date_pipe__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "i", function() { return __WEBPACK_IMPORTED_MODULE_6__number_pipe__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__i18n_plural_pipe__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__i18n_select_pipe__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__json_pipe__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__lowercase_pipe__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "j", function() { return __WEBPACK_IMPORTED_MODULE_6__number_pipe__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "k", function() { return __WEBPACK_IMPORTED_MODULE_7__slice_pipe__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "l", function() { return __WEBPACK_IMPORTED_MODULE_8__uppercase_pipe__["a"]; });

/**
 * A collection of Angular pipes that are likely to be used in each and every application.
 */
var COMMON_PIPES = [
    __WEBPACK_IMPORTED_MODULE_0__async_pipe__["a" /* AsyncPipe */],
    __WEBPACK_IMPORTED_MODULE_8__uppercase_pipe__["a" /* UpperCasePipe */],
    __WEBPACK_IMPORTED_MODULE_5__lowercase_pipe__["a" /* LowerCasePipe */],
    __WEBPACK_IMPORTED_MODULE_4__json_pipe__["a" /* JsonPipe */],
    __WEBPACK_IMPORTED_MODULE_7__slice_pipe__["a" /* SlicePipe */],
    __WEBPACK_IMPORTED_MODULE_6__number_pipe__["a" /* DecimalPipe */],
    __WEBPACK_IMPORTED_MODULE_6__number_pipe__["b" /* PercentPipe */],
    __WEBPACK_IMPORTED_MODULE_6__number_pipe__["c" /* CurrencyPipe */],
    __WEBPACK_IMPORTED_MODULE_1__date_pipe__["a" /* DatePipe */],
    __WEBPACK_IMPORTED_MODULE_2__i18n_plural_pipe__["a" /* I18nPluralPipe */],
    __WEBPACK_IMPORTED_MODULE_3__i18n_select_pipe__["a" /* I18nSelectPipe */],
];
//# sourceMappingURL=index.js.map

/***/ },
/* 54 */
/* exports provided: FILL_STYLE_FLAG, ANY_STATE, DEFAULT_STATE, EMPTY_STATE */
/* exports used: FILL_STYLE_FLAG, ANY_STATE, DEFAULT_STATE, EMPTY_STATE */
/*!**************************************************************!*\
  !*** ./~/@angular/core/src/animation/animation_constants.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FILL_STYLE_FLAG; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return ANY_STATE; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return DEFAULT_STATE; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return EMPTY_STATE; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var FILL_STYLE_FLAG = 'true'; // TODO (matsko): change to boolean
var ANY_STATE = '*';
var DEFAULT_STATE = '*';
var EMPTY_STATE = 'void';
//# sourceMappingURL=animation_constants.js.map

/***/ },
/* 55 */
/* exports provided: AnimationGroupPlayer */
/* exports used: AnimationGroupPlayer */
/*!*****************************************************************!*\
  !*** ./~/@angular/core/src/animation/animation_group_player.js ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AnimationGroupPlayer; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var AnimationGroupPlayer = (function () {
    function AnimationGroupPlayer(_players) {
        var _this = this;
        this._players = _players;
        this._onDoneFns = [];
        this._onStartFns = [];
        this._finished = false;
        this._started = false;
        this._destroyed = false;
        this.parentPlayer = null;
        var count = 0;
        var total = this._players.length;
        if (total == 0) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["l" /* scheduleMicroTask */])(function () { return _this._onFinish(); });
        }
        else {
            this._players.forEach(function (player) {
                player.parentPlayer = _this;
                player.onDone(function () {
                    if (++count >= total) {
                        _this._onFinish();
                    }
                });
            });
        }
    }
    AnimationGroupPlayer.prototype._onFinish = function () {
        if (!this._finished) {
            this._finished = true;
            this._onDoneFns.forEach(function (fn) { return fn(); });
            this._onDoneFns = [];
        }
    };
    AnimationGroupPlayer.prototype.init = function () { this._players.forEach(function (player) { return player.init(); }); };
    AnimationGroupPlayer.prototype.onStart = function (fn) { this._onStartFns.push(fn); };
    AnimationGroupPlayer.prototype.onDone = function (fn) { this._onDoneFns.push(fn); };
    AnimationGroupPlayer.prototype.hasStarted = function () { return this._started; };
    AnimationGroupPlayer.prototype.play = function () {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(this.parentPlayer)) {
            this.init();
        }
        if (!this.hasStarted()) {
            this._onStartFns.forEach(function (fn) { return fn(); });
            this._onStartFns = [];
            this._started = true;
        }
        this._players.forEach(function (player) { return player.play(); });
    };
    AnimationGroupPlayer.prototype.pause = function () { this._players.forEach(function (player) { return player.pause(); }); };
    AnimationGroupPlayer.prototype.restart = function () { this._players.forEach(function (player) { return player.restart(); }); };
    AnimationGroupPlayer.prototype.finish = function () {
        this._onFinish();
        this._players.forEach(function (player) { return player.finish(); });
    };
    AnimationGroupPlayer.prototype.destroy = function () {
        if (!this._destroyed) {
            this._onFinish();
            this._players.forEach(function (player) { return player.destroy(); });
            this._destroyed = true;
        }
    };
    AnimationGroupPlayer.prototype.reset = function () {
        this._players.forEach(function (player) { return player.reset(); });
        this._destroyed = false;
        this._finished = false;
        this._started = false;
    };
    AnimationGroupPlayer.prototype.setPosition = function (p) {
        this._players.forEach(function (player) { player.setPosition(p); });
    };
    AnimationGroupPlayer.prototype.getPosition = function () {
        var min = 0;
        this._players.forEach(function (player) {
            var p = player.getPosition();
            min = Math.min(p, min);
        });
        return min;
    };
    Object.defineProperty(AnimationGroupPlayer.prototype, "players", {
        get: function () { return this._players; },
        enumerable: true,
        configurable: true
    });
    return AnimationGroupPlayer;
}());
//# sourceMappingURL=animation_group_player.js.map

/***/ },
/* 56 */
/* exports provided: queueAnimation, triggerQueuedAnimations */
/* exports used: triggerQueuedAnimations, queueAnimation */
/*!**********************************************************!*\
  !*** ./~/@angular/core/src/animation/animation_queue.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["b"] = queueAnimation;
/* harmony export (immutable) */ exports["a"] = triggerQueuedAnimations;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _queuedAnimations = [];
/** @internal */
function queueAnimation(player) {
    _queuedAnimations.push(player);
}
/** @internal */
function triggerQueuedAnimations() {
    // this code is wrapped into a single promise such that the
    // onStart and onDone player callbacks are triggered outside
    // of the digest cycle of animations
    if (_queuedAnimations.length) {
        Promise.resolve(null).then(_triggerAnimations);
    }
}
function _triggerAnimations() {
    for (var i = 0; i < _queuedAnimations.length; i++) {
        var player = _queuedAnimations[i];
        player.play();
    }
    _queuedAnimations = [];
}
//# sourceMappingURL=animation_queue.js.map

/***/ },
/* 57 */
/* exports provided: AnimationSequencePlayer */
/* exports used: AnimationSequencePlayer */
/*!********************************************************************!*\
  !*** ./~/@angular/core/src/animation/animation_sequence_player.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation_player__ = __webpack_require__(/*! ./animation_player */ 28);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AnimationSequencePlayer; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var AnimationSequencePlayer = (function () {
    function AnimationSequencePlayer(_players) {
        var _this = this;
        this._players = _players;
        this._currentIndex = 0;
        this._onDoneFns = [];
        this._onStartFns = [];
        this._finished = false;
        this._started = false;
        this._destroyed = false;
        this.parentPlayer = null;
        this._players.forEach(function (player) { player.parentPlayer = _this; });
        this._onNext(false);
    }
    AnimationSequencePlayer.prototype._onNext = function (start) {
        var _this = this;
        if (this._finished)
            return;
        if (this._players.length == 0) {
            this._activePlayer = new __WEBPACK_IMPORTED_MODULE_1__animation_player__["a" /* NoOpAnimationPlayer */]();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["l" /* scheduleMicroTask */])(function () { return _this._onFinish(); });
        }
        else if (this._currentIndex >= this._players.length) {
            this._activePlayer = new __WEBPACK_IMPORTED_MODULE_1__animation_player__["a" /* NoOpAnimationPlayer */]();
            this._onFinish();
        }
        else {
            var player = this._players[this._currentIndex++];
            player.onDone(function () { return _this._onNext(true); });
            this._activePlayer = player;
            if (start) {
                player.play();
            }
        }
    };
    AnimationSequencePlayer.prototype._onFinish = function () {
        if (!this._finished) {
            this._finished = true;
            this._onDoneFns.forEach(function (fn) { return fn(); });
            this._onDoneFns = [];
        }
    };
    AnimationSequencePlayer.prototype.init = function () { this._players.forEach(function (player) { return player.init(); }); };
    AnimationSequencePlayer.prototype.onStart = function (fn) { this._onStartFns.push(fn); };
    AnimationSequencePlayer.prototype.onDone = function (fn) { this._onDoneFns.push(fn); };
    AnimationSequencePlayer.prototype.hasStarted = function () { return this._started; };
    AnimationSequencePlayer.prototype.play = function () {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(this.parentPlayer)) {
            this.init();
        }
        if (!this.hasStarted()) {
            this._onStartFns.forEach(function (fn) { return fn(); });
            this._onStartFns = [];
            this._started = true;
        }
        this._activePlayer.play();
    };
    AnimationSequencePlayer.prototype.pause = function () { this._activePlayer.pause(); };
    AnimationSequencePlayer.prototype.restart = function () {
        this.reset();
        if (this._players.length > 0) {
            this._players[0].restart();
        }
    };
    AnimationSequencePlayer.prototype.reset = function () {
        this._players.forEach(function (player) { return player.reset(); });
        this._destroyed = false;
        this._finished = false;
        this._started = false;
    };
    AnimationSequencePlayer.prototype.finish = function () {
        this._onFinish();
        this._players.forEach(function (player) { return player.finish(); });
    };
    AnimationSequencePlayer.prototype.destroy = function () {
        if (!this._destroyed) {
            this._onFinish();
            this._players.forEach(function (player) { return player.destroy(); });
            this._destroyed = true;
            this._activePlayer = new __WEBPACK_IMPORTED_MODULE_1__animation_player__["a" /* NoOpAnimationPlayer */]();
        }
    };
    AnimationSequencePlayer.prototype.setPosition = function (p) { this._players[0].setPosition(p); };
    AnimationSequencePlayer.prototype.getPosition = function () { return this._players[0].getPosition(); };
    Object.defineProperty(AnimationSequencePlayer.prototype, "players", {
        get: function () { return this._players; },
        enumerable: true,
        configurable: true
    });
    return AnimationSequencePlayer;
}());
//# sourceMappingURL=animation_sequence_player.js.map

/***/ },
/* 58 */
/* exports provided: AnimationTransitionEvent */
/* exports used: AnimationTransitionEvent */
/*!*********************************************************************!*\
  !*** ./~/@angular/core/src/animation/animation_transition_event.js ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AnimationTransitionEvent; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An instance of this class is returned as an event parameter when an animation
 * callback is captured for an animation either during the start or done phase.
 *
 * ```typescript
 * @Component({
 *   host: {
 *     '[@myAnimationTrigger]': 'someExpression',
 *     '(@myAnimationTrigger.start)': 'captureStartEvent($event)',
 *     '(@myAnimationTrigger.done)': 'captureDoneEvent($event)',
 *   },
 *   animations: [
 *     trigger("myAnimationTrigger", [
 *        // ...
 *     ])
 *   ]
 * })
 * class MyComponent {
 *   someExpression: any = false;
 *   captureStartEvent(event: AnimationTransitionEvent) {
 *     // the toState, fromState and totalTime data is accessible from the event variable
 *   }
 *
 *   captureDoneEvent(event: AnimationTransitionEvent) {
 *     // the toState, fromState and totalTime data is accessible from the event variable
 *   }
 * }
 * ```
 *
 * @experimental Animation support is experimental.
 */
var AnimationTransitionEvent = (function () {
    function AnimationTransitionEvent(_a) {
        var fromState = _a.fromState, toState = _a.toState, totalTime = _a.totalTime, phaseName = _a.phaseName;
        this.fromState = fromState;
        this.toState = toState;
        this.totalTime = totalTime;
        this.phaseName = phaseName;
    }
    return AnimationTransitionEvent;
}());
//# sourceMappingURL=animation_transition_event.js.map

/***/ },
/* 59 */
/* exports provided: AUTO_STYLE, AnimationEntryMetadata, AnimationStateMetadata, AnimationStateDeclarationMetadata, AnimationStateTransitionMetadata, AnimationMetadata, AnimationKeyframesSequenceMetadata, AnimationStyleMetadata, AnimationAnimateMetadata, AnimationWithStepsMetadata, AnimationSequenceMetadata, AnimationGroupMetadata, animate, group, sequence, style, state, keyframes, transition, trigger */
/* exports used: AUTO_STYLE, AnimationEntryMetadata, AnimationStateMetadata, AnimationStateDeclarationMetadata, AnimationStateTransitionMetadata, AnimationMetadata, AnimationKeyframesSequenceMetadata, AnimationStyleMetadata, AnimationAnimateMetadata, AnimationWithStepsMetadata, AnimationSequenceMetadata, AnimationGroupMetadata, animate, group, sequence, style, state, keyframes, transition, trigger */
/*!***************************************************!*\
  !*** ./~/@angular/core/src/animation/metadata.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AUTO_STYLE; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return AnimationEntryMetadata; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return AnimationStateMetadata; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return AnimationStateDeclarationMetadata; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return AnimationStateTransitionMetadata; });
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return AnimationMetadata; });
/* harmony export (binding) */ __webpack_require__.d(exports, "g", function() { return AnimationKeyframesSequenceMetadata; });
/* harmony export (binding) */ __webpack_require__.d(exports, "h", function() { return AnimationStyleMetadata; });
/* harmony export (binding) */ __webpack_require__.d(exports, "i", function() { return AnimationAnimateMetadata; });
/* harmony export (binding) */ __webpack_require__.d(exports, "j", function() { return AnimationWithStepsMetadata; });
/* harmony export (binding) */ __webpack_require__.d(exports, "k", function() { return AnimationSequenceMetadata; });
/* harmony export (binding) */ __webpack_require__.d(exports, "l", function() { return AnimationGroupMetadata; });
/* harmony export (immutable) */ exports["m"] = animate;
/* harmony export (immutable) */ exports["n"] = group;
/* harmony export (immutable) */ exports["o"] = sequence;
/* harmony export (immutable) */ exports["p"] = style;
/* harmony export (immutable) */ exports["q"] = state;
/* harmony export (immutable) */ exports["r"] = keyframes;
/* harmony export (immutable) */ exports["s"] = transition;
/* harmony export (immutable) */ exports["t"] = trigger;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * @experimental Animation support is experimental.
 */
var AUTO_STYLE = '*';
/**
 * Metadata representing the entry of animations.
 * Instances of this class are provided via the animation DSL when the {@link trigger trigger
 * animation function} is called.
 *
 * @experimental Animation support is experimental.
 */
var AnimationEntryMetadata = (function () {
    function AnimationEntryMetadata(name, definitions) {
        this.name = name;
        this.definitions = definitions;
    }
    return AnimationEntryMetadata;
}());
/**
 * @experimental Animation support is experimental.
 */
var AnimationStateMetadata = (function () {
    function AnimationStateMetadata() {
    }
    return AnimationStateMetadata;
}());
/**
 * Metadata representing the entry of animations.
 * Instances of this class are provided via the animation DSL when the {@link state state animation
 * function} is called.
 *
 * @experimental Animation support is experimental.
 */
var AnimationStateDeclarationMetadata = (function (_super) {
    __extends(AnimationStateDeclarationMetadata, _super);
    function AnimationStateDeclarationMetadata(stateNameExpr, styles) {
        _super.call(this);
        this.stateNameExpr = stateNameExpr;
        this.styles = styles;
    }
    return AnimationStateDeclarationMetadata;
}(AnimationStateMetadata));
/**
 * Metadata representing the entry of animations.
 * Instances of this class are provided via the animation DSL when the
 * {@link transition transition animation function} is called.
 *
 * @experimental Animation support is experimental.
 */
var AnimationStateTransitionMetadata = (function (_super) {
    __extends(AnimationStateTransitionMetadata, _super);
    function AnimationStateTransitionMetadata(stateChangeExpr, steps) {
        _super.call(this);
        this.stateChangeExpr = stateChangeExpr;
        this.steps = steps;
    }
    return AnimationStateTransitionMetadata;
}(AnimationStateMetadata));
/**
 * @experimental Animation support is experimental.
 */
var AnimationMetadata = (function () {
    function AnimationMetadata() {
    }
    return AnimationMetadata;
}());
/**
 * Metadata representing the entry of animations.
 * Instances of this class are provided via the animation DSL when the {@link keyframes keyframes
 * animation function} is called.
 *
 * @experimental Animation support is experimental.
 */
var AnimationKeyframesSequenceMetadata = (function (_super) {
    __extends(AnimationKeyframesSequenceMetadata, _super);
    function AnimationKeyframesSequenceMetadata(steps) {
        _super.call(this);
        this.steps = steps;
    }
    return AnimationKeyframesSequenceMetadata;
}(AnimationMetadata));
/**
 * Metadata representing the entry of animations.
 * Instances of this class are provided via the animation DSL when the {@link style style animation
 * function} is called.
 *
 * @experimental Animation support is experimental.
 */
var AnimationStyleMetadata = (function (_super) {
    __extends(AnimationStyleMetadata, _super);
    function AnimationStyleMetadata(styles, offset) {
        if (offset === void 0) { offset = null; }
        _super.call(this);
        this.styles = styles;
        this.offset = offset;
    }
    return AnimationStyleMetadata;
}(AnimationMetadata));
/**
 * Metadata representing the entry of animations.
 * Instances of this class are provided via the animation DSL when the {@link animate animate
 * animation function} is called.
 *
 * @experimental Animation support is experimental.
 */
var AnimationAnimateMetadata = (function (_super) {
    __extends(AnimationAnimateMetadata, _super);
    function AnimationAnimateMetadata(timings, styles) {
        _super.call(this);
        this.timings = timings;
        this.styles = styles;
    }
    return AnimationAnimateMetadata;
}(AnimationMetadata));
/**
 * @experimental Animation support is experimental.
 */
var AnimationWithStepsMetadata = (function (_super) {
    __extends(AnimationWithStepsMetadata, _super);
    function AnimationWithStepsMetadata() {
        _super.call(this);
    }
    Object.defineProperty(AnimationWithStepsMetadata.prototype, "steps", {
        get: function () { throw new Error('NOT IMPLEMENTED: Base Class'); },
        enumerable: true,
        configurable: true
    });
    return AnimationWithStepsMetadata;
}(AnimationMetadata));
/**
 * Metadata representing the entry of animations.
 * Instances of this class are provided via the animation DSL when the {@link sequence sequence
 * animation function} is called.
 *
 * @experimental Animation support is experimental.
 */
var AnimationSequenceMetadata = (function (_super) {
    __extends(AnimationSequenceMetadata, _super);
    function AnimationSequenceMetadata(_steps) {
        _super.call(this);
        this._steps = _steps;
    }
    Object.defineProperty(AnimationSequenceMetadata.prototype, "steps", {
        get: function () { return this._steps; },
        enumerable: true,
        configurable: true
    });
    return AnimationSequenceMetadata;
}(AnimationWithStepsMetadata));
/**
 * Metadata representing the entry of animations.
 * Instances of this class are provided via the animation DSL when the {@link group group animation
 * function} is called.
 *
 * @experimental Animation support is experimental.
 */
var AnimationGroupMetadata = (function (_super) {
    __extends(AnimationGroupMetadata, _super);
    function AnimationGroupMetadata(_steps) {
        _super.call(this);
        this._steps = _steps;
    }
    Object.defineProperty(AnimationGroupMetadata.prototype, "steps", {
        get: function () { return this._steps; },
        enumerable: true,
        configurable: true
    });
    return AnimationGroupMetadata;
}(AnimationWithStepsMetadata));
/**
 * `animate` is an animation-specific function that is designed to be used inside of Angular2's
 * animation
 * DSL language. If this information is new, please navigate to the
 * {@link Component#animations-anchor component animations metadata
 * page} to gain a better understanding of how animations in Angular2 are used.
 *
 * `animate` specifies an animation step that will apply the provided `styles` data for a given
 * amount of
 * time based on the provided `timing` expression value. Calls to `animate` are expected to be
 * used within {@link sequence an animation sequence}, {@link group group}, or {@link transition
 * transition}.
 *
 * ### Usage
 *
 * The `animate` function accepts two input parameters: `timing` and `styles`:
 *
 * - `timing` is a string based value that can be a combination of a duration with optional
 * delay and easing values. The format for the expression breaks down to `duration delay easing`
 * (therefore a value such as `1s 100ms ease-out` will be parse itself into `duration=1000,
 * delay=100, easing=ease-out`.
 * If a numeric value is provided then that will be used as the `duration` value in millisecond
 * form.
 * - `styles` is the style input data which can either be a call to {@link style style} or {@link
 * keyframes keyframes}.
 * If left empty then the styles from the destination state will be collected and used (this is
 * useful when
 * describing an animation step that will complete an animation by {@link
 * transition#the-final-animate-call animating to the final state}).
 *
 * ```typescript
 * // various functions for specifying timing data
 * animate(500, style(...))
 * animate("1s", style(...))
 * animate("100ms 0.5s", style(...))
 * animate("5s ease", style(...))
 * animate("5s 10ms cubic-bezier(.17,.67,.88,.1)", style(...))
 *
 * // either style() of keyframes() can be used
 * animate(500, style({ background: "red" }))
 * animate(500, keyframes([
 *   style({ background: "blue" })),
 *   style({ background: "red" }))
 * ])
 * ```
 *
 * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
 *
 * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
 *
 * @experimental Animation support is experimental.
 */
function animate(timing, styles) {
    if (styles === void 0) { styles = null; }
    var stylesEntry = styles;
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(stylesEntry)) {
        var EMPTY_STYLE = {};
        stylesEntry = new AnimationStyleMetadata([EMPTY_STYLE], 1);
    }
    return new AnimationAnimateMetadata(timing, stylesEntry);
}
/**
 * `group` is an animation-specific function that is designed to be used inside of Angular2's
 * animation
 * DSL language. If this information is new, please navigate to the
 * {@link Component#animations-anchor component animations metadata
 * page} to gain a better understanding of how animations in Angular2 are used.
 *
 * `group` specifies a list of animation steps that are all run in parallel. Grouped animations
 * are useful when a series of styles must be animated/closed off
 * at different statrting/ending times.
 *
 * The `group` function can either be used within a {@link sequence sequence} or a {@link transition
 * transition}
 * and it will only continue to the next instruction once all of the inner animation steps
 * have completed.
 *
 * ### Usage
 *
 * The `steps` data that is passed into the `group` animation function can either consist
 * of {@link style style} or {@link animate animate} function calls. Each call to `style()` or
 * `animate()`
 * within a group will be executed instantly (use {@link keyframes keyframes} or a
 * {@link animate#usage animate() with a delay value} to offset styles to be applied at a later
 * time).
 *
 * ```typescript
 * group([
 *   animate("1s", { background: "black" }))
 *   animate("2s", { color: "white" }))
 * ])
 * ```
 *
 * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
 *
 * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
 *
 * @experimental Animation support is experimental.
 */
function group(steps) {
    return new AnimationGroupMetadata(steps);
}
/**
 * `sequence` is an animation-specific function that is designed to be used inside of Angular2's
 * animation
 * DSL language. If this information is new, please navigate to the
 * {@link Component#animations-anchor component animations metadata
 * page} to gain a better understanding of how animations in Angular2 are used.
 *
 * `sequence` Specifies a list of animation steps that are run one by one. (`sequence` is used
 * by default when an array is passed as animation data into {@link transition transition}.)
 *
 * The `sequence` function can either be used within a {@link group group} or a {@link transition
 * transition}
 * and it will only continue to the next instruction once each of the inner animation steps
 * have completed.
 *
 * To perform animation styling in parallel with other animation steps then
 * have a look at the {@link group group} animation function.
 *
 * ### Usage
 *
 * The `steps` data that is passed into the `sequence` animation function can either consist
 * of {@link style style} or {@link animate animate} function calls. A call to `style()` will apply
 * the
 * provided styling data immediately while a call to `animate()` will apply its styling
 * data over a given time depending on its timing data.
 *
 * ```typescript
 * sequence([
 *   style({ opacity: 0 })),
 *   animate("1s", { opacity: 1 }))
 * ])
 * ```
 *
 * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
 *
 * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
 *
 * @experimental Animation support is experimental.
 */
function sequence(steps) {
    return new AnimationSequenceMetadata(steps);
}
/**
 * `style` is an animation-specific function that is designed to be used inside of Angular2's
 * animation
 * DSL language. If this information is new, please navigate to the
 * {@link Component#animations-anchor component animations metadata
 * page} to gain a better understanding of how animations in Angular2 are used.
 *
 * `style` declares a key/value object containing CSS properties/styles that can then
 * be used for {@link state animation states}, within an {@link sequence animation sequence}, or as
 * styling data for both {@link animate animate} and {@link keyframes keyframes}.
 *
 * ### Usage
 *
 * `style` takes in a key/value string map as data and expects one or more CSS property/value
 * pairs to be defined.
 *
 * ```typescript
 * // string values are used for css properties
 * style({ background: "red", color: "blue" })
 *
 * // numerical (pixel) values are also supported
 * style({ width: 100, height: 0 })
 * ```
 *
 * #### Auto-styles (using `*`)
 *
 * When an asterix (`*`) character is used as a value then it will be detected from the element
 * being animated
 * and applied as animation data when the animation starts.
 *
 * This feature proves useful for a state depending on layout and/or environment factors; in such
 * cases
 * the styles are calculated just before the animation starts.
 *
 * ```typescript
 * // the steps below will animate from 0 to the
 * // actual height of the element
 * style({ height: 0 }),
 * animate("1s", style({ height: "*" }))
 * ```
 *
 * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
 *
 * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
 *
 * @experimental Animation support is experimental.
 */
function style(tokens) {
    var input;
    var offset = null;
    if (typeof tokens === 'string') {
        input = [tokens];
    }
    else {
        if (Array.isArray(tokens)) {
            input = tokens;
        }
        else {
            input = [tokens];
        }
        input.forEach(function (entry) {
            var entryOffset = entry['offset'];
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(entryOffset)) {
                offset = offset == null ? parseFloat(entryOffset) : offset;
            }
        });
    }
    return new AnimationStyleMetadata(input, offset);
}
/**
 * `state` is an animation-specific function that is designed to be used inside of Angular2's
 * animation
 * DSL language. If this information is new, please navigate to the
 * {@link Component#animations-anchor component animations metadata
 * page} to gain a better understanding of how animations in Angular2 are used.
 *
 * `state` declares an animation state within the given trigger. When a state is
 * active within a component then its associated styles will persist on
 * the element that the trigger is attached to (even when the animation ends).
 *
 * To animate between states, have a look at the animation {@link transition transition}
 * DSL function. To register states to an animation trigger please have a look
 * at the {@link trigger trigger} function.
 *
 * #### The `void` state
 *
 * The `void` state value is a reserved word that angular uses to determine when the element is not
 * apart
 * of the application anymore (e.g. when an `ngIf` evaluates to false then the state of the
 * associated element
 * is void).
 *
 * #### The `*` (default) state
 *
 * The `*` state (when styled) is a fallback state that will be used if
 * the state that is being animated is not declared within the trigger.
 *
 * ### Usage
 *
 * `state` will declare an animation state with its associated styles
 * within the given trigger.
 *
 * - `stateNameExpr` can be one or more state names separated by commas.
 * - `styles` refers to the {@link style styling data} that will be persisted on the element once
 * the state
 * has been reached.
 *
 * ```typescript
 * // "void" is a reserved name for a state and is used to represent
 * // the state in which an element is detached from from the application.
 * state("void", style({ height: 0 }))
 *
 * // user-defined states
 * state("closed", style({ height: 0 }))
 * state("open, visible", style({ height: "*" }))
 * ```
 *
 * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
 *
 * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
 *
 * @experimental Animation support is experimental.
 */
function state(stateNameExpr, styles) {
    return new AnimationStateDeclarationMetadata(stateNameExpr, styles);
}
/**
 * `keyframes` is an animation-specific function that is designed to be used inside of Angular2's
 * animation
 * DSL language. If this information is new, please navigate to the
 * {@link Component#animations-anchor component animations metadata
 * page} to gain a better understanding of how animations in Angular2 are used.
 *
 * `keyframes` specifies a collection of {@link style style} entries each optionally characterized
 * by an `offset` value.
 *
 * ### Usage
 *
 * The `keyframes` animation function is designed to be used alongside the {@link animate animate}
 * animation function. Instead of applying animations from where they are
 * currently to their destination, keyframes can describe how each style entry is applied
 * and at what point within the animation arc (much like CSS Keyframe Animations do).
 *
 * For each `style()` entry an `offset` value can be set. Doing so allows to specifiy at
 * what percentage of the animate time the styles will be applied.
 *
 * ```typescript
 * // the provided offset values describe when each backgroundColor value is applied.
 * animate("5s", keyframes([
 *   style({ backgroundColor: "red", offset: 0 }),
 *   style({ backgroundColor: "blue", offset: 0.2 }),
 *   style({ backgroundColor: "orange", offset: 0.3 }),
 *   style({ backgroundColor: "black", offset: 1 })
 * ]))
 * ```
 *
 * Alternatively, if there are no `offset` values used within the style entries then the offsets
 * will
 * be calculated automatically.
 *
 * ```typescript
 * animate("5s", keyframes([
 *   style({ backgroundColor: "red" }) // offset = 0
 *   style({ backgroundColor: "blue" }) // offset = 0.33
 *   style({ backgroundColor: "orange" }) // offset = 0.66
 *   style({ backgroundColor: "black" }) // offset = 1
 * ]))
 * ```
 *
 * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
 *
 * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
 *
 * @experimental Animation support is experimental.
 */
function keyframes(steps) {
    return new AnimationKeyframesSequenceMetadata(steps);
}
/**
 * `transition` is an animation-specific function that is designed to be used inside of Angular2's
 * animation
 * DSL language. If this information is new, please navigate to the
 * {@link Component#animations-anchor component animations metadata
 * page} to gain a better understanding of how animations in Angular2 are used.
 *
 * `transition` declares the {@link sequence sequence of animation steps} that will be run when the
 * provided
 * `stateChangeExpr` value is satisfied. The `stateChangeExpr` consists of a `state1 => state2`
 * which consists
 * of two known states (use an asterix (`*`) to refer to a dynamic starting and/or ending state).
 *
 * Animation transitions are placed within an {@link trigger animation trigger}. For an transition
 * to animate to
 * a state value and persist its styles then one or more {@link state animation states} is expected
 * to be defined.
 *
 * ### Usage
 *
 * An animation transition is kicked off the `stateChangeExpr` predicate evaluates to true based on
 * what the
 * previous state is and what the current state has become. In other words, if a transition is
 * defined that
 * matches the old/current state criteria then the associated animation will be triggered.
 *
 * ```typescript
 * // all transition/state changes are defined within an animation trigger
 * trigger("myAnimationTrigger", [
 *   // if a state is defined then its styles will be persisted when the
 *   // animation has fully completed itself
 *   state("on", style({ background: "green" })),
 *   state("off", style({ background: "grey" })),
 *
 *   // a transition animation that will be kicked off when the state value
 *   // bound to "myAnimationTrigger" changes from "on" to "off"
 *   transition("on => off", animate(500)),
 *
 *   // it is also possible to do run the same animation for both directions
 *   transition("on <=> off", animate(500)),
 *
 *   // or to define multiple states pairs separated by commas
 *   transition("on => off, off => void", animate(500)),
 *
 *   // this is a catch-all state change for when an element is inserted into
 *   // the page and the destination state is unknown
 *   transition("void => *", [
 *     style({ opacity: 0 }),
 *     animate(500)
 *   ]),
 *
 *   // this will capture a state change between any states
 *   transition("* => *", animate("1s 0s")),
 * ])
 * ```
 *
 * The template associated with this component will make use of the `myAnimationTrigger`
 * animation trigger by binding to an element within its template code.
 *
 * ```html
 * <!-- somewhere inside of my-component-tpl.html -->
 * <div [@myAnimationTrigger]="myStatusExp">...</div>
 * ```
 *
 * #### The final `animate` call
 *
 * If the final step within the transition steps is a call to `animate()` that **only**
 * uses a timing value with **no style data** then it will be automatically used as the final
 * animation
 * arc for the element to animate itself to the final state. This involves an automatic mix of
 * adding/removing CSS styles so that the element will be in the exact state it should be for the
 * applied state to be presented correctly.
 *
 * ```
 * // start off by hiding the element, but make sure that it animates properly to whatever state
 * // is currently active for "myAnimationTrigger"
 * transition("void => *", [
 *   style({ opacity: 0 }),
 *   animate(500)
 * ])
 * ```
 *
 * ### Transition Aliases (`:enter` and `:leave`)
 *
 * Given that enter (insertion) and leave (removal) animations are so common,
 * the `transition` function accepts both `:enter` and `:leave` values which
 * are aliases for the `void => *` and `* => void` state changes.
 *
 * ```
 * transition(":enter", [
 *   style({ opacity: 0 }),
 *   animate(500, style({ opacity: 1 }))
 * ])
 * transition(":leave", [
 *   animate(500, style({ opacity: 0 }))
 * ])
 * ```
 *
 * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
 *
 * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
 *
 * @experimental Animation support is experimental.
 */
function transition(stateChangeExpr, steps) {
    var animationData = Array.isArray(steps) ? new AnimationSequenceMetadata(steps) : steps;
    return new AnimationStateTransitionMetadata(stateChangeExpr, animationData);
}
/**
 * `trigger` is an animation-specific function that is designed to be used inside of Angular2's
 * animation
 * DSL language. If this information is new, please navigate to the
 * {@link Component#animations-anchor component animations metadata
 * page} to gain a better understanding of how animations in Angular2 are used.
 *
 * `trigger` Creates an animation trigger which will a list of {@link state state} and {@link
 * transition transition}
 * entries that will be evaluated when the expression bound to the trigger changes.
 *
 * Triggers are registered within the component annotation data under the
 * {@link Component#animations-anchor animations section}. An animation trigger can
 * be placed on an element within a template by referencing the name of the
 * trigger followed by the expression value that the trigger is bound to
 * (in the form of `[@triggerName]="expression"`.
 *
 * ### Usage
 *
 * `trigger` will create an animation trigger reference based on the provided `name` value.
 * The provided `animation` value is expected to be an array consisting of {@link state state} and
 * {@link transition transition}
 * declarations.
 *
 * ```typescript
 * @Component({
 *   selector: 'my-component',
 *   templateUrl: 'my-component-tpl.html',
 *   animations: [
 *     trigger("myAnimationTrigger", [
 *       state(...),
 *       state(...),
 *       transition(...),
 *       transition(...)
 *     ])
 *   ]
 * })
 * class MyComponent {
 *   myStatusExp = "something";
 * }
 * ```
 *
 * The template associated with this component will make use of the `myAnimationTrigger`
 * animation trigger by binding to an element within its template code.
 *
 * ```html
 * <!-- somewhere inside of my-component-tpl.html -->
 * <div [@myAnimationTrigger]="myStatusExp">...</div>
 * ```
 *
 * ### Example ([live demo](http://plnkr.co/edit/Kez8XGWBxWue7qP7nNvF?p=preview))
 *
 * {@example core/animation/ts/dsl/animation_example.ts region='Component'}
 *
 * @experimental Animation support is experimental.
 */
function trigger(name, animation) {
    return new AnimationEntryMetadata(name, animation);
}
//# sourceMappingURL=metadata.js.map

/***/ },
/* 60 */
/* exports provided: DefaultKeyValueDifferFactory, DefaultKeyValueDiffer, KeyValueChangeRecord */
/* exports used: DefaultKeyValueDifferFactory, KeyValueChangeRecord */
/*!*********************************************************************************!*\
  !*** ./~/@angular/core/src/change_detection/differs/default_keyvalue_differ.js ***!
  \*********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(/*! ../../facade/lang */ 0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DefaultKeyValueDifferFactory; });
/* unused harmony export DefaultKeyValueDiffer */
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return KeyValueChangeRecord; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var DefaultKeyValueDifferFactory = (function () {
    function DefaultKeyValueDifferFactory() {
    }
    DefaultKeyValueDifferFactory.prototype.supports = function (obj) { return obj instanceof Map || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["e" /* isJsObject */])(obj); };
    DefaultKeyValueDifferFactory.prototype.create = function (cdRef) { return new DefaultKeyValueDiffer(); };
    return DefaultKeyValueDifferFactory;
}());
var DefaultKeyValueDiffer = (function () {
    function DefaultKeyValueDiffer() {
        this._records = new Map();
        this._mapHead = null;
        this._previousMapHead = null;
        this._changesHead = null;
        this._changesTail = null;
        this._additionsHead = null;
        this._additionsTail = null;
        this._removalsHead = null;
        this._removalsTail = null;
    }
    Object.defineProperty(DefaultKeyValueDiffer.prototype, "isDirty", {
        get: function () {
            return this._additionsHead !== null || this._changesHead !== null ||
                this._removalsHead !== null;
        },
        enumerable: true,
        configurable: true
    });
    DefaultKeyValueDiffer.prototype.forEachItem = function (fn) {
        var record;
        for (record = this._mapHead; record !== null; record = record._next) {
            fn(record);
        }
    };
    DefaultKeyValueDiffer.prototype.forEachPreviousItem = function (fn) {
        var record;
        for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
            fn(record);
        }
    };
    DefaultKeyValueDiffer.prototype.forEachChangedItem = function (fn) {
        var record;
        for (record = this._changesHead; record !== null; record = record._nextChanged) {
            fn(record);
        }
    };
    DefaultKeyValueDiffer.prototype.forEachAddedItem = function (fn) {
        var record;
        for (record = this._additionsHead; record !== null; record = record._nextAdded) {
            fn(record);
        }
    };
    DefaultKeyValueDiffer.prototype.forEachRemovedItem = function (fn) {
        var record;
        for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
            fn(record);
        }
    };
    DefaultKeyValueDiffer.prototype.diff = function (map) {
        if (!map) {
            map = new Map();
        }
        else if (!(map instanceof Map || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["e" /* isJsObject */])(map))) {
            throw new Error("Error trying to diff '" + map + "'");
        }
        return this.check(map) ? this : null;
    };
    DefaultKeyValueDiffer.prototype.onDestroy = function () { };
    DefaultKeyValueDiffer.prototype.check = function (map) {
        var _this = this;
        this._reset();
        var records = this._records;
        var oldSeqRecord = this._mapHead;
        var lastOldSeqRecord = null;
        var lastNewSeqRecord = null;
        var seqChanged = false;
        this._forEach(map, function (value, key) {
            var newSeqRecord;
            if (oldSeqRecord && key === oldSeqRecord.key) {
                newSeqRecord = oldSeqRecord;
                _this._maybeAddToChanges(newSeqRecord, value);
            }
            else {
                seqChanged = true;
                if (oldSeqRecord !== null) {
                    _this._removeFromSeq(lastOldSeqRecord, oldSeqRecord);
                    _this._addToRemovals(oldSeqRecord);
                }
                if (records.has(key)) {
                    newSeqRecord = records.get(key);
                    _this._maybeAddToChanges(newSeqRecord, value);
                }
                else {
                    newSeqRecord = new KeyValueChangeRecord(key);
                    records.set(key, newSeqRecord);
                    newSeqRecord.currentValue = value;
                    _this._addToAdditions(newSeqRecord);
                }
            }
            if (seqChanged) {
                if (_this._isInRemovals(newSeqRecord)) {
                    _this._removeFromRemovals(newSeqRecord);
                }
                if (lastNewSeqRecord == null) {
                    _this._mapHead = newSeqRecord;
                }
                else {
                    lastNewSeqRecord._next = newSeqRecord;
                }
            }
            lastOldSeqRecord = oldSeqRecord;
            lastNewSeqRecord = newSeqRecord;
            oldSeqRecord = oldSeqRecord && oldSeqRecord._next;
        });
        this._truncate(lastOldSeqRecord, oldSeqRecord);
        return this.isDirty;
    };
    /** @internal */
    DefaultKeyValueDiffer.prototype._reset = function () {
        if (this.isDirty) {
            var record = void 0;
            // Record the state of the mapping
            for (record = this._previousMapHead = this._mapHead; record !== null; record = record._next) {
                record._nextPrevious = record._next;
            }
            for (record = this._changesHead; record !== null; record = record._nextChanged) {
                record.previousValue = record.currentValue;
            }
            for (record = this._additionsHead; record != null; record = record._nextAdded) {
                record.previousValue = record.currentValue;
            }
            this._changesHead = this._changesTail = null;
            this._additionsHead = this._additionsTail = null;
            this._removalsHead = this._removalsTail = null;
        }
    };
    /** @internal */
    DefaultKeyValueDiffer.prototype._truncate = function (lastRecord, record) {
        while (record !== null) {
            if (lastRecord === null) {
                this._mapHead = null;
            }
            else {
                lastRecord._next = null;
            }
            var nextRecord = record._next;
            this._addToRemovals(record);
            lastRecord = record;
            record = nextRecord;
        }
        for (var rec = this._removalsHead; rec !== null; rec = rec._nextRemoved) {
            rec.previousValue = rec.currentValue;
            rec.currentValue = null;
            this._records.delete(rec.key);
        }
    };
    DefaultKeyValueDiffer.prototype._maybeAddToChanges = function (record, newValue) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["i" /* looseIdentical */])(newValue, record.currentValue)) {
            record.previousValue = record.currentValue;
            record.currentValue = newValue;
            this._addToChanges(record);
        }
    };
    /** @internal */
    DefaultKeyValueDiffer.prototype._isInRemovals = function (record) {
        return record === this._removalsHead || record._nextRemoved !== null ||
            record._prevRemoved !== null;
    };
    /** @internal */
    DefaultKeyValueDiffer.prototype._addToRemovals = function (record) {
        if (this._removalsHead === null) {
            this._removalsHead = this._removalsTail = record;
        }
        else {
            this._removalsTail._nextRemoved = record;
            record._prevRemoved = this._removalsTail;
            this._removalsTail = record;
        }
    };
    /** @internal */
    DefaultKeyValueDiffer.prototype._removeFromSeq = function (prev, record) {
        var next = record._next;
        if (prev === null) {
            this._mapHead = next;
        }
        else {
            prev._next = next;
        }
        record._next = null;
    };
    /** @internal */
    DefaultKeyValueDiffer.prototype._removeFromRemovals = function (record) {
        var prev = record._prevRemoved;
        var next = record._nextRemoved;
        if (prev === null) {
            this._removalsHead = next;
        }
        else {
            prev._nextRemoved = next;
        }
        if (next === null) {
            this._removalsTail = prev;
        }
        else {
            next._prevRemoved = prev;
        }
        record._prevRemoved = record._nextRemoved = null;
    };
    /** @internal */
    DefaultKeyValueDiffer.prototype._addToAdditions = function (record) {
        if (this._additionsHead === null) {
            this._additionsHead = this._additionsTail = record;
        }
        else {
            this._additionsTail._nextAdded = record;
            this._additionsTail = record;
        }
    };
    /** @internal */
    DefaultKeyValueDiffer.prototype._addToChanges = function (record) {
        if (this._changesHead === null) {
            this._changesHead = this._changesTail = record;
        }
        else {
            this._changesTail._nextChanged = record;
            this._changesTail = record;
        }
    };
    DefaultKeyValueDiffer.prototype.toString = function () {
        var items = [];
        var previous = [];
        var changes = [];
        var additions = [];
        var removals = [];
        var record;
        for (record = this._mapHead; record !== null; record = record._next) {
            items.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(record));
        }
        for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
            previous.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(record));
        }
        for (record = this._changesHead; record !== null; record = record._nextChanged) {
            changes.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(record));
        }
        for (record = this._additionsHead; record !== null; record = record._nextAdded) {
            additions.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(record));
        }
        for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
            removals.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(record));
        }
        return 'map: ' + items.join(', ') + '\n' +
            'previous: ' + previous.join(', ') + '\n' +
            'additions: ' + additions.join(', ') + '\n' +
            'changes: ' + changes.join(', ') + '\n' +
            'removals: ' + removals.join(', ') + '\n';
    };
    /** @internal */
    DefaultKeyValueDiffer.prototype._forEach = function (obj, fn) {
        if (obj instanceof Map) {
            obj.forEach(fn);
        }
        else {
            Object.keys(obj).forEach(function (k) { return fn(obj[k], k); });
        }
    };
    return DefaultKeyValueDiffer;
}());
/**
 * @stable
 */
var KeyValueChangeRecord = (function () {
    function KeyValueChangeRecord(key) {
        this.key = key;
        this.previousValue = null;
        this.currentValue = null;
        /** @internal */
        this._nextPrevious = null;
        /** @internal */
        this._next = null;
        /** @internal */
        this._nextAdded = null;
        /** @internal */
        this._nextRemoved = null;
        /** @internal */
        this._prevRemoved = null;
        /** @internal */
        this._nextChanged = null;
    }
    KeyValueChangeRecord.prototype.toString = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["i" /* looseIdentical */])(this.previousValue, this.currentValue) ?
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(this.key) :
            (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(this.key) + '[' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(this.previousValue) + '->' +
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(this.currentValue) + ']');
    };
    return KeyValueChangeRecord;
}());
//# sourceMappingURL=default_keyvalue_differ.js.map

/***/ },
/* 61 */
/* exports provided: IterableDiffers */
/* exports used: IterableDiffers */
/*!**************************************************************************!*\
  !*** ./~/@angular/core/src/change_detection/differs/iterable_differs.js ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__di__ = __webpack_require__(/*! ../../di */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(/*! ../../facade/lang */ 0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return IterableDiffers; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * A repository of different iterable diffing strategies used by NgFor, NgClass, and others.
 * @stable
 */
var IterableDiffers = (function () {
    function IterableDiffers(factories) {
        this.factories = factories;
    }
    IterableDiffers.create = function (factories, parent) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["d" /* isPresent */])(parent)) {
            var copied = parent.factories.slice();
            factories = factories.concat(copied);
            return new IterableDiffers(factories);
        }
        else {
            return new IterableDiffers(factories);
        }
    };
    /**
     * Takes an array of {@link IterableDifferFactory} and returns a provider used to extend the
     * inherited {@link IterableDiffers} instance with the provided factories and return a new
     * {@link IterableDiffers} instance.
     *
     * The following example shows how to extend an existing list of factories,
           * which will only be applied to the injector for this component and its children.
           * This step is all that's required to make a new {@link IterableDiffer} available.
     *
     * ### Example
     *
     * ```
     * @Component({
     *   viewProviders: [
     *     IterableDiffers.extend([new ImmutableListDiffer()])
     *   ]
     * })
     * ```
     */
    IterableDiffers.extend = function (factories) {
        return {
            provide: IterableDiffers,
            useFactory: function (parent) {
                if (!parent) {
                    // Typically would occur when calling IterableDiffers.extend inside of dependencies passed
                    // to
                    // bootstrap(), which would override default pipes instead of extending them.
                    throw new Error('Cannot extend IterableDiffers without a parent injector');
                }
                return IterableDiffers.create(factories, parent);
            },
            // Dependency technically isn't optional, but we can provide a better error message this way.
            deps: [[IterableDiffers, new __WEBPACK_IMPORTED_MODULE_0__di__["e" /* SkipSelf */](), new __WEBPACK_IMPORTED_MODULE_0__di__["d" /* Optional */]()]]
        };
    };
    IterableDiffers.prototype.find = function (iterable) {
        var factory = this.factories.find(function (f) { return f.supports(iterable); });
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["d" /* isPresent */])(factory)) {
            return factory;
        }
        else {
            throw new Error("Cannot find a differ supporting object '" + iterable + "' of type '" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["j" /* getTypeNameForDebugging */])(iterable) + "'");
        }
    };
    return IterableDiffers;
}());
//# sourceMappingURL=iterable_differs.js.map

/***/ },
/* 62 */
/* exports provided: KeyValueDiffers */
/* exports used: KeyValueDiffers */
/*!**************************************************************************!*\
  !*** ./~/@angular/core/src/change_detection/differs/keyvalue_differs.js ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__di__ = __webpack_require__(/*! ../../di */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(/*! ../../facade/lang */ 0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return KeyValueDiffers; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * A repository of different Map diffing strategies used by NgClass, NgStyle, and others.
 * @stable
 */
var KeyValueDiffers = (function () {
    function KeyValueDiffers(factories) {
        this.factories = factories;
    }
    KeyValueDiffers.create = function (factories, parent) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["d" /* isPresent */])(parent)) {
            var copied = parent.factories.slice();
            factories = factories.concat(copied);
            return new KeyValueDiffers(factories);
        }
        else {
            return new KeyValueDiffers(factories);
        }
    };
    /**
     * Takes an array of {@link KeyValueDifferFactory} and returns a provider used to extend the
     * inherited {@link KeyValueDiffers} instance with the provided factories and return a new
     * {@link KeyValueDiffers} instance.
     *
     * The following example shows how to extend an existing list of factories,
           * which will only be applied to the injector for this component and its children.
           * This step is all that's required to make a new {@link KeyValueDiffer} available.
     *
     * ### Example
     *
     * ```
     * @Component({
     *   viewProviders: [
     *     KeyValueDiffers.extend([new ImmutableMapDiffer()])
     *   ]
     * })
     * ```
     */
    KeyValueDiffers.extend = function (factories) {
        return {
            provide: KeyValueDiffers,
            useFactory: function (parent) {
                if (!parent) {
                    // Typically would occur when calling KeyValueDiffers.extend inside of dependencies passed
                    // to
                    // bootstrap(), which would override default pipes instead of extending them.
                    throw new Error('Cannot extend KeyValueDiffers without a parent injector');
                }
                return KeyValueDiffers.create(factories, parent);
            },
            // Dependency technically isn't optional, but we can provide a better error message this way.
            deps: [[KeyValueDiffers, new __WEBPACK_IMPORTED_MODULE_0__di__["e" /* SkipSelf */](), new __WEBPACK_IMPORTED_MODULE_0__di__["d" /* Optional */]()]]
        };
    };
    KeyValueDiffers.prototype.find = function (kv) {
        var factory = this.factories.find(function (f) { return f.supports(kv); });
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["d" /* isPresent */])(factory)) {
            return factory;
        }
        else {
            throw new Error("Cannot find a differ supporting object '" + kv + "'");
        }
    };
    return KeyValueDiffers;
}());
//# sourceMappingURL=keyvalue_differs.js.map

/***/ },
/* 63 */
/* exports provided: EventListener, DebugNode, DebugElement, asNativeElements, getDebugNode, getAllDebugNodes, indexDebugNode, removeDebugNodeFromIndex */
/* exports used: DebugElement, indexDebugNode, getDebugNode, DebugNode, removeDebugNodeFromIndex, EventListener, asNativeElements */
/*!*************************************************!*\
  !*** ./~/@angular/core/src/debug/debug_node.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return EventListener; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return DebugNode; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DebugElement; });
/* harmony export (immutable) */ exports["g"] = asNativeElements;
/* harmony export (immutable) */ exports["c"] = getDebugNode;
/* unused harmony export getAllDebugNodes */
/* harmony export (immutable) */ exports["b"] = indexDebugNode;
/* harmony export (immutable) */ exports["e"] = removeDebugNodeFromIndex;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EventListener = (function () {
    function EventListener(name, callback) {
        this.name = name;
        this.callback = callback;
    }
    ;
    return EventListener;
}());
/**
 * @experimental All debugging apis are currently experimental.
 */
var DebugNode = (function () {
    function DebugNode(nativeNode, parent, _debugInfo) {
        this._debugInfo = _debugInfo;
        this.nativeNode = nativeNode;
        if (parent && parent instanceof DebugElement) {
            parent.addChild(this);
        }
        else {
            this.parent = null;
        }
        this.listeners = [];
    }
    Object.defineProperty(DebugNode.prototype, "injector", {
        get: function () { return this._debugInfo ? this._debugInfo.injector : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugNode.prototype, "componentInstance", {
        get: function () { return this._debugInfo ? this._debugInfo.component : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugNode.prototype, "context", {
        get: function () { return this._debugInfo ? this._debugInfo.context : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugNode.prototype, "references", {
        get: function () {
            return this._debugInfo ? this._debugInfo.references : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugNode.prototype, "providerTokens", {
        get: function () { return this._debugInfo ? this._debugInfo.providerTokens : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugNode.prototype, "source", {
        get: function () { return this._debugInfo ? this._debugInfo.source : null; },
        enumerable: true,
        configurable: true
    });
    return DebugNode;
}());
/**
 * @experimental All debugging apis are currently experimental.
 */
var DebugElement = (function (_super) {
    __extends(DebugElement, _super);
    function DebugElement(nativeNode, parent, _debugInfo) {
        _super.call(this, nativeNode, parent, _debugInfo);
        this.properties = {};
        this.attributes = {};
        this.classes = {};
        this.styles = {};
        this.childNodes = [];
        this.nativeElement = nativeNode;
    }
    DebugElement.prototype.addChild = function (child) {
        if (child) {
            this.childNodes.push(child);
            child.parent = this;
        }
    };
    DebugElement.prototype.removeChild = function (child) {
        var childIndex = this.childNodes.indexOf(child);
        if (childIndex !== -1) {
            child.parent = null;
            this.childNodes.splice(childIndex, 1);
        }
    };
    DebugElement.prototype.insertChildrenAfter = function (child, newChildren) {
        var siblingIndex = this.childNodes.indexOf(child);
        if (siblingIndex !== -1) {
            var previousChildren = this.childNodes.slice(0, siblingIndex + 1);
            var nextChildren = this.childNodes.slice(siblingIndex + 1);
            this.childNodes = previousChildren.concat(newChildren, nextChildren);
            for (var i = 0; i < newChildren.length; ++i) {
                var newChild = newChildren[i];
                if (newChild.parent) {
                    newChild.parent.removeChild(newChild);
                }
                newChild.parent = this;
            }
        }
    };
    DebugElement.prototype.query = function (predicate) {
        var results = this.queryAll(predicate);
        return results[0] || null;
    };
    DebugElement.prototype.queryAll = function (predicate) {
        var matches = [];
        _queryElementChildren(this, predicate, matches);
        return matches;
    };
    DebugElement.prototype.queryAllNodes = function (predicate) {
        var matches = [];
        _queryNodeChildren(this, predicate, matches);
        return matches;
    };
    Object.defineProperty(DebugElement.prototype, "children", {
        get: function () {
            return this.childNodes.filter(function (node) { return node instanceof DebugElement; });
        },
        enumerable: true,
        configurable: true
    });
    DebugElement.prototype.triggerEventHandler = function (eventName, eventObj) {
        this.listeners.forEach(function (listener) {
            if (listener.name == eventName) {
                listener.callback(eventObj);
            }
        });
    };
    return DebugElement;
}(DebugNode));
/**
 * @experimental
 */
function asNativeElements(debugEls) {
    return debugEls.map(function (el) { return el.nativeElement; });
}
function _queryElementChildren(element, predicate, matches) {
    element.childNodes.forEach(function (node) {
        if (node instanceof DebugElement) {
            if (predicate(node)) {
                matches.push(node);
            }
            _queryElementChildren(node, predicate, matches);
        }
    });
}
function _queryNodeChildren(parentNode, predicate, matches) {
    if (parentNode instanceof DebugElement) {
        parentNode.childNodes.forEach(function (node) {
            if (predicate(node)) {
                matches.push(node);
            }
            if (node instanceof DebugElement) {
                _queryNodeChildren(node, predicate, matches);
            }
        });
    }
}
// Need to keep the nodes in a global Map so that multiple angular apps are supported.
var _nativeNodeToDebugNode = new Map();
/**
 * @experimental
 */
function getDebugNode(nativeNode) {
    return _nativeNodeToDebugNode.get(nativeNode);
}
function getAllDebugNodes() {
    return Array.from(_nativeNodeToDebugNode.values());
}
function indexDebugNode(node) {
    _nativeNodeToDebugNode.set(node.nativeNode, node);
}
function removeDebugNodeFromIndex(node) {
    _nativeNodeToDebugNode.delete(node.nativeNode);
}
//# sourceMappingURL=debug_node.js.map

/***/ },
/* 64 */
/* exports provided: AbstractProviderError, NoProviderError, CyclicDependencyError, InstantiationError, InvalidProviderError, NoAnnotationError, OutOfBoundsError, MixingMultiProvidersWithRegularProvidersError */
/* exports used: MixingMultiProvidersWithRegularProvidersError, InvalidProviderError, NoAnnotationError, OutOfBoundsError, CyclicDependencyError, AbstractProviderError, InstantiationError, NoProviderError */
/*!*****************************************************!*\
  !*** ./~/@angular/core/src/di/reflective_errors.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_errors__ = __webpack_require__(/*! ../facade/errors */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 0);
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return AbstractProviderError; });
/* harmony export (binding) */ __webpack_require__.d(exports, "h", function() { return NoProviderError; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return CyclicDependencyError; });
/* harmony export (binding) */ __webpack_require__.d(exports, "g", function() { return InstantiationError; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return InvalidProviderError; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return NoAnnotationError; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return OutOfBoundsError; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MixingMultiProvidersWithRegularProvidersError; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


function findFirstClosedCycle(keys) {
    var res = [];
    for (var i = 0; i < keys.length; ++i) {
        if (res.indexOf(keys[i]) > -1) {
            res.push(keys[i]);
            return res;
        }
        res.push(keys[i]);
    }
    return res;
}
function constructResolvingPath(keys) {
    if (keys.length > 1) {
        var reversed = findFirstClosedCycle(keys.slice().reverse());
        var tokenStrs = reversed.map(function (k) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* stringify */])(k.token); });
        return ' (' + tokenStrs.join(' -> ') + ')';
    }
    return '';
}
/**
 * Base class for all errors arising from misconfigured providers.
 * @stable
 */
var AbstractProviderError = (function (_super) {
    __extends(AbstractProviderError, _super);
    function AbstractProviderError(injector, key, constructResolvingMessage) {
        _super.call(this, 'DI Error');
        this.keys = [key];
        this.injectors = [injector];
        this.constructResolvingMessage = constructResolvingMessage;
        this.message = this.constructResolvingMessage(this.keys);
    }
    AbstractProviderError.prototype.addKey = function (injector, key) {
        this.injectors.push(injector);
        this.keys.push(key);
        this.message = this.constructResolvingMessage(this.keys);
    };
    return AbstractProviderError;
}(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["b" /* BaseError */]));
/**
 * Thrown when trying to retrieve a dependency by key from {@link Injector}, but the
 * {@link Injector} does not have a {@link Provider} for the given key.
 *
 * ### Example ([live demo](http://plnkr.co/edit/vq8D3FRB9aGbnWJqtEPE?p=preview))
 *
 * ```typescript
 * class A {
 *   constructor(b:B) {}
 * }
 *
 * expect(() => Injector.resolveAndCreate([A])).toThrowError();
 * ```
 * @stable
 */
var NoProviderError = (function (_super) {
    __extends(NoProviderError, _super);
    function NoProviderError(injector, key) {
        _super.call(this, injector, key, function (keys) {
            var first = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* stringify */])(keys[0].token);
            return "No provider for " + first + "!" + constructResolvingPath(keys);
        });
    }
    return NoProviderError;
}(AbstractProviderError));
/**
 * Thrown when dependencies form a cycle.
 *
 * ### Example ([live demo](http://plnkr.co/edit/wYQdNos0Tzql3ei1EV9j?p=info))
 *
 * ```typescript
 * var injector = Injector.resolveAndCreate([
 *   {provide: "one", useFactory: (two) => "two", deps: [[new Inject("two")]]},
 *   {provide: "two", useFactory: (one) => "one", deps: [[new Inject("one")]]}
 * ]);
 *
 * expect(() => injector.get("one")).toThrowError();
 * ```
 *
 * Retrieving `A` or `B` throws a `CyclicDependencyError` as the graph above cannot be constructed.
 * @stable
 */
var CyclicDependencyError = (function (_super) {
    __extends(CyclicDependencyError, _super);
    function CyclicDependencyError(injector, key) {
        _super.call(this, injector, key, function (keys) {
            return "Cannot instantiate cyclic dependency!" + constructResolvingPath(keys);
        });
    }
    return CyclicDependencyError;
}(AbstractProviderError));
/**
 * Thrown when a constructing type returns with an Error.
 *
 * The `InstantiationError` class contains the original error plus the dependency graph which caused
 * this object to be instantiated.
 *
 * ### Example ([live demo](http://plnkr.co/edit/7aWYdcqTQsP0eNqEdUAf?p=preview))
 *
 * ```typescript
 * class A {
 *   constructor() {
 *     throw new Error('message');
 *   }
 * }
 *
 * var injector = Injector.resolveAndCreate([A]);

 * try {
 *   injector.get(A);
 * } catch (e) {
 *   expect(e instanceof InstantiationError).toBe(true);
 *   expect(e.originalException.message).toEqual("message");
 *   expect(e.originalStack).toBeDefined();
 * }
 * ```
 * @stable
 */
var InstantiationError = (function (_super) {
    __extends(InstantiationError, _super);
    function InstantiationError(injector, originalException, originalStack, key) {
        _super.call(this, 'DI Error', originalException);
        this.keys = [key];
        this.injectors = [injector];
    }
    InstantiationError.prototype.addKey = function (injector, key) {
        this.injectors.push(injector);
        this.keys.push(key);
    };
    Object.defineProperty(InstantiationError.prototype, "message", {
        get: function () {
            var first = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* stringify */])(this.keys[0].token);
            return this.originalError.message + ": Error during instantiation of " + first + "!" + constructResolvingPath(this.keys) + ".";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstantiationError.prototype, "causeKey", {
        get: function () { return this.keys[0]; },
        enumerable: true,
        configurable: true
    });
    return InstantiationError;
}(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["c" /* WrappedError */]));
/**
 * Thrown when an object other then {@link Provider} (or `Type`) is passed to {@link Injector}
 * creation.
 *
 * ### Example ([live demo](http://plnkr.co/edit/YatCFbPAMCL0JSSQ4mvH?p=preview))
 *
 * ```typescript
 * expect(() => Injector.resolveAndCreate(["not a type"])).toThrowError();
 * ```
 * @stable
 */
var InvalidProviderError = (function (_super) {
    __extends(InvalidProviderError, _super);
    function InvalidProviderError(provider) {
        _super.call(this, "Invalid provider - only instances of Provider and Type are allowed, got: " + provider);
    }
    return InvalidProviderError;
}(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["b" /* BaseError */]));
/**
 * Thrown when the class has no annotation information.
 *
 * Lack of annotation information prevents the {@link Injector} from determining which dependencies
 * need to be injected into the constructor.
 *
 * ### Example ([live demo](http://plnkr.co/edit/rHnZtlNS7vJOPQ6pcVkm?p=preview))
 *
 * ```typescript
 * class A {
 *   constructor(b) {}
 * }
 *
 * expect(() => Injector.resolveAndCreate([A])).toThrowError();
 * ```
 *
 * This error is also thrown when the class not marked with {@link Injectable} has parameter types.
 *
 * ```typescript
 * class B {}
 *
 * class A {
 *   constructor(b:B) {} // no information about the parameter types of A is available at runtime.
 * }
 *
 * expect(() => Injector.resolveAndCreate([A,B])).toThrowError();
 * ```
 * @stable
 */
var NoAnnotationError = (function (_super) {
    __extends(NoAnnotationError, _super);
    function NoAnnotationError(typeOrFunc, params) {
        _super.call(this, NoAnnotationError._genMessage(typeOrFunc, params));
    }
    NoAnnotationError._genMessage = function (typeOrFunc, params) {
        var signature = [];
        for (var i = 0, ii = params.length; i < ii; i++) {
            var parameter = params[i];
            if (!parameter || parameter.length == 0) {
                signature.push('?');
            }
            else {
                signature.push(parameter.map(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* stringify */]).join(' '));
            }
        }
        return 'Cannot resolve all parameters for \'' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* stringify */])(typeOrFunc) + '\'(' +
            signature.join(', ') + '). ' +
            'Make sure that all the parameters are decorated with Inject or have valid type annotations and that \'' +
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* stringify */])(typeOrFunc) + '\' is decorated with Injectable.';
    };
    return NoAnnotationError;
}(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["b" /* BaseError */]));
/**
 * Thrown when getting an object by index.
 *
 * ### Example ([live demo](http://plnkr.co/edit/bRs0SX2OTQiJzqvjgl8P?p=preview))
 *
 * ```typescript
 * class A {}
 *
 * var injector = Injector.resolveAndCreate([A]);
 *
 * expect(() => injector.getAt(100)).toThrowError();
 * ```
 * @stable
 */
var OutOfBoundsError = (function (_super) {
    __extends(OutOfBoundsError, _super);
    function OutOfBoundsError(index) {
        _super.call(this, "Index " + index + " is out-of-bounds.");
    }
    return OutOfBoundsError;
}(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["b" /* BaseError */]));
// TODO: add a working example after alpha38 is released
/**
 * Thrown when a multi provider and a regular provider are bound to the same token.
 *
 * ### Example
 *
 * ```typescript
 * expect(() => Injector.resolveAndCreate([
 *   { provide: "Strings", useValue: "string1", multi: true},
 *   { provide: "Strings", useValue: "string2", multi: false}
 * ])).toThrowError();
 * ```
 */
var MixingMultiProvidersWithRegularProvidersError = (function (_super) {
    __extends(MixingMultiProvidersWithRegularProvidersError, _super);
    function MixingMultiProvidersWithRegularProvidersError(provider1, provider2) {
        _super.call(this, 'Cannot mix multi providers and regular providers, got: ' + provider1.toString() + ' ' +
            provider2.toString());
    }
    return MixingMultiProvidersWithRegularProvidersError;
}(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["b" /* BaseError */]));
//# sourceMappingURL=reflective_errors.js.map

/***/ },
/* 65 */
/* exports provided: ErrorHandler */
/* exports used: ErrorHandler */
/*!**********************************************!*\
  !*** ./~/@angular/core/src/error_handler.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ErrorHandler; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @whatItDoes Provides a hook for centralized exception handling.
 *
 * @description
 *
 * The default implementation of `ErrorHandler` prints error messages to the `console`. To
 * intercept error handling, write a custom exception handler that replaces this default as
 * appropriate for your app.
 *
 * ### Example
 *
 * ```
 * class MyErrorHandler implements ErrorHandler {
 *   handleError(error) {
 *     // do something with the exception
 *   }
 * }
 *
 * @NgModule({
 *   providers: [{provide: ErrorHandler, useClass: MyErrorHandler}]
 * })
 * class MyModule {}
 * ```
 *
 * @stable
 */
var ErrorHandler = (function () {
    function ErrorHandler(rethrowError) {
        if (rethrowError === void 0) { rethrowError = true; }
        /**
         * @internal
         */
        this._console = console;
        this.rethrowError = rethrowError;
    }
    ErrorHandler.prototype.handleError = function (error) {
        var originalError = this._findOriginalError(error);
        var originalStack = this._findOriginalStack(error);
        var context = this._findContext(error);
        this._console.error("EXCEPTION: " + this._extractMessage(error));
        if (originalError) {
            this._console.error("ORIGINAL EXCEPTION: " + this._extractMessage(originalError));
        }
        if (originalStack) {
            this._console.error('ORIGINAL STACKTRACE:');
            this._console.error(originalStack);
        }
        if (context) {
            this._console.error('ERROR CONTEXT:');
            this._console.error(context);
        }
        // We rethrow exceptions, so operations like 'bootstrap' will result in an error
        // when an error happens. If we do not rethrow, bootstrap will always succeed.
        if (this.rethrowError)
            throw error;
    };
    /** @internal */
    ErrorHandler.prototype._extractMessage = function (error) {
        return error instanceof Error ? error.message : error.toString();
    };
    /** @internal */
    ErrorHandler.prototype._findContext = function (error) {
        if (error) {
            return error.context ? error.context :
                this._findContext(error.originalError);
        }
        return null;
    };
    /** @internal */
    ErrorHandler.prototype._findOriginalError = function (error) {
        var e = error.originalError;
        while (e && e.originalError) {
            e = e.originalError;
        }
        return e;
    };
    /** @internal */
    ErrorHandler.prototype._findOriginalStack = function (error) {
        if (!(error instanceof Error))
            return null;
        var e = error;
        var stack = e.stack;
        while (e instanceof Error && e.originalError) {
            e = e.originalError;
            if (e instanceof Error && e.stack) {
                stack = e.stack;
            }
        }
        return stack;
    };
    return ErrorHandler;
}());
//# sourceMappingURL=error_handler.js.map

/***/ },
/* 66 */
/* exports provided: LOCALE_ID, TRANSLATIONS, TRANSLATIONS_FORMAT */
/* exports used: LOCALE_ID, TRANSLATIONS, TRANSLATIONS_FORMAT */
/*!********************************************!*\
  !*** ./~/@angular/core/src/i18n/tokens.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__di_opaque_token__ = __webpack_require__(/*! ../di/opaque_token */ 34);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LOCALE_ID; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return TRANSLATIONS; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return TRANSLATIONS_FORMAT; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @experimental i18n support is experimental.
 */
var LOCALE_ID = new __WEBPACK_IMPORTED_MODULE_0__di_opaque_token__["a" /* OpaqueToken */]('LocaleId');
/**
 * @experimental i18n support is experimental.
 */
var TRANSLATIONS = new __WEBPACK_IMPORTED_MODULE_0__di_opaque_token__["a" /* OpaqueToken */]('Translations');
/**
 * @experimental i18n support is experimental.
 */
var TRANSLATIONS_FORMAT = new __WEBPACK_IMPORTED_MODULE_0__di_opaque_token__["a" /* OpaqueToken */]('TranslationsFormat');
//# sourceMappingURL=tokens.js.map

/***/ },
/* 67 */
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** ./~/@angular/core/src/linker async ***!
  \******************************************/
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 67;


/***/ },
/* 68 */
/* exports provided: StaticNodeDebugInfo, DebugContext */
/* exports used: DebugContext, StaticNodeDebugInfo */
/*!*****************************************************!*\
  !*** ./~/@angular/core/src/linker/debug_context.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_type__ = __webpack_require__(/*! ./view_type */ 19);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return StaticNodeDebugInfo; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DebugContext; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var StaticNodeDebugInfo = (function () {
    function StaticNodeDebugInfo(providerTokens, componentToken, refTokens) {
        this.providerTokens = providerTokens;
        this.componentToken = componentToken;
        this.refTokens = refTokens;
    }
    return StaticNodeDebugInfo;
}());
var DebugContext = (function () {
    function DebugContext(_view, _nodeIndex, _tplRow, _tplCol) {
        this._view = _view;
        this._nodeIndex = _nodeIndex;
        this._tplRow = _tplRow;
        this._tplCol = _tplCol;
    }
    Object.defineProperty(DebugContext.prototype, "_staticNodeInfo", {
        get: function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(this._nodeIndex) ? this._view.staticNodeDebugInfos[this._nodeIndex] : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "context", {
        get: function () { return this._view.context; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "component", {
        get: function () {
            var staticNodeInfo = this._staticNodeInfo;
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(staticNodeInfo) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(staticNodeInfo.componentToken)) {
                return this.injector.get(staticNodeInfo.componentToken);
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "componentRenderElement", {
        get: function () {
            var componentView = this._view;
            while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(componentView.parentView) && componentView.type !== __WEBPACK_IMPORTED_MODULE_1__view_type__["a" /* ViewType */].COMPONENT) {
                componentView = componentView.parentView;
            }
            return componentView.parentElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "injector", {
        get: function () { return this._view.injector(this._nodeIndex); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "renderNode", {
        get: function () {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(this._nodeIndex) && this._view.allNodes) {
                return this._view.allNodes[this._nodeIndex];
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "providerTokens", {
        get: function () {
            var staticNodeInfo = this._staticNodeInfo;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(staticNodeInfo) ? staticNodeInfo.providerTokens : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "source", {
        get: function () {
            return this._view.componentType.templateUrl + ":" + this._tplRow + ":" + this._tplCol;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DebugContext.prototype, "references", {
        get: function () {
            var _this = this;
            var varValues = {};
            var staticNodeInfo = this._staticNodeInfo;
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(staticNodeInfo)) {
                var refs_1 = staticNodeInfo.refTokens;
                Object.keys(refs_1).forEach(function (refName) {
                    var refToken = refs_1[refName];
                    var varValue;
                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["c" /* isBlank */])(refToken)) {
                        varValue = _this._view.allNodes ? _this._view.allNodes[_this._nodeIndex] : null;
                    }
                    else {
                        varValue = _this._view.injectorGet(refToken, _this._nodeIndex, null);
                    }
                    varValues[refName] = varValue;
                });
            }
            return varValues;
        },
        enumerable: true,
        configurable: true
    });
    return DebugContext;
}());
//# sourceMappingURL=debug_context.js.map

/***/ },
/* 69 */
/* exports provided: ExpressionChangedAfterItHasBeenCheckedError, ViewWrappedError, ViewDestroyedError */
/* exports used: ExpressionChangedAfterItHasBeenCheckedError, ViewDestroyedError, ViewWrappedError */
/*!**********************************************!*\
  !*** ./~/@angular/core/src/linker/errors.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection_util__ = __webpack_require__(/*! ../change_detection/change_detection_util */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_errors__ = __webpack_require__(/*! ../facade/errors */ 3);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ExpressionChangedAfterItHasBeenCheckedError; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return ViewWrappedError; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return ViewDestroyedError; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * An error thrown if application changes model breaking the top-down data flow.
 *
 * This exception is only thrown in dev mode.
 *
 * <!-- TODO: Add a link once the dev mode option is configurable -->
 *
 * ### Example
 *
 * ```typescript
 * @Component({
 *   selector: 'parent',
 *   template: '<child [prop]="parentProp"></child>',
 * })
 * class Parent {
 *   parentProp = 'init';
 * }
 *
 * @Directive({selector: 'child', inputs: ['prop']})
 * class Child {
 *   constructor(public parent: Parent) {}
 *
 *   set prop(v) {
 *     // this updates the parent property, which is disallowed during change detection
 *     // this will result in ExpressionChangedAfterItHasBeenCheckedError
 *     this.parent.parentProp = 'updated';
 *   }
 * }
 * ```
 * @stable
 */
var ExpressionChangedAfterItHasBeenCheckedError = (function (_super) {
    __extends(ExpressionChangedAfterItHasBeenCheckedError, _super);
    function ExpressionChangedAfterItHasBeenCheckedError(oldValue, currValue) {
        var msg = "Expression has changed after it was checked. Previous value: '" + oldValue + "'. Current value: '" + currValue + "'.";
        if (oldValue === __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection_util__["a" /* UNINITIALIZED */]) {
            msg +=
                " It seems like the view has been created after its parent and its children have been dirty checked." +
                    " Has it been created in a change detection hook ?";
        }
        _super.call(this, msg);
    }
    return ExpressionChangedAfterItHasBeenCheckedError;
}(__WEBPACK_IMPORTED_MODULE_1__facade_errors__["b" /* BaseError */]));
/**
 * Thrown when an exception was raised during view creation, change detection or destruction.
 *
 * This error wraps the original exception to attach additional contextual information that can
 * be useful for debugging.
 * @stable
 */
var ViewWrappedError = (function (_super) {
    __extends(ViewWrappedError, _super);
    function ViewWrappedError(originalError, context) {
        _super.call(this, "Error in " + context.source, originalError);
        this.context = context;
    }
    return ViewWrappedError;
}(__WEBPACK_IMPORTED_MODULE_1__facade_errors__["c" /* WrappedError */]));
/**
 * Thrown when a destroyed view is used.
 *
 * This error indicates a bug in the framework.
 *
 * This is an internal Angular error.
 * @stable
 */
var ViewDestroyedError = (function (_super) {
    __extends(ViewDestroyedError, _super);
    function ViewDestroyedError(details) {
        _super.call(this, "Attempt to use a destroyed view: " + details);
    }
    return ViewDestroyedError;
}(__WEBPACK_IMPORTED_MODULE_1__facade_errors__["b" /* BaseError */]));
//# sourceMappingURL=errors.js.map

/***/ },
/* 70 */
/* exports provided: NgModuleRef, NgModuleFactory, NgModuleInjector */
/* exports used: NgModuleInjector, NgModuleFactory, NgModuleRef */
/*!*********************************************************!*\
  !*** ./~/@angular/core/src/linker/ng_module_factory.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__di_injector__ = __webpack_require__(/*! ../di/injector */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_errors__ = __webpack_require__(/*! ../facade/errors */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_factory_resolver__ = __webpack_require__(/*! ./component_factory_resolver */ 17);
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return NgModuleRef; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return NgModuleFactory; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NgModuleInjector; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 * Represents an instance of an NgModule created via a {@link NgModuleFactory}.
 *
 * `NgModuleRef` provides access to the NgModule Instance as well other objects related to this
 * NgModule Instance.
 *
 * @stable
 */
var NgModuleRef = (function () {
    function NgModuleRef() {
    }
    Object.defineProperty(NgModuleRef.prototype, "injector", {
        /**
         * The injector that contains all of the providers of the NgModule.
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModuleRef.prototype, "componentFactoryResolver", {
        /**
         * The ComponentFactoryResolver to get hold of the ComponentFactories
         * declared in the `entryComponents` property of the module.
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModuleRef.prototype, "instance", {
        /**
         * The NgModule instance.
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    return NgModuleRef;
}());
/**
 * @experimental
 */
var NgModuleFactory = (function () {
    function NgModuleFactory(_injectorClass, _moduleType) {
        this._injectorClass = _injectorClass;
        this._moduleType = _moduleType;
    }
    Object.defineProperty(NgModuleFactory.prototype, "moduleType", {
        get: function () { return this._moduleType; },
        enumerable: true,
        configurable: true
    });
    NgModuleFactory.prototype.create = function (parentInjector) {
        if (!parentInjector) {
            parentInjector = __WEBPACK_IMPORTED_MODULE_0__di_injector__["b" /* Injector */].NULL;
        }
        var instance = new this._injectorClass(parentInjector);
        instance.create();
        return instance;
    };
    return NgModuleFactory;
}());
var _UNDEFINED = new Object();
var NgModuleInjector = (function (_super) {
    __extends(NgModuleInjector, _super);
    function NgModuleInjector(parent, factories, bootstrapFactories) {
        _super.call(this, factories, parent.get(__WEBPACK_IMPORTED_MODULE_3__component_factory_resolver__["a" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_3__component_factory_resolver__["a" /* ComponentFactoryResolver */].NULL));
        this.parent = parent;
        this.bootstrapFactories = bootstrapFactories;
        this._destroyListeners = [];
        this._destroyed = false;
    }
    NgModuleInjector.prototype.create = function () { this.instance = this.createInternal(); };
    NgModuleInjector.prototype.get = function (token, notFoundValue) {
        if (notFoundValue === void 0) { notFoundValue = __WEBPACK_IMPORTED_MODULE_0__di_injector__["a" /* THROW_IF_NOT_FOUND */]; }
        if (token === __WEBPACK_IMPORTED_MODULE_0__di_injector__["b" /* Injector */] || token === __WEBPACK_IMPORTED_MODULE_3__component_factory_resolver__["a" /* ComponentFactoryResolver */]) {
            return this;
        }
        var result = this.getInternal(token, _UNDEFINED);
        return result === _UNDEFINED ? this.parent.get(token, notFoundValue) : result;
    };
    Object.defineProperty(NgModuleInjector.prototype, "injector", {
        get: function () { return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModuleInjector.prototype, "componentFactoryResolver", {
        get: function () { return this; },
        enumerable: true,
        configurable: true
    });
    NgModuleInjector.prototype.destroy = function () {
        if (this._destroyed) {
            throw new Error("The ng module " + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* stringify */])(this.instance.constructor) + " has already been destroyed.");
        }
        this._destroyed = true;
        this.destroyInternal();
        this._destroyListeners.forEach(function (listener) { return listener(); });
    };
    NgModuleInjector.prototype.onDestroy = function (callback) { this._destroyListeners.push(callback); };
    return NgModuleInjector;
}(__WEBPACK_IMPORTED_MODULE_3__component_factory_resolver__["b" /* CodegenComponentFactoryResolver */]));
//# sourceMappingURL=ng_module_factory.js.map

/***/ },
/* 71 */
/* exports provided: NgModuleFactoryLoader, registerModuleFactory, clearModulesForTest, getModuleFactory */
/* exports used: registerModuleFactory, NgModuleFactoryLoader, getModuleFactory */
/*!****************************************************************!*\
  !*** ./~/@angular/core/src/linker/ng_module_factory_loader.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return NgModuleFactoryLoader; });
/* harmony export (immutable) */ exports["a"] = registerModuleFactory;
/* unused harmony export clearModulesForTest */
/* harmony export (immutable) */ exports["c"] = getModuleFactory;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Used to load ng module factories.
 * @stable
 */
var NgModuleFactoryLoader = (function () {
    function NgModuleFactoryLoader() {
    }
    return NgModuleFactoryLoader;
}());
var moduleFactories = new Map();
/**
 * Registers a loaded module. Should only be called from generated NgModuleFactory code.
 * @experimental
 */
function registerModuleFactory(id, factory) {
    var existing = moduleFactories.get(id);
    if (existing) {
        throw new Error("Duplicate module registered for " + id + " - " + existing.moduleType.name + " vs " + factory.moduleType.name);
    }
    moduleFactories.set(id, factory);
}
function clearModulesForTest() {
    moduleFactories = new Map();
}
/**
 * Returns the NgModuleFactory with the given id, if it exists and has been loaded.
 * Factories for modules that do not specify an `id` cannot be retrieved. Throws if the module
 * cannot be found.
 * @experimental
 */
function getModuleFactory(id) {
    var factory = moduleFactories.get(id);
    if (!factory)
        throw new Error("No module with ID " + id + " loaded");
    return factory;
}
//# sourceMappingURL=ng_module_factory_loader.js.map

/***/ },
/* 72 */
/* exports provided: TemplateRef, TemplateRef_ */
/* exports used: TemplateRef_, TemplateRef */
/*!****************************************************!*\
  !*** ./~/@angular/core/src/linker/template_ref.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element_ref__ = __webpack_require__(/*! ./element_ref */ 18);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return TemplateRef; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TemplateRef_; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Represents an Embedded Template that can be used to instantiate Embedded Views.
 *
 * You can access a `TemplateRef`, in two ways. Via a directive placed on a `<template>` element (or
 * directive prefixed with `*`) and have the `TemplateRef` for this Embedded View injected into the
 * constructor of the directive using the `TemplateRef` Token. Alternatively you can query for the
 * `TemplateRef` from a Component or a Directive via {@link Query}.
 *
 * To instantiate Embedded Views based on a Template, use
 * {@link ViewContainerRef#createEmbeddedView}, which will create the View and attach it to the
 * View Container.
 * @stable
 */
var TemplateRef = (function () {
    function TemplateRef() {
    }
    Object.defineProperty(TemplateRef.prototype, "elementRef", {
        /**
         * The location in the View where the Embedded View logically belongs to.
         *
         * The data-binding and injection contexts of Embedded Views created from this `TemplateRef`
         * inherit from the contexts of this location.
         *
         * Typically new Embedded Views are attached to the View Container of this location, but in
         * advanced use-cases, the View can be attached to a different container while keeping the
         * data-binding and injection context from the original location.
         *
         */
        // TODO(i): rename to anchor or location
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    return TemplateRef;
}());
var TemplateRef_ = (function (_super) {
    __extends(TemplateRef_, _super);
    function TemplateRef_(_parentView, _nodeIndex, _nativeElement) {
        _super.call(this);
        this._parentView = _parentView;
        this._nodeIndex = _nodeIndex;
        this._nativeElement = _nativeElement;
    }
    TemplateRef_.prototype.createEmbeddedView = function (context) {
        var view = this._parentView.createEmbeddedViewInternal(this._nodeIndex);
        view.create(context || {});
        return view.ref;
    };
    Object.defineProperty(TemplateRef_.prototype, "elementRef", {
        get: function () { return new __WEBPACK_IMPORTED_MODULE_0__element_ref__["a" /* ElementRef */](this._nativeElement); },
        enumerable: true,
        configurable: true
    });
    return TemplateRef_;
}(TemplateRef));
//# sourceMappingURL=template_ref.js.map

/***/ },
/* 73 */
/* exports provided: ViewContainerRef, ViewContainerRef_ */
/* exports used: ViewContainerRef_, ViewContainerRef */
/*!**********************************************************!*\
  !*** ./~/@angular/core/src/linker/view_container_ref.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_errors__ = __webpack_require__(/*! ../facade/errors */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(/*! ../profile/profile */ 21);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return ViewContainerRef; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ViewContainerRef_; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * Represents a container where one or more Views can be attached.
 *
 * The container can contain two kinds of Views. Host Views, created by instantiating a
 * {@link Component} via {@link #createComponent}, and Embedded Views, created by instantiating an
 * {@link TemplateRef Embedded Template} via {@link #createEmbeddedView}.
 *
 * The location of the View Container within the containing View is specified by the Anchor
 * `element`. Each View Container can have only one Anchor Element and each Anchor Element can only
 * have a single View Container.
 *
 * Root elements of Views attached to this container become siblings of the Anchor Element in
 * the Rendered View.
 *
 * To access a `ViewContainerRef` of an Element, you can either place a {@link Directive} injected
 * with `ViewContainerRef` on the Element, or you obtain it via a {@link ViewChild} query.
 * @stable
 */
var ViewContainerRef = (function () {
    function ViewContainerRef() {
    }
    Object.defineProperty(ViewContainerRef.prototype, "element", {
        /**
         * Anchor element that specifies the location of this container in the containing View.
         * <!-- TODO: rename to anchorElement -->
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewContainerRef.prototype, "injector", {
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewContainerRef.prototype, "parentInjector", {
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewContainerRef.prototype, "length", {
        /**
         * Returns the number of Views currently attached to this container.
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    ;
    return ViewContainerRef;
}());
var ViewContainerRef_ = (function () {
    function ViewContainerRef_(_element) {
        this._element = _element;
        /** @internal */
        this._createComponentInContainerScope = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["b" /* wtfCreateScope */])('ViewContainerRef#createComponent()');
        /** @internal */
        this._insertScope = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["b" /* wtfCreateScope */])('ViewContainerRef#insert()');
        /** @internal */
        this._removeScope = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["b" /* wtfCreateScope */])('ViewContainerRef#remove()');
        /** @internal */
        this._detachScope = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["b" /* wtfCreateScope */])('ViewContainerRef#detach()');
    }
    ViewContainerRef_.prototype.get = function (index) { return this._element.nestedViews[index].ref; };
    Object.defineProperty(ViewContainerRef_.prototype, "length", {
        get: function () {
            var views = this._element.nestedViews;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["d" /* isPresent */])(views) ? views.length : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewContainerRef_.prototype, "element", {
        get: function () { return this._element.elementRef; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewContainerRef_.prototype, "injector", {
        get: function () { return this._element.injector; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewContainerRef_.prototype, "parentInjector", {
        get: function () { return this._element.parentInjector; },
        enumerable: true,
        configurable: true
    });
    // TODO(rado): profile and decide whether bounds checks should be added
    // to the methods below.
    ViewContainerRef_.prototype.createEmbeddedView = function (templateRef, context, index) {
        if (context === void 0) { context = null; }
        if (index === void 0) { index = -1; }
        var viewRef = templateRef.createEmbeddedView(context);
        this.insert(viewRef, index);
        return viewRef;
    };
    ViewContainerRef_.prototype.createComponent = function (componentFactory, index, injector, projectableNodes) {
        if (index === void 0) { index = -1; }
        if (injector === void 0) { injector = null; }
        if (projectableNodes === void 0) { projectableNodes = null; }
        var s = this._createComponentInContainerScope();
        var contextInjector = injector || this._element.parentInjector;
        var componentRef = componentFactory.create(contextInjector, projectableNodes);
        this.insert(componentRef.hostView, index);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* wtfLeave */])(s, componentRef);
    };
    // TODO(i): refactor insert+remove into move
    ViewContainerRef_.prototype.insert = function (viewRef, index) {
        if (index === void 0) { index = -1; }
        var s = this._insertScope();
        if (index == -1)
            index = this.length;
        var viewRef_ = viewRef;
        this._element.attachView(viewRef_.internalView, index);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* wtfLeave */])(s, viewRef_);
    };
    ViewContainerRef_.prototype.move = function (viewRef, currentIndex) {
        var s = this._insertScope();
        if (currentIndex == -1)
            return;
        var viewRef_ = viewRef;
        this._element.moveView(viewRef_.internalView, currentIndex);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* wtfLeave */])(s, viewRef_);
    };
    ViewContainerRef_.prototype.indexOf = function (viewRef) {
        return this._element.nestedViews.indexOf(viewRef.internalView);
    };
    // TODO(i): rename to destroy
    ViewContainerRef_.prototype.remove = function (index) {
        if (index === void 0) { index = -1; }
        var s = this._removeScope();
        if (index == -1)
            index = this.length - 1;
        var view = this._element.detachView(index);
        view.destroy();
        // view is intentionally not returned to the client.
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* wtfLeave */])(s);
    };
    // TODO(i): refactor insert+remove into move
    ViewContainerRef_.prototype.detach = function (index) {
        if (index === void 0) { index = -1; }
        var s = this._detachScope();
        if (index == -1)
            index = this.length - 1;
        var view = this._element.detachView(index);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* wtfLeave */])(s, view.ref);
    };
    ViewContainerRef_.prototype.clear = function () {
        for (var i = this.length - 1; i >= 0; i--) {
            this.remove(i);
        }
    };
    return ViewContainerRef_;
}());
//# sourceMappingURL=view_container_ref.js.map

/***/ },
/* 74 */
/* exports provided: ViewRef, EmbeddedViewRef, ViewRef_ */
/* exports used: ViewRef_, EmbeddedViewRef, ViewRef */
/*!************************************************!*\
  !*** ./~/@angular/core/src/linker/view_ref.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animation_animation_queue__ = __webpack_require__(/*! ../animation/animation_queue */ 56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__change_detection_constants__ = __webpack_require__(/*! ../change_detection/constants */ 15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facade_errors__ = __webpack_require__(/*! ../facade/errors */ 3);
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return ViewRef; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return EmbeddedViewRef; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ViewRef_; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * @stable
 */
var ViewRef = (function () {
    function ViewRef() {
    }
    Object.defineProperty(ViewRef.prototype, "destroyed", {
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    return ViewRef;
}());
/**
 * Represents an Angular View.
 *
 * <!-- TODO: move the next two paragraphs to the dev guide -->
 * A View is a fundamental building block of the application UI. It is the smallest grouping of
 * Elements which are created and destroyed together.
 *
 * Properties of elements in a View can change, but the structure (number and order) of elements in
 * a View cannot. Changing the structure of Elements can only be done by inserting, moving or
 * removing nested Views via a {@link ViewContainerRef}. Each View can contain many View Containers.
 * <!-- /TODO -->
 *
 * ### Example
 *
 * Given this template...
 *
 * ```
 * Count: {{items.length}}
 * <ul>
 *   <li *ngFor="let  item of items">{{item}}</li>
 * </ul>
 * ```
 *
 * We have two {@link TemplateRef}s:
 *
 * Outer {@link TemplateRef}:
 * ```
 * Count: {{items.length}}
 * <ul>
 *   <template ngFor let-item [ngForOf]="items"></template>
 * </ul>
 * ```
 *
 * Inner {@link TemplateRef}:
 * ```
 *   <li>{{item}}</li>
 * ```
 *
 * Notice that the original template is broken down into two separate {@link TemplateRef}s.
 *
 * The outer/inner {@link TemplateRef}s are then assembled into views like so:
 *
 * ```
 * <!-- ViewRef: outer-0 -->
 * Count: 2
 * <ul>
 *   <template view-container-ref></template>
 *   <!-- ViewRef: inner-1 --><li>first</li><!-- /ViewRef: inner-1 -->
 *   <!-- ViewRef: inner-2 --><li>second</li><!-- /ViewRef: inner-2 -->
 * </ul>
 * <!-- /ViewRef: outer-0 -->
 * ```
 * @experimental
 */
var EmbeddedViewRef = (function (_super) {
    __extends(EmbeddedViewRef, _super);
    function EmbeddedViewRef() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(EmbeddedViewRef.prototype, "context", {
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmbeddedViewRef.prototype, "rootNodes", {
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    ;
    return EmbeddedViewRef;
}(ViewRef));
var ViewRef_ = (function () {
    function ViewRef_(_view) {
        this._view = _view;
        this._view = _view;
        this._originalMode = this._view.cdMode;
    }
    Object.defineProperty(ViewRef_.prototype, "internalView", {
        get: function () { return this._view; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewRef_.prototype, "rootNodes", {
        get: function () { return this._view.flatRootNodes; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewRef_.prototype, "context", {
        get: function () { return this._view.context; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewRef_.prototype, "destroyed", {
        get: function () { return this._view.destroyed; },
        enumerable: true,
        configurable: true
    });
    ViewRef_.prototype.markForCheck = function () { this._view.markPathToRootAsCheckOnce(); };
    ViewRef_.prototype.detach = function () { this._view.cdMode = __WEBPACK_IMPORTED_MODULE_1__change_detection_constants__["b" /* ChangeDetectorStatus */].Detached; };
    ViewRef_.prototype.detectChanges = function () {
        this._view.detectChanges(false);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__animation_animation_queue__["a" /* triggerQueuedAnimations */])();
    };
    ViewRef_.prototype.checkNoChanges = function () { this._view.detectChanges(true); };
    ViewRef_.prototype.reattach = function () {
        this._view.cdMode = this._originalMode;
        this.markForCheck();
    };
    ViewRef_.prototype.onDestroy = function (callback) {
        if (!this._view.disposables) {
            this._view.disposables = [];
        }
        this._view.disposables.push(callback);
    };
    ViewRef_.prototype.destroy = function () { this._view.detachAndDestroy(); };
    return ViewRef_;
}());
//# sourceMappingURL=view_ref.js.map

/***/ },
/* 75 */
/* exports provided: Attribute, ContentChild, ContentChildren, Query, ViewChild, ViewChildren, ANALYZE_FOR_ENTRY_COMPONENTS, Component, Directive, HostBinding, HostListener, Input, Output, Pipe, OnDestroy, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, AfterContentChecked, OnInit, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule, ViewEncapsulation */
/* exports used: NgModule, Attribute, ContentChild, ContentChildren, Query, ViewChild, ViewChildren, ANALYZE_FOR_ENTRY_COMPONENTS, Component, Directive, HostBinding, HostListener, Input, Output, Pipe, OnDestroy, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, AfterContentChecked, OnInit, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, ViewEncapsulation */
/*!*****************************************!*\
  !*** ./~/@angular/core/src/metadata.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__metadata_di__ = __webpack_require__(/*! ./metadata/di */ 128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__metadata_directives__ = __webpack_require__(/*! ./metadata/directives */ 129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__metadata_lifecycle_hooks__ = __webpack_require__(/*! ./metadata/lifecycle_hooks */ 76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__metadata_ng_module__ = __webpack_require__(/*! ./metadata/ng_module */ 130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__metadata_view__ = __webpack_require__(/*! ./metadata/view */ 77);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata_di__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata_di__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata_di__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata_di__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata_di__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata_di__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata_di__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__metadata_directives__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "j", function() { return __WEBPACK_IMPORTED_MODULE_1__metadata_directives__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "k", function() { return __WEBPACK_IMPORTED_MODULE_1__metadata_directives__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "l", function() { return __WEBPACK_IMPORTED_MODULE_1__metadata_directives__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "m", function() { return __WEBPACK_IMPORTED_MODULE_1__metadata_directives__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "n", function() { return __WEBPACK_IMPORTED_MODULE_1__metadata_directives__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "o", function() { return __WEBPACK_IMPORTED_MODULE_1__metadata_directives__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "p", function() { return __WEBPACK_IMPORTED_MODULE_2__metadata_lifecycle_hooks__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "q", function() { return __WEBPACK_IMPORTED_MODULE_2__metadata_lifecycle_hooks__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "r", function() { return __WEBPACK_IMPORTED_MODULE_2__metadata_lifecycle_hooks__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "s", function() { return __WEBPACK_IMPORTED_MODULE_2__metadata_lifecycle_hooks__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "t", function() { return __WEBPACK_IMPORTED_MODULE_2__metadata_lifecycle_hooks__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "u", function() { return __WEBPACK_IMPORTED_MODULE_2__metadata_lifecycle_hooks__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "v", function() { return __WEBPACK_IMPORTED_MODULE_2__metadata_lifecycle_hooks__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "w", function() { return __WEBPACK_IMPORTED_MODULE_2__metadata_lifecycle_hooks__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "x", function() { return __WEBPACK_IMPORTED_MODULE_3__metadata_ng_module__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "y", function() { return __WEBPACK_IMPORTED_MODULE_3__metadata_ng_module__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__metadata_ng_module__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "z", function() { return __WEBPACK_IMPORTED_MODULE_4__metadata_view__["b"]; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */





//# sourceMappingURL=metadata.js.map

/***/ },
/* 76 */
/* exports provided: LifecycleHooks, LIFECYCLE_HOOKS_VALUES, OnChanges, OnInit, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked */
/* exports used: LifecycleHooks, LIFECYCLE_HOOKS_VALUES, OnDestroy, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, AfterContentChecked, OnInit */
/*!*********************************************************!*\
  !*** ./~/@angular/core/src/metadata/lifecycle_hooks.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LifecycleHooks; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return LIFECYCLE_HOOKS_VALUES; });
/* harmony export (binding) */ __webpack_require__.d(exports, "h", function() { return OnChanges; });
/* harmony export (binding) */ __webpack_require__.d(exports, "j", function() { return OnInit; });
/* harmony export (binding) */ __webpack_require__.d(exports, "g", function() { return DoCheck; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return OnDestroy; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return AfterContentInit; });
/* harmony export (binding) */ __webpack_require__.d(exports, "i", function() { return AfterContentChecked; });
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return AfterViewInit; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return AfterViewChecked; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @stable
 */
var LifecycleHooks;
(function (LifecycleHooks) {
    LifecycleHooks[LifecycleHooks["OnInit"] = 0] = "OnInit";
    LifecycleHooks[LifecycleHooks["OnDestroy"] = 1] = "OnDestroy";
    LifecycleHooks[LifecycleHooks["DoCheck"] = 2] = "DoCheck";
    LifecycleHooks[LifecycleHooks["OnChanges"] = 3] = "OnChanges";
    LifecycleHooks[LifecycleHooks["AfterContentInit"] = 4] = "AfterContentInit";
    LifecycleHooks[LifecycleHooks["AfterContentChecked"] = 5] = "AfterContentChecked";
    LifecycleHooks[LifecycleHooks["AfterViewInit"] = 6] = "AfterViewInit";
    LifecycleHooks[LifecycleHooks["AfterViewChecked"] = 7] = "AfterViewChecked";
})(LifecycleHooks || (LifecycleHooks = {}));
var LIFECYCLE_HOOKS_VALUES = [
    LifecycleHooks.OnInit, LifecycleHooks.OnDestroy, LifecycleHooks.DoCheck, LifecycleHooks.OnChanges,
    LifecycleHooks.AfterContentInit, LifecycleHooks.AfterContentChecked, LifecycleHooks.AfterViewInit,
    LifecycleHooks.AfterViewChecked
];
/**
 * @whatItDoes Lifecycle hook that is called when any data-bound property of a directive changes.
 * @howToUse
 * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='OnChanges'}
 *
 * @description
 * `ngOnChanges` is called right after the data-bound properties have been checked and before view
 * and content children are checked if at least one of them has changed.
 * The `changes` parameter contains the changed properties.
 *
 * See {@linkDocs guide/lifecycle-hooks#onchanges "Lifecycle Hooks Guide"}.
 *
 * @stable
 */
var OnChanges = (function () {
    function OnChanges() {
    }
    return OnChanges;
}());
/**
 * @whatItDoes Lifecycle hook that is called after data-bound properties of a directive are
 * initialized.
 * @howToUse
 * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='OnInit'}
 *
 * @description
 * `ngOnInit` is called right after the directive's data-bound properties have been checked for the
 * first time, and before any of its children have been checked. It is invoked only once when the
 * directive is instantiated.
 *
 * See {@linkDocs guide/lifecycle-hooks "Lifecycle Hooks Guide"}.
 *
 * @stable
 */
var OnInit = (function () {
    function OnInit() {
    }
    return OnInit;
}());
/**
 * @whatItDoes Lifecycle hook that is called when Angular dirty checks a directive.
 * @howToUse
 * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='DoCheck'}
 *
 * @description
 * `ngDoCheck` gets called to check the changes in the directives in addition to the default
 * algorithm. The default change detection algorithm looks for differences by comparing
 * bound-property values by reference across change detection runs.
 *
 * Note that a directive typically should not use both `DoCheck` and {@link OnChanges} to respond to
 * changes on the same input, as `ngOnChanges` will continue to be called when the default change
 * detector detects changes.
 *
 * See {@link KeyValueDiffers} and {@link IterableDiffers} for implementing custom dirty checking
 * for collections.
 *
 * See {@linkDocs guide/lifecycle-hooks#docheck "Lifecycle Hooks Guide"}.
 *
 * @stable
 */
var DoCheck = (function () {
    function DoCheck() {
    }
    return DoCheck;
}());
/**
 * @whatItDoes Lifecycle hook that is called when a directive or pipe is destroyed.
 * @howToUse
 * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='OnDestroy'}
 *
 * @description
 * `ngOnDestroy` callback is typically used for any custom cleanup that needs to occur when the
 * instance is destroyed.
 *
 * See {@linkDocs guide/lifecycle-hooks "Lifecycle Hooks Guide"}.
 *
 * @stable
 */
var OnDestroy = (function () {
    function OnDestroy() {
    }
    return OnDestroy;
}());
/**
 *
 * @whatItDoes Lifecycle hook that is called after a directive's content has been fully
 * initialized.
 * @howToUse
 * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='AfterContentInit'}
 *
 * @description
 * See {@linkDocs guide/lifecycle-hooks#aftercontent "Lifecycle Hooks Guide"}.
 *
 * @stable
 */
var AfterContentInit = (function () {
    function AfterContentInit() {
    }
    return AfterContentInit;
}());
/**
 * @whatItDoes Lifecycle hook that is called after every check of a directive's content.
 * @howToUse
 * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='AfterContentChecked'}
 *
 * @description
 * See {@linkDocs guide/lifecycle-hooks#aftercontent "Lifecycle Hooks Guide"}.
 *
 * @stable
 */
var AfterContentChecked = (function () {
    function AfterContentChecked() {
    }
    return AfterContentChecked;
}());
/**
 * @whatItDoes Lifecycle hook that is called after a component's view has been fully
 * initialized.
 * @howToUse
 * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='AfterViewInit'}
 *
 * @description
 * See {@linkDocs guide/lifecycle-hooks#afterview "Lifecycle Hooks Guide"}.
 *
 * @stable
 */
var AfterViewInit = (function () {
    function AfterViewInit() {
    }
    return AfterViewInit;
}());
/**
 * @whatItDoes Lifecycle hook that is called after every check of a component's view.
 * @howToUse
 * {@example core/ts/metadata/lifecycle_hooks_spec.ts region='AfterViewChecked'}
 *
 * @description
 * See {@linkDocs guide/lifecycle-hooks#afterview "Lifecycle Hooks Guide"}.
 *
 * @stable
 */
var AfterViewChecked = (function () {
    function AfterViewChecked() {
    }
    return AfterViewChecked;
}());
//# sourceMappingURL=lifecycle_hooks.js.map

/***/ },
/* 77 */
/* exports provided: ViewEncapsulation, ViewMetadata */
/* exports used: ViewMetadata, ViewEncapsulation */
/*!**********************************************!*\
  !*** ./~/@angular/core/src/metadata/view.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return ViewEncapsulation; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ViewMetadata; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Defines template and style encapsulation options available for Component's {@link Component}.
 *
 * See {@link ViewMetadata#encapsulation}.
 * @stable
 */
var ViewEncapsulation;
(function (ViewEncapsulation) {
    /**
     * Emulate `Native` scoping of styles by adding an attribute containing surrogate id to the Host
     * Element and pre-processing the style rules provided via
     * {@link ViewMetadata#styles} or {@link ViewMetadata#stylesUrls}, and adding the new Host Element
     * attribute to all selectors.
     *
     * This is the default option.
     */
    ViewEncapsulation[ViewEncapsulation["Emulated"] = 0] = "Emulated";
    /**
     * Use the native encapsulation mechanism of the renderer.
     *
     * For the DOM this means using [Shadow DOM](https://w3c.github.io/webcomponents/spec/shadow/) and
     * creating a ShadowRoot for Component's Host Element.
     */
    ViewEncapsulation[ViewEncapsulation["Native"] = 1] = "Native";
    /**
     * Don't provide any template or style encapsulation.
     */
    ViewEncapsulation[ViewEncapsulation["None"] = 2] = "None";
})(ViewEncapsulation || (ViewEncapsulation = {}));
/**
 * Metadata properties available for configuring Views.
 *
 * For details on the `@Component` annotation, see {@link Component}.
 *
 * ### Example
 *
 * ```
 * @Component({
 *   selector: 'greet',
 *   template: 'Hello {{name}}!',
 * })
 * class Greet {
 *   name: string;
 *
 *   constructor() {
 *     this.name = 'World';
 *   }
 * }
 * ```
 *
 * @deprecated Use Component instead.
 *
 * {@link Component}
 */
var ViewMetadata = (function () {
    function ViewMetadata(_a) {
        var _b = _a === void 0 ? {} : _a, templateUrl = _b.templateUrl, template = _b.template, encapsulation = _b.encapsulation, styles = _b.styles, styleUrls = _b.styleUrls, animations = _b.animations, interpolation = _b.interpolation;
        this.templateUrl = templateUrl;
        this.template = template;
        this.styleUrls = styleUrls;
        this.styles = styles;
        this.encapsulation = encapsulation;
        this.animations = animations;
        this.interpolation = interpolation;
    }
    return ViewMetadata;
}());
//# sourceMappingURL=view.js.map

/***/ },
/* 78 */
/* exports provided: ReflectionCapabilities */
/* exports used: ReflectionCapabilities */
/*!*******************************************************************!*\
  !*** ./~/@angular/core/src/reflection/reflection_capabilities.js ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type__ = __webpack_require__(/*! ../type */ 43);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ReflectionCapabilities; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var ReflectionCapabilities = (function () {
    function ReflectionCapabilities(reflect) {
        this._reflect = reflect || __WEBPACK_IMPORTED_MODULE_0__facade_lang__["a" /* global */].Reflect;
    }
    ReflectionCapabilities.prototype.isReflectionEnabled = function () { return true; };
    ReflectionCapabilities.prototype.factory = function (t) { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return new (t.bind.apply(t, [void 0].concat(args)))();
    }; };
    /** @internal */
    ReflectionCapabilities.prototype._zipTypesAndAnnotations = function (paramTypes, paramAnnotations) {
        var result;
        if (typeof paramTypes === 'undefined') {
            result = new Array(paramAnnotations.length);
        }
        else {
            result = new Array(paramTypes.length);
        }
        for (var i = 0; i < result.length; i++) {
            // TS outputs Object for parameters without types, while Traceur omits
            // the annotations. For now we preserve the Traceur behavior to aid
            // migration, but this can be revisited.
            if (typeof paramTypes === 'undefined') {
                result[i] = [];
            }
            else if (paramTypes[i] != Object) {
                result[i] = [paramTypes[i]];
            }
            else {
                result[i] = [];
            }
            if (paramAnnotations && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(paramAnnotations[i])) {
                result[i] = result[i].concat(paramAnnotations[i]);
            }
        }
        return result;
    };
    ReflectionCapabilities.prototype.parameters = function (type) {
        // Prefer the direct API.
        if (type.parameters) {
            return type.parameters;
        }
        // API of tsickle for lowering decorators to properties on the class.
        var tsickleCtorParams = type.ctorParameters;
        if (tsickleCtorParams) {
            // Newer tsickle uses a function closure
            // Retain the non-function case for compatibility with older tsickle
            var ctorParameters = typeof tsickleCtorParams === 'function' ? tsickleCtorParams() : tsickleCtorParams;
            var paramTypes = ctorParameters.map(function (ctorParam) { return ctorParam && ctorParam.type; });
            var paramAnnotations = ctorParameters.map(function (ctorParam) {
                return ctorParam && convertTsickleDecoratorIntoMetadata(ctorParam.decorators);
            });
            return this._zipTypesAndAnnotations(paramTypes, paramAnnotations);
        }
        // API for metadata created by invoking the decorators.
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(this._reflect) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(this._reflect.getMetadata)) {
            var paramAnnotations = this._reflect.getMetadata('parameters', type);
            var paramTypes = this._reflect.getMetadata('design:paramtypes', type);
            if (paramTypes || paramAnnotations) {
                return this._zipTypesAndAnnotations(paramTypes, paramAnnotations);
            }
        }
        // The array has to be filled with `undefined` because holes would be skipped by `some`
        return new Array(type.length).fill(undefined);
    };
    ReflectionCapabilities.prototype.annotations = function (typeOrFunc) {
        // Prefer the direct API.
        if (typeOrFunc.annotations) {
            var annotations = typeOrFunc.annotations;
            if (typeof annotations === 'function' && annotations.annotations) {
                annotations = annotations.annotations;
            }
            return annotations;
        }
        // API of tsickle for lowering decorators to properties on the class.
        if (typeOrFunc.decorators) {
            return convertTsickleDecoratorIntoMetadata(typeOrFunc.decorators);
        }
        // API for metadata created by invoking the decorators.
        if (this._reflect && this._reflect.getMetadata) {
            var annotations = this._reflect.getMetadata('annotations', typeOrFunc);
            if (annotations)
                return annotations;
        }
        return [];
    };
    ReflectionCapabilities.prototype.propMetadata = function (typeOrFunc) {
        // Prefer the direct API.
        if (typeOrFunc.propMetadata) {
            var propMetadata = typeOrFunc.propMetadata;
            if (typeof propMetadata === 'function' && propMetadata.propMetadata) {
                propMetadata = propMetadata.propMetadata;
            }
            return propMetadata;
        }
        // API of tsickle for lowering decorators to properties on the class.
        if (typeOrFunc.propDecorators) {
            var propDecorators_1 = typeOrFunc.propDecorators;
            var propMetadata_1 = {};
            Object.keys(propDecorators_1).forEach(function (prop) {
                propMetadata_1[prop] = convertTsickleDecoratorIntoMetadata(propDecorators_1[prop]);
            });
            return propMetadata_1;
        }
        // API for metadata created by invoking the decorators.
        if (this._reflect && this._reflect.getMetadata) {
            var propMetadata = this._reflect.getMetadata('propMetadata', typeOrFunc);
            if (propMetadata)
                return propMetadata;
        }
        return {};
    };
    ReflectionCapabilities.prototype.hasLifecycleHook = function (type, lcProperty) {
        return type instanceof __WEBPACK_IMPORTED_MODULE_1__type__["a" /* Type */] && lcProperty in type.prototype;
    };
    ReflectionCapabilities.prototype.getter = function (name) { return new Function('o', 'return o.' + name + ';'); };
    ReflectionCapabilities.prototype.setter = function (name) {
        return new Function('o', 'v', 'return o.' + name + ' = v;');
    };
    ReflectionCapabilities.prototype.method = function (name) {
        var functionBody = "if (!o." + name + ") throw new Error('\"" + name + "\" is undefined');\n        return o." + name + ".apply(o, args);";
        return new Function('o', 'args', functionBody);
    };
    // There is not a concept of import uri in Js, but this is useful in developing Dart applications.
    ReflectionCapabilities.prototype.importUri = function (type) {
        // StaticSymbol
        if (typeof type === 'object' && type['filePath']) {
            return type['filePath'];
        }
        // Runtime type
        return "./" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* stringify */])(type);
    };
    ReflectionCapabilities.prototype.resolveIdentifier = function (name, moduleUrl, runtime) { return runtime; };
    ReflectionCapabilities.prototype.resolveEnum = function (enumIdentifier, name) { return enumIdentifier[name]; };
    return ReflectionCapabilities;
}());
function convertTsickleDecoratorIntoMetadata(decoratorInvocations) {
    if (!decoratorInvocations) {
        return [];
    }
    return decoratorInvocations.map(function (decoratorInvocation) {
        var decoratorType = decoratorInvocation.type;
        var annotationCls = decoratorType.annotationCls;
        var annotationArgs = decoratorInvocation.args ? decoratorInvocation.args : [];
        return new (annotationCls.bind.apply(annotationCls, [void 0].concat(annotationArgs)))();
    });
}
//# sourceMappingURL=reflection_capabilities.js.map

/***/ },
/* 79 */
/* exports provided: Reflector */
/* exports used: Reflector */
/*!*****************************************************!*\
  !*** ./~/@angular/core/src/reflection/reflector.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reflector_reader__ = __webpack_require__(/*! ./reflector_reader */ 40);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Reflector; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Provides access to reflection data about symbols. Used internally by Angular
 * to power dependency injection and compilation.
 */
var Reflector = (function (_super) {
    __extends(Reflector, _super);
    function Reflector(reflectionCapabilities) {
        _super.call(this);
        this.reflectionCapabilities = reflectionCapabilities;
    }
    Reflector.prototype.updateCapabilities = function (caps) { this.reflectionCapabilities = caps; };
    Reflector.prototype.factory = function (type) { return this.reflectionCapabilities.factory(type); };
    Reflector.prototype.parameters = function (typeOrFunc) {
        return this.reflectionCapabilities.parameters(typeOrFunc);
    };
    Reflector.prototype.annotations = function (typeOrFunc) {
        return this.reflectionCapabilities.annotations(typeOrFunc);
    };
    Reflector.prototype.propMetadata = function (typeOrFunc) {
        return this.reflectionCapabilities.propMetadata(typeOrFunc);
    };
    Reflector.prototype.hasLifecycleHook = function (type, lcProperty) {
        return this.reflectionCapabilities.hasLifecycleHook(type, lcProperty);
    };
    Reflector.prototype.getter = function (name) { return this.reflectionCapabilities.getter(name); };
    Reflector.prototype.setter = function (name) { return this.reflectionCapabilities.setter(name); };
    Reflector.prototype.method = function (name) { return this.reflectionCapabilities.method(name); };
    Reflector.prototype.importUri = function (type) { return this.reflectionCapabilities.importUri(type); };
    Reflector.prototype.resolveIdentifier = function (name, moduleUrl, runtime) {
        return this.reflectionCapabilities.resolveIdentifier(name, moduleUrl, runtime);
    };
    Reflector.prototype.resolveEnum = function (identifier, name) {
        return this.reflectionCapabilities.resolveEnum(identifier, name);
    };
    return Reflector;
}(__WEBPACK_IMPORTED_MODULE_0__reflector_reader__["a" /* ReflectorReader */]));
//# sourceMappingURL=reflector.js.map

/***/ },
/* 80 */
/* exports provided: SecurityContext, Sanitizer */
/* exports used: Sanitizer, SecurityContext */
/*!*****************************************!*\
  !*** ./~/@angular/core/src/security.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return SecurityContext; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Sanitizer; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A SecurityContext marks a location that has dangerous security implications, e.g. a DOM property
 * like `innerHTML` that could cause Cross Site Scripting (XSS) security bugs when improperly
 * handled.
 *
 * See DomSanitizer for more details on security in Angular applications.
 *
 * @stable
 */
var SecurityContext;
(function (SecurityContext) {
    SecurityContext[SecurityContext["NONE"] = 0] = "NONE";
    SecurityContext[SecurityContext["HTML"] = 1] = "HTML";
    SecurityContext[SecurityContext["STYLE"] = 2] = "STYLE";
    SecurityContext[SecurityContext["SCRIPT"] = 3] = "SCRIPT";
    SecurityContext[SecurityContext["URL"] = 4] = "URL";
    SecurityContext[SecurityContext["RESOURCE_URL"] = 5] = "RESOURCE_URL";
})(SecurityContext || (SecurityContext = {}));
/**
 * Sanitizer is used by the views to sanitize potentially dangerous values.
 *
 * @stable
 */
var Sanitizer = (function () {
    function Sanitizer() {
    }
    return Sanitizer;
}());
//# sourceMappingURL=security.js.map

/***/ },
/* 81 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/rxjs/Observable.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var root_1 = __webpack_require__(/*! ./util/root */ 48);
var toSubscriber_1 = __webpack_require__(/*! ./util/toSubscriber */ 143);
var observable_1 = __webpack_require__(/*! ./symbol/observable */ 138);
/**
 * A representation of any set of values over any amount of time. This the most basic building block
 * of RxJS.
 *
 * @class Observable<T>
 */
var Observable = (function () {
    /**
     * @constructor
     * @param {Function} subscribe the function that is  called when the Observable is
     * initially subscribed to. This function is given a Subscriber, to which new values
     * can be `next`ed, or an `error` method can be called to raise an error, or
     * `complete` can be called to notify of a successful completion.
     */
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    /**
     * Creates a new Observable, with this Observable as the source, and the passed
     * operator defined as the new observable's operator.
     * @method lift
     * @param {Operator} operator the operator defining the operation to take on the observable
     * @return {Observable} a new observable with the Operator applied
     */
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    /**
     * Registers handlers for handling emitted values, error and completions from the observable, and
     *  executes the observable's subscriber function, which will take action to set up the underlying data stream
     * @method subscribe
     * @param {PartialObserver|Function} observerOrNext (optional) either an observer defining all functions to be called,
     *  or the first of three possible handlers, which is the handler for each value emitted from the observable.
     * @param {Function} error (optional) a handler for a terminal event resulting from an error. If no error handler is provided,
     *  the error will be thrown as unhandled
     * @param {Function} complete (optional) a handler for a terminal event resulting from successful completion.
     * @return {ISubscription} a subscription reference to the registered handlers
     */
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            operator.call(sink, this);
        }
        else {
            sink.add(this._subscribe(sink));
        }
        if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
                throw sink.syncErrorValue;
            }
        }
        return sink;
    };
    /**
     * @method forEach
     * @param {Function} next a handler for each value emitted by the observable
     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
     * @return {Promise} a promise that either resolves on observable completion or
     *  rejects with the handled error
     */
    Observable.prototype.forEach = function (next, PromiseCtor) {
        var _this = this;
        if (!PromiseCtor) {
            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
                PromiseCtor = root_1.root.Rx.config.Promise;
            }
            else if (root_1.root.Promise) {
                PromiseCtor = root_1.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            var subscription = _this.subscribe(function (value) {
                if (subscription) {
                    // if there is a subscription, then we can surmise
                    // the next handling is asynchronous. Any errors thrown
                    // need to be rejected explicitly and unsubscribe must be
                    // called manually
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscription.unsubscribe();
                    }
                }
                else {
                    // if there is NO subscription, then we're getting a nexted
                    // value synchronously during subscription. We can just call it.
                    // If it errors, Observable's `subscribe` will ensure the
                    // unsubscription logic is called, then synchronously rethrow the error.
                    // After that, Promise will trap the error and send it
                    // down the rejection path.
                    next(value);
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        return this.source.subscribe(subscriber);
    };
    /**
     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
     * @method Symbol.observable
     * @return {Observable} this instance of the observable
     */
    Observable.prototype[observable_1.$$observable] = function () {
        return this;
    };
    // HACK: Since TypeScript inherits static properties too, we have to
    // fight against TypeScript here so Subject can have a different static create signature
    /**
     * Creates a new cold Observable by calling the Observable constructor
     * @static true
     * @owner Observable
     * @method create
     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
     * @return {Observable} a new cold observable
     */
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
//# sourceMappingURL=Observable.js.map

/***/ },
/* 82 */
/* unknown exports provided */
/* exports used: Subject */
/*!***************************!*\
  !*** ./~/rxjs/Subject.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(/*! ./Observable */ 81);
var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ 83);
var Subscription_1 = __webpack_require__(/*! ./Subscription */ 46);
var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ 139);
var SubjectSubscription_1 = __webpack_require__(/*! ./SubjectSubscription */ 137);
var rxSubscriber_1 = __webpack_require__(/*! ./symbol/rxSubscriber */ 47);
/**
 * @class SubjectSubscriber<T>
 */
var SubjectSubscriber = (function (_super) {
    __extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        _super.call(this, destination);
        this.destination = destination;
    }
    return SubjectSubscriber;
}(Subscriber_1.Subscriber));
exports.SubjectSubscriber = SubjectSubscriber;
/**
 * @class Subject<T>
 */
var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        _super.call(this);
        this.observers = [];
        this.closed = false;
        this.isStopped = false;
        this.hasError = false;
        this.thrownError = null;
    }
    Subject.prototype[rxSubscriber_1.$$rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1.Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription_1.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable_1.Observable));
exports.Subject = Subject;
/**
 * @class AnonymousSubject<T>
 */
var AnonymousSubject = (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        _super.call(this);
        this.destination = destination;
        this.source = source;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription_1.Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));
exports.AnonymousSubject = AnonymousSubject;
//# sourceMappingURL=Subject.js.map

/***/ },
/* 83 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./~/rxjs/Subscriber.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ 85);
var Subscription_1 = __webpack_require__(/*! ./Subscription */ 46);
var Observer_1 = __webpack_require__(/*! ./Observer */ 136);
var rxSubscriber_1 = __webpack_require__(/*! ./symbol/rxSubscriber */ 47);
/**
 * Implements the {@link Observer} interface and extends the
 * {@link Subscription} class. While the {@link Observer} is the public API for
 * consuming the values of an {@link Observable}, all Observers get converted to
 * a Subscriber, in order to provide Subscription-like capabilities such as
 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
 * implementing operators, but it is rarely used as a public API.
 *
 * @class Subscriber<T>
 */
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    /**
     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
     * defined Observer or a `next` callback function.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     */
    function Subscriber(destinationOrNext, error, complete) {
        _super.call(this);
        this.syncErrorValue = null;
        this.syncErrorThrown = false;
        this.syncErrorThrowable = false;
        this.isStopped = false;
        switch (arguments.length) {
            case 0:
                this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        this.destination = destinationOrNext;
                        this.destination.add(this);
                    }
                    else {
                        this.syncErrorThrowable = true;
                        this.destination = new SafeSubscriber(this, destinationOrNext);
                    }
                    break;
                }
            default:
                this.syncErrorThrowable = true;
                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                break;
        }
    }
    Subscriber.prototype[rxSubscriber_1.$$rxSubscriber] = function () { return this; };
    /**
     * A static factory for a Subscriber, given a (potentially partial) definition
     * of an Observer.
     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
     * Observer represented by the given arguments.
     */
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    /**
     * The {@link Observer} callback to receive notifications of type `next` from
     * the Observable, with a value. The Observable may call this method 0 or more
     * times.
     * @param {T} [value] The `next` value.
     * @return {void}
     */
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    /**
     * The {@link Observer} callback to receive notifications of type `error` from
     * the Observable, with an attached {@link Error}. Notifies the Observer that
     * the Observable has experienced an error condition.
     * @param {any} [err] The `error` exception.
     * @return {void}
     */
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    /**
     * The {@link Observer} callback to receive a valueless notification of type
     * `complete` from the Observable. Notifies the Observer that the Observable
     * has finished sending push-based notifications.
     * @return {void}
     */
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parent, observerOrNext, error, complete) {
        _super.call(this);
        this._parent = _parent;
        var next;
        var context = this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            context = observerOrNext;
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (isFunction_1.isFunction(context.unsubscribe)) {
                this.add(context.unsubscribe.bind(context));
            }
            context.unsubscribe = this.unsubscribe.bind(this);
        }
        this._context = context;
        this._next = next;
        this._error = error;
        this._complete = complete;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parent = this._parent;
            if (!_parent.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parent, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parent = this._parent;
            if (this._error) {
                if (!_parent.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parent, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parent.syncErrorThrowable) {
                this.unsubscribe();
                throw err;
            }
            else {
                _parent.syncErrorValue = err;
                _parent.syncErrorThrown = true;
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        if (!this.isStopped) {
            var _parent = this._parent;
            if (this._complete) {
                if (!_parent.syncErrorThrowable) {
                    this.__tryOrUnsub(this._complete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parent, this._complete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            throw err;
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parent = this._parent;
        this._context = null;
        this._parent = null;
        _parent.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
//# sourceMappingURL=Subscriber.js.map

/***/ },
/* 84 */
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** ./~/rxjs/util/errorObject.js ***!
  \************************************/
/***/ function(module, exports) {

"use strict";
"use strict";
// typeof any so that it we don't have to cast when comparing a result to the error object
exports.errorObject = { e: {} };
//# sourceMappingURL=errorObject.js.map

/***/ },
/* 85 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./~/rxjs/util/isFunction.js ***!
  \***********************************/
/***/ function(module, exports) {

"use strict";
"use strict";
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ },
/* 86 */
/* exports provided: NgLocalization, CommonModule, NgClass, NgFor, NgIf, NgPlural, NgPluralCase, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet, LowerCasePipe, DatePipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, AsyncPipe, CurrencyPipe, DecimalPipe, PercentPipe, SlicePipe, UpperCasePipe, PlatformLocation, LocationStrategy, APP_BASE_HREF, HashLocationStrategy, PathLocationStrategy, Location */
/* all exports used */
/*!************************************!*\
  !*** ./~/@angular/common/index.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_location__ = __webpack_require__(/*! ./src/location */ 96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_localization__ = __webpack_require__(/*! ./src/localization */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_common_module__ = __webpack_require__(/*! ./src/common_module */ 87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_directives_index__ = __webpack_require__(/*! ./src/directives/index */ 50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_pipes_index__ = __webpack_require__(/*! ./src/pipes/index */ 53);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "PlatformLocation", function() { return __WEBPACK_IMPORTED_MODULE_0__src_location__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "LocationStrategy", function() { return __WEBPACK_IMPORTED_MODULE_0__src_location__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "APP_BASE_HREF", function() { return __WEBPACK_IMPORTED_MODULE_0__src_location__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "HashLocationStrategy", function() { return __WEBPACK_IMPORTED_MODULE_0__src_location__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "PathLocationStrategy", function() { return __WEBPACK_IMPORTED_MODULE_0__src_location__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "Location", function() { return __WEBPACK_IMPORTED_MODULE_0__src_location__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "NgLocalization", function() { return __WEBPACK_IMPORTED_MODULE_1__src_localization__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "CommonModule", function() { return __WEBPACK_IMPORTED_MODULE_2__src_common_module__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "NgClass", function() { return __WEBPACK_IMPORTED_MODULE_3__src_directives_index__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "NgFor", function() { return __WEBPACK_IMPORTED_MODULE_3__src_directives_index__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "NgIf", function() { return __WEBPACK_IMPORTED_MODULE_3__src_directives_index__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "NgPlural", function() { return __WEBPACK_IMPORTED_MODULE_3__src_directives_index__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "NgPluralCase", function() { return __WEBPACK_IMPORTED_MODULE_3__src_directives_index__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "NgStyle", function() { return __WEBPACK_IMPORTED_MODULE_3__src_directives_index__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "NgSwitch", function() { return __WEBPACK_IMPORTED_MODULE_3__src_directives_index__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "NgSwitchCase", function() { return __WEBPACK_IMPORTED_MODULE_3__src_directives_index__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "NgSwitchDefault", function() { return __WEBPACK_IMPORTED_MODULE_3__src_directives_index__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "NgTemplateOutlet", function() { return __WEBPACK_IMPORTED_MODULE_3__src_directives_index__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "LowerCasePipe", function() { return __WEBPACK_IMPORTED_MODULE_4__src_pipes_index__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "DatePipe", function() { return __WEBPACK_IMPORTED_MODULE_4__src_pipes_index__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "I18nPluralPipe", function() { return __WEBPACK_IMPORTED_MODULE_4__src_pipes_index__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "I18nSelectPipe", function() { return __WEBPACK_IMPORTED_MODULE_4__src_pipes_index__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "JsonPipe", function() { return __WEBPACK_IMPORTED_MODULE_4__src_pipes_index__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "AsyncPipe", function() { return __WEBPACK_IMPORTED_MODULE_4__src_pipes_index__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "CurrencyPipe", function() { return __WEBPACK_IMPORTED_MODULE_4__src_pipes_index__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "DecimalPipe", function() { return __WEBPACK_IMPORTED_MODULE_4__src_pipes_index__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "PercentPipe", function() { return __WEBPACK_IMPORTED_MODULE_4__src_pipes_index__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "SlicePipe", function() { return __WEBPACK_IMPORTED_MODULE_4__src_pipes_index__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "UpperCasePipe", function() { return __WEBPACK_IMPORTED_MODULE_4__src_pipes_index__["l"]; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the common package.
 */





//# sourceMappingURL=index.js.map

/***/ },
/* 87 */
/* exports provided: CommonModule */
/* exports used: CommonModule */
/*!************************************************!*\
  !*** ./~/@angular/common/src/common_module.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_index__ = __webpack_require__(/*! ./directives/index */ 50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__localization__ = __webpack_require__(/*! ./localization */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_index__ = __webpack_require__(/*! ./pipes/index */ 53);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CommonModule; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




// Note: This does not contain the location providers,
// as they need some platform specific implementations to work.
/**
 * The module that includes all the basic Angular directives like {@link NgIf}, {@link NgFor}, ...
 *
 * @stable
 */
var CommonModule = (function () {
    function CommonModule() {
    }
    CommonModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [__WEBPACK_IMPORTED_MODULE_1__directives_index__["a" /* COMMON_DIRECTIVES */], __WEBPACK_IMPORTED_MODULE_3__pipes_index__["a" /* COMMON_PIPES */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_1__directives_index__["a" /* COMMON_DIRECTIVES */], __WEBPACK_IMPORTED_MODULE_3__pipes_index__["a" /* COMMON_PIPES */]],
                    providers: [
                        { provide: __WEBPACK_IMPORTED_MODULE_2__localization__["a" /* NgLocalization */], useClass: __WEBPACK_IMPORTED_MODULE_2__localization__["c" /* NgLocaleLocalization */] },
                    ],
                },] },
    ];
    /** @nocollapse */
    CommonModule.ctorParameters = [];
    return CommonModule;
}());
//# sourceMappingURL=common_module.js.map

/***/ },
/* 88 */
/* exports provided: NgClass */
/* exports used: NgClass */
/*!******************************************************!*\
  !*** ./~/@angular/common/src/directives/ng_class.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_collection__ = __webpack_require__(/*! ../facade/collection */ 94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NgClass; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @ngModule CommonModule
 *
 * @whatItDoes Adds and removes CSS classes on an HTML element.
 *
 * @howToUse
 * ```
 *     <some-element [ngClass]="'first second'">...</some-element>
 *
 *     <some-element [ngClass]="['first', 'second']">...</some-element>
 *
 *     <some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>
 *
 *     <some-element [ngClass]="stringExp|arrayExp|objExp">...</some-element>
 * ```
 *
 * @description
 *
 * The CSS classes are updated as follows, depending on the type of the expression evaluation:
 * - `string` - the CSS classes listed in the string (space delimited) are added,
 * - `Array` - the CSS classes declared as Array elements are added,
 * - `Object` - keys are CSS classes that get added when the expression given in the value
 *              evaluates to a truthy value, otherwise they are removed.
 *
 * @stable
 */
var NgClass = (function () {
    function NgClass(_iterableDiffers, _keyValueDiffers, _ngEl, _renderer) {
        this._iterableDiffers = _iterableDiffers;
        this._keyValueDiffers = _keyValueDiffers;
        this._ngEl = _ngEl;
        this._renderer = _renderer;
        this._initialClasses = [];
    }
    Object.defineProperty(NgClass.prototype, "klass", {
        set: function (v) {
            this._applyInitialClasses(true);
            this._initialClasses = typeof v === 'string' ? v.split(/\s+/) : [];
            this._applyInitialClasses(false);
            this._applyClasses(this._rawClass, false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgClass.prototype, "ngClass", {
        set: function (v) {
            this._cleanupClasses(this._rawClass);
            this._iterableDiffer = null;
            this._keyValueDiffer = null;
            this._rawClass = typeof v === 'string' ? v.split(/\s+/) : v;
            if (this._rawClass) {
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_collection__["a" /* isListLikeIterable */])(this._rawClass)) {
                    this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create(null);
                }
                else {
                    this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create(null);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    NgClass.prototype.ngDoCheck = function () {
        if (this._iterableDiffer) {
            var changes = this._iterableDiffer.diff(this._rawClass);
            if (changes) {
                this._applyIterableChanges(changes);
            }
        }
        else if (this._keyValueDiffer) {
            var changes = this._keyValueDiffer.diff(this._rawClass);
            if (changes) {
                this._applyKeyValueChanges(changes);
            }
        }
    };
    NgClass.prototype._cleanupClasses = function (rawClassVal) {
        this._applyClasses(rawClassVal, true);
        this._applyInitialClasses(false);
    };
    NgClass.prototype._applyKeyValueChanges = function (changes) {
        var _this = this;
        changes.forEachAddedItem(function (record) { return _this._toggleClass(record.key, record.currentValue); });
        changes.forEachChangedItem(function (record) { return _this._toggleClass(record.key, record.currentValue); });
        changes.forEachRemovedItem(function (record) {
            if (record.previousValue) {
                _this._toggleClass(record.key, false);
            }
        });
    };
    NgClass.prototype._applyIterableChanges = function (changes) {
        var _this = this;
        changes.forEachAddedItem(function (record) {
            if (typeof record.item === 'string') {
                _this._toggleClass(record.item, true);
            }
            else {
                throw new Error("NgClass can only toggle CSS classes expressed as strings, got " + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["e" /* stringify */])(record.item));
            }
        });
        changes.forEachRemovedItem(function (record) { return _this._toggleClass(record.item, false); });
    };
    NgClass.prototype._applyInitialClasses = function (isCleanup) {
        var _this = this;
        this._initialClasses.forEach(function (klass) { return _this._toggleClass(klass, !isCleanup); });
    };
    NgClass.prototype._applyClasses = function (rawClassVal, isCleanup) {
        var _this = this;
        if (rawClassVal) {
            if (Array.isArray(rawClassVal) || rawClassVal instanceof Set) {
                rawClassVal.forEach(function (klass) { return _this._toggleClass(klass, !isCleanup); });
            }
            else {
                Object.keys(rawClassVal).forEach(function (klass) {
                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["a" /* isPresent */])(rawClassVal[klass]))
                        _this._toggleClass(klass, !isCleanup);
                });
            }
        }
    };
    NgClass.prototype._toggleClass = function (klass, enabled) {
        var _this = this;
        klass = klass.trim();
        if (klass) {
            klass.split(/\s+/g).forEach(function (klass) { _this._renderer.setElementClass(_this._ngEl.nativeElement, klass, enabled); });
        }
    };
    NgClass.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngClass]' },] },
    ];
    /** @nocollapse */
    NgClass.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["IterableDiffers"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["KeyValueDiffers"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    ];
    NgClass.propDecorators = {
        'klass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['class',] },],
        'ngClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return NgClass;
}());
//# sourceMappingURL=ng_class.js.map

/***/ },
/* 89 */
/* exports provided: NgForRow, NgFor */
/* exports used: NgFor */
/*!****************************************************!*\
  !*** ./~/@angular/common/src/directives/ng_for.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 2);
/* unused harmony export NgForRow */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NgFor; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var NgForRow = (function () {
    function NgForRow($implicit, index, count) {
        this.$implicit = $implicit;
        this.index = index;
        this.count = count;
    }
    Object.defineProperty(NgForRow.prototype, "first", {
        get: function () { return this.index === 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForRow.prototype, "last", {
        get: function () { return this.index === this.count - 1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForRow.prototype, "even", {
        get: function () { return this.index % 2 === 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForRow.prototype, "odd", {
        get: function () { return !this.even; },
        enumerable: true,
        configurable: true
    });
    return NgForRow;
}());
/**
 * The `NgFor` directive instantiates a template once per item from an iterable. The context for
 * each instantiated template inherits from the outer context with the given loop variable set
 * to the current item from the iterable.
 *
 * ### Local Variables
 *
 * `NgFor` provides several exported values that can be aliased to local variables:
 *
 * * `index` will be set to the current loop iteration for each template context.
 * * `first` will be set to a boolean value indicating whether the item is the first one in the
 *   iteration.
 * * `last` will be set to a boolean value indicating whether the item is the last one in the
 *   iteration.
 * * `even` will be set to a boolean value indicating whether this item has an even index.
 * * `odd` will be set to a boolean value indicating whether this item has an odd index.
 *
 * ### Change Propagation
 *
 * When the contents of the iterator changes, `NgFor` makes the corresponding changes to the DOM:
 *
 * * When an item is added, a new instance of the template is added to the DOM.
 * * When an item is removed, its template instance is removed from the DOM.
 * * When items are reordered, their respective templates are reordered in the DOM.
 * * Otherwise, the DOM element for that item will remain the same.
 *
 * Angular uses object identity to track insertions and deletions within the iterator and reproduce
 * those changes in the DOM. This has important implications for animations and any stateful
 * controls
 * (such as `<input>` elements which accept user input) that are present. Inserted rows can be
 * animated in, deleted rows can be animated out, and unchanged rows retain any unsaved state such
 * as user input.
 *
 * It is possible for the identities of elements in the iterator to change while the data does not.
 * This can happen, for example, if the iterator produced from an RPC to the server, and that
 * RPC is re-run. Even if the data hasn't changed, the second response will produce objects with
 * different identities, and Angular will tear down the entire DOM and rebuild it (as if all old
 * elements were deleted and all new elements inserted). This is an expensive operation and should
 * be avoided if possible.
 *
 * To customize the default tracking algorithm, `NgFor` supports `trackBy` option.
 * `trackBy` takes a function which has two arguments: `index` and `item`.
 * If `trackBy` is given, Angular tracks changes by the return value of the function.
 *
 * ### Syntax
 *
 * - `<li *ngFor="let item of items; let i = index; trackBy: trackByFn">...</li>`
 * - `<li template="ngFor let item of items; let i = index; trackBy: trackByFn">...</li>`
 *
 * With `<template>` element:
 *
 * ```
 * <template ngFor let-item [ngForOf]="items" let-i="index" [ngForTrackBy]="trackByFn">
 *   <li>...</li>
 * </template>
 * ```
 *
 * ### Example
 *
 * See a [live demo](http://plnkr.co/edit/KVuXxDp0qinGDyo307QW?p=preview) for a more detailed
 * example.
 *
 * @stable
 */
var NgFor = (function () {
    function NgFor(_viewContainer, _template, _differs, _cdr) {
        this._viewContainer = _viewContainer;
        this._template = _template;
        this._differs = _differs;
        this._cdr = _cdr;
        this._differ = null;
    }
    Object.defineProperty(NgFor.prototype, "ngForTemplate", {
        set: function (value) {
            if (value) {
                this._template = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    NgFor.prototype.ngOnChanges = function (changes) {
        if ('ngForOf' in changes) {
            // React on ngForOf changes only once all inputs have been initialized
            var value = changes['ngForOf'].currentValue;
            if (!this._differ && value) {
                try {
                    this._differ = this._differs.find(value).create(this._cdr, this.ngForTrackBy);
                }
                catch (e) {
                    throw new Error("Cannot find a differ supporting object '" + value + "' of type '" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["f" /* getTypeNameForDebugging */])(value) + "'. NgFor only supports binding to Iterables such as Arrays.");
                }
            }
        }
    };
    NgFor.prototype.ngDoCheck = function () {
        if (this._differ) {
            var changes = this._differ.diff(this.ngForOf);
            if (changes)
                this._applyChanges(changes);
        }
    };
    NgFor.prototype._applyChanges = function (changes) {
        var _this = this;
        var insertTuples = [];
        changes.forEachOperation(function (item, adjustedPreviousIndex, currentIndex) {
            if (item.previousIndex == null) {
                var view = _this._viewContainer.createEmbeddedView(_this._template, new NgForRow(null, null, null), currentIndex);
                var tuple = new RecordViewTuple(item, view);
                insertTuples.push(tuple);
            }
            else if (currentIndex == null) {
                _this._viewContainer.remove(adjustedPreviousIndex);
            }
            else {
                var view = _this._viewContainer.get(adjustedPreviousIndex);
                _this._viewContainer.move(view, currentIndex);
                var tuple = new RecordViewTuple(item, view);
                insertTuples.push(tuple);
            }
        });
        for (var i = 0; i < insertTuples.length; i++) {
            this._perViewChange(insertTuples[i].view, insertTuples[i].record);
        }
        for (var i = 0, ilen = this._viewContainer.length; i < ilen; i++) {
            var viewRef = this._viewContainer.get(i);
            viewRef.context.index = i;
            viewRef.context.count = ilen;
        }
        changes.forEachIdentityChange(function (record) {
            var viewRef = _this._viewContainer.get(record.currentIndex);
            viewRef.context.$implicit = record.item;
        });
    };
    NgFor.prototype._perViewChange = function (view, record) {
        view.context.$implicit = record.item;
    };
    NgFor.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngFor][ngForOf]' },] },
    ];
    /** @nocollapse */
    NgFor.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["IterableDiffers"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ];
    NgFor.propDecorators = {
        'ngForOf': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'ngForTrackBy': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'ngForTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return NgFor;
}());
var RecordViewTuple = (function () {
    function RecordViewTuple(record, view) {
        this.record = record;
        this.view = view;
    }
    return RecordViewTuple;
}());
//# sourceMappingURL=ng_for.js.map

/***/ },
/* 90 */
/* exports provided: NgIf */
/* exports used: NgIf */
/*!***************************************************!*\
  !*** ./~/@angular/common/src/directives/ng_if.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NgIf; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Removes or recreates a portion of the DOM tree based on an {expression}.
 *
 * If the expression assigned to `ngIf` evaluates to a falsy value then the element
 * is removed from the DOM, otherwise a clone of the element is reinserted into the DOM.
 *
 * ### Example ([live demo](http://plnkr.co/edit/fe0kgemFBtmQOY31b4tw?p=preview)):
 *
 * ```
 * <div *ngIf="errorCount > 0" class="error">
 *   <!-- Error message displayed when the errorCount property in the current context is greater
 * than 0. -->
 *   {{errorCount}} errors detected
 * </div>
 * ```
 *
 * ### Syntax
 *
 * - `<div *ngIf="condition">...</div>`
 * - `<div template="ngIf condition">...</div>`
 * - `<template [ngIf]="condition"><div>...</div></template>`
 *
 * @stable
 */
var NgIf = (function () {
    function NgIf(_viewContainer, _template) {
        this._viewContainer = _viewContainer;
        this._template = _template;
        this._hasView = false;
    }
    Object.defineProperty(NgIf.prototype, "ngIf", {
        set: function (condition) {
            if (condition && !this._hasView) {
                this._hasView = true;
                this._viewContainer.createEmbeddedView(this._template);
            }
            else if (!condition && this._hasView) {
                this._hasView = false;
                this._viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    NgIf.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngIf]' },] },
    ];
    /** @nocollapse */
    NgIf.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
    ];
    NgIf.propDecorators = {
        'ngIf': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return NgIf;
}());
//# sourceMappingURL=ng_if.js.map

/***/ },
/* 91 */
/* exports provided: NgPlural, NgPluralCase */
/* exports used: NgPlural, NgPluralCase */
/*!*******************************************************!*\
  !*** ./~/@angular/common/src/directives/ng_plural.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__localization__ = __webpack_require__(/*! ../localization */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_switch__ = __webpack_require__(/*! ./ng_switch */ 51);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NgPlural; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return NgPluralCase; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @ngModule CommonModule
 *
 * @whatItDoes Adds / removes DOM sub-trees based on a numeric value. Tailored for pluralization.
 *
 * @howToUse
 * ```
 * <some-element [ngPlural]="value">
 *   <ng-container *ngPluralCase="'=0'">there is nothing</ng-container>
 *   <ng-container *ngPluralCase="'=1'">there is one</ng-container>
 *   <ng-container *ngPluralCase="'few'">there are a few</ng-container>
 *   <ng-container *ngPluralCase="'other'">there are exactly #</ng-container>
 * </some-element>
 * ```
 *
 * @description
 *
 * Displays DOM sub-trees that match the switch expression value, or failing that, DOM sub-trees
 * that match the switch expression's pluralization category.
 *
 * To use this directive you must provide a container element that sets the `[ngPlural]` attribute
 * to a switch expression. Inner elements with a `[ngPluralCase]` will display based on their
 * expression:
 * - if `[ngPluralCase]` is set to a value starting with `=`, it will only display if the value
 *   matches the switch expression exactly,
 * - otherwise, the view will be treated as a "category match", and will only display if exact
 *   value matches aren't found and the value maps to its category for the defined locale.
 *
 * See http://cldr.unicode.org/index/cldr-spec/plural-rules
 *
 * @experimental
 */
var NgPlural = (function () {
    function NgPlural(_localization) {
        this._localization = _localization;
        this._caseViews = {};
    }
    Object.defineProperty(NgPlural.prototype, "ngPlural", {
        set: function (value) {
            this._switchValue = value;
            this._updateView();
        },
        enumerable: true,
        configurable: true
    });
    NgPlural.prototype.addCase = function (value, switchView) { this._caseViews[value] = switchView; };
    NgPlural.prototype._updateView = function () {
        this._clearViews();
        var cases = Object.keys(this._caseViews);
        var key = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__localization__["b" /* getPluralCategory */])(this._switchValue, cases, this._localization);
        this._activateView(this._caseViews[key]);
    };
    NgPlural.prototype._clearViews = function () {
        if (this._activeView)
            this._activeView.destroy();
    };
    NgPlural.prototype._activateView = function (view) {
        if (view) {
            this._activeView = view;
            this._activeView.create();
        }
    };
    NgPlural.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngPlural]' },] },
    ];
    /** @nocollapse */
    NgPlural.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_1__localization__["a" /* NgLocalization */], },
    ];
    NgPlural.propDecorators = {
        'ngPlural': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return NgPlural;
}());
/**
 * @ngModule CommonModule
 *
 * @whatItDoes Creates a view that will be added/removed from the parent {@link NgPlural} when the
 *             given expression matches the plural expression according to CLDR rules.
 *
 * @howToUse
 * ```
 * <some-element [ngPlural]="value">
 *   <ng-container *ngPluralCase="'=0'">...</ng-container>
 *   <ng-container *ngPluralCase="'other'">...</ng-container>
 * </some-element>
 *```
 *
 * See {@link NgPlural} for more details and example.
 *
 * @experimental
 */
var NgPluralCase = (function () {
    function NgPluralCase(value, template, viewContainer, ngPlural) {
        this.value = value;
        ngPlural.addCase(value, new __WEBPACK_IMPORTED_MODULE_2__ng_switch__["a" /* SwitchView */](viewContainer, template));
    }
    NgPluralCase.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngPluralCase]' },] },
    ];
    /** @nocollapse */
    NgPluralCase.ctorParameters = [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"], args: ['ngPluralCase',] },] },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: NgPlural, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
    ];
    return NgPluralCase;
}());
//# sourceMappingURL=ng_plural.js.map

/***/ },
/* 92 */
/* exports provided: NgStyle */
/* exports used: NgStyle */
/*!******************************************************!*\
  !*** ./~/@angular/common/src/directives/ng_style.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NgStyle; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @ngModule CommonModule
 *
 * @whatItDoes Update an HTML element styles.
 *
 * @howToUse
 * ```
 * <some-element [ngStyle]="{'font-style': styleExp}">...</some-element>
 *
 * <some-element [ngStyle]="{'max-width.px': widthExp}">...</some-element>
 *
 * <some-element [ngStyle]="objExp">...</some-element>
 * ```
 *
 * @description
 *
 * The styles are updated according to the value of the expression evaluation:
 * - keys are style names with an optional `.<unit>` suffix (ie 'top.px', 'font-style.em'),
 * - values are the values assigned to those properties (expressed in the given unit).
 *
 * @stable
 */
var NgStyle = (function () {
    function NgStyle(_differs, _ngEl, _renderer) {
        this._differs = _differs;
        this._ngEl = _ngEl;
        this._renderer = _renderer;
    }
    Object.defineProperty(NgStyle.prototype, "ngStyle", {
        set: function (v) {
            this._ngStyle = v;
            if (!this._differ && v) {
                this._differ = this._differs.find(v).create(null);
            }
        },
        enumerable: true,
        configurable: true
    });
    NgStyle.prototype.ngDoCheck = function () {
        if (this._differ) {
            var changes = this._differ.diff(this._ngStyle);
            if (changes) {
                this._applyChanges(changes);
            }
        }
    };
    NgStyle.prototype._applyChanges = function (changes) {
        var _this = this;
        changes.forEachRemovedItem(function (record) { return _this._setStyle(record.key, null); });
        changes.forEachAddedItem(function (record) { return _this._setStyle(record.key, record.currentValue); });
        changes.forEachChangedItem(function (record) { return _this._setStyle(record.key, record.currentValue); });
    };
    NgStyle.prototype._setStyle = function (nameAndUnit, value) {
        var _a = nameAndUnit.split('.'), name = _a[0], unit = _a[1];
        value = value && unit ? "" + value + unit : value;
        this._renderer.setElementStyle(this._ngEl.nativeElement, name, value);
    };
    NgStyle.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngStyle]' },] },
    ];
    /** @nocollapse */
    NgStyle.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["KeyValueDiffers"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    ];
    NgStyle.propDecorators = {
        'ngStyle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return NgStyle;
}());
//# sourceMappingURL=ng_style.js.map

/***/ },
/* 93 */
/* exports provided: NgTemplateOutlet */
/* exports used: NgTemplateOutlet */
/*!****************************************************************!*\
  !*** ./~/@angular/common/src/directives/ng_template_outlet.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NgTemplateOutlet; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @ngModule CommonModule
 *
 * @whatItDoes Inserts an embedded view from a prepared `TemplateRef`
 *
 * @howToUse
 * ```
 * <template [ngTemplateOutlet]="templateRefExpression"
 *           [ngOutletContext]="objectExpression">
 * </template>
 * ```
 *
 * @description
 *
 * You can attach a context object to the `EmbeddedViewRef` by setting `[ngOutletContext]`.
 * `[ngOutletContext]` should be an object, the object's keys will be the local template variables
 * available within the `TemplateRef`.
 *
 * Note: using the key `$implicit` in the context object will set it's value as default.
 *
 * @experimental
 */
var NgTemplateOutlet = (function () {
    function NgTemplateOutlet(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
    }
    Object.defineProperty(NgTemplateOutlet.prototype, "ngOutletContext", {
        set: function (context) { this._context = context; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgTemplateOutlet.prototype, "ngTemplateOutlet", {
        set: function (templateRef) { this._templateRef = templateRef; },
        enumerable: true,
        configurable: true
    });
    NgTemplateOutlet.prototype.ngOnChanges = function (changes) {
        if (this._viewRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._viewRef));
        }
        if (this._templateRef) {
            this._viewRef = this._viewContainerRef.createEmbeddedView(this._templateRef, this._context);
        }
    };
    NgTemplateOutlet.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngTemplateOutlet]' },] },
    ];
    /** @nocollapse */
    NgTemplateOutlet.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
    ];
    NgTemplateOutlet.propDecorators = {
        'ngOutletContext': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'ngTemplateOutlet': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return NgTemplateOutlet;
}());
//# sourceMappingURL=ng_template_outlet.js.map

/***/ },
/* 94 */
/* exports provided: StringMapWrapper, ListWrapper, isListLikeIterable, areIterablesEqual, iterateListLike */
/* exports used: isListLikeIterable */
/*!****************************************************!*\
  !*** ./~/@angular/common/src/facade/collection.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lang__ = __webpack_require__(/*! ./lang */ 2);
/* unused harmony export StringMapWrapper */
/* unused harmony export ListWrapper */
/* harmony export (immutable) */ exports["a"] = isListLikeIterable;
/* unused harmony export areIterablesEqual */
/* unused harmony export iterateListLike */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Wraps Javascript Objects
 */
var StringMapWrapper = (function () {
    function StringMapWrapper() {
    }
    StringMapWrapper.merge = function (m1, m2) {
        var m = {};
        for (var _i = 0, _a = Object.keys(m1); _i < _a.length; _i++) {
            var k = _a[_i];
            m[k] = m1[k];
        }
        for (var _b = 0, _c = Object.keys(m2); _b < _c.length; _b++) {
            var k = _c[_b];
            m[k] = m2[k];
        }
        return m;
    };
    StringMapWrapper.equals = function (m1, m2) {
        var k1 = Object.keys(m1);
        var k2 = Object.keys(m2);
        if (k1.length != k2.length) {
            return false;
        }
        for (var i = 0; i < k1.length; i++) {
            var key = k1[i];
            if (m1[key] !== m2[key]) {
                return false;
            }
        }
        return true;
    };
    return StringMapWrapper;
}());
var ListWrapper = (function () {
    function ListWrapper() {
    }
    ListWrapper.removeAll = function (list, items) {
        for (var i = 0; i < items.length; ++i) {
            var index = list.indexOf(items[i]);
            if (index > -1) {
                list.splice(index, 1);
            }
        }
    };
    ListWrapper.remove = function (list, el) {
        var index = list.indexOf(el);
        if (index > -1) {
            list.splice(index, 1);
            return true;
        }
        return false;
    };
    ListWrapper.equals = function (a, b) {
        if (a.length != b.length)
            return false;
        for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i])
                return false;
        }
        return true;
    };
    ListWrapper.flatten = function (list) {
        return list.reduce(function (flat, item) {
            var flatItem = Array.isArray(item) ? ListWrapper.flatten(item) : item;
            return flat.concat(flatItem);
        }, []);
    };
    return ListWrapper;
}());
function isListLikeIterable(obj) {
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["c" /* isJsObject */])(obj))
        return false;
    return Array.isArray(obj) ||
        (!(obj instanceof Map) &&
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["d" /* getSymbolIterator */])() in obj); // JS Iterable have a Symbol.iterator prop
}
function areIterablesEqual(a, b, comparator) {
    var iterator1 = a[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["d" /* getSymbolIterator */])()]();
    var iterator2 = b[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["d" /* getSymbolIterator */])()]();
    while (true) {
        var item1 = iterator1.next();
        var item2 = iterator2.next();
        if (item1.done && item2.done)
            return true;
        if (item1.done || item2.done)
            return false;
        if (!comparator(item1.value, item2.value))
            return false;
    }
}
function iterateListLike(obj, fn) {
    if (Array.isArray(obj)) {
        for (var i = 0; i < obj.length; i++) {
            fn(obj[i]);
        }
    }
    else {
        var iterator = obj[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["d" /* getSymbolIterator */])()]();
        var item = void 0;
        while (!((item = iterator.next()).done)) {
            fn(item.value);
        }
    }
}
//# sourceMappingURL=collection.js.map

/***/ },
/* 95 */
/* exports provided: unimplemented, BaseError, WrappedError */
/* exports used: BaseError */
/*!************************************************!*\
  !*** ./~/@angular/common/src/facade/errors.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* unused harmony export unimplemented */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BaseError; });
/* unused harmony export WrappedError */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function unimplemented() {
    throw new Error('unimplemented');
}
/**
 * @stable
 */
var BaseError = (function (_super) {
    __extends(BaseError, _super);
    function BaseError(message) {
        // Errors don't use current this, instead they create a new instance.
        // We have to do forward all of our api to the nativeInstance.
        var nativeError = _super.call(this, message);
        this._nativeError = nativeError;
    }
    Object.defineProperty(BaseError.prototype, "message", {
        get: function () { return this._nativeError.message; },
        set: function (message) { this._nativeError.message = message; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseError.prototype, "name", {
        get: function () { return this._nativeError.name; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseError.prototype, "stack", {
        get: function () { return this._nativeError.stack; },
        set: function (value) { this._nativeError.stack = value; },
        enumerable: true,
        configurable: true
    });
    BaseError.prototype.toString = function () { return this._nativeError.toString(); };
    return BaseError;
}(Error));
/**
 * @stable
 */
var WrappedError = (function (_super) {
    __extends(WrappedError, _super);
    function WrappedError(message, error) {
        _super.call(this, message + " caused by: " + (error instanceof Error ? error.message : error));
        this.originalError = error;
    }
    Object.defineProperty(WrappedError.prototype, "stack", {
        get: function () {
            return (this.originalError instanceof Error ? this.originalError : this._nativeError)
                .stack;
        },
        enumerable: true,
        configurable: true
    });
    return WrappedError;
}(BaseError));
//# sourceMappingURL=errors.js.map

/***/ },
/* 96 */
/* exports provided: PlatformLocation, LocationStrategy, APP_BASE_HREF, HashLocationStrategy, PathLocationStrategy, Location */
/* exports used: PlatformLocation, LocationStrategy, APP_BASE_HREF, HashLocationStrategy, PathLocationStrategy, Location */
/*!*******************************************!*\
  !*** ./~/@angular/common/src/location.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__location_platform_location__ = __webpack_require__(/*! ./location/platform_location */ 27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__location_location_strategy__ = __webpack_require__(/*! ./location/location_strategy */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_hash_location_strategy__ = __webpack_require__(/*! ./location/hash_location_strategy */ 97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_path_location_strategy__ = __webpack_require__(/*! ./location/path_location_strategy */ 98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__location_location__ = __webpack_require__(/*! ./location/location */ 26);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__location_platform_location__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__location_location_strategy__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__location_location_strategy__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__location_hash_location_strategy__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__location_path_location_strategy__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__location_location__["a"]; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */





//# sourceMappingURL=location.js.map

/***/ },
/* 97 */
/* exports provided: HashLocationStrategy */
/* exports used: HashLocationStrategy */
/*!******************************************************************!*\
  !*** ./~/@angular/common/src/location/hash_location_strategy.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location__ = __webpack_require__(/*! ./location */ 26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_strategy__ = __webpack_require__(/*! ./location_strategy */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__platform_location__ = __webpack_require__(/*! ./platform_location */ 27);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HashLocationStrategy; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





/**
 * `HashLocationStrategy` is a {@link LocationStrategy} used to configure the
 * {@link Location} service to represent its state in the
 * [hash fragment](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax)
 * of the browser's URL.
 *
 * For instance, if you call `location.go('/foo')`, the browser's URL will become
 * `example.com#/foo`.
 *
 * ### Example
 *
 * ```
 * import {Component, NgModule} from '@angular/core';
 * import {
 *   LocationStrategy,
 *   HashLocationStrategy
 * } from '@angular/common';
 *
 * @NgModule({
 *   providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
 * })
 * class AppModule {}
 * ```
 *
 * @stable
 */
var HashLocationStrategy = (function (_super) {
    __extends(HashLocationStrategy, _super);
    function HashLocationStrategy(_platformLocation, _baseHref) {
        _super.call(this);
        this._platformLocation = _platformLocation;
        this._baseHref = '';
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["a" /* isPresent */])(_baseHref)) {
            this._baseHref = _baseHref;
        }
    }
    HashLocationStrategy.prototype.onPopState = function (fn) {
        this._platformLocation.onPopState(fn);
        this._platformLocation.onHashChange(fn);
    };
    HashLocationStrategy.prototype.getBaseHref = function () { return this._baseHref; };
    HashLocationStrategy.prototype.path = function (includeHash) {
        if (includeHash === void 0) { includeHash = false; }
        // the hash value is always prefixed with a `#`
        // and if it is empty then it will stay empty
        var path = this._platformLocation.hash;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["a" /* isPresent */])(path))
            path = '#';
        return path.length > 0 ? path.substring(1) : path;
    };
    HashLocationStrategy.prototype.prepareExternalUrl = function (internal) {
        var url = __WEBPACK_IMPORTED_MODULE_2__location__["a" /* Location */].joinWithSlash(this._baseHref, internal);
        return url.length > 0 ? ('#' + url) : url;
    };
    HashLocationStrategy.prototype.pushState = function (state, title, path, queryParams) {
        var url = this.prepareExternalUrl(path + __WEBPACK_IMPORTED_MODULE_2__location__["a" /* Location */].normalizeQueryParams(queryParams));
        if (url.length == 0) {
            url = this._platformLocation.pathname;
        }
        this._platformLocation.pushState(state, title, url);
    };
    HashLocationStrategy.prototype.replaceState = function (state, title, path, queryParams) {
        var url = this.prepareExternalUrl(path + __WEBPACK_IMPORTED_MODULE_2__location__["a" /* Location */].normalizeQueryParams(queryParams));
        if (url.length == 0) {
            url = this._platformLocation.pathname;
        }
        this._platformLocation.replaceState(state, title, url);
    };
    HashLocationStrategy.prototype.forward = function () { this._platformLocation.forward(); };
    HashLocationStrategy.prototype.back = function () { this._platformLocation.back(); };
    HashLocationStrategy.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    HashLocationStrategy.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_4__platform_location__["a" /* PlatformLocation */], },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_3__location_strategy__["b" /* APP_BASE_HREF */],] },] },
    ];
    return HashLocationStrategy;
}(__WEBPACK_IMPORTED_MODULE_3__location_strategy__["a" /* LocationStrategy */]));
//# sourceMappingURL=hash_location_strategy.js.map

/***/ },
/* 98 */
/* exports provided: PathLocationStrategy */
/* exports used: PathLocationStrategy */
/*!******************************************************************!*\
  !*** ./~/@angular/common/src/location/path_location_strategy.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location__ = __webpack_require__(/*! ./location */ 26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_strategy__ = __webpack_require__(/*! ./location_strategy */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__platform_location__ = __webpack_require__(/*! ./platform_location */ 27);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PathLocationStrategy; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





/**
 * `PathLocationStrategy` is a {@link LocationStrategy} used to configure the
 * {@link Location} service to represent its state in the
 * [path](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax) of the
 * browser's URL.
 *
 * `PathLocationStrategy` is the default binding for {@link LocationStrategy}
 * provided in {@link ROUTER_PROVIDERS}.
 *
 * If you're using `PathLocationStrategy`, you must provide a {@link APP_BASE_HREF}
 * or add a base element to the document. This URL prefix that will be preserved
 * when generating and recognizing URLs.
 *
 * For instance, if you provide an `APP_BASE_HREF` of `'/my/app'` and call
 * `location.go('/foo')`, the browser's URL will become
 * `example.com/my/app/foo`.
 *
 * Similarly, if you add `<base href='/my/app'/>` to the document and call
 * `location.go('/foo')`, the browser's URL will become
 * `example.com/my/app/foo`.
 *
 * @stable
 */
var PathLocationStrategy = (function (_super) {
    __extends(PathLocationStrategy, _super);
    function PathLocationStrategy(_platformLocation, href) {
        _super.call(this);
        this._platformLocation = _platformLocation;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* isBlank */])(href)) {
            href = this._platformLocation.getBaseHrefFromDOM();
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* isBlank */])(href)) {
            throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
        }
        this._baseHref = href;
    }
    PathLocationStrategy.prototype.onPopState = function (fn) {
        this._platformLocation.onPopState(fn);
        this._platformLocation.onHashChange(fn);
    };
    PathLocationStrategy.prototype.getBaseHref = function () { return this._baseHref; };
    PathLocationStrategy.prototype.prepareExternalUrl = function (internal) {
        return __WEBPACK_IMPORTED_MODULE_2__location__["a" /* Location */].joinWithSlash(this._baseHref, internal);
    };
    PathLocationStrategy.prototype.path = function (includeHash) {
        if (includeHash === void 0) { includeHash = false; }
        var pathname = this._platformLocation.pathname +
            __WEBPACK_IMPORTED_MODULE_2__location__["a" /* Location */].normalizeQueryParams(this._platformLocation.search);
        var hash = this._platformLocation.hash;
        return hash && includeHash ? "" + pathname + hash : pathname;
    };
    PathLocationStrategy.prototype.pushState = function (state, title, url, queryParams) {
        var externalUrl = this.prepareExternalUrl(url + __WEBPACK_IMPORTED_MODULE_2__location__["a" /* Location */].normalizeQueryParams(queryParams));
        this._platformLocation.pushState(state, title, externalUrl);
    };
    PathLocationStrategy.prototype.replaceState = function (state, title, url, queryParams) {
        var externalUrl = this.prepareExternalUrl(url + __WEBPACK_IMPORTED_MODULE_2__location__["a" /* Location */].normalizeQueryParams(queryParams));
        this._platformLocation.replaceState(state, title, externalUrl);
    };
    PathLocationStrategy.prototype.forward = function () { this._platformLocation.forward(); };
    PathLocationStrategy.prototype.back = function () { this._platformLocation.back(); };
    PathLocationStrategy.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    PathLocationStrategy.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_4__platform_location__["a" /* PlatformLocation */], },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_3__location_strategy__["b" /* APP_BASE_HREF */],] },] },
    ];
    return PathLocationStrategy;
}(__WEBPACK_IMPORTED_MODULE_3__location_strategy__["a" /* LocationStrategy */]));
//# sourceMappingURL=path_location_strategy.js.map

/***/ },
/* 99 */
/* exports provided: AsyncPipe */
/* exports used: AsyncPipe */
/*!***************************************************!*\
  !*** ./~/@angular/common/src/pipes/async_pipe.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__private_import_core__ = __webpack_require__(/*! ../private_import_core */ 108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invalid_pipe_argument_error__ = __webpack_require__(/*! ./invalid_pipe_argument_error */ 5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AsyncPipe; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



var ObservableStrategy = (function () {
    function ObservableStrategy() {
    }
    ObservableStrategy.prototype.createSubscription = function (async, updateLatestValue) {
        return async.subscribe({ next: updateLatestValue, error: function (e) { throw e; } });
    };
    ObservableStrategy.prototype.dispose = function (subscription) { subscription.unsubscribe(); };
    ObservableStrategy.prototype.onDestroy = function (subscription) { subscription.unsubscribe(); };
    return ObservableStrategy;
}());
var PromiseStrategy = (function () {
    function PromiseStrategy() {
    }
    PromiseStrategy.prototype.createSubscription = function (async, updateLatestValue) {
        return async.then(updateLatestValue, function (e) { throw e; });
    };
    PromiseStrategy.prototype.dispose = function (subscription) { };
    PromiseStrategy.prototype.onDestroy = function (subscription) { };
    return PromiseStrategy;
}());
var _promiseStrategy = new PromiseStrategy();
var _observableStrategy = new ObservableStrategy();
/**
 * @ngModule CommonModule
 * @whatItDoes Unwraps a value from an asynchronous primitive.
 * @howToUse `observable_or_promise_expression | async`
 * @description
 * The `async` pipe subscribes to an `Observable` or `Promise` and returns the latest value it has
 * emitted. When a new value is emitted, the `async` pipe marks the component to be checked for
 * changes. When the component gets destroyed, the `async` pipe unsubscribes automatically to avoid
 * potential memory leaks.
 *
 *
 * ## Examples
 *
 * This example binds a `Promise` to the view. Clicking the `Resolve` button resolves the
 * promise.
 *
 * {@example common/pipes/ts/async_pipe.ts region='AsyncPipePromise'}
 *
 * It's also possible to use `async` with Observables. The example below binds the `time` Observable
 * to the view. The Observable continuesly updates the view with the current time.
 *
 * {@example common/pipes/ts/async_pipe.ts region='AsyncPipeObservable'}
 *
 * @stable
 */
var AsyncPipe = (function () {
    function AsyncPipe(_ref) {
        this._ref = _ref;
        this._latestValue = null;
        this._latestReturnedValue = null;
        this._subscription = null;
        this._obj = null;
        this._strategy = null;
    }
    AsyncPipe.prototype.ngOnDestroy = function () {
        if (this._subscription) {
            this._dispose();
        }
    };
    AsyncPipe.prototype.transform = function (obj) {
        if (!this._obj) {
            if (obj) {
                this._subscribe(obj);
            }
            this._latestReturnedValue = this._latestValue;
            return this._latestValue;
        }
        if (obj !== this._obj) {
            this._dispose();
            return this.transform(obj);
        }
        if (this._latestValue === this._latestReturnedValue) {
            return this._latestReturnedValue;
        }
        this._latestReturnedValue = this._latestValue;
        return __WEBPACK_IMPORTED_MODULE_0__angular_core__["WrappedValue"].wrap(this._latestValue);
    };
    AsyncPipe.prototype._subscribe = function (obj) {
        var _this = this;
        this._obj = obj;
        this._strategy = this._selectStrategy(obj);
        this._subscription = this._strategy.createSubscription(obj, function (value) { return _this._updateLatestValue(obj, value); });
    };
    AsyncPipe.prototype._selectStrategy = function (obj) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__private_import_core__["a" /* isPromise */])(obj)) {
            return _promiseStrategy;
        }
        if (obj.subscribe) {
            return _observableStrategy;
        }
        throw new __WEBPACK_IMPORTED_MODULE_2__invalid_pipe_argument_error__["a" /* InvalidPipeArgumentError */](AsyncPipe, obj);
    };
    AsyncPipe.prototype._dispose = function () {
        this._strategy.dispose(this._subscription);
        this._latestValue = null;
        this._latestReturnedValue = null;
        this._subscription = null;
        this._obj = null;
    };
    AsyncPipe.prototype._updateLatestValue = function (async, value) {
        if (async === this._obj) {
            this._latestValue = value;
            this._ref.markForCheck();
        }
    };
    AsyncPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'async', pure: false },] },
    ];
    /** @nocollapse */
    AsyncPipe.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ];
    return AsyncPipe;
}());
//# sourceMappingURL=async_pipe.js.map

/***/ },
/* 100 */
/* exports provided: DatePipe */
/* exports used: DatePipe */
/*!**************************************************!*\
  !*** ./~/@angular/common/src/pipes/date_pipe.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_intl__ = __webpack_require__(/*! ../facade/intl */ 52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invalid_pipe_argument_error__ = __webpack_require__(/*! ./invalid_pipe_argument_error */ 5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DatePipe; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




/**
 * @ngModule CommonModule
 * @whatItDoes Formats a date according to locale rules.
 * @howToUse `date_expression | date[:format]`
 * @description
 *
 * Where:
 * - `expression` is a date object or a number (milliseconds since UTC epoch) or an ISO string
 * (https://www.w3.org/TR/NOTE-datetime).
 * - `format` indicates which date/time components to include. The format can be predifined as
 *   shown below or custom as shown in the table.
 *   - `'medium'`: equivalent to `'yMMMdjms'` (e.g. `Sep 3, 2010, 12:05:08 PM` for `en-US`)
 *   - `'short'`: equivalent to `'yMdjm'` (e.g. `9/3/2010, 12:05 PM` for `en-US`)
 *   - `'fullDate'`: equivalent to `'yMMMMEEEEd'` (e.g. `Friday, September 3, 2010` for `en-US`)
 *   - `'longDate'`: equivalent to `'yMMMMd'` (e.g. `September 3, 2010` for `en-US`)
 *   - `'mediumDate'`: equivalent to `'yMMMd'` (e.g. `Sep 3, 2010` for `en-US`)
 *   - `'shortDate'`: equivalent to `'yMd'` (e.g. `9/3/2010` for `en-US`)
 *   - `'mediumTime'`: equivalent to `'jms'` (e.g. `12:05:08 PM` for `en-US`)
 *   - `'shortTime'`: equivalent to `'jm'` (e.g. `12:05 PM` for `en-US`)
 *
 *
 *  | Component | Symbol | Narrow | Short Form   | Long Form         | Numeric   | 2-digit   |
 *  |-----------|:------:|--------|--------------|-------------------|-----------|-----------|
 *  | era       |   G    | G (A)  | GGG (AD)     | GGGG (Anno Domini)| -         | -         |
 *  | year      |   y    | -      | -            | -                 | y (2015)  | yy (15)   |
 *  | month     |   M    | L (S)  | MMM (Sep)    | MMMM (September)  | M (9)     | MM (09)   |
 *  | day       |   d    | -      | -            | -                 | d (3)     | dd (03)   |
 *  | weekday   |   E    | E (S)  | EEE (Sun)    | EEEE (Sunday)     | -         | -         |
 *  | hour      |   j    | -      | -            | -                 | j (13)    | jj (13)   |
 *  | hour12    |   h    | -      | -            | -                 | h (1 PM)  | hh (01 PM)|
 *  | hour24    |   H    | -      | -            | -                 | H (13)    | HH (13)   |
 *  | minute    |   m    | -      | -            | -                 | m (5)     | mm (05)   |
 *  | second    |   s    | -      | -            | -                 | s (9)     | ss (09)   |
 *  | timezone  |   z    | -      | -            | z (Pacific Standard Time)| -  | -         |
 *  | timezone  |   Z    | -      | Z (GMT-8:00) | -                 | -         | -         |
 *  | timezone  |   a    | -      | a (PM)       | -                 | -         | -         |
 *
 * In javascript, only the components specified will be respected (not the ordering,
 * punctuations, ...) and details of the formatting will be dependent on the locale.
 *
 * Timezone of the formatted text will be the local system timezone of the end-user's machine.
 *
 * When the expression is a ISO string without time (e.g. 2016-09-19) the time zone offset is not
 * applied and the formatted text will have the same day, month and year of the expression.
 *
 * WARNINGS:
 * - this pipe is marked as pure hence it will not be re-evaluated when the input is mutated.
 *   Instead users should treat the date as an immutable object and change the reference when the
 *   pipe needs to re-run (this is to avoid reformatting the date on every change detection run
 *   which would be an expensive operation).
 * - this pipe uses the Internationalization API. Therefore it is only reliable in Chrome and Opera
 *   browsers.
 *
 * ### Examples
 *
 * Assuming `dateObj` is (year: 2015, month: 6, day: 15, hour: 21, minute: 43, second: 11)
 * in the _local_ time and locale is 'en-US':
 *
 * ```
 *     {{ dateObj | date }}               // output is 'Jun 15, 2015'
 *     {{ dateObj | date:'medium' }}      // output is 'Jun 15, 2015, 9:43:11 PM'
 *     {{ dateObj | date:'shortTime' }}   // output is '9:43 PM'
 *     {{ dateObj | date:'mmss' }}        // output is '43:11'
 * ```
 *
 * {@example common/pipes/ts/date_pipe.ts region='DatePipe'}
 *
 * @stable
 */
var DatePipe = (function () {
    function DatePipe(_locale) {
        this._locale = _locale;
    }
    DatePipe.prototype.transform = function (value, pattern) {
        if (pattern === void 0) { pattern = 'mediumDate'; }
        var date;
        if (isBlank(value))
            return null;
        if (typeof value === 'string') {
            value = value.trim();
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["g" /* isDate */])(value)) {
            date = value;
        }
        else if (__WEBPACK_IMPORTED_MODULE_2__facade_lang__["h" /* NumberWrapper */].isNumeric(value)) {
            date = new Date(parseFloat(value));
        }
        else if (typeof value === 'string' && /^(\d{4}-\d{1,2}-\d{1,2})$/.test(value)) {
            /**
            * For ISO Strings without time the day, month and year must be extracted from the ISO String
            * before Date creation to avoid time offset and errors in the new Date.
            * If we only replace '-' with ',' in the ISO String ("2015,01,01"), and try to create a new
            * date, some browsers (e.g. IE 9) will throw an invalid Date error
            * If we leave the '-' ("2015-01-01") and try to create a new Date("2015-01-01") the timeoffset
            * is applied
            * Note: ISO months are 0 for January, 1 for February, ...
            */
            var _a = value.split('-').map(function (val) { return parseInt(val, 10); }), y = _a[0], m = _a[1], d = _a[2];
            date = new Date(y, m - 1, d);
        }
        else {
            date = new Date(value);
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["g" /* isDate */])(date)) {
            throw new __WEBPACK_IMPORTED_MODULE_3__invalid_pipe_argument_error__["a" /* InvalidPipeArgumentError */](DatePipe, value);
        }
        return __WEBPACK_IMPORTED_MODULE_1__facade_intl__["a" /* DateFormatter */].format(date, this._locale, DatePipe._ALIASES[pattern] || pattern);
    };
    /** @internal */
    DatePipe._ALIASES = {
        'medium': 'yMMMdjms',
        'short': 'yMdjm',
        'fullDate': 'yMMMMEEEEd',
        'longDate': 'yMMMMd',
        'mediumDate': 'yMMMd',
        'shortDate': 'yMd',
        'mediumTime': 'jms',
        'shortTime': 'jm'
    };
    DatePipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'date', pure: true },] },
    ];
    /** @nocollapse */
    DatePipe.ctorParameters = [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
    ];
    return DatePipe;
}());
function isBlank(obj) {
    return obj == null || obj === '';
}
//# sourceMappingURL=date_pipe.js.map

/***/ },
/* 101 */
/* exports provided: I18nPluralPipe */
/* exports used: I18nPluralPipe */
/*!*********************************************************!*\
  !*** ./~/@angular/common/src/pipes/i18n_plural_pipe.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__localization__ = __webpack_require__(/*! ../localization */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invalid_pipe_argument_error__ = __webpack_require__(/*! ./invalid_pipe_argument_error */ 5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return I18nPluralPipe; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




var _INTERPOLATION_REGEXP = /#/g;
/**
 * @ngModule CommonModule
 * @whatItDoes Maps a value to a string that pluralizes the value according to locale rules.
 * @howToUse `expression | i18nPlural:mapping`
 * @description
 *
 *  Where:
 *  - `expression` is a number.
 *  - `mapping` is an object that mimics the ICU format, see
 *    http://userguide.icu-project.org/formatparse/messages
 *
 *  ## Example
 *
 * {@example common/pipes/ts/i18n_pipe.ts region='I18nPluralPipeComponent'}
 *
 * @experimental
 */
var I18nPluralPipe = (function () {
    function I18nPluralPipe(_localization) {
        this._localization = _localization;
    }
    I18nPluralPipe.prototype.transform = function (value, pluralMap) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* isBlank */])(value))
            return '';
        if (typeof pluralMap !== 'object' || pluralMap === null) {
            throw new __WEBPACK_IMPORTED_MODULE_3__invalid_pipe_argument_error__["a" /* InvalidPipeArgumentError */](I18nPluralPipe, pluralMap);
        }
        var key = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__localization__["b" /* getPluralCategory */])(value, Object.keys(pluralMap), this._localization);
        return pluralMap[key].replace(_INTERPOLATION_REGEXP, value.toString());
    };
    I18nPluralPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'i18nPlural', pure: true },] },
    ];
    /** @nocollapse */
    I18nPluralPipe.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_2__localization__["a" /* NgLocalization */], },
    ];
    return I18nPluralPipe;
}());
//# sourceMappingURL=i18n_plural_pipe.js.map

/***/ },
/* 102 */
/* exports provided: I18nSelectPipe */
/* exports used: I18nSelectPipe */
/*!*********************************************************!*\
  !*** ./~/@angular/common/src/pipes/i18n_select_pipe.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__invalid_pipe_argument_error__ = __webpack_require__(/*! ./invalid_pipe_argument_error */ 5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return I18nSelectPipe; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * @ngModule CommonModule
 * @whatItDoes Generic selector that displays the string that matches the current value.
 * @howToUse `expression | i18nSelect:mapping`
 * @description
 *
 *  Where `mapping` is an object that indicates the text that should be displayed
 *  for different values of the provided `expression`.
 *  If none of the keys of the mapping match the value of the `expression`, then the content
 *  of the `other` key is returned when present, otherwise an empty string is returned.
 *
 *  ## Example
 *
 * {@example common/pipes/ts/i18n_pipe.ts region='I18nSelectPipeComponent'}
 *
 *  @experimental
 */
var I18nSelectPipe = (function () {
    function I18nSelectPipe() {
    }
    I18nSelectPipe.prototype.transform = function (value, mapping) {
        if (value == null)
            return '';
        if (typeof mapping !== 'object' || typeof value !== 'string') {
            throw new __WEBPACK_IMPORTED_MODULE_1__invalid_pipe_argument_error__["a" /* InvalidPipeArgumentError */](I18nSelectPipe, mapping);
        }
        if (mapping.hasOwnProperty(value)) {
            return mapping[value];
        }
        if (mapping.hasOwnProperty('other')) {
            return mapping['other'];
        }
        return '';
    };
    I18nSelectPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'i18nSelect', pure: true },] },
    ];
    /** @nocollapse */
    I18nSelectPipe.ctorParameters = [];
    return I18nSelectPipe;
}());
//# sourceMappingURL=i18n_select_pipe.js.map

/***/ },
/* 103 */
/* exports provided: JsonPipe */
/* exports used: JsonPipe */
/*!**************************************************!*\
  !*** ./~/@angular/common/src/pipes/json_pipe.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return JsonPipe; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @ngModule CommonModule
 * @whatItDoes Converts value into JSON string.
 * @howToUse `expression | json`
 * @description
 *
 * Converts value into string using `JSON.stringify`. Useful for debugging.
 *
 * ### Example
 * {@example common/pipes/ts/json_pipe.ts region='JsonPipe'}
 *
 * @stable
 */
var JsonPipe = (function () {
    function JsonPipe() {
    }
    JsonPipe.prototype.transform = function (value) { return JSON.stringify(value, null, 2); };
    JsonPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'json', pure: false },] },
    ];
    /** @nocollapse */
    JsonPipe.ctorParameters = [];
    return JsonPipe;
}());
//# sourceMappingURL=json_pipe.js.map

/***/ },
/* 104 */
/* exports provided: LowerCasePipe */
/* exports used: LowerCasePipe */
/*!*******************************************************!*\
  !*** ./~/@angular/common/src/pipes/lowercase_pipe.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invalid_pipe_argument_error__ = __webpack_require__(/*! ./invalid_pipe_argument_error */ 5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LowerCasePipe; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @ngModule CommonModule
 * @whatItDoes Transforms string to lowercase.
 * @howToUse `expression | lowercase`
 * @description
 *
 * Converts value into a lowercase string using `String.prototype.toLowerCase()`.
 *
 * ### Example
 *
 * {@example common/pipes/ts/lowerupper_pipe.ts region='LowerUpperPipe'}
 *
 * @stable
 */
var LowerCasePipe = (function () {
    function LowerCasePipe() {
    }
    LowerCasePipe.prototype.transform = function (value) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* isBlank */])(value))
            return value;
        if (typeof value !== 'string') {
            throw new __WEBPACK_IMPORTED_MODULE_2__invalid_pipe_argument_error__["a" /* InvalidPipeArgumentError */](LowerCasePipe, value);
        }
        return value.toLowerCase();
    };
    LowerCasePipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'lowercase' },] },
    ];
    /** @nocollapse */
    LowerCasePipe.ctorParameters = [];
    return LowerCasePipe;
}());
//# sourceMappingURL=lowercase_pipe.js.map

/***/ },
/* 105 */
/* exports provided: DecimalPipe, PercentPipe, CurrencyPipe */
/* exports used: DecimalPipe, PercentPipe, CurrencyPipe */
/*!****************************************************!*\
  !*** ./~/@angular/common/src/pipes/number_pipe.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_intl__ = __webpack_require__(/*! ../facade/intl */ 52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invalid_pipe_argument_error__ = __webpack_require__(/*! ./invalid_pipe_argument_error */ 5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DecimalPipe; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return PercentPipe; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return CurrencyPipe; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




var _NUMBER_FORMAT_REGEXP = /^(\d+)?\.((\d+)(-(\d+))?)?$/;
function formatNumber(pipe, locale, value, style, digits, currency, currencyAsSymbol) {
    if (currency === void 0) { currency = null; }
    if (currencyAsSymbol === void 0) { currencyAsSymbol = false; }
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* isBlank */])(value))
        return null;
    // Convert strings to numbers
    value = typeof value === 'string' && __WEBPACK_IMPORTED_MODULE_2__facade_lang__["h" /* NumberWrapper */].isNumeric(value) ? +value : value;
    if (typeof value !== 'number') {
        throw new __WEBPACK_IMPORTED_MODULE_3__invalid_pipe_argument_error__["a" /* InvalidPipeArgumentError */](pipe, value);
    }
    var minInt;
    var minFraction;
    var maxFraction;
    if (style !== __WEBPACK_IMPORTED_MODULE_1__facade_intl__["b" /* NumberFormatStyle */].Currency) {
        // rely on Intl default for currency
        minInt = 1;
        minFraction = 0;
        maxFraction = 3;
    }
    if (digits) {
        var parts = digits.match(_NUMBER_FORMAT_REGEXP);
        if (parts === null) {
            throw new Error(digits + " is not a valid digit info for number pipes");
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["a" /* isPresent */])(parts[1])) {
            minInt = __WEBPACK_IMPORTED_MODULE_2__facade_lang__["h" /* NumberWrapper */].parseIntAutoRadix(parts[1]);
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["a" /* isPresent */])(parts[3])) {
            minFraction = __WEBPACK_IMPORTED_MODULE_2__facade_lang__["h" /* NumberWrapper */].parseIntAutoRadix(parts[3]);
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["a" /* isPresent */])(parts[5])) {
            maxFraction = __WEBPACK_IMPORTED_MODULE_2__facade_lang__["h" /* NumberWrapper */].parseIntAutoRadix(parts[5]);
        }
    }
    return __WEBPACK_IMPORTED_MODULE_1__facade_intl__["c" /* NumberFormatter */].format(value, locale, style, {
        minimumIntegerDigits: minInt,
        minimumFractionDigits: minFraction,
        maximumFractionDigits: maxFraction,
        currency: currency,
        currencyAsSymbol: currencyAsSymbol,
    });
}
/**
 * @ngModule CommonModule
 * @whatItDoes Formats a number according to locale rules.
 * @howToUse `number_expression | number[:digitInfo]`
 *
 * Formats a number as text. Group sizing and separator and other locale-specific
 * configurations are based on the active locale.
 *
 * where `expression` is a number:
 *  - `digitInfo` is a `string` which has a following format: <br>
 *     <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>
 *   - `minIntegerDigits` is the minimum number of integer digits to use. Defaults to `1`.
 *   - `minFractionDigits` is the minimum number of digits after fraction. Defaults to `0`.
 *   - `maxFractionDigits` is the maximum number of digits after fraction. Defaults to `3`.
 *
 * For more information on the acceptable range for each of these numbers and other
 * details see your native internationalization library.
 *
 * WARNING: this pipe uses the Internationalization API which is not yet available in all browsers
 * and may require a polyfill. See {@linkDocs guide/browser-support} for details.
 *
 * ### Example
 *
 * {@example common/pipes/ts/number_pipe.ts region='NumberPipe'}
 *
 * @stable
 */
var DecimalPipe = (function () {
    function DecimalPipe(_locale) {
        this._locale = _locale;
    }
    DecimalPipe.prototype.transform = function (value, digits) {
        if (digits === void 0) { digits = null; }
        return formatNumber(DecimalPipe, this._locale, value, __WEBPACK_IMPORTED_MODULE_1__facade_intl__["b" /* NumberFormatStyle */].Decimal, digits);
    };
    DecimalPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'number' },] },
    ];
    /** @nocollapse */
    DecimalPipe.ctorParameters = [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
    ];
    return DecimalPipe;
}());
/**
 * @ngModule CommonModule
 * @whatItDoes Formats a number as a percentage according to locale rules.
 * @howToUse `number_expression | percent[:digitInfo]`
 *
 * @description
 *
 * Formats a number as percentage.
 *
 * - `digitInfo` See {@link DecimalPipe} for detailed description.
 *
 * WARNING: this pipe uses the Internationalization API which is not yet available in all browsers
 * and may require a polyfill. See {@linkDocs guide/browser-support} for details.
 *
 * ### Example
 *
 * {@example common/pipes/ts/number_pipe.ts region='PercentPipe'}
 *
 * @stable
 */
var PercentPipe = (function () {
    function PercentPipe(_locale) {
        this._locale = _locale;
    }
    PercentPipe.prototype.transform = function (value, digits) {
        if (digits === void 0) { digits = null; }
        return formatNumber(PercentPipe, this._locale, value, __WEBPACK_IMPORTED_MODULE_1__facade_intl__["b" /* NumberFormatStyle */].Percent, digits);
    };
    PercentPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'percent' },] },
    ];
    /** @nocollapse */
    PercentPipe.ctorParameters = [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
    ];
    return PercentPipe;
}());
/**
 * @ngModule CommonModule
 * @whatItDoes Formats a number as currency using locale rules.
 * @howToUse `number_expression | currency[:currencyCode[:symbolDisplay[:digitInfo]]]`
 * @description
 *
 * Use `currency` to format a number as currency.
 *
 * - `currencyCode` is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, such
 *    as `USD` for the US dollar and `EUR` for the euro.
 * - `symbolDisplay` is a boolean indicating whether to use the currency symbol or code.
 *   - `true`: use symbol (e.g. `$`).
 *   - `false`(default): use code (e.g. `USD`).
 * - `digitInfo` See {@link DecimalPipe} for detailed description.
 *
 * WARNING: this pipe uses the Internationalization API which is not yet available in all browsers
 * and may require a polyfill. See {@linkDocs guide/browser-support} for details.
 *
 * ### Example
 *
 * {@example common/pipes/ts/number_pipe.ts region='CurrencyPipe'}
 *
 * @stable
 */
var CurrencyPipe = (function () {
    function CurrencyPipe(_locale) {
        this._locale = _locale;
    }
    CurrencyPipe.prototype.transform = function (value, currencyCode, symbolDisplay, digits) {
        if (currencyCode === void 0) { currencyCode = 'USD'; }
        if (symbolDisplay === void 0) { symbolDisplay = false; }
        if (digits === void 0) { digits = null; }
        return formatNumber(CurrencyPipe, this._locale, value, __WEBPACK_IMPORTED_MODULE_1__facade_intl__["b" /* NumberFormatStyle */].Currency, digits, currencyCode, symbolDisplay);
    };
    CurrencyPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'currency' },] },
    ];
    /** @nocollapse */
    CurrencyPipe.ctorParameters = [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"],] },] },
    ];
    return CurrencyPipe;
}());
//# sourceMappingURL=number_pipe.js.map

/***/ },
/* 106 */
/* exports provided: SlicePipe */
/* exports used: SlicePipe */
/*!***************************************************!*\
  !*** ./~/@angular/common/src/pipes/slice_pipe.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invalid_pipe_argument_error__ = __webpack_require__(/*! ./invalid_pipe_argument_error */ 5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SlicePipe; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @ngModule CommonModule
 * @whatItDoes Creates a new List or String containing a subset (slice) of the elements.
 * @howToUse `array_or_string_expression | slice:start[:end]`
 * @description
 *
 * Where the input expression is a `List` or `String`, and:
 * - `start`: The starting index of the subset to return.
 *   - **a positive integer**: return the item at `start` index and all items after
 *     in the list or string expression.
 *   - **a negative integer**: return the item at `start` index from the end and all items after
 *     in the list or string expression.
 *   - **if positive and greater than the size of the expression**: return an empty list or string.
 *   - **if negative and greater than the size of the expression**: return entire list or string.
 * - `end`: The ending index of the subset to return.
 *   - **omitted**: return all items until the end.
 *   - **if positive**: return all items before `end` index of the list or string.
 *   - **if negative**: return all items before `end` index from the end of the list or string.
 *
 * All behavior is based on the expected behavior of the JavaScript API `Array.prototype.slice()`
 * and `String.prototype.slice()`.
 *
 * When operating on a [List], the returned list is always a copy even when all
 * the elements are being returned.
 *
 * When operating on a blank value, the pipe returns the blank value.
 *
 * ## List Example
 *
 * This `ngFor` example:
 *
 * {@example common/pipes/ts/slice_pipe.ts region='SlicePipe_list'}
 *
 * produces the following:
 *
 *     <li>b</li>
 *     <li>c</li>
 *
 * ## String Examples
 *
 * {@example common/pipes/ts/slice_pipe.ts region='SlicePipe_string'}
 *
 * @stable
 */
var SlicePipe = (function () {
    function SlicePipe() {
    }
    SlicePipe.prototype.transform = function (value, start, end) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* isBlank */])(value))
            return value;
        if (!this.supports(value)) {
            throw new __WEBPACK_IMPORTED_MODULE_2__invalid_pipe_argument_error__["a" /* InvalidPipeArgumentError */](SlicePipe, value);
        }
        return value.slice(start, end);
    };
    SlicePipe.prototype.supports = function (obj) { return typeof obj === 'string' || Array.isArray(obj); };
    SlicePipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'slice', pure: false },] },
    ];
    /** @nocollapse */
    SlicePipe.ctorParameters = [];
    return SlicePipe;
}());
//# sourceMappingURL=slice_pipe.js.map

/***/ },
/* 107 */
/* exports provided: UpperCasePipe */
/* exports used: UpperCasePipe */
/*!*******************************************************!*\
  !*** ./~/@angular/common/src/pipes/uppercase_pipe.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invalid_pipe_argument_error__ = __webpack_require__(/*! ./invalid_pipe_argument_error */ 5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UpperCasePipe; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @ngModule CommonModule
 * @whatItDoes Transforms string to uppercase.
 * @howToUse `expression | uppercase`
 * @description
 *
 * Converts value into an uppercase string using `String.prototype.toUpperCase()`.
 *
 * ### Example
 *
 * {@example common/pipes/ts/lowerupper_pipe.ts region='LowerUpperPipe'}
 *
 * @stable
 */
var UpperCasePipe = (function () {
    function UpperCasePipe() {
    }
    UpperCasePipe.prototype.transform = function (value) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* isBlank */])(value))
            return value;
        if (typeof value !== 'string') {
            throw new __WEBPACK_IMPORTED_MODULE_2__invalid_pipe_argument_error__["a" /* InvalidPipeArgumentError */](UpperCasePipe, value);
        }
        return value.toUpperCase();
    };
    UpperCasePipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'uppercase' },] },
    ];
    /** @nocollapse */
    UpperCasePipe.ctorParameters = [];
    return UpperCasePipe;
}());
//# sourceMappingURL=uppercase_pipe.js.map

/***/ },
/* 108 */
/* exports provided: isPromise */
/* exports used: isPromise */
/*!******************************************************!*\
  !*** ./~/@angular/common/src/private_import_core.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(/*! @angular/core */ 1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return isPromise; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var isPromise = __WEBPACK_IMPORTED_MODULE_0__angular_core__["__core_private__"].isPromise;
//# sourceMappingURL=private_import_core.js.map

/***/ },
/* 109 */
/* exports provided: AnimationKeyframe */
/* exports used: AnimationKeyframe */
/*!*************************************************************!*\
  !*** ./~/@angular/core/src/animation/animation_keyframe.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AnimationKeyframe; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var AnimationKeyframe = (function () {
    function AnimationKeyframe(offset, styles) {
        this.offset = offset;
        this.styles = styles;
    }
    return AnimationKeyframe;
}());
//# sourceMappingURL=animation_keyframe.js.map

/***/ },
/* 110 */
/* exports provided: prepareFinalAnimationStyles, balanceAnimationKeyframes, clearStyles, collectAndResolveStyles, renderStyles, flattenStyles */
/* exports used: prepareFinalAnimationStyles, balanceAnimationKeyframes, flattenStyles, clearStyles, renderStyles, collectAndResolveStyles */
/*!***************************************************************!*\
  !*** ./~/@angular/core/src/animation/animation_style_util.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_collection__ = __webpack_require__(/*! ../facade/collection */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animation_constants__ = __webpack_require__(/*! ./animation_constants */ 54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__metadata__ = __webpack_require__(/*! ./metadata */ 59);
/* harmony export (immutable) */ exports["a"] = prepareFinalAnimationStyles;
/* harmony export (immutable) */ exports["b"] = balanceAnimationKeyframes;
/* harmony export (immutable) */ exports["d"] = clearStyles;
/* harmony export (immutable) */ exports["f"] = collectAndResolveStyles;
/* harmony export (immutable) */ exports["e"] = renderStyles;
/* harmony export (immutable) */ exports["c"] = flattenStyles;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




function prepareFinalAnimationStyles(previousStyles, newStyles, nullValue) {
    if (nullValue === void 0) { nullValue = null; }
    var finalStyles = {};
    Object.keys(newStyles).forEach(function (prop) {
        var value = newStyles[prop];
        finalStyles[prop] = value == __WEBPACK_IMPORTED_MODULE_3__metadata__["a" /* AUTO_STYLE */] ? nullValue : value.toString();
    });
    Object.keys(previousStyles).forEach(function (prop) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["d" /* isPresent */])(finalStyles[prop])) {
            finalStyles[prop] = nullValue;
        }
    });
    return finalStyles;
}
function balanceAnimationKeyframes(collectedStyles, finalStateStyles, keyframes) {
    var limit = keyframes.length - 1;
    var firstKeyframe = keyframes[0];
    // phase 1: copy all the styles from the first keyframe into the lookup map
    var flatenedFirstKeyframeStyles = flattenStyles(firstKeyframe.styles.styles);
    var extraFirstKeyframeStyles = {};
    var hasExtraFirstStyles = false;
    Object.keys(collectedStyles).forEach(function (prop) {
        var value = collectedStyles[prop];
        // if the style is already defined in the first keyframe then
        // we do not replace it.
        if (!flatenedFirstKeyframeStyles[prop]) {
            flatenedFirstKeyframeStyles[prop] = value;
            extraFirstKeyframeStyles[prop] = value;
            hasExtraFirstStyles = true;
        }
    });
    var keyframeCollectedStyles = __WEBPACK_IMPORTED_MODULE_0__facade_collection__["e" /* StringMapWrapper */].merge({}, flatenedFirstKeyframeStyles);
    // phase 2: normalize the final keyframe
    var finalKeyframe = keyframes[limit];
    finalKeyframe.styles.styles.unshift(finalStateStyles);
    var flatenedFinalKeyframeStyles = flattenStyles(finalKeyframe.styles.styles);
    var extraFinalKeyframeStyles = {};
    var hasExtraFinalStyles = false;
    Object.keys(keyframeCollectedStyles).forEach(function (prop) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["d" /* isPresent */])(flatenedFinalKeyframeStyles[prop])) {
            extraFinalKeyframeStyles[prop] = __WEBPACK_IMPORTED_MODULE_3__metadata__["a" /* AUTO_STYLE */];
            hasExtraFinalStyles = true;
        }
    });
    if (hasExtraFinalStyles) {
        finalKeyframe.styles.styles.push(extraFinalKeyframeStyles);
    }
    Object.keys(flatenedFinalKeyframeStyles).forEach(function (prop) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["d" /* isPresent */])(flatenedFirstKeyframeStyles[prop])) {
            extraFirstKeyframeStyles[prop] = __WEBPACK_IMPORTED_MODULE_3__metadata__["a" /* AUTO_STYLE */];
            hasExtraFirstStyles = true;
        }
    });
    if (hasExtraFirstStyles) {
        firstKeyframe.styles.styles.push(extraFirstKeyframeStyles);
    }
    collectAndResolveStyles(collectedStyles, [finalStateStyles]);
    return keyframes;
}
function clearStyles(styles) {
    var finalStyles = {};
    Object.keys(styles).forEach(function (key) { finalStyles[key] = null; });
    return finalStyles;
}
function collectAndResolveStyles(collection, styles) {
    return styles.map(function (entry) {
        var stylesObj = {};
        Object.keys(entry).forEach(function (prop) {
            var value = entry[prop];
            if (value == __WEBPACK_IMPORTED_MODULE_2__animation_constants__["a" /* FILL_STYLE_FLAG */]) {
                value = collection[prop];
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["d" /* isPresent */])(value)) {
                    value = __WEBPACK_IMPORTED_MODULE_3__metadata__["a" /* AUTO_STYLE */];
                }
            }
            collection[prop] = value;
            stylesObj[prop] = value;
        });
        return stylesObj;
    });
}
function renderStyles(element, renderer, styles) {
    Object.keys(styles).forEach(function (prop) { renderer.setElementStyle(element, prop, styles[prop]); });
}
function flattenStyles(styles) {
    var finalStyles = {};
    styles.forEach(function (entry) {
        Object.keys(entry).forEach(function (prop) { finalStyles[prop] = entry[prop]; });
    });
    return finalStyles;
}
//# sourceMappingURL=animation_style_util.js.map

/***/ },
/* 111 */
/* exports provided: AnimationStyles */
/* exports used: AnimationStyles */
/*!***********************************************************!*\
  !*** ./~/@angular/core/src/animation/animation_styles.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AnimationStyles; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var AnimationStyles = (function () {
    function AnimationStyles(styles) {
        this.styles = styles;
    }
    return AnimationStyles;
}());
//# sourceMappingURL=animation_styles.js.map

/***/ },
/* 112 */
/* exports provided: AnimationTransition */
/* exports used: AnimationTransition */
/*!***************************************************************!*\
  !*** ./~/@angular/core/src/animation/animation_transition.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animation_transition_event__ = __webpack_require__(/*! ./animation_transition_event */ 58);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AnimationTransition; });

var AnimationTransition = (function () {
    function AnimationTransition(_player, _fromState, _toState, _totalTime) {
        this._player = _player;
        this._fromState = _fromState;
        this._toState = _toState;
        this._totalTime = _totalTime;
    }
    AnimationTransition.prototype._createEvent = function (phaseName) {
        return new __WEBPACK_IMPORTED_MODULE_0__animation_transition_event__["a" /* AnimationTransitionEvent */]({
            fromState: this._fromState,
            toState: this._toState,
            totalTime: this._totalTime,
            phaseName: phaseName
        });
    };
    AnimationTransition.prototype.onStart = function (callback) {
        var event = this._createEvent('start');
        this._player.onStart(function () { return callback(event); });
    };
    AnimationTransition.prototype.onDone = function (callback) {
        var event = this._createEvent('done');
        this._player.onDone(function () { return callback(event); });
    };
    return AnimationTransition;
}());
//# sourceMappingURL=animation_transition.js.map

/***/ },
/* 113 */
/* exports provided: ViewAnimationMap */
/* exports used: ViewAnimationMap */
/*!*************************************************************!*\
  !*** ./~/@angular/core/src/animation/view_animation_map.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ViewAnimationMap; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var ViewAnimationMap = (function () {
    function ViewAnimationMap() {
        this._map = new Map();
        this._allPlayers = [];
    }
    ViewAnimationMap.prototype.find = function (element, animationName) {
        var playersByAnimation = this._map.get(element);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(playersByAnimation)) {
            return playersByAnimation[animationName];
        }
    };
    ViewAnimationMap.prototype.findAllPlayersByElement = function (element) {
        var el = this._map.get(element);
        return el ? Object.keys(el).map(function (k) { return el[k]; }) : [];
    };
    ViewAnimationMap.prototype.set = function (element, animationName, player) {
        var playersByAnimation = this._map.get(element);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(playersByAnimation)) {
            playersByAnimation = {};
        }
        var existingEntry = playersByAnimation[animationName];
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(existingEntry)) {
            this.remove(element, animationName);
        }
        playersByAnimation[animationName] = player;
        this._allPlayers.push(player);
        this._map.set(element, playersByAnimation);
    };
    ViewAnimationMap.prototype.getAllPlayers = function () { return this._allPlayers; };
    ViewAnimationMap.prototype.remove = function (element, animationName) {
        var playersByAnimation = this._map.get(element);
        if (playersByAnimation) {
            var player = playersByAnimation[animationName];
            delete playersByAnimation[animationName];
            var index = this._allPlayers.indexOf(player);
            this._allPlayers.splice(index, 1);
            if (Object.keys(playersByAnimation).length === 0) {
                this._map.delete(element);
            }
        }
    };
    return ViewAnimationMap;
}());
//# sourceMappingURL=view_animation_map.js.map

/***/ },
/* 114 */
/* exports provided: _iterableDiffersFactory, _keyValueDiffersFactory, ApplicationModule */
/* exports used: ApplicationModule */
/*!***************************************************!*\
  !*** ./~/@angular/core/src/application_module.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__application_init__ = __webpack_require__(/*! ./application_init */ 29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__application_ref__ = __webpack_require__(/*! ./application_ref */ 30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__application_tokens__ = __webpack_require__(/*! ./application_tokens */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__change_detection_change_detection__ = __webpack_require__(/*! ./change_detection/change_detection */ 13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__i18n_tokens__ = __webpack_require__(/*! ./i18n/tokens */ 66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__linker_compiler__ = __webpack_require__(/*! ./linker/compiler */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__linker_view_utils__ = __webpack_require__(/*! ./linker/view_utils */ 20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__metadata__ = __webpack_require__(/*! ./metadata */ 75);
/* unused harmony export _iterableDiffersFactory */
/* unused harmony export _keyValueDiffersFactory */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ApplicationModule; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */








function _iterableDiffersFactory() {
    return __WEBPACK_IMPORTED_MODULE_3__change_detection_change_detection__["b" /* defaultIterableDiffers */];
}
function _keyValueDiffersFactory() {
    return __WEBPACK_IMPORTED_MODULE_3__change_detection_change_detection__["c" /* defaultKeyValueDiffers */];
}
/**
 * This module includes the providers of @angular/core that are needed
 * to bootstrap components via `ApplicationRef`.
 *
 * @experimental
 */
var ApplicationModule = (function () {
    function ApplicationModule() {
    }
    ApplicationModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_7__metadata__["a" /* NgModule */], args: [{
                    providers: [
                        __WEBPACK_IMPORTED_MODULE_1__application_ref__["d" /* ApplicationRef_ */],
                        { provide: __WEBPACK_IMPORTED_MODULE_1__application_ref__["e" /* ApplicationRef */], useExisting: __WEBPACK_IMPORTED_MODULE_1__application_ref__["d" /* ApplicationRef_ */] },
                        __WEBPACK_IMPORTED_MODULE_0__application_init__["a" /* ApplicationInitStatus */],
                        __WEBPACK_IMPORTED_MODULE_5__linker_compiler__["b" /* Compiler */],
                        __WEBPACK_IMPORTED_MODULE_2__application_tokens__["c" /* APP_ID_RANDOM_PROVIDER */],
                        __WEBPACK_IMPORTED_MODULE_6__linker_view_utils__["ViewUtils"],
                        { provide: __WEBPACK_IMPORTED_MODULE_3__change_detection_change_detection__["d" /* IterableDiffers */], useFactory: _iterableDiffersFactory },
                        { provide: __WEBPACK_IMPORTED_MODULE_3__change_detection_change_detection__["e" /* KeyValueDiffers */], useFactory: _keyValueDiffersFactory },
                        { provide: __WEBPACK_IMPORTED_MODULE_4__i18n_tokens__["a" /* LOCALE_ID */], useValue: 'en-US' },
                    ]
                },] },
    ];
    /** @nocollapse */
    ApplicationModule.ctorParameters = [];
    return ApplicationModule;
}());
//# sourceMappingURL=application_module.js.map

/***/ },
/* 115 */
/* exports provided: ChangeDetectionStrategy, ChangeDetectorRef, CollectionChangeRecord, DefaultIterableDiffer, IterableDiffers, KeyValueChangeRecord, KeyValueDiffers, SimpleChange, WrappedValue */
/* exports used: ChangeDetectionStrategy, ChangeDetectorRef, CollectionChangeRecord, DefaultIterableDiffer, IterableDiffers, KeyValueChangeRecord, KeyValueDiffers, SimpleChange, WrappedValue */
/*!*************************************************!*\
  !*** ./~/@angular/core/src/change_detection.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__ = __webpack_require__(/*! ./change_detection/change_detection */ 13);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["l"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["m"]; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Change detection enables data binding in Angular.
 */

//# sourceMappingURL=change_detection.js.map

/***/ },
/* 116 */
/* exports provided: ChangeDetectorRef */
/* exports used: ChangeDetectorRef */
/*!*********************************************************************!*\
  !*** ./~/@angular/core/src/change_detection/change_detector_ref.js ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChangeDetectorRef; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @stable
 */
var ChangeDetectorRef = (function () {
    function ChangeDetectorRef() {
    }
    return ChangeDetectorRef;
}());
//# sourceMappingURL=change_detector_ref.js.map

/***/ },
/* 117 */
/* exports provided: assertPlatform, destroyPlatform, getPlatform, createPlatform, ApplicationRef, enableProdMode, isDevMode, createPlatformFactory, PlatformRef, APP_ID, PACKAGE_ROOT_URL, APP_BOOTSTRAP_LISTENER, PLATFORM_INITIALIZER, ApplicationInitStatus, APP_INITIALIZER, DebugElement, DebugNode, asNativeElements, getDebugNode, Testability, TestabilityRegistry, setTestabilityGetter, TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID, ApplicationModule, wtfCreateScope, wtfLeave, wtfStartTimeRange, wtfEndTimeRange, Type, EventEmitter, ErrorHandler, AnimationTransitionEvent, AnimationPlayer, Sanitizer, SecurityContext, Attribute, ContentChild, ContentChildren, Query, ViewChild, ViewChildren, ANALYZE_FOR_ENTRY_COMPONENTS, Component, Directive, HostBinding, HostListener, Input, Output, Pipe, OnDestroy, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, AfterContentChecked, OnInit, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule, ViewEncapsulation, Class, forwardRef, resolveForwardRef, Injector, ReflectiveInjector, ResolvedReflectiveFactory, ReflectiveKey, OpaqueToken, NgZone, RenderComponentType, Renderer, RootRenderer, COMPILER_OPTIONS, CompilerFactory, ModuleWithComponentFactories, Compiler, ComponentFactory, ComponentRef, ComponentFactoryResolver, ElementRef, NgModuleFactory, NgModuleRef, NgModuleFactoryLoader, getModuleFactory, QueryList, SystemJsNgModuleLoader, SystemJsNgModuleLoaderConfig, TemplateRef, ViewContainerRef, EmbeddedViewRef, ViewRef, ChangeDetectionStrategy, ChangeDetectorRef, CollectionChangeRecord, DefaultIterableDiffer, IterableDiffers, KeyValueChangeRecord, KeyValueDiffers, SimpleChange, WrappedValue, platformCore, __core_private__, AUTO_STYLE, AnimationEntryMetadata, AnimationStateMetadata, AnimationStateDeclarationMetadata, AnimationStateTransitionMetadata, AnimationMetadata, AnimationKeyframesSequenceMetadata, AnimationStyleMetadata, AnimationAnimateMetadata, AnimationWithStepsMetadata, AnimationSequenceMetadata, AnimationGroupMetadata, animate, group, sequence, style, state, keyframes, transition, trigger, Inject, Optional, Injectable, Self, SkipSelf, Host */
/* exports used: assertPlatform, destroyPlatform, getPlatform, createPlatform, ApplicationRef, enableProdMode, isDevMode, createPlatformFactory, PlatformRef, APP_ID, PACKAGE_ROOT_URL, APP_BOOTSTRAP_LISTENER, PLATFORM_INITIALIZER, ApplicationInitStatus, APP_INITIALIZER, DebugElement, DebugNode, asNativeElements, getDebugNode, Testability, TestabilityRegistry, setTestabilityGetter, TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID, ApplicationModule, wtfCreateScope, wtfLeave, wtfStartTimeRange, wtfEndTimeRange, Type, EventEmitter, ErrorHandler, AnimationTransitionEvent, AnimationPlayer, Sanitizer, SecurityContext, Attribute, ContentChild, ContentChildren, Query, ViewChild, ViewChildren, ANALYZE_FOR_ENTRY_COMPONENTS, Component, Directive, HostBinding, HostListener, Input, Output, Pipe, OnDestroy, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, AfterContentChecked, OnInit, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule, ViewEncapsulation, Class, forwardRef, resolveForwardRef, Injector, ReflectiveInjector, ResolvedReflectiveFactory, ReflectiveKey, OpaqueToken, NgZone, RenderComponentType, Renderer, RootRenderer, COMPILER_OPTIONS, CompilerFactory, ModuleWithComponentFactories, Compiler, ComponentFactory, ComponentRef, ComponentFactoryResolver, ElementRef, NgModuleFactory, NgModuleRef, NgModuleFactoryLoader, getModuleFactory, QueryList, SystemJsNgModuleLoader, SystemJsNgModuleLoaderConfig, TemplateRef, ViewContainerRef, EmbeddedViewRef, ViewRef, ChangeDetectionStrategy, ChangeDetectorRef, CollectionChangeRecord, DefaultIterableDiffer, IterableDiffers, KeyValueChangeRecord, KeyValueDiffers, SimpleChange, WrappedValue, platformCore, __core_private__, AUTO_STYLE, AnimationEntryMetadata, AnimationStateMetadata, AnimationStateDeclarationMetadata, AnimationStateTransitionMetadata, AnimationMetadata, AnimationKeyframesSequenceMetadata, AnimationStyleMetadata, AnimationAnimateMetadata, AnimationWithStepsMetadata, AnimationSequenceMetadata, AnimationGroupMetadata, animate, group, sequence, style, state, keyframes, transition, trigger, Inject, Optional, Injectable, Self, SkipSelf, Host */
/*!*************************************!*\
  !*** ./~/@angular/core/src/core.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__metadata__ = __webpack_require__(/*! ./metadata */ 75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(/*! ./util */ 134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__di__ = __webpack_require__(/*! ./di */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__application_ref__ = __webpack_require__(/*! ./application_ref */ 30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__application_tokens__ = __webpack_require__(/*! ./application_tokens */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__application_init__ = __webpack_require__(/*! ./application_init */ 29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__zone__ = __webpack_require__(/*! ./zone */ 135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__render__ = __webpack_require__(/*! ./render */ 133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__linker__ = __webpack_require__(/*! ./linker */ 121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__debug_debug_node__ = __webpack_require__(/*! ./debug/debug_node */ 63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__testability_testability__ = __webpack_require__(/*! ./testability/testability */ 42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__change_detection__ = __webpack_require__(/*! ./change_detection */ 115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__platform_core_providers__ = __webpack_require__(/*! ./platform_core_providers */ 131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__i18n_tokens__ = __webpack_require__(/*! ./i18n/tokens */ 66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__application_module__ = __webpack_require__(/*! ./application_module */ 114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__profile_profile__ = __webpack_require__(/*! ./profile/profile */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__type__ = __webpack_require__(/*! ./type */ 43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__facade_async__ = __webpack_require__(/*! ./facade/async */ 37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__error_handler__ = __webpack_require__(/*! ./error_handler */ 65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__core_private_export__ = __webpack_require__(/*! ./core_private_export */ 118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__animation_metadata__ = __webpack_require__(/*! ./animation/metadata */ 59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__animation_animation_transition_event__ = __webpack_require__(/*! ./animation/animation_transition_event */ 58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__animation_animation_player__ = __webpack_require__(/*! ./animation/animation_player */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__security__ = __webpack_require__(/*! ./security */ 80);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "L", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "M", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "N", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "O", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "P", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "Q", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "R", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "S", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "T", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "U", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "V", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata__["l"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "W", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata__["m"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "X", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata__["n"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "Y", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata__["o"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "Z", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata__["p"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_0", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata__["q"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_1", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata__["r"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_2", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata__["s"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_3", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata__["t"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_4", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata__["u"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_5", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata__["v"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_6", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata__["w"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_7", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata__["x"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_8", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata__["y"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_9", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_10", function() { return __WEBPACK_IMPORTED_MODULE_0__metadata__["z"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_11", function() { return __WEBPACK_IMPORTED_MODULE_1__util__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_12", function() { return __WEBPACK_IMPORTED_MODULE_2__di__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_13", function() { return __WEBPACK_IMPORTED_MODULE_2__di__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_14", function() { return __WEBPACK_IMPORTED_MODULE_2__di__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_15", function() { return __WEBPACK_IMPORTED_MODULE_2__di__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_16", function() { return __WEBPACK_IMPORTED_MODULE_2__di__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_17", function() { return __WEBPACK_IMPORTED_MODULE_2__di__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_18", function() { return __WEBPACK_IMPORTED_MODULE_2__di__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_73", function() { return __WEBPACK_IMPORTED_MODULE_2__di__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_74", function() { return __WEBPACK_IMPORTED_MODULE_2__di__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_75", function() { return __WEBPACK_IMPORTED_MODULE_2__di__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_76", function() { return __WEBPACK_IMPORTED_MODULE_2__di__["l"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_77", function() { return __WEBPACK_IMPORTED_MODULE_2__di__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_78", function() { return __WEBPACK_IMPORTED_MODULE_2__di__["m"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__application_ref__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__application_ref__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__application_ref__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__application_ref__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__application_ref__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__application_ref__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__application_ref__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__application_ref__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "i", function() { return __WEBPACK_IMPORTED_MODULE_3__application_ref__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "j", function() { return __WEBPACK_IMPORTED_MODULE_4__application_tokens__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "k", function() { return __WEBPACK_IMPORTED_MODULE_4__application_tokens__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "l", function() { return __WEBPACK_IMPORTED_MODULE_4__application_tokens__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "m", function() { return __WEBPACK_IMPORTED_MODULE_4__application_tokens__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "n", function() { return __WEBPACK_IMPORTED_MODULE_5__application_init__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "o", function() { return __WEBPACK_IMPORTED_MODULE_5__application_init__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_19", function() { return __WEBPACK_IMPORTED_MODULE_6__zone__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_20", function() { return __WEBPACK_IMPORTED_MODULE_7__render__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_21", function() { return __WEBPACK_IMPORTED_MODULE_7__render__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_22", function() { return __WEBPACK_IMPORTED_MODULE_7__render__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_23", function() { return __WEBPACK_IMPORTED_MODULE_8__linker__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_24", function() { return __WEBPACK_IMPORTED_MODULE_8__linker__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_25", function() { return __WEBPACK_IMPORTED_MODULE_8__linker__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_26", function() { return __WEBPACK_IMPORTED_MODULE_8__linker__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_27", function() { return __WEBPACK_IMPORTED_MODULE_8__linker__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_28", function() { return __WEBPACK_IMPORTED_MODULE_8__linker__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_29", function() { return __WEBPACK_IMPORTED_MODULE_8__linker__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_30", function() { return __WEBPACK_IMPORTED_MODULE_8__linker__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_31", function() { return __WEBPACK_IMPORTED_MODULE_8__linker__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_32", function() { return __WEBPACK_IMPORTED_MODULE_8__linker__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_33", function() { return __WEBPACK_IMPORTED_MODULE_8__linker__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_34", function() { return __WEBPACK_IMPORTED_MODULE_8__linker__["l"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_35", function() { return __WEBPACK_IMPORTED_MODULE_8__linker__["m"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_36", function() { return __WEBPACK_IMPORTED_MODULE_8__linker__["n"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_37", function() { return __WEBPACK_IMPORTED_MODULE_8__linker__["o"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_38", function() { return __WEBPACK_IMPORTED_MODULE_8__linker__["p"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_39", function() { return __WEBPACK_IMPORTED_MODULE_8__linker__["q"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_40", function() { return __WEBPACK_IMPORTED_MODULE_8__linker__["r"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_41", function() { return __WEBPACK_IMPORTED_MODULE_8__linker__["s"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "p", function() { return __WEBPACK_IMPORTED_MODULE_9__debug_debug_node__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "q", function() { return __WEBPACK_IMPORTED_MODULE_9__debug_debug_node__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "r", function() { return __WEBPACK_IMPORTED_MODULE_9__debug_debug_node__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "s", function() { return __WEBPACK_IMPORTED_MODULE_9__debug_debug_node__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "t", function() { return __WEBPACK_IMPORTED_MODULE_10__testability_testability__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "u", function() { return __WEBPACK_IMPORTED_MODULE_10__testability_testability__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "v", function() { return __WEBPACK_IMPORTED_MODULE_10__testability_testability__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_42", function() { return __WEBPACK_IMPORTED_MODULE_11__change_detection__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_43", function() { return __WEBPACK_IMPORTED_MODULE_11__change_detection__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_44", function() { return __WEBPACK_IMPORTED_MODULE_11__change_detection__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_45", function() { return __WEBPACK_IMPORTED_MODULE_11__change_detection__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_46", function() { return __WEBPACK_IMPORTED_MODULE_11__change_detection__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_47", function() { return __WEBPACK_IMPORTED_MODULE_11__change_detection__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_48", function() { return __WEBPACK_IMPORTED_MODULE_11__change_detection__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_49", function() { return __WEBPACK_IMPORTED_MODULE_11__change_detection__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_50", function() { return __WEBPACK_IMPORTED_MODULE_11__change_detection__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_51", function() { return __WEBPACK_IMPORTED_MODULE_12__platform_core_providers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "w", function() { return __WEBPACK_IMPORTED_MODULE_13__i18n_tokens__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "x", function() { return __WEBPACK_IMPORTED_MODULE_13__i18n_tokens__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "y", function() { return __WEBPACK_IMPORTED_MODULE_13__i18n_tokens__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "z", function() { return __WEBPACK_IMPORTED_MODULE_14__application_module__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "A", function() { return __WEBPACK_IMPORTED_MODULE_15__profile_profile__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "B", function() { return __WEBPACK_IMPORTED_MODULE_15__profile_profile__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "C", function() { return __WEBPACK_IMPORTED_MODULE_15__profile_profile__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "D", function() { return __WEBPACK_IMPORTED_MODULE_15__profile_profile__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "E", function() { return __WEBPACK_IMPORTED_MODULE_16__type__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "F", function() { return __WEBPACK_IMPORTED_MODULE_17__facade_async__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "G", function() { return __WEBPACK_IMPORTED_MODULE_18__error_handler__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_52", function() { return __WEBPACK_IMPORTED_MODULE_19__core_private_export__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_53", function() { return __WEBPACK_IMPORTED_MODULE_20__animation_metadata__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_54", function() { return __WEBPACK_IMPORTED_MODULE_20__animation_metadata__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_55", function() { return __WEBPACK_IMPORTED_MODULE_20__animation_metadata__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_56", function() { return __WEBPACK_IMPORTED_MODULE_20__animation_metadata__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_57", function() { return __WEBPACK_IMPORTED_MODULE_20__animation_metadata__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_58", function() { return __WEBPACK_IMPORTED_MODULE_20__animation_metadata__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_59", function() { return __WEBPACK_IMPORTED_MODULE_20__animation_metadata__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_60", function() { return __WEBPACK_IMPORTED_MODULE_20__animation_metadata__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_61", function() { return __WEBPACK_IMPORTED_MODULE_20__animation_metadata__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_62", function() { return __WEBPACK_IMPORTED_MODULE_20__animation_metadata__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_63", function() { return __WEBPACK_IMPORTED_MODULE_20__animation_metadata__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_64", function() { return __WEBPACK_IMPORTED_MODULE_20__animation_metadata__["l"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_65", function() { return __WEBPACK_IMPORTED_MODULE_20__animation_metadata__["m"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_66", function() { return __WEBPACK_IMPORTED_MODULE_20__animation_metadata__["n"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_67", function() { return __WEBPACK_IMPORTED_MODULE_20__animation_metadata__["o"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_68", function() { return __WEBPACK_IMPORTED_MODULE_20__animation_metadata__["p"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_69", function() { return __WEBPACK_IMPORTED_MODULE_20__animation_metadata__["q"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_70", function() { return __WEBPACK_IMPORTED_MODULE_20__animation_metadata__["r"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_71", function() { return __WEBPACK_IMPORTED_MODULE_20__animation_metadata__["s"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "_72", function() { return __WEBPACK_IMPORTED_MODULE_20__animation_metadata__["t"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "H", function() { return __WEBPACK_IMPORTED_MODULE_21__animation_animation_transition_event__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "I", function() { return __WEBPACK_IMPORTED_MODULE_22__animation_animation_player__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "J", function() { return __WEBPACK_IMPORTED_MODULE_23__security__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "K", function() { return __WEBPACK_IMPORTED_MODULE_23__security__["b"]; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point from which you should import all public core APIs.
 */
























//# sourceMappingURL=core.js.map

/***/ },
/* 118 */
/* exports provided: __core_private__ */
/* exports used: __core_private__ */
/*!****************************************************!*\
  !*** ./~/@angular/core/src/core_private_export.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animation_animation_constants__ = __webpack_require__(/*! ./animation/animation_constants */ 54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation_animation_group_player__ = __webpack_require__(/*! ./animation/animation_group_player */ 55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animation_animation_keyframe__ = __webpack_require__(/*! ./animation/animation_keyframe */ 109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animation_animation_player__ = __webpack_require__(/*! ./animation/animation_player */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animation_animation_sequence_player__ = __webpack_require__(/*! ./animation/animation_sequence_player */ 57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animation_animation_style_util__ = __webpack_require__(/*! ./animation/animation_style_util */ 110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animation_animation_styles__ = __webpack_require__(/*! ./animation/animation_styles */ 111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__animation_animation_transition__ = __webpack_require__(/*! ./animation/animation_transition */ 112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__application_tokens__ = __webpack_require__(/*! ./application_tokens */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__change_detection_change_detection_util__ = __webpack_require__(/*! ./change_detection/change_detection_util */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__change_detection_constants__ = __webpack_require__(/*! ./change_detection/constants */ 15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__console__ = __webpack_require__(/*! ./console */ 32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__debug_debug_renderer__ = __webpack_require__(/*! ./debug/debug_renderer */ 119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__di_reflective_provider__ = __webpack_require__(/*! ./di/reflective_provider */ 36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__linker_compiler__ = __webpack_require__(/*! ./linker/compiler */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__linker_component_factory__ = __webpack_require__(/*! ./linker/component_factory */ 38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__linker_component_factory_resolver__ = __webpack_require__(/*! ./linker/component_factory_resolver */ 17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__linker_debug_context__ = __webpack_require__(/*! ./linker/debug_context */ 68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__linker_ng_module_factory__ = __webpack_require__(/*! ./linker/ng_module_factory */ 70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__linker_ng_module_factory_loader__ = __webpack_require__(/*! ./linker/ng_module_factory_loader */ 71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__linker_template_ref__ = __webpack_require__(/*! ./linker/template_ref */ 72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__linker_view__ = __webpack_require__(/*! ./linker/view */ 126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__linker_view_container__ = __webpack_require__(/*! ./linker/view_container */ 127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__linker_view_type__ = __webpack_require__(/*! ./linker/view_type */ 19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__linker_view_utils__ = __webpack_require__(/*! ./linker/view_utils */ 20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__metadata_lifecycle_hooks__ = __webpack_require__(/*! ./metadata/lifecycle_hooks */ 76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__metadata_view__ = __webpack_require__(/*! ./metadata/view */ 77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__reflection_reflection__ = __webpack_require__(/*! ./reflection/reflection */ 39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__reflection_reflection_capabilities__ = __webpack_require__(/*! ./reflection/reflection_capabilities */ 78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__reflection_reflector_reader__ = __webpack_require__(/*! ./reflection/reflector_reader */ 40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__render_api__ = __webpack_require__(/*! ./render/api */ 41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__util_decorators__ = __webpack_require__(/*! ./util/decorators */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__util_lang__ = __webpack_require__(/*! ./util/lang */ 44);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return __core_private__; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

































var __core_private__ = {
    isDefaultChangeDetectionStrategy: __WEBPACK_IMPORTED_MODULE_10__change_detection_constants__["c" /* isDefaultChangeDetectionStrategy */],
    ChangeDetectorStatus: __WEBPACK_IMPORTED_MODULE_10__change_detection_constants__["b" /* ChangeDetectorStatus */],
    constructDependencies: __WEBPACK_IMPORTED_MODULE_13__di_reflective_provider__["b" /* constructDependencies */],
    LifecycleHooks: __WEBPACK_IMPORTED_MODULE_25__metadata_lifecycle_hooks__["a" /* LifecycleHooks */],
    LIFECYCLE_HOOKS_VALUES: __WEBPACK_IMPORTED_MODULE_25__metadata_lifecycle_hooks__["b" /* LIFECYCLE_HOOKS_VALUES */],
    ReflectorReader: __WEBPACK_IMPORTED_MODULE_29__reflection_reflector_reader__["a" /* ReflectorReader */],
    CodegenComponentFactoryResolver: __WEBPACK_IMPORTED_MODULE_16__linker_component_factory_resolver__["b" /* CodegenComponentFactoryResolver */],
    ComponentRef_: __WEBPACK_IMPORTED_MODULE_15__linker_component_factory__["b" /* ComponentRef_ */],
    ViewContainer: __WEBPACK_IMPORTED_MODULE_22__linker_view_container__["a" /* ViewContainer */],
    AppView: __WEBPACK_IMPORTED_MODULE_21__linker_view__["a" /* AppView */],
    DebugAppView: __WEBPACK_IMPORTED_MODULE_21__linker_view__["b" /* DebugAppView */],
    NgModuleInjector: __WEBPACK_IMPORTED_MODULE_18__linker_ng_module_factory__["a" /* NgModuleInjector */],
    registerModuleFactory: __WEBPACK_IMPORTED_MODULE_19__linker_ng_module_factory_loader__["a" /* registerModuleFactory */],
    ViewType: __WEBPACK_IMPORTED_MODULE_23__linker_view_type__["a" /* ViewType */],
    view_utils: __WEBPACK_IMPORTED_MODULE_24__linker_view_utils__,
    ViewMetadata: __WEBPACK_IMPORTED_MODULE_26__metadata_view__["a" /* ViewMetadata */],
    DebugContext: __WEBPACK_IMPORTED_MODULE_17__linker_debug_context__["a" /* DebugContext */],
    StaticNodeDebugInfo: __WEBPACK_IMPORTED_MODULE_17__linker_debug_context__["b" /* StaticNodeDebugInfo */],
    devModeEqual: __WEBPACK_IMPORTED_MODULE_9__change_detection_change_detection_util__["b" /* devModeEqual */],
    UNINITIALIZED: __WEBPACK_IMPORTED_MODULE_9__change_detection_change_detection_util__["a" /* UNINITIALIZED */],
    ValueUnwrapper: __WEBPACK_IMPORTED_MODULE_9__change_detection_change_detection_util__["c" /* ValueUnwrapper */],
    RenderDebugInfo: __WEBPACK_IMPORTED_MODULE_30__render_api__["c" /* RenderDebugInfo */],
    TemplateRef_: __WEBPACK_IMPORTED_MODULE_20__linker_template_ref__["a" /* TemplateRef_ */],
    ReflectionCapabilities: __WEBPACK_IMPORTED_MODULE_28__reflection_reflection_capabilities__["a" /* ReflectionCapabilities */],
    makeDecorator: __WEBPACK_IMPORTED_MODULE_31__util_decorators__["c" /* makeDecorator */],
    DebugDomRootRenderer: __WEBPACK_IMPORTED_MODULE_12__debug_debug_renderer__["a" /* DebugDomRootRenderer */],
    Console: __WEBPACK_IMPORTED_MODULE_11__console__["a" /* Console */],
    reflector: __WEBPACK_IMPORTED_MODULE_27__reflection_reflection__["a" /* reflector */],
    Reflector: __WEBPACK_IMPORTED_MODULE_27__reflection_reflection__["b" /* Reflector */],
    NoOpAnimationPlayer: __WEBPACK_IMPORTED_MODULE_3__animation_animation_player__["a" /* NoOpAnimationPlayer */],
    AnimationPlayer: __WEBPACK_IMPORTED_MODULE_3__animation_animation_player__["b" /* AnimationPlayer */],
    AnimationSequencePlayer: __WEBPACK_IMPORTED_MODULE_4__animation_animation_sequence_player__["a" /* AnimationSequencePlayer */],
    AnimationGroupPlayer: __WEBPACK_IMPORTED_MODULE_1__animation_animation_group_player__["a" /* AnimationGroupPlayer */],
    AnimationKeyframe: __WEBPACK_IMPORTED_MODULE_2__animation_animation_keyframe__["a" /* AnimationKeyframe */],
    prepareFinalAnimationStyles: __WEBPACK_IMPORTED_MODULE_5__animation_animation_style_util__["a" /* prepareFinalAnimationStyles */],
    balanceAnimationKeyframes: __WEBPACK_IMPORTED_MODULE_5__animation_animation_style_util__["b" /* balanceAnimationKeyframes */],
    flattenStyles: __WEBPACK_IMPORTED_MODULE_5__animation_animation_style_util__["c" /* flattenStyles */],
    clearStyles: __WEBPACK_IMPORTED_MODULE_5__animation_animation_style_util__["d" /* clearStyles */],
    renderStyles: __WEBPACK_IMPORTED_MODULE_5__animation_animation_style_util__["e" /* renderStyles */],
    collectAndResolveStyles: __WEBPACK_IMPORTED_MODULE_5__animation_animation_style_util__["f" /* collectAndResolveStyles */],
    APP_ID_RANDOM_PROVIDER: __WEBPACK_IMPORTED_MODULE_8__application_tokens__["c" /* APP_ID_RANDOM_PROVIDER */],
    AnimationStyles: __WEBPACK_IMPORTED_MODULE_6__animation_animation_styles__["a" /* AnimationStyles */],
    ANY_STATE: __WEBPACK_IMPORTED_MODULE_0__animation_animation_constants__["b" /* ANY_STATE */],
    DEFAULT_STATE: __WEBPACK_IMPORTED_MODULE_0__animation_animation_constants__["c" /* DEFAULT_STATE */],
    EMPTY_STATE: __WEBPACK_IMPORTED_MODULE_0__animation_animation_constants__["d" /* EMPTY_STATE */],
    FILL_STYLE_FLAG: __WEBPACK_IMPORTED_MODULE_0__animation_animation_constants__["a" /* FILL_STYLE_FLAG */],
    ComponentStillLoadingError: __WEBPACK_IMPORTED_MODULE_14__linker_compiler__["c" /* ComponentStillLoadingError */],
    isPromise: __WEBPACK_IMPORTED_MODULE_32__util_lang__["a" /* isPromise */],
    AnimationTransition: __WEBPACK_IMPORTED_MODULE_7__animation_animation_transition__["a" /* AnimationTransition */]
};
//# sourceMappingURL=core_private_export.js.map

/***/ },
/* 119 */
/* exports provided: DebugDomRootRenderer, DebugDomRenderer */
/* exports used: DebugDomRootRenderer */
/*!*****************************************************!*\
  !*** ./~/@angular/core/src/debug/debug_renderer.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__debug_node__ = __webpack_require__(/*! ./debug_node */ 63);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DebugDomRootRenderer; });
/* unused harmony export DebugDomRenderer */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var DebugDomRootRenderer = (function () {
    function DebugDomRootRenderer(_delegate) {
        this._delegate = _delegate;
    }
    DebugDomRootRenderer.prototype.renderComponent = function (componentProto) {
        return new DebugDomRenderer(this._delegate.renderComponent(componentProto));
    };
    return DebugDomRootRenderer;
}());
var DebugDomRenderer = (function () {
    function DebugDomRenderer(_delegate) {
        this._delegate = _delegate;
    }
    DebugDomRenderer.prototype.selectRootElement = function (selectorOrNode, debugInfo) {
        var nativeEl = this._delegate.selectRootElement(selectorOrNode, debugInfo);
        var debugEl = new __WEBPACK_IMPORTED_MODULE_1__debug_node__["a" /* DebugElement */](nativeEl, null, debugInfo);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["b" /* indexDebugNode */])(debugEl);
        return nativeEl;
    };
    DebugDomRenderer.prototype.createElement = function (parentElement, name, debugInfo) {
        var nativeEl = this._delegate.createElement(parentElement, name, debugInfo);
        var debugEl = new __WEBPACK_IMPORTED_MODULE_1__debug_node__["a" /* DebugElement */](nativeEl, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["c" /* getDebugNode */])(parentElement), debugInfo);
        debugEl.name = name;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["b" /* indexDebugNode */])(debugEl);
        return nativeEl;
    };
    DebugDomRenderer.prototype.createViewRoot = function (hostElement) { return this._delegate.createViewRoot(hostElement); };
    DebugDomRenderer.prototype.createTemplateAnchor = function (parentElement, debugInfo) {
        var comment = this._delegate.createTemplateAnchor(parentElement, debugInfo);
        var debugEl = new __WEBPACK_IMPORTED_MODULE_1__debug_node__["d" /* DebugNode */](comment, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["c" /* getDebugNode */])(parentElement), debugInfo);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["b" /* indexDebugNode */])(debugEl);
        return comment;
    };
    DebugDomRenderer.prototype.createText = function (parentElement, value, debugInfo) {
        var text = this._delegate.createText(parentElement, value, debugInfo);
        var debugEl = new __WEBPACK_IMPORTED_MODULE_1__debug_node__["d" /* DebugNode */](text, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["c" /* getDebugNode */])(parentElement), debugInfo);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["b" /* indexDebugNode */])(debugEl);
        return text;
    };
    DebugDomRenderer.prototype.projectNodes = function (parentElement, nodes) {
        var debugParent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["c" /* getDebugNode */])(parentElement);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(debugParent) && debugParent instanceof __WEBPACK_IMPORTED_MODULE_1__debug_node__["a" /* DebugElement */]) {
            var debugElement_1 = debugParent;
            nodes.forEach(function (node) { debugElement_1.addChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["c" /* getDebugNode */])(node)); });
        }
        this._delegate.projectNodes(parentElement, nodes);
    };
    DebugDomRenderer.prototype.attachViewAfter = function (node, viewRootNodes) {
        var debugNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["c" /* getDebugNode */])(node);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(debugNode)) {
            var debugParent = debugNode.parent;
            if (viewRootNodes.length > 0 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(debugParent)) {
                var debugViewRootNodes_1 = [];
                viewRootNodes.forEach(function (rootNode) { return debugViewRootNodes_1.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["c" /* getDebugNode */])(rootNode)); });
                debugParent.insertChildrenAfter(debugNode, debugViewRootNodes_1);
            }
        }
        this._delegate.attachViewAfter(node, viewRootNodes);
    };
    DebugDomRenderer.prototype.detachView = function (viewRootNodes) {
        viewRootNodes.forEach(function (node) {
            var debugNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["c" /* getDebugNode */])(node);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(debugNode) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(debugNode.parent)) {
                debugNode.parent.removeChild(debugNode);
            }
        });
        this._delegate.detachView(viewRootNodes);
    };
    DebugDomRenderer.prototype.destroyView = function (hostElement, viewAllNodes) {
        viewAllNodes = viewAllNodes || [];
        viewAllNodes.forEach(function (node) { __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["e" /* removeDebugNodeFromIndex */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["c" /* getDebugNode */])(node)); });
        this._delegate.destroyView(hostElement, viewAllNodes);
    };
    DebugDomRenderer.prototype.listen = function (renderElement, name, callback) {
        var debugEl = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["c" /* getDebugNode */])(renderElement);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(debugEl)) {
            debugEl.listeners.push(new __WEBPACK_IMPORTED_MODULE_1__debug_node__["f" /* EventListener */](name, callback));
        }
        return this._delegate.listen(renderElement, name, callback);
    };
    DebugDomRenderer.prototype.listenGlobal = function (target, name, callback) {
        return this._delegate.listenGlobal(target, name, callback);
    };
    DebugDomRenderer.prototype.setElementProperty = function (renderElement, propertyName, propertyValue) {
        var debugEl = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["c" /* getDebugNode */])(renderElement);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(debugEl) && debugEl instanceof __WEBPACK_IMPORTED_MODULE_1__debug_node__["a" /* DebugElement */]) {
            debugEl.properties[propertyName] = propertyValue;
        }
        this._delegate.setElementProperty(renderElement, propertyName, propertyValue);
    };
    DebugDomRenderer.prototype.setElementAttribute = function (renderElement, attributeName, attributeValue) {
        var debugEl = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["c" /* getDebugNode */])(renderElement);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(debugEl) && debugEl instanceof __WEBPACK_IMPORTED_MODULE_1__debug_node__["a" /* DebugElement */]) {
            debugEl.attributes[attributeName] = attributeValue;
        }
        this._delegate.setElementAttribute(renderElement, attributeName, attributeValue);
    };
    DebugDomRenderer.prototype.setBindingDebugInfo = function (renderElement, propertyName, propertyValue) {
        this._delegate.setBindingDebugInfo(renderElement, propertyName, propertyValue);
    };
    DebugDomRenderer.prototype.setElementClass = function (renderElement, className, isAdd) {
        var debugEl = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["c" /* getDebugNode */])(renderElement);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(debugEl) && debugEl instanceof __WEBPACK_IMPORTED_MODULE_1__debug_node__["a" /* DebugElement */]) {
            debugEl.classes[className] = isAdd;
        }
        this._delegate.setElementClass(renderElement, className, isAdd);
    };
    DebugDomRenderer.prototype.setElementStyle = function (renderElement, styleName, styleValue) {
        var debugEl = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug_node__["c" /* getDebugNode */])(renderElement);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* isPresent */])(debugEl) && debugEl instanceof __WEBPACK_IMPORTED_MODULE_1__debug_node__["a" /* DebugElement */]) {
            debugEl.styles[styleName] = styleValue;
        }
        this._delegate.setElementStyle(renderElement, styleName, styleValue);
    };
    DebugDomRenderer.prototype.invokeElementMethod = function (renderElement, methodName, args) {
        this._delegate.invokeElementMethod(renderElement, methodName, args);
    };
    DebugDomRenderer.prototype.setText = function (renderNode, text) { this._delegate.setText(renderNode, text); };
    DebugDomRenderer.prototype.animate = function (element, startingStyles, keyframes, duration, delay, easing, previousPlayers) {
        if (previousPlayers === void 0) { previousPlayers = []; }
        return this._delegate.animate(element, startingStyles, keyframes, duration, delay, easing, previousPlayers);
    };
    return DebugDomRenderer;
}());
//# sourceMappingURL=debug_renderer.js.map

/***/ },
/* 120 */
/* exports provided: ReflectiveProtoInjectorInlineStrategy, ReflectiveProtoInjectorDynamicStrategy, ReflectiveProtoInjector, ReflectiveInjectorInlineStrategy, ReflectiveInjectorDynamicStrategy, ReflectiveInjector, ReflectiveInjector_ */
/* exports used: ReflectiveInjector */
/*!*******************************************************!*\
  !*** ./~/@angular/core/src/di/reflective_injector.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_errors__ = __webpack_require__(/*! ../facade/errors */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__injector__ = __webpack_require__(/*! ./injector */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__metadata__ = __webpack_require__(/*! ./metadata */ 16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reflective_errors__ = __webpack_require__(/*! ./reflective_errors */ 64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reflective_key__ = __webpack_require__(/*! ./reflective_key */ 35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reflective_provider__ = __webpack_require__(/*! ./reflective_provider */ 36);
/* unused harmony export ReflectiveProtoInjectorInlineStrategy */
/* unused harmony export ReflectiveProtoInjectorDynamicStrategy */
/* unused harmony export ReflectiveProtoInjector */
/* unused harmony export ReflectiveInjectorInlineStrategy */
/* unused harmony export ReflectiveInjectorDynamicStrategy */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ReflectiveInjector; });
/* unused harmony export ReflectiveInjector_ */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






// Threshold for the dynamic version
var _MAX_CONSTRUCTION_COUNTER = 10;
var UNDEFINED = new Object();
var ReflectiveProtoInjectorInlineStrategy = (function () {
    function ReflectiveProtoInjectorInlineStrategy(protoEI, providers) {
        this.provider0 = null;
        this.provider1 = null;
        this.provider2 = null;
        this.provider3 = null;
        this.provider4 = null;
        this.provider5 = null;
        this.provider6 = null;
        this.provider7 = null;
        this.provider8 = null;
        this.provider9 = null;
        this.keyId0 = null;
        this.keyId1 = null;
        this.keyId2 = null;
        this.keyId3 = null;
        this.keyId4 = null;
        this.keyId5 = null;
        this.keyId6 = null;
        this.keyId7 = null;
        this.keyId8 = null;
        this.keyId9 = null;
        var length = providers.length;
        if (length > 0) {
            this.provider0 = providers[0];
            this.keyId0 = providers[0].key.id;
        }
        if (length > 1) {
            this.provider1 = providers[1];
            this.keyId1 = providers[1].key.id;
        }
        if (length > 2) {
            this.provider2 = providers[2];
            this.keyId2 = providers[2].key.id;
        }
        if (length > 3) {
            this.provider3 = providers[3];
            this.keyId3 = providers[3].key.id;
        }
        if (length > 4) {
            this.provider4 = providers[4];
            this.keyId4 = providers[4].key.id;
        }
        if (length > 5) {
            this.provider5 = providers[5];
            this.keyId5 = providers[5].key.id;
        }
        if (length > 6) {
            this.provider6 = providers[6];
            this.keyId6 = providers[6].key.id;
        }
        if (length > 7) {
            this.provider7 = providers[7];
            this.keyId7 = providers[7].key.id;
        }
        if (length > 8) {
            this.provider8 = providers[8];
            this.keyId8 = providers[8].key.id;
        }
        if (length > 9) {
            this.provider9 = providers[9];
            this.keyId9 = providers[9].key.id;
        }
    }
    ReflectiveProtoInjectorInlineStrategy.prototype.getProviderAtIndex = function (index) {
        if (index == 0)
            return this.provider0;
        if (index == 1)
            return this.provider1;
        if (index == 2)
            return this.provider2;
        if (index == 3)
            return this.provider3;
        if (index == 4)
            return this.provider4;
        if (index == 5)
            return this.provider5;
        if (index == 6)
            return this.provider6;
        if (index == 7)
            return this.provider7;
        if (index == 8)
            return this.provider8;
        if (index == 9)
            return this.provider9;
        throw new __WEBPACK_IMPORTED_MODULE_3__reflective_errors__["d" /* OutOfBoundsError */](index);
    };
    ReflectiveProtoInjectorInlineStrategy.prototype.createInjectorStrategy = function (injector) {
        return new ReflectiveInjectorInlineStrategy(injector, this);
    };
    return ReflectiveProtoInjectorInlineStrategy;
}());
var ReflectiveProtoInjectorDynamicStrategy = (function () {
    function ReflectiveProtoInjectorDynamicStrategy(protoInj, providers) {
        this.providers = providers;
        var len = providers.length;
        this.keyIds = new Array(len);
        for (var i = 0; i < len; i++) {
            this.keyIds[i] = providers[i].key.id;
        }
    }
    ReflectiveProtoInjectorDynamicStrategy.prototype.getProviderAtIndex = function (index) {
        if (index < 0 || index >= this.providers.length) {
            throw new __WEBPACK_IMPORTED_MODULE_3__reflective_errors__["d" /* OutOfBoundsError */](index);
        }
        return this.providers[index];
    };
    ReflectiveProtoInjectorDynamicStrategy.prototype.createInjectorStrategy = function (ei) {
        return new ReflectiveInjectorDynamicStrategy(this, ei);
    };
    return ReflectiveProtoInjectorDynamicStrategy;
}());
var ReflectiveProtoInjector = (function () {
    function ReflectiveProtoInjector(providers) {
        this.numberOfProviders = providers.length;
        this._strategy = providers.length > _MAX_CONSTRUCTION_COUNTER ?
            new ReflectiveProtoInjectorDynamicStrategy(this, providers) :
            new ReflectiveProtoInjectorInlineStrategy(this, providers);
    }
    ReflectiveProtoInjector.fromResolvedProviders = function (providers) {
        return new ReflectiveProtoInjector(providers);
    };
    ReflectiveProtoInjector.prototype.getProviderAtIndex = function (index) {
        return this._strategy.getProviderAtIndex(index);
    };
    return ReflectiveProtoInjector;
}());
var ReflectiveInjectorInlineStrategy = (function () {
    function ReflectiveInjectorInlineStrategy(injector, protoStrategy) {
        this.injector = injector;
        this.protoStrategy = protoStrategy;
        this.obj0 = UNDEFINED;
        this.obj1 = UNDEFINED;
        this.obj2 = UNDEFINED;
        this.obj3 = UNDEFINED;
        this.obj4 = UNDEFINED;
        this.obj5 = UNDEFINED;
        this.obj6 = UNDEFINED;
        this.obj7 = UNDEFINED;
        this.obj8 = UNDEFINED;
        this.obj9 = UNDEFINED;
    }
    ReflectiveInjectorInlineStrategy.prototype.resetConstructionCounter = function () { this.injector._constructionCounter = 0; };
    ReflectiveInjectorInlineStrategy.prototype.instantiateProvider = function (provider) {
        return this.injector._new(provider);
    };
    ReflectiveInjectorInlineStrategy.prototype.getObjByKeyId = function (keyId) {
        var p = this.protoStrategy;
        var inj = this.injector;
        if (p.keyId0 === keyId) {
            if (this.obj0 === UNDEFINED) {
                this.obj0 = inj._new(p.provider0);
            }
            return this.obj0;
        }
        if (p.keyId1 === keyId) {
            if (this.obj1 === UNDEFINED) {
                this.obj1 = inj._new(p.provider1);
            }
            return this.obj1;
        }
        if (p.keyId2 === keyId) {
            if (this.obj2 === UNDEFINED) {
                this.obj2 = inj._new(p.provider2);
            }
            return this.obj2;
        }
        if (p.keyId3 === keyId) {
            if (this.obj3 === UNDEFINED) {
                this.obj3 = inj._new(p.provider3);
            }
            return this.obj3;
        }
        if (p.keyId4 === keyId) {
            if (this.obj4 === UNDEFINED) {
                this.obj4 = inj._new(p.provider4);
            }
            return this.obj4;
        }
        if (p.keyId5 === keyId) {
            if (this.obj5 === UNDEFINED) {
                this.obj5 = inj._new(p.provider5);
            }
            return this.obj5;
        }
        if (p.keyId6 === keyId) {
            if (this.obj6 === UNDEFINED) {
                this.obj6 = inj._new(p.provider6);
            }
            return this.obj6;
        }
        if (p.keyId7 === keyId) {
            if (this.obj7 === UNDEFINED) {
                this.obj7 = inj._new(p.provider7);
            }
            return this.obj7;
        }
        if (p.keyId8 === keyId) {
            if (this.obj8 === UNDEFINED) {
                this.obj8 = inj._new(p.provider8);
            }
            return this.obj8;
        }
        if (p.keyId9 === keyId) {
            if (this.obj9 === UNDEFINED) {
                this.obj9 = inj._new(p.provider9);
            }
            return this.obj9;
        }
        return UNDEFINED;
    };
    ReflectiveInjectorInlineStrategy.prototype.getObjAtIndex = function (index) {
        if (index == 0)
            return this.obj0;
        if (index == 1)
            return this.obj1;
        if (index == 2)
            return this.obj2;
        if (index == 3)
            return this.obj3;
        if (index == 4)
            return this.obj4;
        if (index == 5)
            return this.obj5;
        if (index == 6)
            return this.obj6;
        if (index == 7)
            return this.obj7;
        if (index == 8)
            return this.obj8;
        if (index == 9)
            return this.obj9;
        throw new __WEBPACK_IMPORTED_MODULE_3__reflective_errors__["d" /* OutOfBoundsError */](index);
    };
    ReflectiveInjectorInlineStrategy.prototype.getMaxNumberOfObjects = function () { return _MAX_CONSTRUCTION_COUNTER; };
    return ReflectiveInjectorInlineStrategy;
}());
var ReflectiveInjectorDynamicStrategy = (function () {
    function ReflectiveInjectorDynamicStrategy(protoStrategy, injector) {
        this.protoStrategy = protoStrategy;
        this.injector = injector;
        this.objs = new Array(protoStrategy.providers.length).fill(UNDEFINED);
    }
    ReflectiveInjectorDynamicStrategy.prototype.resetConstructionCounter = function () { this.injector._constructionCounter = 0; };
    ReflectiveInjectorDynamicStrategy.prototype.instantiateProvider = function (provider) {
        return this.injector._new(provider);
    };
    ReflectiveInjectorDynamicStrategy.prototype.getObjByKeyId = function (keyId) {
        var p = this.protoStrategy;
        for (var i = 0; i < p.keyIds.length; i++) {
            if (p.keyIds[i] === keyId) {
                if (this.objs[i] === UNDEFINED) {
                    this.objs[i] = this.injector._new(p.providers[i]);
                }
                return this.objs[i];
            }
        }
        return UNDEFINED;
    };
    ReflectiveInjectorDynamicStrategy.prototype.getObjAtIndex = function (index) {
        if (index < 0 || index >= this.objs.length) {
            throw new __WEBPACK_IMPORTED_MODULE_3__reflective_errors__["d" /* OutOfBoundsError */](index);
        }
        return this.objs[index];
    };
    ReflectiveInjectorDynamicStrategy.prototype.getMaxNumberOfObjects = function () { return this.objs.length; };
    return ReflectiveInjectorDynamicStrategy;
}());
/**
 * A ReflectiveDependency injection container used for instantiating objects and resolving
 * dependencies.
 *
 * An `Injector` is a replacement for a `new` operator, which can automatically resolve the
 * constructor dependencies.
 *
 * In typical use, application code asks for the dependencies in the constructor and they are
 * resolved by the `Injector`.
 *
 * ### Example ([live demo](http://plnkr.co/edit/jzjec0?p=preview))
 *
 * The following example creates an `Injector` configured to create `Engine` and `Car`.
 *
 * ```typescript
 * @Injectable()
 * class Engine {
 * }
 *
 * @Injectable()
 * class Car {
 *   constructor(public engine:Engine) {}
 * }
 *
 * var injector = ReflectiveInjector.resolveAndCreate([Car, Engine]);
 * var car = injector.get(Car);
 * expect(car instanceof Car).toBe(true);
 * expect(car.engine instanceof Engine).toBe(true);
 * ```
 *
 * Notice, we don't use the `new` operator because we explicitly want to have the `Injector`
 * resolve all of the object's dependencies automatically.
 *
 * @stable
 */
var ReflectiveInjector = (function () {
    function ReflectiveInjector() {
    }
    /**
     * Turns an array of provider definitions into an array of resolved providers.
     *
     * A resolution is a process of flattening multiple nested arrays and converting individual
     * providers into an array of {@link ResolvedReflectiveProvider}s.
     *
     * ### Example ([live demo](http://plnkr.co/edit/AiXTHi?p=preview))
     *
     * ```typescript
     * @Injectable()
     * class Engine {
     * }
     *
     * @Injectable()
     * class Car {
     *   constructor(public engine:Engine) {}
     * }
     *
     * var providers = ReflectiveInjector.resolve([Car, [[Engine]]]);
     *
     * expect(providers.length).toEqual(2);
     *
     * expect(providers[0] instanceof ResolvedReflectiveProvider).toBe(true);
     * expect(providers[0].key.displayName).toBe("Car");
     * expect(providers[0].dependencies.length).toEqual(1);
     * expect(providers[0].factory).toBeDefined();
     *
     * expect(providers[1].key.displayName).toBe("Engine");
     * });
     * ```
     *
     * See {@link ReflectiveInjector#fromResolvedProviders} for more info.
     */
    ReflectiveInjector.resolve = function (providers) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__reflective_provider__["a" /* resolveReflectiveProviders */])(providers);
    };
    /**
     * Resolves an array of providers and creates an injector from those providers.
     *
     * The passed-in providers can be an array of `Type`, {@link Provider},
     * or a recursive array of more providers.
     *
     * ### Example ([live demo](http://plnkr.co/edit/ePOccA?p=preview))
     *
     * ```typescript
     * @Injectable()
     * class Engine {
     * }
     *
     * @Injectable()
     * class Car {
     *   constructor(public engine:Engine) {}
     * }
     *
     * var injector = ReflectiveInjector.resolveAndCreate([Car, Engine]);
     * expect(injector.get(Car) instanceof Car).toBe(true);
     * ```
     *
     * This function is slower than the corresponding `fromResolvedProviders`
     * because it needs to resolve the passed-in providers first.
     * See {@link Injector#resolve} and {@link Injector#fromResolvedProviders}.
     */
    ReflectiveInjector.resolveAndCreate = function (providers, parent) {
        if (parent === void 0) { parent = null; }
        var ResolvedReflectiveProviders = ReflectiveInjector.resolve(providers);
        return ReflectiveInjector.fromResolvedProviders(ResolvedReflectiveProviders, parent);
    };
    /**
     * Creates an injector from previously resolved providers.
     *
     * This API is the recommended way to construct injectors in performance-sensitive parts.
     *
     * ### Example ([live demo](http://plnkr.co/edit/KrSMci?p=preview))
     *
     * ```typescript
     * @Injectable()
     * class Engine {
     * }
     *
     * @Injectable()
     * class Car {
     *   constructor(public engine:Engine) {}
     * }
     *
     * var providers = ReflectiveInjector.resolve([Car, Engine]);
     * var injector = ReflectiveInjector.fromResolvedProviders(providers);
     * expect(injector.get(Car) instanceof Car).toBe(true);
     * ```
     * @experimental
     */
    ReflectiveInjector.fromResolvedProviders = function (providers, parent) {
        if (parent === void 0) { parent = null; }
        return new ReflectiveInjector_(ReflectiveProtoInjector.fromResolvedProviders(providers), parent);
    };
    Object.defineProperty(ReflectiveInjector.prototype, "parent", {
        /**
         * Parent of this injector.
         *
         * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
         * -->
         *
         * ### Example ([live demo](http://plnkr.co/edit/eosMGo?p=preview))
         *
         * ```typescript
         * var parent = ReflectiveInjector.resolveAndCreate([]);
         * var child = parent.resolveAndCreateChild([]);
         * expect(child.parent).toBe(parent);
         * ```
         */
        get: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); },
        enumerable: true,
        configurable: true
    });
    /**
     * Resolves an array of providers and creates a child injector from those providers.
     *
     * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
     * -->
     *
     * The passed-in providers can be an array of `Type`, {@link Provider},
     * or a recursive array of more providers.
     *
     * ### Example ([live demo](http://plnkr.co/edit/opB3T4?p=preview))
     *
     * ```typescript
     * class ParentProvider {}
     * class ChildProvider {}
     *
     * var parent = ReflectiveInjector.resolveAndCreate([ParentProvider]);
     * var child = parent.resolveAndCreateChild([ChildProvider]);
     *
     * expect(child.get(ParentProvider) instanceof ParentProvider).toBe(true);
     * expect(child.get(ChildProvider) instanceof ChildProvider).toBe(true);
     * expect(child.get(ParentProvider)).toBe(parent.get(ParentProvider));
     * ```
     *
     * This function is slower than the corresponding `createChildFromResolved`
     * because it needs to resolve the passed-in providers first.
     * See {@link Injector#resolve} and {@link Injector#createChildFromResolved}.
     */
    ReflectiveInjector.prototype.resolveAndCreateChild = function (providers) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); };
    /**
     * Creates a child injector from previously resolved providers.
     *
     * <!-- TODO: Add a link to the section of the user guide talking about hierarchical injection.
     * -->
     *
     * This API is the recommended way to construct injectors in performance-sensitive parts.
     *
     * ### Example ([live demo](http://plnkr.co/edit/VhyfjN?p=preview))
     *
     * ```typescript
     * class ParentProvider {}
     * class ChildProvider {}
     *
     * var parentProviders = ReflectiveInjector.resolve([ParentProvider]);
     * var childProviders = ReflectiveInjector.resolve([ChildProvider]);
     *
     * var parent = ReflectiveInjector.fromResolvedProviders(parentProviders);
     * var child = parent.createChildFromResolved(childProviders);
     *
     * expect(child.get(ParentProvider) instanceof ParentProvider).toBe(true);
     * expect(child.get(ChildProvider) instanceof ChildProvider).toBe(true);
     * expect(child.get(ParentProvider)).toBe(parent.get(ParentProvider));
     * ```
     */
    ReflectiveInjector.prototype.createChildFromResolved = function (providers) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])();
    };
    /**
     * Resolves a provider and instantiates an object in the context of the injector.
     *
     * The created object does not get cached by the injector.
     *
     * ### Example ([live demo](http://plnkr.co/edit/yvVXoB?p=preview))
     *
     * ```typescript
     * @Injectable()
     * class Engine {
     * }
     *
     * @Injectable()
     * class Car {
     *   constructor(public engine:Engine) {}
     * }
     *
     * var injector = ReflectiveInjector.resolveAndCreate([Engine]);
     *
     * var car = injector.resolveAndInstantiate(Car);
     * expect(car.engine).toBe(injector.get(Engine));
     * expect(car).not.toBe(injector.resolveAndInstantiate(Car));
     * ```
     */
    ReflectiveInjector.prototype.resolveAndInstantiate = function (provider) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); };
    /**
     * Instantiates an object using a resolved provider in the context of the injector.
     *
     * The created object does not get cached by the injector.
     *
     * ### Example ([live demo](http://plnkr.co/edit/ptCImQ?p=preview))
     *
     * ```typescript
     * @Injectable()
     * class Engine {
     * }
     *
     * @Injectable()
     * class Car {
     *   constructor(public engine:Engine) {}
     * }
     *
     * var injector = ReflectiveInjector.resolveAndCreate([Engine]);
     * var carProvider = ReflectiveInjector.resolve([Car])[0];
     * var car = injector.instantiateResolved(carProvider);
     * expect(car.engine).toBe(injector.get(Engine));
     * expect(car).not.toBe(injector.instantiateResolved(carProvider));
     * ```
     */
    ReflectiveInjector.prototype.instantiateResolved = function (provider) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_errors__["a" /* unimplemented */])(); };
    return ReflectiveInjector;
}());
var ReflectiveInjector_ = (function () {
    /**
     * Private
     */
    function ReflectiveInjector_(_proto /* ProtoInjector */, _parent) {
        if (_parent === void 0) { _parent = null; }
        /** @internal */
        this._constructionCounter = 0;
        this._proto = _proto;
        this._parent = _parent;
        this._strategy = _proto._strategy.createInjectorStrategy(this);
    }
    ReflectiveInjector_.prototype.get = function (token, notFoundValue) {
        if (notFoundValue === void 0) { notFoundValue = __WEBPACK_IMPORTED_MODULE_1__injector__["a" /* THROW_IF_NOT_FOUND */]; }
        return this._getByKey(__WEBPACK_IMPORTED_MODULE_4__reflective_key__["a" /* ReflectiveKey */].get(token), null, null, notFoundValue);
    };
    ReflectiveInjector_.prototype.getAt = function (index) { return this._strategy.getObjAtIndex(index); };
    Object.defineProperty(ReflectiveInjector_.prototype, "parent", {
        get: function () { return this._parent; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReflectiveInjector_.prototype, "internalStrategy", {
        /**
         * @internal
         * Internal. Do not use.
         * We return `any` not to export the InjectorStrategy type.
         */
        get: function () { return this._strategy; },
        enumerable: true,
        configurable: true
    });
    ReflectiveInjector_.prototype.resolveAndCreateChild = function (providers) {
        var ResolvedReflectiveProviders = ReflectiveInjector.resolve(providers);
        return this.createChildFromResolved(ResolvedReflectiveProviders);
    };
    ReflectiveInjector_.prototype.createChildFromResolved = function (providers) {
        var proto = new ReflectiveProtoInjector(providers);
        var inj = new ReflectiveInjector_(proto);
        inj._parent = this;
        return inj;
    };
    ReflectiveInjector_.prototype.resolveAndInstantiate = function (provider) {
        return this.instantiateResolved(ReflectiveInjector.resolve([provider])[0]);
    };
    ReflectiveInjector_.prototype.instantiateResolved = function (provider) {
        return this._instantiateProvider(provider);
    };
    /** @internal */
    ReflectiveInjector_.prototype._new = function (provider) {
        if (this._constructionCounter++ > this._strategy.getMaxNumberOfObjects()) {
            throw new __WEBPACK_IMPORTED_MODULE_3__reflective_errors__["e" /* CyclicDependencyError */](this, provider.key);
        }
        return this._instantiateProvider(provider);
    };
    ReflectiveInjector_.prototype._instantiateProvider = function (provider) {
        if (provider.multiProvider) {
            var res = new Array(provider.resolvedFactories.length);
            for (var i = 0; i < provider.resolvedFactories.length; ++i) {
                res[i] = this._instantiate(provider, provider.resolvedFactories[i]);
            }
            return res;
        }
        else {
            return this._instantiate(provider, provider.resolvedFactories[0]);
        }
    };
    ReflectiveInjector_.prototype._instantiate = function (provider, ResolvedReflectiveFactory) {
        var factory = ResolvedReflectiveFactory.factory;
        var deps = ResolvedReflectiveFactory.dependencies;
        var length = deps.length;
        var d0;
        var d1;
        var d2;
        var d3;
        var d4;
        var d5;
        var d6;
        var d7;
        var d8;
        var d9;
        var d10;
        var d11;
        var d12;
        var d13;
        var d14;
        var d15;
        var d16;
        var d17;
        var d18;
        var d19;
        try {
            d0 = length > 0 ? this._getByReflectiveDependency(provider, deps[0]) : null;
            d1 = length > 1 ? this._getByReflectiveDependency(provider, deps[1]) : null;
            d2 = length > 2 ? this._getByReflectiveDependency(provider, deps[2]) : null;
            d3 = length > 3 ? this._getByReflectiveDependency(provider, deps[3]) : null;
            d4 = length > 4 ? this._getByReflectiveDependency(provider, deps[4]) : null;
            d5 = length > 5 ? this._getByReflectiveDependency(provider, deps[5]) : null;
            d6 = length > 6 ? this._getByReflectiveDependency(provider, deps[6]) : null;
            d7 = length > 7 ? this._getByReflectiveDependency(provider, deps[7]) : null;
            d8 = length > 8 ? this._getByReflectiveDependency(provider, deps[8]) : null;
            d9 = length > 9 ? this._getByReflectiveDependency(provider, deps[9]) : null;
            d10 = length > 10 ? this._getByReflectiveDependency(provider, deps[10]) : null;
            d11 = length > 11 ? this._getByReflectiveDependency(provider, deps[11]) : null;
            d12 = length > 12 ? this._getByReflectiveDependency(provider, deps[12]) : null;
            d13 = length > 13 ? this._getByReflectiveDependency(provider, deps[13]) : null;
            d14 = length > 14 ? this._getByReflectiveDependency(provider, deps[14]) : null;
            d15 = length > 15 ? this._getByReflectiveDependency(provider, deps[15]) : null;
            d16 = length > 16 ? this._getByReflectiveDependency(provider, deps[16]) : null;
            d17 = length > 17 ? this._getByReflectiveDependency(provider, deps[17]) : null;
            d18 = length > 18 ? this._getByReflectiveDependency(provider, deps[18]) : null;
            d19 = length > 19 ? this._getByReflectiveDependency(provider, deps[19]) : null;
        }
        catch (e) {
            if (e instanceof __WEBPACK_IMPORTED_MODULE_3__reflective_errors__["f" /* AbstractProviderError */] || e instanceof __WEBPACK_IMPORTED_MODULE_3__reflective_errors__["g" /* InstantiationError */]) {
                e.addKey(this, provider.key);
            }
            throw e;
        }
        var obj;
        try {
            switch (length) {
                case 0:
                    obj = factory();
                    break;
                case 1:
                    obj = factory(d0);
                    break;
                case 2:
                    obj = factory(d0, d1);
                    break;
                case 3:
                    obj = factory(d0, d1, d2);
                    break;
                case 4:
                    obj = factory(d0, d1, d2, d3);
                    break;
                case 5:
                    obj = factory(d0, d1, d2, d3, d4);
                    break;
                case 6:
                    obj = factory(d0, d1, d2, d3, d4, d5);
                    break;
                case 7:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6);
                    break;
                case 8:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7);
                    break;
                case 9:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8);
                    break;
                case 10:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9);
                    break;
                case 11:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10);
                    break;
                case 12:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11);
                    break;
                case 13:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12);
                    break;
                case 14:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13);
                    break;
                case 15:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14);
                    break;
                case 16:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15);
                    break;
                case 17:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16);
                    break;
                case 18:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17);
                    break;
                case 19:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18);
                    break;
                case 20:
                    obj = factory(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19);
                    break;
                default:
                    throw new Error("Cannot instantiate '" + provider.key.displayName + "' because it has more than 20 dependencies");
            }
        }
        catch (e) {
            throw new __WEBPACK_IMPORTED_MODULE_3__reflective_errors__["g" /* InstantiationError */](this, e, e.stack, provider.key);
        }
        return obj;
    };
    ReflectiveInjector_.prototype._getByReflectiveDependency = function (provider, dep) {
        return this._getByKey(dep.key, dep.lowerBoundVisibility, dep.upperBoundVisibility, dep.optional ? null : __WEBPACK_IMPORTED_MODULE_1__injector__["a" /* THROW_IF_NOT_FOUND */]);
    };
    ReflectiveInjector_.prototype._getByKey = function (key, lowerBoundVisibility, upperBoundVisibility, notFoundValue) {
        if (key === INJECTOR_KEY) {
            return this;
        }
        if (upperBoundVisibility instanceof __WEBPACK_IMPORTED_MODULE_2__metadata__["d" /* Self */]) {
            return this._getByKeySelf(key, notFoundValue);
        }
        else {
            return this._getByKeyDefault(key, notFoundValue, lowerBoundVisibility);
        }
    };
    /** @internal */
    ReflectiveInjector_.prototype._throwOrNull = function (key, notFoundValue) {
        if (notFoundValue !== __WEBPACK_IMPORTED_MODULE_1__injector__["a" /* THROW_IF_NOT_FOUND */]) {
            return notFoundValue;
        }
        else {
            throw new __WEBPACK_IMPORTED_MODULE_3__reflective_errors__["h" /* NoProviderError */](this, key);
        }
    };
    /** @internal */
    ReflectiveInjector_.prototype._getByKeySelf = function (key, notFoundValue) {
        var obj = this._strategy.getObjByKeyId(key.id);
        return (obj !== UNDEFINED) ? obj : this._throwOrNull(key, notFoundValue);
    };
    /** @internal */
    ReflectiveInjector_.prototype._getByKeyDefault = function (key, notFoundValue, lowerBoundVisibility) {
        var inj;
        if (lowerBoundVisibility instanceof __WEBPACK_IMPORTED_MODULE_2__metadata__["f" /* SkipSelf */]) {
            inj = this._parent;
        }
        else {
            inj = this;
        }
        while (inj instanceof ReflectiveInjector_) {
            var inj_ = inj;
            var obj = inj_._strategy.getObjByKeyId(key.id);
            if (obj !== UNDEFINED)
                return obj;
            inj = inj_._parent;
        }
        if (inj !== null) {
            return inj.get(key.token, notFoundValue);
        }
        else {
            return this._throwOrNull(key, notFoundValue);
        }
    };
    Object.defineProperty(ReflectiveInjector_.prototype, "displayName", {
        get: function () {
            var providers = _mapProviders(this, function (b) { return ' "' + b.key.displayName + '" '; })
                .join(', ');
            return "ReflectiveInjector(providers: [" + providers + "])";
        },
        enumerable: true,
        configurable: true
    });
    ReflectiveInjector_.prototype.toString = function () { return this.displayName; };
    return ReflectiveInjector_;
}());
var INJECTOR_KEY = __WEBPACK_IMPORTED_MODULE_4__reflective_key__["a" /* ReflectiveKey */].get(__WEBPACK_IMPORTED_MODULE_1__injector__["b" /* Injector */]);
function _mapProviders(injector, fn) {
    var res = new Array(injector._proto.numberOfProviders);
    for (var i = 0; i < injector._proto.numberOfProviders; ++i) {
        res[i] = fn(injector._proto.getProviderAtIndex(i));
    }
    return res;
}
//# sourceMappingURL=reflective_injector.js.map

/***/ },
/* 121 */
/* exports provided: COMPILER_OPTIONS, CompilerFactory, ModuleWithComponentFactories, Compiler, ComponentFactory, ComponentRef, ComponentFactoryResolver, ElementRef, NgModuleFactory, NgModuleRef, NgModuleFactoryLoader, getModuleFactory, QueryList, SystemJsNgModuleLoader, SystemJsNgModuleLoaderConfig, TemplateRef, ViewContainerRef, EmbeddedViewRef, ViewRef */
/* exports used: COMPILER_OPTIONS, CompilerFactory, ModuleWithComponentFactories, Compiler, ComponentFactory, ComponentRef, ComponentFactoryResolver, ElementRef, NgModuleFactory, NgModuleRef, NgModuleFactoryLoader, getModuleFactory, QueryList, SystemJsNgModuleLoader, SystemJsNgModuleLoaderConfig, TemplateRef, ViewContainerRef, EmbeddedViewRef, ViewRef */
/*!***************************************!*\
  !*** ./~/@angular/core/src/linker.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linker_compiler__ = __webpack_require__(/*! ./linker/compiler */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linker_component_factory__ = __webpack_require__(/*! ./linker/component_factory */ 38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linker_component_factory_resolver__ = __webpack_require__(/*! ./linker/component_factory_resolver */ 17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__linker_element_ref__ = __webpack_require__(/*! ./linker/element_ref */ 18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__linker_ng_module_factory__ = __webpack_require__(/*! ./linker/ng_module_factory */ 70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__linker_ng_module_factory_loader__ = __webpack_require__(/*! ./linker/ng_module_factory_loader */ 71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__linker_query_list__ = __webpack_require__(/*! ./linker/query_list */ 124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__linker_system_js_ng_module_factory_loader__ = __webpack_require__(/*! ./linker/system_js_ng_module_factory_loader */ 125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__linker_template_ref__ = __webpack_require__(/*! ./linker/template_ref */ 72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__linker_view_container_ref__ = __webpack_require__(/*! ./linker/view_container_ref */ 73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__linker_view_ref__ = __webpack_require__(/*! ./linker/view_ref */ 74);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__linker_compiler__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__linker_compiler__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__linker_compiler__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__linker_compiler__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__linker_component_factory__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__linker_component_factory__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__linker_component_factory_resolver__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__linker_element_ref__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__linker_ng_module_factory__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "j", function() { return __WEBPACK_IMPORTED_MODULE_4__linker_ng_module_factory__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "k", function() { return __WEBPACK_IMPORTED_MODULE_5__linker_ng_module_factory_loader__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "l", function() { return __WEBPACK_IMPORTED_MODULE_5__linker_ng_module_factory_loader__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "m", function() { return __WEBPACK_IMPORTED_MODULE_6__linker_query_list__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "n", function() { return __WEBPACK_IMPORTED_MODULE_7__linker_system_js_ng_module_factory_loader__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "o", function() { return __WEBPACK_IMPORTED_MODULE_7__linker_system_js_ng_module_factory_loader__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "p", function() { return __WEBPACK_IMPORTED_MODULE_8__linker_template_ref__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "q", function() { return __WEBPACK_IMPORTED_MODULE_9__linker_view_container_ref__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "r", function() { return __WEBPACK_IMPORTED_MODULE_10__linker_view_ref__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "s", function() { return __WEBPACK_IMPORTED_MODULE_10__linker_view_ref__["c"]; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Public API for compiler











//# sourceMappingURL=linker.js.map

/***/ },
/* 122 */
/* exports provided: AnimationViewContext */
/* exports used: AnimationViewContext */
/*!**************************************************************!*\
  !*** ./~/@angular/core/src/linker/animation_view_context.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animation_animation_group_player__ = __webpack_require__(/*! ../animation/animation_group_player */ 55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation_animation_queue__ = __webpack_require__(/*! ../animation/animation_queue */ 56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animation_animation_sequence_player__ = __webpack_require__(/*! ../animation/animation_sequence_player */ 57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animation_view_animation_map__ = __webpack_require__(/*! ../animation/view_animation_map */ 113);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AnimationViewContext; });




var AnimationViewContext = (function () {
    function AnimationViewContext() {
        this._players = new __WEBPACK_IMPORTED_MODULE_3__animation_view_animation_map__["a" /* ViewAnimationMap */]();
    }
    AnimationViewContext.prototype.onAllActiveAnimationsDone = function (callback) {
        var activeAnimationPlayers = this._players.getAllPlayers();
        // we check for the length to avoid having GroupAnimationPlayer
        // issue an unnecessary microtask when zero players are passed in
        if (activeAnimationPlayers.length) {
            new __WEBPACK_IMPORTED_MODULE_0__animation_animation_group_player__["a" /* AnimationGroupPlayer */](activeAnimationPlayers).onDone(function () { return callback(); });
        }
        else {
            callback();
        }
    };
    AnimationViewContext.prototype.queueAnimation = function (element, animationName, player) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__animation_animation_queue__["b" /* queueAnimation */])(player);
        this._players.set(element, animationName, player);
    };
    AnimationViewContext.prototype.getAnimationPlayers = function (element, animationName, removeAllAnimations) {
        if (removeAllAnimations === void 0) { removeAllAnimations = false; }
        var players = [];
        if (removeAllAnimations) {
            this._players.findAllPlayersByElement(element).forEach(function (player) { _recursePlayers(player, players); });
        }
        else {
            var currentPlayer = this._players.find(element, animationName);
            if (currentPlayer) {
                _recursePlayers(currentPlayer, players);
            }
        }
        return players;
    };
    return AnimationViewContext;
}());
function _recursePlayers(player, collectedPlayers) {
    if ((player instanceof __WEBPACK_IMPORTED_MODULE_0__animation_animation_group_player__["a" /* AnimationGroupPlayer */]) || (player instanceof __WEBPACK_IMPORTED_MODULE_2__animation_animation_sequence_player__["a" /* AnimationSequencePlayer */])) {
        player.players.forEach(function (player) { return _recursePlayers(player, collectedPlayers); });
    }
    else {
        collectedPlayers.push(player);
    }
}
//# sourceMappingURL=animation_view_context.js.map

/***/ },
/* 123 */
/* exports provided: ElementInjector */
/* exports used: ElementInjector */
/*!********************************************************!*\
  !*** ./~/@angular/core/src/linker/element_injector.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__di_injector__ = __webpack_require__(/*! ../di/injector */ 7);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ElementInjector; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var _UNDEFINED = new Object();
var ElementInjector = (function (_super) {
    __extends(ElementInjector, _super);
    function ElementInjector(_view, _nodeIndex) {
        _super.call(this);
        this._view = _view;
        this._nodeIndex = _nodeIndex;
    }
    ElementInjector.prototype.get = function (token, notFoundValue) {
        if (notFoundValue === void 0) { notFoundValue = __WEBPACK_IMPORTED_MODULE_0__di_injector__["a" /* THROW_IF_NOT_FOUND */]; }
        return this._view.injectorGet(token, this._nodeIndex, notFoundValue);
    };
    return ElementInjector;
}(__WEBPACK_IMPORTED_MODULE_0__di_injector__["b" /* Injector */]));
//# sourceMappingURL=element_injector.js.map

/***/ },
/* 124 */
/* exports provided: QueryList */
/* exports used: QueryList */
/*!**************************************************!*\
  !*** ./~/@angular/core/src/linker/query_list.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_async__ = __webpack_require__(/*! ../facade/async */ 37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_collection__ = __webpack_require__(/*! ../facade/collection */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return QueryList; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * An unmodifiable list of items that Angular keeps up to date when the state
 * of the application changes.
 *
 * The type of object that {@link Query} and {@link ViewQueryMetadata} provide.
 *
 * Implements an iterable interface, therefore it can be used in both ES6
 * javascript `for (var i of items)` loops as well as in Angular templates with
 * `*ngFor="let i of myList"`.
 *
 * Changes can be observed by subscribing to the changes `Observable`.
 *
 * NOTE: In the future this class will implement an `Observable` interface.
 *
 * ### Example ([live demo](http://plnkr.co/edit/RX8sJnQYl9FWuSCWme5z?p=preview))
 * ```typescript
 * @Component({...})
 * class Container {
 *   @ViewChildren(Item) items:QueryList<Item>;
 * }
 * ```
 * @stable
 */
var QueryList = (function () {
    function QueryList() {
        this._dirty = true;
        this._results = [];
        this._emitter = new __WEBPACK_IMPORTED_MODULE_0__facade_async__["a" /* EventEmitter */]();
    }
    Object.defineProperty(QueryList.prototype, "changes", {
        get: function () { return this._emitter; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryList.prototype, "length", {
        get: function () { return this._results.length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryList.prototype, "first", {
        get: function () { return this._results[0]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryList.prototype, "last", {
        get: function () { return this._results[this.length - 1]; },
        enumerable: true,
        configurable: true
    });
    /**
     * See
     * [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
     */
    QueryList.prototype.map = function (fn) { return this._results.map(fn); };
    /**
     * See
     * [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
     */
    QueryList.prototype.filter = function (fn) {
        return this._results.filter(fn);
    };
    /**
     * See
     * [Array.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
     */
    QueryList.prototype.find = function (fn) { return this._results.find(fn); };
    /**
     * See
     * [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
     */
    QueryList.prototype.reduce = function (fn, init) {
        return this._results.reduce(fn, init);
    };
    /**
     * See
     * [Array.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
     */
    QueryList.prototype.forEach = function (fn) { this._results.forEach(fn); };
    /**
     * See
     * [Array.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
     */
    QueryList.prototype.some = function (fn) {
        return this._results.some(fn);
    };
    QueryList.prototype.toArray = function () { return this._results.slice(); };
    QueryList.prototype[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["f" /* getSymbolIterator */])()] = function () { return this._results[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["f" /* getSymbolIterator */])()](); };
    QueryList.prototype.toString = function () { return this._results.toString(); };
    QueryList.prototype.reset = function (res) {
        this._results = __WEBPACK_IMPORTED_MODULE_1__facade_collection__["d" /* ListWrapper */].flatten(res);
        this._dirty = false;
    };
    QueryList.prototype.notifyOnChanges = function () { this._emitter.emit(this); };
    /** internal */
    QueryList.prototype.setDirty = function () { this._dirty = true; };
    Object.defineProperty(QueryList.prototype, "dirty", {
        /** internal */
        get: function () { return this._dirty; },
        enumerable: true,
        configurable: true
    });
    return QueryList;
}());
//# sourceMappingURL=query_list.js.map

/***/ },
/* 125 */
/* exports provided: SystemJsNgModuleLoaderConfig, SystemJsNgModuleLoader */
/* exports used: SystemJsNgModuleLoader, SystemJsNgModuleLoaderConfig */
/*!**************************************************************************!*\
  !*** ./~/@angular/core/src/linker/system_js_ng_module_factory_loader.js ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__di__ = __webpack_require__(/*! ../di */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__compiler__ = __webpack_require__(/*! ./compiler */ 9);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return SystemJsNgModuleLoaderConfig; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SystemJsNgModuleLoader; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var _SEPARATOR = '#';
var FACTORY_CLASS_SUFFIX = 'NgFactory';
/**
 * Configuration for SystemJsNgModuleLoader.
 * token.
 *
 * @experimental
 */
var SystemJsNgModuleLoaderConfig = (function () {
    function SystemJsNgModuleLoaderConfig() {
    }
    return SystemJsNgModuleLoaderConfig;
}());
var DEFAULT_CONFIG = {
    factoryPathPrefix: '',
    factoryPathSuffix: '.ngfactory',
};
/**
 * NgModuleFactoryLoader that uses SystemJS to load NgModuleFactory
 * @experimental
 */
var SystemJsNgModuleLoader = (function () {
    function SystemJsNgModuleLoader(_compiler, config) {
        this._compiler = _compiler;
        this._config = config || DEFAULT_CONFIG;
    }
    SystemJsNgModuleLoader.prototype.load = function (path) {
        var offlineMode = this._compiler instanceof __WEBPACK_IMPORTED_MODULE_1__compiler__["b" /* Compiler */];
        return offlineMode ? this.loadFactory(path) : this.loadAndCompile(path);
    };
    SystemJsNgModuleLoader.prototype.loadAndCompile = function (path) {
        var _this = this;
        var _a = path.split(_SEPARATOR), module = _a[0], exportName = _a[1];
        if (exportName === undefined) {
            exportName = 'default';
        }
        return __webpack_require__(/*! . */ 67)(module)
            .then(function (module) { return module[exportName]; })
            .then(function (type) { return checkNotEmpty(type, module, exportName); })
            .then(function (type) { return _this._compiler.compileModuleAsync(type); });
    };
    SystemJsNgModuleLoader.prototype.loadFactory = function (path) {
        var _a = path.split(_SEPARATOR), module = _a[0], exportName = _a[1];
        var factoryClassSuffix = FACTORY_CLASS_SUFFIX;
        if (exportName === undefined) {
            exportName = 'default';
            factoryClassSuffix = '';
        }
        return __webpack_require__(/*! . */ 67)(this._config.factoryPathPrefix + module + this._config.factoryPathSuffix)
            .then(function (module) { return module[exportName + factoryClassSuffix]; })
            .then(function (factory) { return checkNotEmpty(factory, module, exportName); });
    };
    SystemJsNgModuleLoader.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__di__["b" /* Injectable */] },
    ];
    /** @nocollapse */
    SystemJsNgModuleLoader.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_1__compiler__["b" /* Compiler */], },
        { type: SystemJsNgModuleLoaderConfig, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__di__["d" /* Optional */] },] },
    ];
    return SystemJsNgModuleLoader;
}());
function checkNotEmpty(value, modulePath, exportName) {
    if (!value) {
        throw new Error("Cannot find '" + exportName + "' in '" + modulePath + "'");
    }
    return value;
}
//# sourceMappingURL=system_js_ng_module_factory_loader.js.map

/***/ },
/* 126 */
/* exports provided: AppView, DebugAppView */
/* exports used: AppView, DebugAppView */
/*!********************************************!*\
  !*** ./~/@angular/core/src/linker/view.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__ = __webpack_require__(/*! ../change_detection/change_detection */ 13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__di_injector__ = __webpack_require__(/*! ../di/injector */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(/*! ../profile/profile */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animation_view_context__ = __webpack_require__(/*! ./animation_view_context */ 122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__debug_context__ = __webpack_require__(/*! ./debug_context */ 68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__element_injector__ = __webpack_require__(/*! ./element_injector */ 123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__errors__ = __webpack_require__(/*! ./errors */ 69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__view_ref__ = __webpack_require__(/*! ./view_ref */ 74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__view_type__ = __webpack_require__(/*! ./view_type */ 19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__view_utils__ = __webpack_require__(/*! ./view_utils */ 20);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppView; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return DebugAppView; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};











var _scope_check = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["b" /* wtfCreateScope */])("AppView#check(ascii id)");
/**
 * @experimental
 */
var EMPTY_CONTEXT = new Object();
var UNDEFINED = new Object();
/**
 * Cost of making objects: http://jsperf.com/instantiate-size-of-object
 *
 */
var AppView = (function () {
    function AppView(clazz, componentType, type, viewUtils, parentView, parentIndex, parentElement, cdMode, declaredViewContainer) {
        if (declaredViewContainer === void 0) { declaredViewContainer = null; }
        this.clazz = clazz;
        this.componentType = componentType;
        this.type = type;
        this.viewUtils = viewUtils;
        this.parentView = parentView;
        this.parentIndex = parentIndex;
        this.parentElement = parentElement;
        this.cdMode = cdMode;
        this.declaredViewContainer = declaredViewContainer;
        this.viewContainer = null;
        this.numberOfChecks = 0;
        this.ref = new __WEBPACK_IMPORTED_MODULE_8__view_ref__["a" /* ViewRef_ */](this);
        if (type === __WEBPACK_IMPORTED_MODULE_9__view_type__["a" /* ViewType */].COMPONENT || type === __WEBPACK_IMPORTED_MODULE_9__view_type__["a" /* ViewType */].HOST) {
            this.renderer = viewUtils.renderComponent(componentType);
        }
        else {
            this.renderer = parentView.renderer;
        }
        this._directRenderer = this.renderer.directRenderer;
    }
    Object.defineProperty(AppView.prototype, "animationContext", {
        get: function () {
            if (!this._animationContext) {
                this._animationContext = new __WEBPACK_IMPORTED_MODULE_4__animation_view_context__["a" /* AnimationViewContext */]();
            }
            return this._animationContext;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppView.prototype, "destroyed", {
        get: function () { return this.cdMode === __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["f" /* ChangeDetectorStatus */].Destroyed; },
        enumerable: true,
        configurable: true
    });
    AppView.prototype.create = function (context) {
        this.context = context;
        return this.createInternal(null);
    };
    AppView.prototype.createHostView = function (rootSelectorOrNode, hostInjector, projectableNodes) {
        this.context = EMPTY_CONTEXT;
        this._hasExternalHostElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["d" /* isPresent */])(rootSelectorOrNode);
        this._hostInjector = hostInjector;
        this._hostProjectableNodes = projectableNodes;
        return this.createInternal(rootSelectorOrNode);
    };
    /**
     * Overwritten by implementations.
     * Returns the ComponentRef for the host element for ViewType.HOST.
     */
    AppView.prototype.createInternal = function (rootSelectorOrNode) { return null; };
    /**
     * Overwritten by implementations.
     */
    AppView.prototype.createEmbeddedViewInternal = function (templateNodeIndex) { return null; };
    AppView.prototype.init = function (lastRootNode, allNodes, disposables) {
        this.lastRootNode = lastRootNode;
        this.allNodes = allNodes;
        this.disposables = disposables;
        if (this.type === __WEBPACK_IMPORTED_MODULE_9__view_type__["a" /* ViewType */].COMPONENT) {
            this.dirtyParentQueriesInternal();
        }
    };
    AppView.prototype.injectorGet = function (token, nodeIndex, notFoundValue) {
        if (notFoundValue === void 0) { notFoundValue = __WEBPACK_IMPORTED_MODULE_1__di_injector__["a" /* THROW_IF_NOT_FOUND */]; }
        var result = UNDEFINED;
        var view = this;
        while (result === UNDEFINED) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["d" /* isPresent */])(nodeIndex)) {
                result = view.injectorGetInternal(token, nodeIndex, UNDEFINED);
            }
            if (result === UNDEFINED && view.type === __WEBPACK_IMPORTED_MODULE_9__view_type__["a" /* ViewType */].HOST) {
                result = view._hostInjector.get(token, notFoundValue);
            }
            nodeIndex = view.parentIndex;
            view = view.parentView;
        }
        return result;
    };
    /**
     * Overwritten by implementations
     */
    AppView.prototype.injectorGetInternal = function (token, nodeIndex, notFoundResult) {
        return notFoundResult;
    };
    AppView.prototype.injector = function (nodeIndex) { return new __WEBPACK_IMPORTED_MODULE_6__element_injector__["a" /* ElementInjector */](this, nodeIndex); };
    AppView.prototype.detachAndDestroy = function () {
        if (this._hasExternalHostElement) {
            this.detach();
        }
        else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["d" /* isPresent */])(this.viewContainer)) {
            this.viewContainer.detachView(this.viewContainer.nestedViews.indexOf(this));
        }
        this.destroy();
    };
    AppView.prototype.destroy = function () {
        var _this = this;
        if (this.cdMode === __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["f" /* ChangeDetectorStatus */].Destroyed) {
            return;
        }
        var hostElement = this.type === __WEBPACK_IMPORTED_MODULE_9__view_type__["a" /* ViewType */].COMPONENT ? this.parentElement : null;
        if (this.disposables) {
            for (var i = 0; i < this.disposables.length; i++) {
                this.disposables[i]();
            }
        }
        this.destroyInternal();
        this.dirtyParentQueriesInternal();
        if (this._animationContext) {
            this._animationContext.onAllActiveAnimationsDone(function () { return _this.renderer.destroyView(hostElement, _this.allNodes); });
        }
        else {
            this.renderer.destroyView(hostElement, this.allNodes);
        }
        this.cdMode = __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["f" /* ChangeDetectorStatus */].Destroyed;
    };
    /**
     * Overwritten by implementations
     */
    AppView.prototype.destroyInternal = function () { };
    /**
     * Overwritten by implementations
     */
    AppView.prototype.detachInternal = function () { };
    AppView.prototype.detach = function () {
        var _this = this;
        this.detachInternal();
        if (this._animationContext) {
            this._animationContext.onAllActiveAnimationsDone(function () { return _this._renderDetach(); });
        }
        else {
            this._renderDetach();
        }
        if (this.declaredViewContainer && this.declaredViewContainer !== this.viewContainer) {
            var projectedViews = this.declaredViewContainer.projectedViews;
            var index = projectedViews.indexOf(this);
            // perf: pop is faster than splice!
            if (index >= projectedViews.length - 1) {
                projectedViews.pop();
            }
            else {
                projectedViews.splice(index, 1);
            }
        }
        this.viewContainer = null;
        this.dirtyParentQueriesInternal();
    };
    AppView.prototype._renderDetach = function () {
        if (this._directRenderer) {
            this.visitRootNodesInternal(this._directRenderer.remove, null);
        }
        else {
            this.renderer.detachView(this.flatRootNodes);
        }
    };
    AppView.prototype.attachAfter = function (viewContainer, prevView) {
        this._renderAttach(viewContainer, prevView);
        this.viewContainer = viewContainer;
        if (this.declaredViewContainer && this.declaredViewContainer !== viewContainer) {
            if (!this.declaredViewContainer.projectedViews) {
                this.declaredViewContainer.projectedViews = [];
            }
            this.declaredViewContainer.projectedViews.push(this);
        }
        this.dirtyParentQueriesInternal();
    };
    AppView.prototype.moveAfter = function (viewContainer, prevView) {
        this._renderAttach(viewContainer, prevView);
        this.dirtyParentQueriesInternal();
    };
    AppView.prototype._renderAttach = function (viewContainer, prevView) {
        var prevNode = prevView ? prevView.lastRootNode : viewContainer.nativeElement;
        if (this._directRenderer) {
            var nextSibling = this._directRenderer.nextSibling(prevNode);
            if (nextSibling) {
                this.visitRootNodesInternal(this._directRenderer.insertBefore, nextSibling);
            }
            else {
                var parentElement = this._directRenderer.parentElement(prevNode);
                if (parentElement) {
                    this.visitRootNodesInternal(this._directRenderer.appendChild, parentElement);
                }
            }
        }
        else {
            this.renderer.attachViewAfter(prevNode, this.flatRootNodes);
        }
    };
    Object.defineProperty(AppView.prototype, "changeDetectorRef", {
        get: function () { return this.ref; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppView.prototype, "flatRootNodes", {
        get: function () {
            var nodes = [];
            this.visitRootNodesInternal(__WEBPACK_IMPORTED_MODULE_10__view_utils__["addToArray"], nodes);
            return nodes;
        },
        enumerable: true,
        configurable: true
    });
    AppView.prototype.projectNodes = function (parentElement, ngContentIndex) {
        if (this._directRenderer) {
            this.visitProjectedNodes(ngContentIndex, this._directRenderer.appendChild, parentElement);
        }
        else {
            var nodes = [];
            this.visitProjectedNodes(ngContentIndex, __WEBPACK_IMPORTED_MODULE_10__view_utils__["addToArray"], nodes);
            this.renderer.projectNodes(parentElement, nodes);
        }
    };
    AppView.prototype.visitProjectedNodes = function (ngContentIndex, cb, c) {
        switch (this.type) {
            case __WEBPACK_IMPORTED_MODULE_9__view_type__["a" /* ViewType */].EMBEDDED:
                this.parentView.visitProjectedNodes(ngContentIndex, cb, c);
                break;
            case __WEBPACK_IMPORTED_MODULE_9__view_type__["a" /* ViewType */].COMPONENT:
                if (this.parentView.type === __WEBPACK_IMPORTED_MODULE_9__view_type__["a" /* ViewType */].HOST) {
                    var nodes = this.parentView._hostProjectableNodes[ngContentIndex] || [];
                    for (var i = 0; i < nodes.length; i++) {
                        cb(nodes[i], c);
                    }
                }
                else {
                    this.parentView.visitProjectableNodesInternal(this.parentIndex, ngContentIndex, cb, c);
                }
                break;
        }
    };
    /**
     * Overwritten by implementations
     */
    AppView.prototype.visitRootNodesInternal = function (cb, c) { };
    /**
     * Overwritten by implementations
     */
    AppView.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, c) { };
    /**
     * Overwritten by implementations
     */
    AppView.prototype.dirtyParentQueriesInternal = function () { };
    AppView.prototype.detectChanges = function (throwOnChange) {
        var s = _scope_check(this.clazz);
        if (this.cdMode === __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["f" /* ChangeDetectorStatus */].Checked ||
            this.cdMode === __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["f" /* ChangeDetectorStatus */].Errored ||
            this.cdMode === __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["f" /* ChangeDetectorStatus */].Detached)
            return;
        if (this.cdMode === __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["f" /* ChangeDetectorStatus */].Destroyed) {
            this.throwDestroyedError('detectChanges');
        }
        this.detectChangesInternal(throwOnChange);
        if (this.cdMode === __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["f" /* ChangeDetectorStatus */].CheckOnce)
            this.cdMode = __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["f" /* ChangeDetectorStatus */].Checked;
        this.numberOfChecks++;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* wtfLeave */])(s);
    };
    /**
     * Overwritten by implementations
     */
    AppView.prototype.detectChangesInternal = function (throwOnChange) { };
    AppView.prototype.markAsCheckOnce = function () { this.cdMode = __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["f" /* ChangeDetectorStatus */].CheckOnce; };
    AppView.prototype.markPathToRootAsCheckOnce = function () {
        var c = this;
        while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["d" /* isPresent */])(c) && c.cdMode !== __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["f" /* ChangeDetectorStatus */].Detached) {
            if (c.cdMode === __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["f" /* ChangeDetectorStatus */].Checked) {
                c.cdMode = __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["f" /* ChangeDetectorStatus */].CheckOnce;
            }
            if (c.type === __WEBPACK_IMPORTED_MODULE_9__view_type__["a" /* ViewType */].COMPONENT) {
                c = c.parentView;
            }
            else {
                c = c.viewContainer ? c.viewContainer.parentView : null;
            }
        }
    };
    AppView.prototype.eventHandler = function (cb) {
        return cb;
    };
    AppView.prototype.throwDestroyedError = function (details) { throw new __WEBPACK_IMPORTED_MODULE_7__errors__["b" /* ViewDestroyedError */](details); };
    return AppView;
}());
var DebugAppView = (function (_super) {
    __extends(DebugAppView, _super);
    function DebugAppView(clazz, componentType, type, viewUtils, parentView, parentIndex, parentNode, cdMode, staticNodeDebugInfos, declaredViewContainer) {
        if (declaredViewContainer === void 0) { declaredViewContainer = null; }
        _super.call(this, clazz, componentType, type, viewUtils, parentView, parentIndex, parentNode, cdMode, declaredViewContainer);
        this.staticNodeDebugInfos = staticNodeDebugInfos;
        this._currentDebugContext = null;
    }
    DebugAppView.prototype.create = function (context) {
        this._resetDebug();
        try {
            return _super.prototype.create.call(this, context);
        }
        catch (e) {
            this._rethrowWithContext(e);
            throw e;
        }
    };
    DebugAppView.prototype.createHostView = function (rootSelectorOrNode, injector, projectableNodes) {
        if (projectableNodes === void 0) { projectableNodes = null; }
        this._resetDebug();
        try {
            return _super.prototype.createHostView.call(this, rootSelectorOrNode, injector, projectableNodes);
        }
        catch (e) {
            this._rethrowWithContext(e);
            throw e;
        }
    };
    DebugAppView.prototype.injectorGet = function (token, nodeIndex, notFoundResult) {
        this._resetDebug();
        try {
            return _super.prototype.injectorGet.call(this, token, nodeIndex, notFoundResult);
        }
        catch (e) {
            this._rethrowWithContext(e);
            throw e;
        }
    };
    DebugAppView.prototype.detach = function () {
        this._resetDebug();
        try {
            _super.prototype.detach.call(this);
        }
        catch (e) {
            this._rethrowWithContext(e);
            throw e;
        }
    };
    DebugAppView.prototype.destroy = function () {
        this._resetDebug();
        try {
            _super.prototype.destroy.call(this);
        }
        catch (e) {
            this._rethrowWithContext(e);
            throw e;
        }
    };
    DebugAppView.prototype.detectChanges = function (throwOnChange) {
        this._resetDebug();
        try {
            _super.prototype.detectChanges.call(this, throwOnChange);
        }
        catch (e) {
            this._rethrowWithContext(e);
            throw e;
        }
    };
    DebugAppView.prototype._resetDebug = function () { this._currentDebugContext = null; };
    DebugAppView.prototype.debug = function (nodeIndex, rowNum, colNum) {
        return this._currentDebugContext = new __WEBPACK_IMPORTED_MODULE_5__debug_context__["a" /* DebugContext */](this, nodeIndex, rowNum, colNum);
    };
    DebugAppView.prototype._rethrowWithContext = function (e) {
        if (!(e instanceof __WEBPACK_IMPORTED_MODULE_7__errors__["c" /* ViewWrappedError */])) {
            if (!(e instanceof __WEBPACK_IMPORTED_MODULE_7__errors__["a" /* ExpressionChangedAfterItHasBeenCheckedError */])) {
                this.cdMode = __WEBPACK_IMPORTED_MODULE_0__change_detection_change_detection__["f" /* ChangeDetectorStatus */].Errored;
            }
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["d" /* isPresent */])(this._currentDebugContext)) {
                throw new __WEBPACK_IMPORTED_MODULE_7__errors__["c" /* ViewWrappedError */](e, this._currentDebugContext);
            }
        }
    };
    DebugAppView.prototype.eventHandler = function (cb) {
        var _this = this;
        var superHandler = _super.prototype.eventHandler.call(this, cb);
        return function (eventName, event) {
            _this._resetDebug();
            try {
                return superHandler.call(_this, eventName, event);
            }
            catch (e) {
                _this._rethrowWithContext(e);
                throw e;
            }
        };
    };
    return DebugAppView;
}(AppView));
//# sourceMappingURL=view.js.map

/***/ },
/* 127 */
/* exports provided: ViewContainer */
/* exports used: ViewContainer */
/*!******************************************************!*\
  !*** ./~/@angular/core/src/linker/view_container.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element_ref__ = __webpack_require__(/*! ./element_ref */ 18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_container_ref__ = __webpack_require__(/*! ./view_container_ref */ 73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_type__ = __webpack_require__(/*! ./view_type */ 19);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ViewContainer; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * A ViewContainer is created for elements that have a ViewContainerRef
 * to keep track of the nested views.
 */
var ViewContainer = (function () {
    function ViewContainer(index, parentIndex, parentView, nativeElement) {
        this.index = index;
        this.parentIndex = parentIndex;
        this.parentView = parentView;
        this.nativeElement = nativeElement;
    }
    Object.defineProperty(ViewContainer.prototype, "elementRef", {
        get: function () { return new __WEBPACK_IMPORTED_MODULE_0__element_ref__["a" /* ElementRef */](this.nativeElement); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewContainer.prototype, "vcRef", {
        get: function () { return new __WEBPACK_IMPORTED_MODULE_1__view_container_ref__["a" /* ViewContainerRef_ */](this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewContainer.prototype, "parentInjector", {
        get: function () { return this.parentView.injector(this.parentIndex); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewContainer.prototype, "injector", {
        get: function () { return this.parentView.injector(this.index); },
        enumerable: true,
        configurable: true
    });
    ViewContainer.prototype.detectChangesInNestedViews = function (throwOnChange) {
        if (this.nestedViews) {
            for (var i = 0; i < this.nestedViews.length; i++) {
                this.nestedViews[i].detectChanges(throwOnChange);
            }
        }
    };
    ViewContainer.prototype.destroyNestedViews = function () {
        if (this.nestedViews) {
            for (var i = 0; i < this.nestedViews.length; i++) {
                this.nestedViews[i].destroy();
            }
        }
    };
    ViewContainer.prototype.visitNestedViewRootNodes = function (cb, c) {
        if (this.nestedViews) {
            for (var i = 0; i < this.nestedViews.length; i++) {
                this.nestedViews[i].visitRootNodesInternal(cb, c);
            }
        }
    };
    ViewContainer.prototype.mapNestedViews = function (nestedViewClass, callback) {
        var result = [];
        if (this.nestedViews) {
            for (var i = 0; i < this.nestedViews.length; i++) {
                var nestedView = this.nestedViews[i];
                if (nestedView.clazz === nestedViewClass) {
                    result.push(callback(nestedView));
                }
            }
        }
        if (this.projectedViews) {
            for (var i = 0; i < this.projectedViews.length; i++) {
                var projectedView = this.projectedViews[i];
                if (projectedView.clazz === nestedViewClass) {
                    result.push(callback(projectedView));
                }
            }
        }
        return result;
    };
    ViewContainer.prototype.moveView = function (view, currentIndex) {
        var previousIndex = this.nestedViews.indexOf(view);
        if (view.type === __WEBPACK_IMPORTED_MODULE_2__view_type__["a" /* ViewType */].COMPONENT) {
            throw new Error("Component views can't be moved!");
        }
        var nestedViews = this.nestedViews;
        if (nestedViews == null) {
            nestedViews = [];
            this.nestedViews = nestedViews;
        }
        nestedViews.splice(previousIndex, 1);
        nestedViews.splice(currentIndex, 0, view);
        var prevView = currentIndex > 0 ? nestedViews[currentIndex - 1] : null;
        view.moveAfter(this, prevView);
    };
    ViewContainer.prototype.attachView = function (view, viewIndex) {
        if (view.type === __WEBPACK_IMPORTED_MODULE_2__view_type__["a" /* ViewType */].COMPONENT) {
            throw new Error("Component views can't be moved!");
        }
        var nestedViews = this.nestedViews;
        if (nestedViews == null) {
            nestedViews = [];
            this.nestedViews = nestedViews;
        }
        // perf: array.push is faster than array.splice!
        if (viewIndex >= nestedViews.length) {
            nestedViews.push(view);
        }
        else {
            nestedViews.splice(viewIndex, 0, view);
        }
        var prevView = viewIndex > 0 ? nestedViews[viewIndex - 1] : null;
        view.attachAfter(this, prevView);
    };
    ViewContainer.prototype.detachView = function (viewIndex) {
        var view = this.nestedViews[viewIndex];
        // perf: array.pop is faster than array.splice!
        if (viewIndex >= this.nestedViews.length - 1) {
            this.nestedViews.pop();
        }
        else {
            this.nestedViews.splice(viewIndex, 1);
        }
        if (view.type === __WEBPACK_IMPORTED_MODULE_2__view_type__["a" /* ViewType */].COMPONENT) {
            throw new Error("Component views can't be moved!");
        }
        view.detach();
        return view;
    };
    return ViewContainer;
}());
//# sourceMappingURL=view_container.js.map

/***/ },
/* 128 */
/* exports provided: ANALYZE_FOR_ENTRY_COMPONENTS, Attribute, Query, ContentChildren, ContentChild, ViewChildren, ViewChild */
/* exports used: Attribute, ContentChild, ContentChildren, Query, ViewChild, ViewChildren, ANALYZE_FOR_ENTRY_COMPONENTS */
/*!********************************************!*\
  !*** ./~/@angular/core/src/metadata/di.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__di_opaque_token__ = __webpack_require__(/*! ../di/opaque_token */ 34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_decorators__ = __webpack_require__(/*! ../util/decorators */ 6);
/* harmony export (binding) */ __webpack_require__.d(exports, "g", function() { return ANALYZE_FOR_ENTRY_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Attribute; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return Query; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return ContentChildren; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return ContentChild; });
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return ViewChildren; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return ViewChild; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * This token can be used to create a virtual provider that will populate the
 * `entryComponents` fields of components and ng modules based on its `useValue`.
 * All components that are referenced in the `useValue` value (either directly
 * or in a nested array or map) will be added to the `entryComponents` property.
 *
 * ### Example
 * The following example shows how the router can populate the `entryComponents`
 * field of an NgModule based on the router configuration which refers
 * to components.
 *
 * ```typescript
 * // helper function inside the router
 * function provideRoutes(routes) {
 *   return [
 *     {provide: ROUTES, useValue: routes},
 *     {provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: routes, multi: true}
 *   ];
 * }
 *
 * // user code
 * let routes = [
 *   {path: '/root', component: RootComp},
 *   {path: '/teams', component: TeamsComp}
 * ];
 *
 * @NgModule({
 *   providers: [provideRoutes(routes)]
 * })
 * class ModuleWithRoutes {}
 * ```
 *
 * @experimental
 */
var ANALYZE_FOR_ENTRY_COMPONENTS = new __WEBPACK_IMPORTED_MODULE_0__di_opaque_token__["a" /* OpaqueToken */]('AnalyzeForEntryComponents');
/**
 * Attribute decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var Attribute = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_decorators__["a" /* makeParamDecorator */])('Attribute', [['attributeName', undefined]]);
/**
 * Base class for query metadata.
 *
 * See {@link ContentChildren}, {@link ContentChild}, {@link ViewChildren}, {@link ViewChild} for
 * more information.
 *
 * @stable
 */
var Query = (function () {
    function Query() {
    }
    return Query;
}());
/**
 * ContentChildren decorator and metadata.
 *
 *  @stable
 *  @Annotation
 */
var ContentChildren = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_decorators__["b" /* makePropDecorator */])('ContentChildren', [
    ['selector', undefined], {
        first: false,
        isViewQuery: false,
        descendants: false,
        read: undefined,
    }
], Query);
/**
 * @whatItDoes Configures a content query.
 *
 * @howToUse
 *
 * {@example core/di/ts/contentChild/content_child_howto.ts region='HowTo'}
 *
 * @description
 *
 * You can use ContentChild to get the first element or the directive matching the selector from the
 * content DOM. If the content DOM changes, and a new child matches the selector,
 * the property will be updated.
 *
 * Content queries are set before the `ngAfterContentInit` callback is called.
 *
 * **Metadata Properties**:
 *
 * * **selector** - the directive type or the name used for querying.
 * * **read** - read a different token from the queried element.
 *
 * Let's look at an example:
 *
 * {@example core/di/ts/contentChild/content_child_example.ts region='Component'}
 *
 * **npm package**: `@angular/core`
 *
 * @stable
 * @Annotation
 */
var ContentChild = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_decorators__["b" /* makePropDecorator */])('ContentChild', [
    ['selector', undefined], {
        first: true,
        isViewQuery: false,
        descendants: true,
        read: undefined,
    }
], Query);
/**
 * @whatItDoes Configures a view query.
 *
 * @howToUse
 *
 * {@example core/di/ts/viewChildren/view_children_howto.ts region='HowTo'}
 *
 * @description
 *
 * You can use ViewChildren to get the {@link QueryList} of elements or directives from the
 * view DOM. Any time a child element is added, removed, or moved, the query list will be updated,
 * and the changes observable of the query list will emit a new value.
 *
 * View queries are set before the `ngAfterViewInit` callback is called.
 *
 * **Metadata Properties**:
 *
 * * **selector** - the directive type or the name used for querying.
 * * **read** - read a different token from the queried elements.
 *
 * Let's look at an example:
 *
 * {@example core/di/ts/viewChildren/view_children_example.ts region='Component'}
 *
 * **npm package**: `@angular/core`
 *
 * @stable
 * @Annotation
 */
var ViewChildren = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_decorators__["b" /* makePropDecorator */])('ViewChildren', [
    ['selector', undefined], {
        first: false,
        isViewQuery: true,
        descendants: true,
        read: undefined,
    }
], Query);
/**
 * ViewChild decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var ViewChild = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_decorators__["b" /* makePropDecorator */])('ViewChild', [
    ['selector', undefined], {
        first: true,
        isViewQuery: true,
        descendants: true,
        read: undefined,
    }
], Query);
//# sourceMappingURL=di.js.map

/***/ },
/* 129 */
/* exports provided: Directive, Component, Pipe, Input, Output, HostBinding, HostListener */
/* exports used: Component, Directive, HostBinding, HostListener, Input, Output, Pipe */
/*!****************************************************!*\
  !*** ./~/@angular/core/src/metadata/directives.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__change_detection_constants__ = __webpack_require__(/*! ../change_detection/constants */ 15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_decorators__ = __webpack_require__(/*! ../util/decorators */ 6);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Directive; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(exports, "g", function() { return Pipe; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return Output; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return HostBinding; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return HostListener; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * Directive decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var Directive = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_decorators__["c" /* makeDecorator */])('Directive', {
    selector: undefined,
    inputs: undefined,
    outputs: undefined,
    host: undefined,
    providers: undefined,
    exportAs: undefined,
    queries: undefined
});
/**
 * Component decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_decorators__["c" /* makeDecorator */])('Component', {
    selector: undefined,
    inputs: undefined,
    outputs: undefined,
    host: undefined,
    exportAs: undefined,
    moduleId: undefined,
    providers: undefined,
    viewProviders: undefined,
    changeDetection: __WEBPACK_IMPORTED_MODULE_0__change_detection_constants__["a" /* ChangeDetectionStrategy */].Default,
    queries: undefined,
    templateUrl: undefined,
    template: undefined,
    styleUrls: undefined,
    styles: undefined,
    animations: undefined,
    encapsulation: undefined,
    interpolation: undefined,
    entryComponents: undefined
}, Directive);
/**
 * Pipe decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var Pipe = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_decorators__["c" /* makeDecorator */])('Pipe', {
    name: undefined,
    pure: true,
});
/**
 * Input decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var Input = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_decorators__["b" /* makePropDecorator */])('Input', [['bindingPropertyName', undefined]]);
/**
 * Output decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var Output = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_decorators__["b" /* makePropDecorator */])('Output', [['bindingPropertyName', undefined]]);
/**
 * HostBinding decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var HostBinding = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_decorators__["b" /* makePropDecorator */])('HostBinding', [['hostPropertyName', undefined]]);
/**
 * HostBinding decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var HostListener = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_decorators__["b" /* makePropDecorator */])('HostListener', [['eventName', undefined], ['args', []]]);
//# sourceMappingURL=directives.js.map

/***/ },
/* 130 */
/* exports provided: CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule */
/* exports used: NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA */
/*!***************************************************!*\
  !*** ./~/@angular/core/src/metadata/ng_module.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_decorators__ = __webpack_require__(/*! ../util/decorators */ 6);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return CUSTOM_ELEMENTS_SCHEMA; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return NO_ERRORS_SCHEMA; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NgModule; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Defines a schema that will allow:
 * - any non-Angular elements with a `-` in their name,
 * - any properties on elements with a `-` in their name which is the common rule for custom
 * elements.
 *
 * @stable
 */
var CUSTOM_ELEMENTS_SCHEMA = {
    name: 'custom-elements'
};
/**
 * Defines a schema that will allow any property on any element.
 *
 * @experimental
 */
var NO_ERRORS_SCHEMA = {
    name: 'no-errors-schema'
};
/**
 * NgModule decorator and metadata.
 *
 * @stable
 * @Annotation
 */
var NgModule = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_decorators__["c" /* makeDecorator */])('NgModule', {
    providers: undefined,
    declarations: undefined,
    imports: undefined,
    exports: undefined,
    entryComponents: undefined,
    bootstrap: undefined,
    schemas: undefined,
    id: undefined,
});
//# sourceMappingURL=ng_module.js.map

/***/ },
/* 131 */
/* exports provided: platformCore */
/* exports used: platformCore */
/*!********************************************************!*\
  !*** ./~/@angular/core/src/platform_core_providers.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__application_ref__ = __webpack_require__(/*! ./application_ref */ 30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__console__ = __webpack_require__(/*! ./console */ 32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reflection_reflection__ = __webpack_require__(/*! ./reflection/reflection */ 39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reflection_reflector_reader__ = __webpack_require__(/*! ./reflection/reflector_reader */ 40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__testability_testability__ = __webpack_require__(/*! ./testability/testability */ 42);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return platformCore; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */





function _reflector() {
    return __WEBPACK_IMPORTED_MODULE_2__reflection_reflection__["a" /* reflector */];
}
var _CORE_PLATFORM_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_0__application_ref__["a" /* PlatformRef_ */],
    { provide: __WEBPACK_IMPORTED_MODULE_0__application_ref__["b" /* PlatformRef */], useExisting: __WEBPACK_IMPORTED_MODULE_0__application_ref__["a" /* PlatformRef_ */] },
    { provide: __WEBPACK_IMPORTED_MODULE_2__reflection_reflection__["b" /* Reflector */], useFactory: _reflector, deps: [] },
    { provide: __WEBPACK_IMPORTED_MODULE_3__reflection_reflector_reader__["a" /* ReflectorReader */], useExisting: __WEBPACK_IMPORTED_MODULE_2__reflection_reflection__["b" /* Reflector */] },
    __WEBPACK_IMPORTED_MODULE_4__testability_testability__["b" /* TestabilityRegistry */],
    __WEBPACK_IMPORTED_MODULE_1__console__["a" /* Console */],
];
/**
 * This platform has to be included in any other platform
 *
 * @experimental
 */
var platformCore = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__application_ref__["c" /* createPlatformFactory */])(null, 'core', _CORE_PLATFORM_PROVIDERS);
//# sourceMappingURL=platform_core_providers.js.map

/***/ },
/* 132 */
/* exports provided: detectWTF, createScope, leave, startTimeRange, endTimeRange */
/* exports used: detectWTF, createScope, leave, startTimeRange, endTimeRange */
/*!*************************************************!*\
  !*** ./~/@angular/core/src/profile/wtf_impl.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(/*! ../facade/lang */ 0);
/* harmony export (immutable) */ exports["a"] = detectWTF;
/* harmony export (immutable) */ exports["b"] = createScope;
/* harmony export (immutable) */ exports["c"] = leave;
/* harmony export (immutable) */ exports["d"] = startTimeRange;
/* harmony export (immutable) */ exports["e"] = endTimeRange;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var trace;
var events;
function detectWTF() {
    var wtf = __WEBPACK_IMPORTED_MODULE_0__facade_lang__["a" /* global */]['wtf'];
    if (wtf) {
        trace = wtf['trace'];
        if (trace) {
            events = trace['events'];
            return true;
        }
    }
    return false;
}
function createScope(signature, flags) {
    if (flags === void 0) { flags = null; }
    return events.createScope(signature, flags);
}
function leave(scope, returnValue) {
    trace.leaveScope(scope, returnValue);
    return returnValue;
}
function startTimeRange(rangeType, action) {
    return trace.beginTimeRange(rangeType, action);
}
function endTimeRange(range) {
    trace.endTimeRange(range);
}
//# sourceMappingURL=wtf_impl.js.map

/***/ },
/* 133 */
/* exports provided: RenderComponentType, Renderer, RootRenderer */
/* exports used: RenderComponentType, Renderer, RootRenderer */
/*!***************************************!*\
  !*** ./~/@angular/core/src/render.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render_api__ = __webpack_require__(/*! ./render/api */ 41);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__render_api__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__render_api__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__render_api__["a"]; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Public API for render

//# sourceMappingURL=render.js.map

/***/ },
/* 134 */
/* exports provided: Class */
/* exports used: Class */
/*!*************************************!*\
  !*** ./~/@angular/core/src/util.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_decorators__ = __webpack_require__(/*! ./util/decorators */ 6);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__util_decorators__["d"]; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Public API for util

//# sourceMappingURL=util.js.map

/***/ },
/* 135 */
/* exports provided: NgZone */
/* exports used: NgZone */
/*!*************************************!*\
  !*** ./~/@angular/core/src/zone.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__zone_ng_zone__ = __webpack_require__(/*! ./zone/ng_zone */ 45);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__zone_ng_zone__["a"]; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Public API for Zone

//# sourceMappingURL=zone.js.map

/***/ },
/* 136 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** ./~/rxjs/Observer.js ***!
  \****************************/
/***/ function(module, exports) {

"use strict";
"use strict";
exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) { throw err; },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ },
/* 137 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./~/rxjs/SubjectSubscription.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = __webpack_require__(/*! ./Subscription */ 46);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SubjectSubscription = (function (_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        _super.call(this);
        this.subject = subject;
        this.subscriber = subscriber;
        this.closed = false;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription_1.Subscription));
exports.SubjectSubscription = SubjectSubscription;
//# sourceMappingURL=SubjectSubscription.js.map

/***/ },
/* 138 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./~/rxjs/symbol/observable.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var root_1 = __webpack_require__(/*! ../util/root */ 48);
function getSymbolObservable(context) {
    var $$observable;
    var Symbol = context.Symbol;
    if (typeof Symbol === 'function') {
        if (Symbol.observable) {
            $$observable = Symbol.observable;
        }
        else {
            $$observable = Symbol('observable');
            Symbol.observable = $$observable;
        }
    }
    else {
        $$observable = '@@observable';
    }
    return $$observable;
}
exports.getSymbolObservable = getSymbolObservable;
exports.$$observable = getSymbolObservable(root_1.root);
//# sourceMappingURL=observable.js.map

/***/ },
/* 139 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ./~/rxjs/util/ObjectUnsubscribedError.js ***!
  \************************************************/
/***/ function(module, exports) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when an action is invalid because the object has been
 * unsubscribed.
 *
 * @see {@link Subject}
 * @see {@link BehaviorSubject}
 *
 * @class ObjectUnsubscribedError
 */
var ObjectUnsubscribedError = (function (_super) {
    __extends(ObjectUnsubscribedError, _super);
    function ObjectUnsubscribedError() {
        var err = _super.call(this, 'object unsubscribed');
        this.name = err.name = 'ObjectUnsubscribedError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return ObjectUnsubscribedError;
}(Error));
exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ },
/* 140 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./~/rxjs/util/UnsubscriptionError.js ***!
  \********************************************/
/***/ function(module, exports) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when one or more errors have occurred during the
 * `unsubscribe` of a {@link Subscription}.
 */
var UnsubscriptionError = (function (_super) {
    __extends(UnsubscriptionError, _super);
    function UnsubscriptionError(errors) {
        _super.call(this);
        this.errors = errors;
        var err = Error.call(this, errors ?
            errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n  ') : '');
        this.name = err.name = 'UnsubscriptionError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return UnsubscriptionError;
}(Error));
exports.UnsubscriptionError = UnsubscriptionError;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ },
/* 141 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ./~/rxjs/util/isArray.js ***!
  \********************************/
/***/ function(module, exports) {

"use strict";
"use strict";
exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
//# sourceMappingURL=isArray.js.map

/***/ },
/* 142 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./~/rxjs/util/isObject.js ***!
  \*********************************/
/***/ function(module, exports) {

"use strict";
"use strict";
function isObject(x) {
    return x != null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ },
/* 143 */
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./~/rxjs/util/toSubscriber.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ 83);
var rxSubscriber_1 = __webpack_require__(/*! ../symbol/rxSubscriber */ 47);
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.$$rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.$$rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber();
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ },
/* 144 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./~/rxjs/util/tryCatch.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var errorObject_1 = __webpack_require__(/*! ./errorObject */ 84);
var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        errorObject_1.errorObject.e = e;
        return errorObject_1.errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
exports.tryCatch = tryCatch;
;
//# sourceMappingURL=tryCatch.js.map

/***/ },
/* 145 */
/* unknown exports provided */
/* all exports used */
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = __webpack_require__(/*! @angular/core */ 1);
var common_1 = __webpack_require__(/*! @angular/common */ 86);
var sample_component_1 = __webpack_require__(/*! ./src/sample.component */ 22);
var sample_directive_1 = __webpack_require__(/*! ./src/sample.directive */ 23);
var sample_pipe_1 = __webpack_require__(/*! ./src/sample.pipe */ 24);
var sample_service_1 = __webpack_require__(/*! ./src/sample.service */ 25);
__export(__webpack_require__(/*! ./src/sample.component */ 22));
__export(__webpack_require__(/*! ./src/sample.directive */ 23));
__export(__webpack_require__(/*! ./src/sample.pipe */ 24));
__export(__webpack_require__(/*! ./src/sample.service */ 25));
var LibraryModule = (function () {
    function LibraryModule() {
    }
    LibraryModule.forRoot = function () {
        return {
            ngModule: LibraryModule,
            providers: [sample_service_1.SampleService]
        };
    };
    LibraryModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                sample_component_1.SampleComponent,
                sample_directive_1.SampleDirective,
                sample_pipe_1.SamplePipe
            ],
            exports: [
                sample_component_1.SampleComponent,
                sample_directive_1.SampleDirective,
                sample_pipe_1.SamplePipe
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], LibraryModule);
    return LibraryModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LibraryModule;


/***/ }
/******/ ]);
});
//# sourceMappingURL=bundle.map