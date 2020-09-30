module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/TwoUp.js":
/*!*****************************!*\
  !*** ./components/TwoUp.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TwoUp; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Box */ \"@material-ui/core/Box\");\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/denis/nextPWA/swip/components/TwoUp.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"];\n\n\nfunction TwoUp() {\n  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, \" 2 UP\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1R3b1VwLmpzPzYzMGEiXSwibmFtZXMiOlsiVHdvVXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBZ0I7QUFDM0IsU0FDSSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUdIIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Ud29VcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHdvVXAoKXtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94PiAyIFVQPC9Cb3g+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TwoUp.js\n");

/***/ }),

/***/ "./components/card.js":
/*!****************************!*\
  !*** ./components/card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_spring_hooks_cjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring/hooks.cjs */ \"react-spring/hooks.cjs\");\n/* harmony import */ var react_spring_hooks_cjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spring_hooks_cjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nuka_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nuka-carousel */ \"nuka-carousel\");\n/* harmony import */ var nuka_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nuka_carousel__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/denis/nextPWA/swip/components/card.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\nconst Card = ({\n  i,\n  x,\n  y,\n  rot,\n  scale,\n  trans,\n  bind,\n  data\n}) => {\n  const {\n    name,\n    age,\n    distance,\n    text,\n    pics\n  } = data[i];\n  return __jsx(react_spring_hooks_cjs__WEBPACK_IMPORTED_MODULE_1__[\"animated\"].div, {\n    key: i,\n    style: {\n      transform: Object(react_spring_hooks_cjs__WEBPACK_IMPORTED_MODULE_1__[\"interpolate\"])([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`)\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(react_spring_hooks_cjs__WEBPACK_IMPORTED_MODULE_1__[\"animated\"].div, _extends({}, bind(i), {\n    style: {\n      transform: Object(react_spring_hooks_cjs__WEBPACK_IMPORTED_MODULE_1__[\"interpolate\"])([rot, scale], trans)\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"card\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx(nuka_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }\n  }, pics.map((pic, index) => __jsx(\"img\", {\n    src: pic,\n    key: index,\n    alt: \"profilePicture\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 15\n    }\n  }))), __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }, name, \",\"), __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }, age), __jsx(\"h5\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, distance), __jsx(\"h5\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, text))));\n};\n\nCard.propTypes = {\n  name: prop_types__WEBPACK_IMPORTED_MODULE_3__[\"string\"],\n  age: prop_types__WEBPACK_IMPORTED_MODULE_3__[\"number\"],\n  distance: prop_types__WEBPACK_IMPORTED_MODULE_3__[\"string\"],\n  text: prop_types__WEBPACK_IMPORTED_MODULE_3__[\"string\"],\n  pics: prop_types__WEBPACK_IMPORTED_MODULE_3__[\"array\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcmQuanM/NTFlMCJdLCJuYW1lcyI6WyJDYXJkIiwiaSIsIngiLCJ5Iiwicm90Iiwic2NhbGUiLCJ0cmFucyIsImJpbmQiLCJkYXRhIiwibmFtZSIsImFnZSIsImRpc3RhbmNlIiwidGV4dCIsInBpY3MiLCJ0cmFuc2Zvcm0iLCJpbnRlcnBvbGF0ZSIsIm1hcCIsInBpYyIsImluZGV4IiwicHJvcFR5cGVzIiwic3RyaW5nIiwibnVtYmVyIiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBRUMsR0FBRjtBQUFLQyxHQUFMO0FBQVFDLEdBQVI7QUFBV0MsS0FBWDtBQUFnQkMsT0FBaEI7QUFBdUJDLE9BQXZCO0FBQThCQyxNQUE5QjtBQUFvQ0M7QUFBcEMsQ0FBRCxLQUFnRDtBQUMzRCxRQUFNO0FBQUVDLFFBQUY7QUFBUUMsT0FBUjtBQUFhQyxZQUFiO0FBQXVCQyxRQUF2QjtBQUE2QkM7QUFBN0IsTUFBc0NMLElBQUksQ0FBQ1AsQ0FBRCxDQUFoRDtBQUVBLFNBQ0UsTUFBQywrREFBRCxDQUFVLEdBQVY7QUFDRSxPQUFHLEVBQUVBLENBRFA7QUFFRSxTQUFLLEVBQUU7QUFDTGEsZUFBUyxFQUFFQywwRUFBVyxDQUNwQixDQUFDYixDQUFELEVBQUlDLENBQUosQ0FEb0IsRUFFcEIsQ0FBQ0QsQ0FBRCxFQUFJQyxDQUFKLEtBQVcsZUFBY0QsQ0FBRSxNQUFLQyxDQUFFLE9BRmQ7QUFEakIsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUUsTUFBQywrREFBRCxDQUFVLEdBQVYsZUFDTUksSUFBSSxDQUFDTixDQUFELENBRFY7QUFFRSxTQUFLLEVBQUU7QUFDTGEsZUFBUyxFQUFFQywwRUFBVyxDQUFDLENBQUNYLEdBQUQsRUFBTUMsS0FBTixDQUFELEVBQWVDLEtBQWY7QUFEakIsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dPLElBQUksQ0FBQ0csR0FBTCxDQUFTLENBQUNDLEdBQUQsRUFBTUMsS0FBTixLQUNSO0FBQUssT0FBRyxFQUFFRCxHQUFWO0FBQWUsT0FBRyxFQUFFQyxLQUFwQjtBQUEyQixPQUFHLEVBQUMsZ0JBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURILENBREYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtULElBQUwsTUFORixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0MsR0FBTCxDQVBGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLQyxRQUFMLENBUkYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtDLElBQUwsQ0FURixDQUxGLENBUkYsQ0FERjtBQTRCRCxDQS9CRDs7QUFpQ0FaLElBQUksQ0FBQ21CLFNBQUwsR0FBaUI7QUFDZlYsTUFBSSxFQUFFVyxpREFEUztBQUVmVixLQUFHLEVBQUVXLGlEQUZVO0FBR2ZWLFVBQVEsRUFBRVMsaURBSEs7QUFJZlIsTUFBSSxFQUFFUSxpREFKUztBQUtmUCxNQUFJLEVBQUVTLGdEQUFLQTtBQUxJLENBQWpCO0FBUWV0QixtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGFuaW1hdGVkLCBpbnRlcnBvbGF0ZSB9IGZyb20gJ3JlYWN0LXNwcmluZy9ob29rcy5janMnXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnbnVrYS1jYXJvdXNlbCdcbmltcG9ydCB7IHN0cmluZywgbnVtYmVyLCBhcnJheSB9IGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IENhcmQgPSAoeyBpLCB4LCB5LCByb3QsIHNjYWxlLCB0cmFucywgYmluZCwgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgYWdlLCBkaXN0YW5jZSwgdGV4dCwgcGljcyB9ID0gZGF0YVtpXVxuXG4gIHJldHVybiAoXG4gICAgPGFuaW1hdGVkLmRpdlxuICAgICAga2V5PXtpfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgdHJhbnNmb3JtOiBpbnRlcnBvbGF0ZShcbiAgICAgICAgICBbeCwgeV0sXG4gICAgICAgICAgKHgsIHkpID0+IGB0cmFuc2xhdGUzZCgke3h9cHgsJHt5fXB4LDApYFxuICAgICAgICApLFxuICAgICAgfX0+XG4gICAgICA8YW5pbWF0ZWQuZGl2XG4gICAgICAgIHsuLi5iaW5kKGkpfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHRyYW5zZm9ybTogaW50ZXJwb2xhdGUoW3JvdCwgc2NhbGVdLCB0cmFucyksXG4gICAgICAgIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICA8Q2Fyb3VzZWw+XG4gICAgICAgICAgICB7cGljcy5tYXAoKHBpYywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGltZyBzcmM9e3BpY30ga2V5PXtpbmRleH0gYWx0PVwicHJvZmlsZVBpY3R1cmVcIiAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICA8aDI+e25hbWV9LDwvaDI+XG4gICAgICAgICAgPGgyPnthZ2V9PC9oMj5cbiAgICAgICAgICA8aDU+e2Rpc3RhbmNlfTwvaDU+XG4gICAgICAgICAgPGg1Pnt0ZXh0fTwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hbmltYXRlZC5kaXY+XG4gICAgPC9hbmltYXRlZC5kaXY+XG4gIClcbn1cblxuQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIG5hbWU6IHN0cmluZyxcbiAgYWdlOiBudW1iZXIsXG4gIGRpc3RhbmNlOiBzdHJpbmcsXG4gIHRleHQ6IHN0cmluZyxcbiAgcGljczogYXJyYXksXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/card.js\n");

/***/ }),

