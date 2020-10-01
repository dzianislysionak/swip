module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/cards/tindercard.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/card.js":
/*!****************************!*\
  !*** ./components/card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_spring_hooks_cjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring/hooks.cjs */ \"react-spring/hooks.cjs\");\n/* harmony import */ var react_spring_hooks_cjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spring_hooks_cjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nuka_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nuka-carousel */ \"nuka-carousel\");\n/* harmony import */ var nuka_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nuka_carousel__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/home/denis/nextPWA/swip/components/card.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\nconst Card = ({\n  i,\n  x,\n  y,\n  rot,\n  scale,\n  trans,\n  bind,\n  data\n}) => {\n  const {\n    name,\n    age,\n    distance,\n    text,\n    pics\n  } = data[i];\n  return (// <div>\n    __jsx(react_spring_hooks_cjs__WEBPACK_IMPORTED_MODULE_1__[\"animated\"].div, {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.toplevel,\n      key: i,\n      style: {\n        transform: Object(react_spring_hooks_cjs__WEBPACK_IMPORTED_MODULE_1__[\"interpolate\"])([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`)\n      },\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 5\n      }\n    }, __jsx(react_spring_hooks_cjs__WEBPACK_IMPORTED_MODULE_1__[\"animated\"].div, _extends({\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.twolevel\n    }, bind(i), {\n      style: {\n        transform: Object(react_spring_hooks_cjs__WEBPACK_IMPORTED_MODULE_1__[\"interpolate\"])([rot, scale], trans)\n      },\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 7\n      }\n    }), __jsx(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.threelevel,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }\n    }, __jsx(\"h2\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 11\n      }\n    }, name, \",\"), __jsx(\"h2\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 11\n      }\n    }, age), __jsx(\"h5\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 11\n      }\n    }, distance), __jsx(\"h5\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 11\n      }\n    }, text)))) // </div>\n\n  );\n};\n\nCard.propTypes = {\n  name: prop_types__WEBPACK_IMPORTED_MODULE_3__[\"string\"],\n  age: prop_types__WEBPACK_IMPORTED_MODULE_3__[\"number\"],\n  distance: prop_types__WEBPACK_IMPORTED_MODULE_3__[\"string\"],\n  text: prop_types__WEBPACK_IMPORTED_MODULE_3__[\"string\"],\n  pics: prop_types__WEBPACK_IMPORTED_MODULE_3__[\"array\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcmQuanM/NTFlMCJdLCJuYW1lcyI6WyJDYXJkIiwiaSIsIngiLCJ5Iiwicm90Iiwic2NhbGUiLCJ0cmFucyIsImJpbmQiLCJkYXRhIiwibmFtZSIsImFnZSIsImRpc3RhbmNlIiwidGV4dCIsInBpY3MiLCJzdHlsZXMiLCJ0b3BsZXZlbCIsInRyYW5zZm9ybSIsImludGVycG9sYXRlIiwidHdvbGV2ZWwiLCJ0aHJlZWxldmVsIiwicHJvcFR5cGVzIiwic3RyaW5nIiwibnVtYmVyIiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxDQUFDO0FBQUVDLEdBQUY7QUFBS0MsR0FBTDtBQUFRQyxHQUFSO0FBQVdDLEtBQVg7QUFBZ0JDLE9BQWhCO0FBQXVCQyxPQUF2QjtBQUE4QkMsTUFBOUI7QUFBb0NDO0FBQXBDLENBQUQsS0FBZ0Q7QUFDM0QsUUFBTTtBQUFFQyxRQUFGO0FBQVFDLE9BQVI7QUFBYUMsWUFBYjtBQUF1QkMsUUFBdkI7QUFBNkJDO0FBQTdCLE1BQXNDTCxJQUFJLENBQUNQLENBQUQsQ0FBaEQ7QUFFQSxTQUNFO0FBQ0EsVUFBQywrREFBRCxDQUFVLEdBQVY7QUFDRSxlQUFTLEVBQUVhLDhEQUFNLENBQUNDLFFBRHBCO0FBRUUsU0FBRyxFQUFFZCxDQUZQO0FBR0UsV0FBSyxFQUFFO0FBQ0xlLGlCQUFTLEVBQUVDLDBFQUFXLENBQ3BCLENBQUNmLENBQUQsRUFBSUMsQ0FBSixDQURvQixFQUVwQixDQUFDRCxDQUFELEVBQUlDLENBQUosS0FBVyxlQUFjRCxDQUFFLE1BQUtDLENBQUUsT0FGZDtBQURqQixPQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FTRSxNQUFDLCtEQUFELENBQVUsR0FBVjtBQUNFLGVBQVMsRUFBRVcsOERBQU0sQ0FBQ0k7QUFEcEIsT0FFTVgsSUFBSSxDQUFDTixDQUFELENBRlY7QUFHRSxXQUFLLEVBQUU7QUFDTGUsaUJBQVMsRUFBRUMsMEVBQVcsQ0FBQyxDQUFDYixHQUFELEVBQU1DLEtBQU4sQ0FBRCxFQUFlQyxLQUFmO0FBRGpCLE9BSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU1FO0FBQUssZUFBUyxFQUFFUSw4REFBTSxDQUFDSyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLVixJQUFMLE1BTkYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtDLEdBQUwsQ0FQRixFQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0MsUUFBTCxDQVJGLEVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLQyxJQUFMLENBVEYsQ0FORixDQVRGLENBRkYsQ0E4QkU7O0FBOUJGO0FBZ0NELENBbkNEOztBQXFDQVosSUFBSSxDQUFDb0IsU0FBTCxHQUFpQjtBQUNmWCxNQUFJLEVBQUVZLGlEQURTO0FBRWZYLEtBQUcsRUFBRVksaURBRlU7QUFHZlgsVUFBUSxFQUFFVSxpREFISztBQUlmVCxNQUFJLEVBQUVTLGlEQUpTO0FBS2ZSLE1BQUksRUFBRVUsZ0RBQUtBO0FBTEksQ0FBakI7QUFRZXZCLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgYW5pbWF0ZWQsIGludGVycG9sYXRlIH0gZnJvbSAncmVhY3Qtc3ByaW5nL2hvb2tzLmNqcydcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdudWthLWNhcm91c2VsJ1xuaW1wb3J0IHsgc3RyaW5nLCBudW1iZXIsIGFycmF5IH0gZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuY29uc3QgQ2FyZCA9ICh7IGksIHgsIHksIHJvdCwgc2NhbGUsIHRyYW5zLCBiaW5kLCBkYXRhIH0pID0+IHtcbiAgY29uc3QgeyBuYW1lLCBhZ2UsIGRpc3RhbmNlLCB0ZXh0LCBwaWNzIH0gPSBkYXRhW2ldXG5cbiAgcmV0dXJuIChcbiAgICAvLyA8ZGl2PlxuICAgIDxhbmltYXRlZC5kaXZcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRvcGxldmVsfVxuICAgICAga2V5PXtpfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgdHJhbnNmb3JtOiBpbnRlcnBvbGF0ZShcbiAgICAgICAgICBbeCwgeV0sXG4gICAgICAgICAgKHgsIHkpID0+IGB0cmFuc2xhdGUzZCgke3h9cHgsJHt5fXB4LDApYFxuICAgICAgICApLFxuICAgICAgfX0+XG4gICAgICA8YW5pbWF0ZWQuZGl2XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnR3b2xldmVsfVxuICAgICAgICB7Li4uYmluZChpKX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0cmFuc2Zvcm06IGludGVycG9sYXRlKFtyb3QsIHNjYWxlXSwgdHJhbnMpLFxuICAgICAgICB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aHJlZWxldmVsfT5cbiAgICAgICAgICB7LyogPENhcm91c2VsPlxuICAgICAgICAgICAge3BpY3MubWFwKChwaWMsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtwaWN9IGtleT17aW5kZXh9IGFsdD1cInByb2ZpbGVQaWN0dXJlXCIgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQ2Fyb3VzZWw+ICovfVxuICAgICAgICAgIDxoMj57bmFtZX0sPC9oMj5cbiAgICAgICAgICA8aDI+e2FnZX08L2gyPlxuICAgICAgICAgIDxoNT57ZGlzdGFuY2V9PC9oNT5cbiAgICAgICAgICA8aDU+e3RleHR9PC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAvLyA8L2Rpdj5cbiAgKVxufVxuXG5DYXJkLnByb3BUeXBlcyA9IHtcbiAgbmFtZTogc3RyaW5nLFxuICBhZ2U6IG51bWJlcixcbiAgZGlzdGFuY2U6IHN0cmluZyxcbiAgdGV4dDogc3RyaW5nLFxuICBwaWNzOiBhcnJheSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/card.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_spring_hooks_cjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring/hooks.cjs */ \"react-spring/hooks.cjs\");\n/* harmony import */ var react_spring_hooks_cjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spring_hooks_cjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_with_gesture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-with-gesture */ \"react-with-gesture\");\n/* harmony import */ var react_with_gesture__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_with_gesture__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/card */ \"./components/card.js\");\n/* harmony import */ var _api_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/data */ \"./pages/api/data.js\");\nvar _jsxFileName = \"/home/denis/nextPWA/swip/pages/cards/tindercard.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nconst to = i => ({\n  // x: i * -5,\n  x: 0,\n  y: 0,\n  scale: 1,\n  rot: 0,\n  // rot: -10 + Math.random() * 20,\n  delay: i * 100\n});\n\nconst from = i => ({\n  rot: 0,\n  scale: 1.5,\n  y: -1000\n});\n\nconst trans = (r, s) => `perspective(1500px) rotateX(0deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;\n\nfunction Deck() {\n  const {\n    0: gone\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(() => new Set());\n  const [props, set] = Object(react_spring_hooks_cjs__WEBPACK_IMPORTED_MODULE_1__[\"useSprings\"])(_api_data__WEBPACK_IMPORTED_MODULE_4__[\"default\"].length, i => _objectSpread(_objectSpread({}, to(i)), {}, {\n    from: from(i)\n  }));\n  const bind = Object(react_with_gesture__WEBPACK_IMPORTED_MODULE_2__[\"useGesture\"])(({\n    args: [index],\n    down,\n    delta: [xDelta],\n    distance,\n    direction: [xDir],\n    velocity\n  }) => {\n    const trigger = velocity > 0.2;\n    const dir = xDir < 0 ? -1 : 1;\n    if (!down && trigger) gone.add(index);\n    set(i => {\n      if (index !== i) return;\n      const isGone = gone.has(index);\n      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;\n      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);\n      const scale = down ? 1.1 : 1;\n      return {\n        x,\n        rot,\n        scale,\n        delay: undefined,\n        config: {\n          friction: 50,\n          tension: down ? 800 : isGone ? 200 : 500\n        }\n      };\n    });\n    if (!down && gone.size === _api_data__WEBPACK_IMPORTED_MODULE_4__[\"default\"].length) setTimeout(() => gone.clear() || set(i => to(i)), 600);\n  });\n  return props.map(({\n    x,\n    y,\n    rot,\n    scale\n  }, i) => __jsx(_components_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    key: i,\n    i: i,\n    x: x,\n    y: y,\n    rot: rot,\n    scale: scale,\n    trans: trans,\n    data: _api_data__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    bind: bind,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 5\n    }\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Deck);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jYXJkcy90aW5kZXJjYXJkLmpzP2U1MGIiXSwibmFtZXMiOlsidG8iLCJpIiwieCIsInkiLCJzY2FsZSIsInJvdCIsImRlbGF5IiwiZnJvbSIsInRyYW5zIiwiciIsInMiLCJEZWNrIiwiZ29uZSIsInVzZVN0YXRlIiwiU2V0IiwicHJvcHMiLCJzZXQiLCJ1c2VTcHJpbmdzIiwiZGF0YSIsImxlbmd0aCIsImJpbmQiLCJ1c2VHZXN0dXJlIiwiYXJncyIsImluZGV4IiwiZG93biIsImRlbHRhIiwieERlbHRhIiwiZGlzdGFuY2UiLCJkaXJlY3Rpb24iLCJ4RGlyIiwidmVsb2NpdHkiLCJ0cmlnZ2VyIiwiZGlyIiwiYWRkIiwiaXNHb25lIiwiaGFzIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInVuZGVmaW5lZCIsImNvbmZpZyIsImZyaWN0aW9uIiwidGVuc2lvbiIsInNpemUiLCJzZXRUaW1lb3V0IiwiY2xlYXIiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsRUFBRSxHQUFJQyxDQUFELEtBQVE7QUFDakI7QUFDQUMsR0FBQyxFQUFFLENBRmM7QUFHakJDLEdBQUMsRUFBRSxDQUhjO0FBSWpCQyxPQUFLLEVBQUUsQ0FKVTtBQUtqQkMsS0FBRyxFQUFFLENBTFk7QUFNakI7QUFFQUMsT0FBSyxFQUFFTCxDQUFDLEdBQUc7QUFSTSxDQUFSLENBQVg7O0FBVUEsTUFBTU0sSUFBSSxHQUFJTixDQUFELEtBQVE7QUFBRUksS0FBRyxFQUFFLENBQVA7QUFBVUQsT0FBSyxFQUFFLEdBQWpCO0FBQXNCRCxHQUFDLEVBQUUsQ0FBQztBQUExQixDQUFSLENBQWI7O0FBRUEsTUFBTUssS0FBSyxHQUFHLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUNYLDZDQUNDRCxDQUFDLEdBQUcsRUFDTCxnQkFBZUEsQ0FBRSxjQUFhQyxDQUFFLEdBSG5DOztBQUtB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dGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNwcmluZ3MgfSBmcm9tICdyZWFjdC1zcHJpbmcvaG9va3MuY2pzJ1xuaW1wb3J0IHsgdXNlR2VzdHVyZSB9IGZyb20gJ3JlYWN0LXdpdGgtZ2VzdHVyZSdcbmltcG9ydCBDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY2FyZCdcbmltcG9ydCBkYXRhIGZyb20gJy4uL2FwaS9kYXRhJ1xuXG5jb25zdCB0byA9IChpKSA9PiAoe1xuICAvLyB4OiBpICogLTUsXG4gIHg6IDAsXG4gIHk6IDAsXG4gIHNjYWxlOiAxLFxuICByb3Q6IDAsXG4gIC8vIHJvdDogLTEwICsgTWF0aC5yYW5kb20oKSAqIDIwLFxuXG4gIGRlbGF5OiBpICogMTAwLFxufSlcbmNvbnN0IGZyb20gPSAoaSkgPT4gKHsgcm90OiAwLCBzY2FsZTogMS41LCB5OiAtMTAwMCB9KVxuXG5jb25zdCB0cmFucyA9IChyLCBzKSA9PlxuICBgcGVyc3BlY3RpdmUoMTUwMHB4KSByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoJHtcbiAgICByIC8gMTBcbiAgfWRlZykgcm90YXRlWigke3J9ZGVnKSBzY2FsZSgke3N9KWBcblxuZnVuY3Rpb24gRGVjaygpIHtcbiAgY29uc3QgW2dvbmVdID0gdXNlU3RhdGUoKCkgPT4gbmV3IFNldCgpKVxuXG4gIGNvbnN0IFtwcm9wcywgc2V0XSA9IHVzZVNwcmluZ3MoZGF0YS5sZW5ndGgsIChpKSA9PiAoe1xuICAgIC4uLnRvKGkpLFxuICAgIGZyb206IGZyb20oaSksXG4gIH0pKVxuXG4gIGNvbnN0IGJpbmQgPSB1c2VHZXN0dXJlKFxuICAgICh7XG4gICAgICBhcmdzOiBbaW5kZXhdLFxuICAgICAgZG93bixcbiAgICAgIGRlbHRhOiBbeERlbHRhXSxcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgZGlyZWN0aW9uOiBbeERpcl0sXG4gICAgICB2ZWxvY2l0eSxcbiAgICB9KSA9PiB7XG4gICAgICBjb25zdCB0cmlnZ2VyID0gdmVsb2NpdHkgPiAwLjJcblxuICAgICAgY29uc3QgZGlyID0geERpciA8IDAgPyAtMSA6IDFcblxuICAgICAgaWYgKCFkb3duICYmIHRyaWdnZXIpIGdvbmUuYWRkKGluZGV4KVxuXG4gICAgICBzZXQoKGkpID0+IHtcbiAgICAgICAgaWYgKGluZGV4ICE9PSBpKSByZXR1cm5cbiAgICAgICAgY29uc3QgaXNHb25lID0gZ29uZS5oYXMoaW5kZXgpXG5cbiAgICAgICAgY29uc3QgeCA9IGlzR29uZSA/ICgyMDAgKyB3aW5kb3cuaW5uZXJXaWR0aCkgKiBkaXIgOiBkb3duID8geERlbHRhIDogMFxuXG4gICAgICAgIGNvbnN0IHJvdCA9IHhEZWx0YSAvIDEwMCArIChpc0dvbmUgPyBkaXIgKiAxMCAqIHZlbG9jaXR5IDogMClcblxuICAgICAgICBjb25zdCBzY2FsZSA9IGRvd24gPyAxLjEgOiAxXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgeCxcbiAgICAgICAgICByb3QsXG4gICAgICAgICAgc2NhbGUsXG4gICAgICAgICAgZGVsYXk6IHVuZGVmaW5lZCxcbiAgICAgICAgICBjb25maWc6IHsgZnJpY3Rpb246IDUwLCB0ZW5zaW9uOiBkb3duID8gODAwIDogaXNHb25lID8gMjAwIDogNTAwIH0sXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGlmICghZG93biAmJiBnb25lLnNpemUgPT09IGRhdGEubGVuZ3RoKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGdvbmUuY2xlYXIoKSB8fCBzZXQoKGkpID0+IHRvKGkpKSwgNjAwKVxuICAgIH1cbiAgKVxuXG4gIHJldHVybiBwcm9wcy5tYXAoKHsgeCwgeSwgcm90LCBzY2FsZSB9LCBpKSA9PiAoXG4gICAgPENhcmRcbiAgICAgIGtleT17aX1cbiAgICAgIGk9e2l9XG4gICAgICB4PXt4fVxuICAgICAgeT17eX1cbiAgICAgIHJvdD17cm90fVxuICAgICAgc2NhbGU9e3NjYWxlfVxuICAgICAgdHJhbnM9e3RyYW5zfVxuICAgICAgZGF0YT17ZGF0YX1cbiAgICAgIGJpbmQ9e2JpbmR9XG4gICAgLz5cbiAgKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVja1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/cards/tindercard.js\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"toplevel\": \"Home_toplevel__JDEK1\",\n\t\"twolevel\": \"Home_twolevel__6oOUV\",\n\t\"threelevel\": \"Home_threelevel__1GNBT\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzRmYmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRvcGxldmVsXCI6IFwiSG9tZV90b3BsZXZlbF9fSkRFSzFcIixcblx0XCJ0d29sZXZlbFwiOiBcIkhvbWVfdHdvbGV2ZWxfXzZvT1VWXCIsXG5cdFwidGhyZWVsZXZlbFwiOiBcIkhvbWVfdGhyZWVsZXZlbF9fMUdOQlRcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

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