/***/ "./components/simplebottomnavigation.js":
/*!**********************************************!*\
  !*** ./components/simplebottomnavigation.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SimpleBottomNavigation; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/BottomNavigation */ \"@material-ui/core/BottomNavigation\");\n/* harmony import */ var _material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/BottomNavigationAction */ \"@material-ui/core/BottomNavigationAction\");\n/* harmony import */ var _material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_icons_Restore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Restore */ \"@material-ui/icons/Restore\");\n/* harmony import */ var _material_ui_icons_Restore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Restore__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Favorite */ \"@material-ui/icons/Favorite\");\n/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/LocationOn */ \"@material-ui/icons/LocationOn\");\n/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/home/denis/nextPWA/swip/components/simplebottomnavigation.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"];\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])({\n  root: {\n    width: 500\n  }\n});\nfunction SimpleBottomNavigation() {\n  const classes = useStyles();\n  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"](0);\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_BottomNavigation__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    showLabels: true,\n    value: value,\n    onChange: (event, newValue) => {\n      setValue(newValue);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    label: \"Log in\",\n    icon: __jsx(_material_ui_icons_Restore__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 54\n      }\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    label: \"Sign in\",\n    icon: __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 55\n      }\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core_BottomNavigationAction__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    label: \"About\",\n    icon: __jsx(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 53\n      }\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  })));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpbXBsZWJvdHRvbW5hdmlnYXRpb24uanM/YmRmZCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsIndpZHRoIiwiU2ltcGxlQm90dG9tTmF2aWdhdGlvbiIsImNsYXNzZXMiLCJ2YWx1ZSIsInNldFZhbHVlIiwiUmVhY3QiLCJldmVudCIsIm5ld1ZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUMzQkMsTUFBSSxFQUFFO0FBQ0pDLFNBQUssRUFBRTtBQURIO0FBRHFCLENBQUQsQ0FBNUI7QUFNZSxTQUFTQyxzQkFBVCxHQUFrQztBQUMvQyxRQUFNQyxPQUFPLEdBQUdMLFNBQVMsRUFBekI7QUFDQSxRQUFNLENBQUNNLEtBQUQsRUFBUUMsUUFBUixJQUFvQkMsOENBQUEsQ0FBZSxDQUFmLENBQTFCO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBRUgsT0FBTyxDQUFDSCxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5RUFBRDtBQUNFLGNBQVUsTUFEWjtBQUVFLFNBQUssRUFBRUksS0FGVDtBQUdFLFlBQVEsRUFBRSxDQUFDRyxLQUFELEVBQVFDLFFBQVIsS0FBcUI7QUFDN0JILGNBQVEsQ0FBQ0csUUFBRCxDQUFSO0FBQ0QsS0FMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0UsTUFBQywrRUFBRDtBQUF3QixTQUFLLEVBQUMsUUFBOUI7QUFBdUMsUUFBSSxFQUFFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFRRSxNQUFDLCtFQUFEO0FBQXdCLFNBQUssRUFBQyxTQUE5QjtBQUF3QyxRQUFJLEVBQUUsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFLE1BQUMsK0VBQUQ7QUFBd0IsU0FBSyxFQUFDLE9BQTlCO0FBQXNDLFFBQUksRUFBRSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLENBREYsQ0FERjtBQWVEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zaW1wbGVib3R0b21uYXZpZ2F0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQm90dG9tTmF2aWdhdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3R0b21OYXZpZ2F0aW9uJztcbmltcG9ydCBCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JvdHRvbU5hdmlnYXRpb25BY3Rpb24nO1xuaW1wb3J0IFJlc3RvcmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SZXN0b3JlJztcbmltcG9ydCBGYXZvcml0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Zhdm9yaXRlJztcbmltcG9ydCBMb2NhdGlvbk9uSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYXRpb25Pbic7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICByb290OiB7XG4gICAgd2lkdGg6IDUwMCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1wbGVCb3R0b21OYXZpZ2F0aW9uKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoMCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxCb3R0b21OYXZpZ2F0aW9uXG4gICAgICAgIHNob3dMYWJlbHNcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xuICAgICAgICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEJvdHRvbU5hdmlnYXRpb25BY3Rpb24gbGFiZWw9XCJMb2cgaW5cIiBpY29uPXs8UmVzdG9yZUljb24gLz59IC8+XG4gICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGxhYmVsPVwiU2lnbiBpblwiIGljb249ezxGYXZvcml0ZUljb24gLz59IC8+XG4gICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGxhYmVsPVwiQWJvdXRcIiBpY29uPXs8TG9jYXRpb25Pbkljb24gLz59IC8+XG4gICAgICA8L0JvdHRvbU5hdmlnYXRpb24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/simplebottomnavigation.js\n");

/***/ }),

/***/ "./pages/api/data.js":
/*!***************************!*\
  !*** ./pages/api/data.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  pics: ['https://images.unsplash.com/photo-1514924801778-1db0aba75e9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'],\n  name: 'Chloe',\n  age: 29,\n  distance: '3 miles away',\n  text: 'I keep calling the plumber round, and he keeps fixing stuff. Where am I going wrong?'\n}, {\n  pics: ['https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80', 'https://images.unsplash.com/photo-1532635270-c09dac425ca9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'],\n  name: 'Jane',\n  age: 22,\n  distance: '2 miles away',\n  text: \"On the first date I will carve our initials in a tree. It's the most romantic way to let you know I have a knife.\"\n}, {\n  pics: ['https://images.unsplash.com/photo-1584287981937-67ab60932edf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'],\n  name: 'Savannah',\n  age: 18,\n  distance: '1 mile away',\n  text: 'A little known fact is that I cover about 40% of Africa.'\n}, {\n  pics: ['https://images.unsplash.com/photo-1527628217451-b2414a1ee733?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', 'https://images.unsplash.com/photo-1546728150-b3cbeddb6f6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'],\n  name: 'Heather',\n  age: 32,\n  distance: '4 miles away',\n  text: 'Respiratory Therapy Student. Cute enough to take your breath away, smart enough to bring it back'\n}]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZGF0YS5qcz9mMDU1Il0sIm5hbWVzIjpbInBpY3MiLCJuYW1lIiwiYWdlIiwiZGlzdGFuY2UiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFlLGdFQUNiO0FBQ0VBLE1BQUksRUFBRSxDQUNKLHVJQURJLENBRFI7QUFJRUMsTUFBSSxFQUFFLE9BSlI7QUFLRUMsS0FBRyxFQUFFLEVBTFA7QUFNRUMsVUFBUSxFQUFFLGNBTlo7QUFPRUMsTUFBSSxFQUNGO0FBUkosQ0FEYSxFQVdiO0FBQ0VKLE1BQUksRUFBRSxDQUNKLHVJQURJLEVBRUosb0lBRkksQ0FEUjtBQUtFQyxNQUFJLEVBQUUsTUFMUjtBQU1FQyxLQUFHLEVBQUUsRUFOUDtBQU9FQyxVQUFRLEVBQUUsY0FQWjtBQVFFQyxNQUFJLEVBQ0Y7QUFUSixDQVhhLEVBc0JiO0FBQ0VKLE1BQUksRUFBRSxDQUNKLHVJQURJLENBRFI7QUFJRUMsTUFBSSxFQUFFLFVBSlI7QUFLRUMsS0FBRyxFQUFFLEVBTFA7QUFNRUMsVUFBUSxFQUFFLGFBTlo7QUFPRUMsTUFBSSxFQUFFO0FBUFIsQ0F0QmEsRUErQmI7QUFDRUosTUFBSSxFQUFFLENBQ0osdUlBREksRUFFSixvSUFGSSxDQURSO0FBS0VDLE1BQUksRUFBRSxTQUxSO0FBTUVDLEtBQUcsRUFBRSxFQU5QO0FBT0VDLFVBQVEsRUFBRSxjQVBaO0FBUUVDLE1BQUksRUFDRjtBQVRKLENBL0JhLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvZGF0YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIHBpY3M6IFtcbiAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxNDkyNDgwMTc3OC0xZGIwYWJhNzVlOWI/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTkzNCZxPTgwJyxcbiAgICBdLFxuICAgIG5hbWU6ICdDaGxvZScsXG4gICAgYWdlOiAyOSxcbiAgICBkaXN0YW5jZTogJzMgbWlsZXMgYXdheScsXG4gICAgdGV4dDpcbiAgICAgICdJIGtlZXAgY2FsbGluZyB0aGUgcGx1bWJlciByb3VuZCwgYW5kIGhlIGtlZXBzIGZpeGluZyBzdHVmZi4gV2hlcmUgYW0gSSBnb2luZyB3cm9uZz8nLFxuICB9LFxuICB7XG4gICAgcGljczogW1xuICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDU2ODg1Mjg0NDQ3LTdkZDRiYjg3MjBiZj9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9OTM0JnE9ODAnLFxuICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTMyNjM1MjcwLWMwOWRhYzQyNWNhOT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9OTM0JnE9ODAnLFxuICAgIF0sXG4gICAgbmFtZTogJ0phbmUnLFxuICAgIGFnZTogMjIsXG4gICAgZGlzdGFuY2U6ICcyIG1pbGVzIGF3YXknLFxuICAgIHRleHQ6XG4gICAgICBcIk9uIHRoZSBmaXJzdCBkYXRlIEkgd2lsbCBjYXJ2ZSBvdXIgaW5pdGlhbHMgaW4gYSB0cmVlLiBJdCdzIHRoZSBtb3N0IHJvbWFudGljIHdheSB0byBsZXQgeW91IGtub3cgSSBoYXZlIGEga25pZmUuXCIsXG4gIH0sXG4gIHtcbiAgICBwaWNzOiBbXG4gICAgICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1ODQyODc5ODE5MzctNjdhYjYwOTMyZWRmP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz04MDAmcT02MCcsXG4gICAgXSxcbiAgICBuYW1lOiAnU2F2YW5uYWgnLFxuICAgIGFnZTogMTgsXG4gICAgZGlzdGFuY2U6ICcxIG1pbGUgYXdheScsXG4gICAgdGV4dDogJ0EgbGl0dGxlIGtub3duIGZhY3QgaXMgdGhhdCBJIGNvdmVyIGFib3V0IDQwJSBvZiBBZnJpY2EuJyxcbiAgfSxcbiAge1xuICAgIHBpY3M6IFtcbiAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUyNzYyODIxNzQ1MS1iMjQxNGExZWU3MzM/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTgwMCZxPTYwJyxcbiAgICAgICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU0NjcyODE1MC1iM2NiZWRkYjZmNmQ/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTgwMCZxPTYwJyxcbiAgICBdLFxuICAgIG5hbWU6ICdIZWF0aGVyJyxcbiAgICBhZ2U6IDMyLFxuICAgIGRpc3RhbmNlOiAnNCBtaWxlcyBhd2F5JyxcbiAgICB0ZXh0OlxuICAgICAgJ1Jlc3BpcmF0b3J5IFRoZXJhcHkgU3R1ZGVudC4gQ3V0ZSBlbm91Z2ggdG8gdGFrZSB5b3VyIGJyZWF0aCBhd2F5LCBzbWFydCBlbm91Z2ggdG8gYnJpbmcgaXQgYmFjaycsXG4gIH0sXG5dXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/data.js\n");

/***/ }),

/***/ "./pages/cards/tindercard.js":
/*!***********************************!*\
  !*** ./pages/cards/tindercard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_spring_hooks_cjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring/hooks.cjs */ \"react-spring/hooks.cjs\");\n/* harmony import */ var react_spring_hooks_cjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spring_hooks_cjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_with_gesture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-with-gesture */ \"react-with-gesture\");\n/* harmony import */ var react_with_gesture__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_with_gesture__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/card */ \"./components/card.js\");\n/* harmony import */ var _api_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/data */ \"./pages/api/data.js\");\nvar _jsxFileName = \"/home/denis/nextPWA/swip/pages/cards/tindercard.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nconst to = i => ({\n  x: i * -5,\n  y: 0,\n  scale: 1,\n  rot: 0,\n  //   rot: -10 + Math.random() * 20,\n  delay: i * 100\n});\n\nconst from = i => ({\n  rot: 0,\n  scale: 1.5,\n  y: -1000\n});\n\nconst trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;\n\nfunction Deck() {\n  const {\n    0: gone\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(() => new Set());\n  const [props, set] = Object(react_spring_hooks_cjs__WEBPACK_IMPORTED_MODULE_1__[\"useSprings\"])(_api_data__WEBPACK_IMPORTED_MODULE_4__[\"default\"].length, i => _objectSpread(_objectSpread({}, to(i)), {}, {\n    from: from(i)\n  }));\n  const bind = Object(react_with_gesture__WEBPACK_IMPORTED_MODULE_2__[\"useGesture\"])(({\n    args: [index],\n    down,\n    delta: [xDelta],\n    distance,\n    direction: [xDir],\n    velocity\n  }) => {\n    const trigger = velocity > 0.2;\n    const dir = xDir < 0 ? -1 : 1;\n    if (!down && trigger) gone.add(index);\n    set(i => {\n      if (index !== i) return;\n      const isGone = gone.has(index);\n      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;\n      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);\n      const scale = down ? 1.1 : 1;\n      return {\n        x,\n        rot,\n        scale,\n        delay: undefined,\n        config: {\n          friction: 50,\n          tension: down ? 800 : isGone ? 200 : 500\n        }\n      };\n    });\n    if (!down && gone.size === _api_data__WEBPACK_IMPORTED_MODULE_4__[\"default\"].length) setTimeout(() => gone.clear() || set(i => to(i)), 600);\n  });\n  return props.map(({\n    x,\n    y,\n    rot,\n    scale\n  }, i) => __jsx(_components_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    key: i,\n    i: i,\n    x: x,\n    y: y,\n    rot: rot,\n    scale: scale,\n    trans: trans,\n    data: _api_data__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    bind: bind,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 5\n    }\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Deck);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jYXJkcy90aW5kZXJjYXJkLmpzP2U1MGIiXSwibmFtZXMiOlsidG8iLCJpIiwieCIsInkiLCJzY2FsZSIsInJvdCIsImRlbGF5IiwiZnJvbSIsInRyYW5zIiwiciIsInMiLCJEZWNrIiwiZ29uZSIsInVzZVN0YXRlIiwiU2V0IiwicHJvcHMiLCJzZXQiLCJ1c2VTcHJpbmdzIiwiZGF0YSIsImxlbmd0aCIsImJpbmQiLCJ1c2VHZXN0dXJlIiwiYXJncyIsImluZGV4IiwiZG93biIsImRlbHRhIiwieERlbHRhIiwiZGlzdGFuY2UiLCJkaXJlY3Rpb24iLCJ4RGlyIiwidmVsb2NpdHkiLCJ0cmlnZ2VyIiwiZGlyIiwiYWRkIiwiaXNHb25lIiwiaGFzIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInVuZGVmaW5lZCIsImNvbmZpZyIsImZyaWN0aW9uIiwidGVuc2lvbiIsInNpemUiLCJzZXRUaW1lb3V0IiwiY2xlYXIiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsRUFBRSxHQUFJQyxDQUFELEtBQVE7QUFDakJDLEdBQUMsRUFBRUQsQ0FBQyxHQUFHLENBQUMsQ0FEUztBQUVqQkUsR0FBQyxFQUFFLENBRmM7QUFHakJDLE9BQUssRUFBRSxDQUhVO0FBSWpCQyxLQUFHLEVBQUUsQ0FKWTtBQUtqQjtBQUNBQyxPQUFLLEVBQUVMLENBQUMsR0FBRztBQU5NLENBQVIsQ0FBWDs7QUFRQSxNQUFNTSxJQUFJLEdBQUlOLENBQUQsS0FBUTtBQUFFSSxLQUFHLEVBQUUsQ0FBUDtBQUFVRCxPQUFLLEVBQUUsR0FBakI7QUFBc0JELEdBQUMsRUFBRSxDQUFDO0FBQTFCLENBQVIsQ0FBYjs7QUFFQSxNQUFNSyxLQUFLLEdBQUcsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEtBQ1gsOENBQ0NELENBQUMsR0FBRyxFQUNMLGdCQUFlQSxDQUFFLGNBQWFDLENBQUUs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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU3ByaW5ncyB9IGZyb20gJ3JlYWN0LXNwcmluZy9ob29rcy5janMnXG5pbXBvcnQgeyB1c2VHZXN0dXJlIH0gZnJvbSAncmVhY3Qtd2l0aC1nZXN0dXJlJ1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jYXJkJ1xuaW1wb3J0IGRhdGEgZnJvbSAnLi4vYXBpL2RhdGEnXG5cbmNvbnN0IHRvID0gKGkpID0+ICh7XG4gIHg6IGkgKiAtNSxcbiAgeTogMCxcbiAgc2NhbGU6IDEsXG4gIHJvdDogMCxcbiAgLy8gICByb3Q6IC0xMCArIE1hdGgucmFuZG9tKCkgKiAyMCxcbiAgZGVsYXk6IGkgKiAxMDAsXG59KVxuY29uc3QgZnJvbSA9IChpKSA9PiAoeyByb3Q6IDAsIHNjYWxlOiAxLjUsIHk6IC0xMDAwIH0pXG5cbmNvbnN0IHRyYW5zID0gKHIsIHMpID0+XG4gIGBwZXJzcGVjdGl2ZSgxNTAwcHgpIHJvdGF0ZVgoMzBkZWcpIHJvdGF0ZVkoJHtcbiAgICByIC8gMTBcbiAgfWRlZykgcm90YXRlWigke3J9ZGVnKSBzY2FsZSgke3N9KWBcblxuZnVuY3Rpb24gRGVjaygpIHtcbiAgY29uc3QgW2dvbmVdID0gdXNlU3RhdGUoKCkgPT4gbmV3IFNldCgpKVxuXG4gIGNvbnN0IFtwcm9wcywgc2V0XSA9IHVzZVNwcmluZ3MoZGF0YS5sZW5ndGgsIChpKSA9PiAoe1xuICAgIC4uLnRvKGkpLFxuICAgIGZyb206IGZyb20oaSksXG4gIH0pKVxuXG4gIGNvbnN0IGJpbmQgPSB1c2VHZXN0dXJlKFxuICAgICh7XG4gICAgICBhcmdzOiBbaW5kZXhdLFxuICAgICAgZG93bixcbiAgICAgIGRlbHRhOiBbeERlbHRhXSxcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgZGlyZWN0aW9uOiBbeERpcl0sXG4gICAgICB2ZWxvY2l0eSxcbiAgICB9KSA9PiB7XG4gICAgICBjb25zdCB0cmlnZ2VyID0gdmVsb2NpdHkgPiAwLjJcblxuICAgICAgY29uc3QgZGlyID0geERpciA8IDAgPyAtMSA6IDFcblxuICAgICAgaWYgKCFkb3duICYmIHRyaWdnZXIpIGdvbmUuYWRkKGluZGV4KVxuXG4gICAgICBzZXQoKGkpID0+IHtcbiAgICAgICAgaWYgKGluZGV4ICE9PSBpKSByZXR1cm5cbiAgICAgICAgY29uc3QgaXNHb25lID0gZ29uZS5oYXMoaW5kZXgpXG5cbiAgICAgICAgY29uc3QgeCA9IGlzR29uZSA/ICgyMDAgKyB3aW5kb3cuaW5uZXJXaWR0aCkgKiBkaXIgOiBkb3duID8geERlbHRhIDogMFxuXG4gICAgICAgIGNvbnN0IHJvdCA9IHhEZWx0YSAvIDEwMCArIChpc0dvbmUgPyBkaXIgKiAxMCAqIHZlbG9jaXR5IDogMClcblxuICAgICAgICBjb25zdCBzY2FsZSA9IGRvd24gPyAxLjEgOiAxXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgeCxcbiAgICAgICAgICByb3QsXG4gICAgICAgICAgc2NhbGUsXG4gICAgICAgICAgZGVsYXk6IHVuZGVmaW5lZCxcbiAgICAgICAgICBjb25maWc6IHsgZnJpY3Rpb246IDUwLCB0ZW5zaW9uOiBkb3duID8gODAwIDogaXNHb25lID8gMjAwIDogNTAwIH0sXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGlmICghZG93biAmJiBnb25lLnNpemUgPT09IGRhdGEubGVuZ3RoKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGdvbmUuY2xlYXIoKSB8fCBzZXQoKGkpID0+IHRvKGkpKSwgNjAwKVxuICAgIH1cbiAgKVxuXG4gIHJldHVybiBwcm9wcy5tYXAoKHsgeCwgeSwgcm90LCBzY2FsZSB9LCBpKSA9PiAoXG4gICAgPENhcmRcbiAgICAgIGtleT17aX1cbiAgICAgIGk9e2l9XG4gICAgICB4PXt4fVxuICAgICAgeT17eX1cbiAgICAgIHJvdD17cm90fVxuICAgICAgc2NhbGU9e3NjYWxlfVxuICAgICAgdHJhbnM9e3RyYW5zfVxuICAgICAgZGF0YT17ZGF0YX1cbiAgICAgIGJpbmQ9e2JpbmR9XG4gICAgLz5cbiAgKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVja1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/cards/tindercard.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Container */ \"@material-ui/core/Container\");\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Box */ \"@material-ui/core/Box\");\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_simplebottomnavigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/simplebottomnavigation */ \"./components/simplebottomnavigation.js\");\n/* harmony import */ var _components_TwoUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TwoUp */ \"./components/TwoUp.js\");\n/* harmony import */ var _pages_cards_tindercard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/cards/tindercard */ \"./pages/cards/tindercard.js\");\nvar _jsxFileName = \"/home/denis/nextPWA/swip/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n // import ProTip from '../src/ProTip';\n// import Link from '../src/Link';\n// import Copyright from '../src/Copyright';\n// import '../styles/deck.css'\n\nfunction Index() {\n  return __jsx(_pages_cards_tindercard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }) // <Container maxWidth=\"sm\">\n  //   <Box my={4}>\n  //     <TwoUp />\n  //     <SimpleBottomNavigation />\n  //   </Box>\n  // </Container>\n  ;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQzlCLFNBQ0UsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FFRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQRjtBQVNEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcidcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknXG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCdcbmltcG9ydCBTaW1wbGVCb3R0b21OYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvc2ltcGxlYm90dG9tbmF2aWdhdGlvbidcbmltcG9ydCBUd29VcCBmcm9tICcuLi9jb21wb25lbnRzL1R3b1VwJ1xuaW1wb3J0IERlY2sgZnJvbSAnLi4vcGFnZXMvY2FyZHMvdGluZGVyY2FyZCdcbi8vIGltcG9ydCBQcm9UaXAgZnJvbSAnLi4vc3JjL1Byb1RpcCc7XG4vLyBpbXBvcnQgTGluayBmcm9tICcuLi9zcmMvTGluayc7XG4vLyBpbXBvcnQgQ29weXJpZ2h0IGZyb20gJy4uL3NyYy9Db3B5cmlnaHQnO1xuLy8gaW1wb3J0ICcuLi9zdHlsZXMvZGVjay5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxEZWNrIC8+XG4gICAgLy8gPENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCI+XG4gICAgLy8gICA8Qm94IG15PXs0fT5cbiAgICAvLyAgICAgPFR3b1VwIC8+XG4gICAgLy8gICAgIDxTaW1wbGVCb3R0b21OYXZpZ2F0aW9uIC8+XG4gICAgLy8gICA8L0JveD5cbiAgICAvLyA8L0NvbnRhaW5lcj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@material-ui/core/BottomNavigation":
/*!*****************************************************!*\
  !*** external "@material-ui/core/BottomNavigation" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/BottomNavigation\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3R0b21OYXZpZ2F0aW9uXCI/ZGFmOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9Cb3R0b21OYXZpZ2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQm90dG9tTmF2aWdhdGlvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/BottomNavigation\n");

/***/ }),

/***/ "@material-ui/core/BottomNavigationAction":
/*!***********************************************************!*\
  !*** external "@material-ui/core/BottomNavigationAction" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/BottomNavigationAction\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3R0b21OYXZpZ2F0aW9uQWN0aW9uXCI/MDU5NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9Cb3R0b21OYXZpZ2F0aW9uQWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQm90dG9tTmF2aWdhdGlvbkFjdGlvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/BottomNavigationAction\n");

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Box\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIj81MDZmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL0JveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Box\n");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Container\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIj8wODJmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Container\n");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI/MGJlYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Typography\n");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIj80MTAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/styles\n");

/***/ }),

/***/ "@material-ui/icons/Favorite":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Favorite" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Favorite\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGVcIj9iZjVjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Favorite\n");

/***/ }),

/***/ "@material-ui/icons/LocationOn":
/*!************************************************!*\
  !*** external "@material-ui/icons/LocationOn" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/LocationOn\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYXRpb25PblwiP2ExMjAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2ljb25zL0xvY2F0aW9uT24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYXRpb25PblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/LocationOn\n");

/***/ }),

/***/ "@material-ui/icons/Restore":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Restore" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Restore\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUmVzdG9yZVwiP2I1NjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2ljb25zL1Jlc3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUmVzdG9yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Restore\n");

/***/ }),

/***/ "nuka-carousel":
/*!********************************!*\
  !*** external "nuka-carousel" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nuka-carousel\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJudWthLWNhcm91c2VsXCI/ZTY0YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJudWthLWNhcm91c2VsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnVrYS1jYXJvdXNlbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///nuka-carousel\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-spring/hooks.cjs":
/*!*****************************************!*\
  !*** external "react-spring/hooks.cjs" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-spring/hooks.cjs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zcHJpbmcvaG9va3MuY2pzXCI/OGQwZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1zcHJpbmcvaG9va3MuY2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3ByaW5nL2hvb2tzLmNqc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-spring/hooks.cjs\n");

/***/ }),

/***/ "react-with-gesture":
/*!*************************************!*\
  !*** external "react-with-gesture" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-with-gesture\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC13aXRoLWdlc3R1cmVcIj9jODFiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LXdpdGgtZ2VzdHVyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXdpdGgtZ2VzdHVyZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-with-gesture\n");

/***/ })

/******/ });