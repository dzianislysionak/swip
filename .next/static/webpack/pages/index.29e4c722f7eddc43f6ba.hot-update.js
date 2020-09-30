webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/cards/tindercard.js":
/*!***********************************!*\
  !*** ./pages/cards/tindercard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_spring_hooks_cjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring/hooks.cjs */ \"./node_modules/react-spring/hooks.cjs.js\");\n/* harmony import */ var react_spring_hooks_cjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spring_hooks_cjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_with_gesture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-with-gesture */ \"./node_modules/react-with-gesture/dist/react-with-gesture.es.js\");\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/card */ \"./components/card.js\");\n/* harmony import */ var _api_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/data */ \"./pages/api/data.js\");\n\n\n\nvar _jsxFileName = \"/home/denis/nextPWA/swip/pages/cards/tindercard.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar to = function to(i) {\n  return {\n    x: 0,\n    y: i * -10,\n    scale: 1,\n    rot: -10 + Math.random() * 20,\n    delay: i * 100\n  };\n};\n\nvar from = function from(i) {\n  return {\n    rot: 0,\n    scale: 1.5,\n    y: -1000\n  };\n};\n\nvar trans = function trans(r, s) {\n  return \"perspective(1500px) rotateX(10deg) rotateY(\".concat(r / 10, \"deg) rotateZ(\").concat(r, \"deg) scale(\").concat(s, \")\");\n};\n\nfunction Deck() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(function () {\n    return new Set();\n  }),\n      gone = _useState[0];\n\n  var _useSprings = Object(react_spring_hooks_cjs__WEBPACK_IMPORTED_MODULE_3__[\"useSprings\"])(_api_data__WEBPACK_IMPORTED_MODULE_6__[\"default\"].length, function (i) {\n    return _objectSpread(_objectSpread({}, to(i)), {}, {\n      from: from(i)\n    });\n  }),\n      _useSprings2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useSprings, 2),\n      props = _useSprings2[0],\n      set = _useSprings2[1];\n\n  var bind = Object(react_with_gesture__WEBPACK_IMPORTED_MODULE_4__[\"useGesture\"])(function (_ref) {\n    var _ref$args = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref.args, 1),\n        index = _ref$args[0],\n        down = _ref.down,\n        _ref$delta = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref.delta, 1),\n        xDelta = _ref$delta[0],\n        distance = _ref.distance,\n        _ref$direction = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref.direction, 1),\n        xDir = _ref$direction[0],\n        velocity = _ref.velocity;\n\n    var trigger = velocity > 0.2;\n    var dir = xDir < 0 ? -1 : 1;\n    if (!down && trigger) gone.add(index);\n    set(function (i) {\n      if (index !== i) return;\n      var isGone = gone.has(index);\n      var x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;\n      var rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);\n      var scale = down ? 1.1 : 1;\n      return {\n        x: x,\n        rot: rot,\n        scale: scale,\n        delay: undefined,\n        config: {\n          friction: 50,\n          tension: down ? 800 : isGone ? 200 : 500\n        }\n      };\n    });\n    if (!down && gone.size === _api_data__WEBPACK_IMPORTED_MODULE_6__[\"default\"].length) setTimeout(function () {\n      return gone.clear() || set(function (i) {\n        return to(i);\n      });\n    }, 600);\n  });\n  return props.map(function (_ref2, i) {\n    var x = _ref2.x,\n        y = _ref2.y,\n        rot = _ref2.rot,\n        scale = _ref2.scale;\n    return __jsx(_components_card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      key: i,\n      i: i,\n      x: x,\n      y: y,\n      rot: rot,\n      scale: scale,\n      trans: trans,\n      data: _api_data__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n      bind: bind,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 5\n      }\n    });\n  });\n}\n\n_s(Deck, \"GJ+tDNDoxUfn3sSn5jI87QbWEeI=\", false, function () {\n  return [react_spring_hooks_cjs__WEBPACK_IMPORTED_MODULE_3__[\"useSprings\"], react_with_gesture__WEBPACK_IMPORTED_MODULE_4__[\"useGesture\"]];\n});\n\n_c = Deck;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Deck);\n\nvar _c;\n\n$RefreshReg$(_c, \"Deck\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FyZHMvdGluZGVyY2FyZC5qcz9lNTBiIl0sIm5hbWVzIjpbInRvIiwiaSIsIngiLCJ5Iiwic2NhbGUiLCJyb3QiLCJNYXRoIiwicmFuZG9tIiwiZGVsYXkiLCJmcm9tIiwidHJhbnMiLCJyIiwicyIsIkRlY2siLCJ1c2VTdGF0ZSIsIlNldCIsImdvbmUiLCJ1c2VTcHJpbmdzIiwiZGF0YSIsImxlbmd0aCIsInByb3BzIiwic2V0IiwiYmluZCIsInVzZUdlc3R1cmUiLCJhcmdzIiwiaW5kZXgiLCJkb3duIiwiZGVsdGEiLCJ4RGVsdGEiLCJkaXN0YW5jZSIsImRpcmVjdGlvbiIsInhEaXIiLCJ2ZWxvY2l0eSIsInRyaWdnZXIiLCJkaXIiLCJhZGQiLCJpc0dvbmUiLCJoYXMiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidW5kZWZpbmVkIiwiY29uZmlnIiwiZnJpY3Rpb24iLCJ0ZW5zaW9uIiwic2l6ZSIsInNldFRpbWVvdXQiLCJjbGVhciIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsRUFBRSxHQUFHLFNBQUxBLEVBQUssQ0FBQ0MsQ0FBRDtBQUFBLFNBQVE7QUFDakJDLEtBQUMsRUFBRSxDQURjO0FBRWpCQyxLQUFDLEVBQUVGLENBQUMsR0FBRyxDQUFDLEVBRlM7QUFHakJHLFNBQUssRUFBRSxDQUhVO0FBSWpCQyxPQUFHLEVBQUUsQ0FBQyxFQUFELEdBQU1DLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixFQUpWO0FBS2pCQyxTQUFLLEVBQUVQLENBQUMsR0FBRztBQUxNLEdBQVI7QUFBQSxDQUFYOztBQU9BLElBQU1RLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNSLENBQUQ7QUFBQSxTQUFRO0FBQUVJLE9BQUcsRUFBRSxDQUFQO0FBQVVELFNBQUssRUFBRSxHQUFqQjtBQUFzQkQsS0FBQyxFQUFFLENBQUM7QUFBMUIs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QVQsU0FBU0EsR0FBVDtBQUFBLFFBQWNELEtBQWQsU0FBY0EsS0FBZDtBQUFBLFdBQ2YsTUFBQyx3REFBRDtBQUNFLFNBQUcsRUFBRUgsQ0FEUDtBQUVFLE9BQUMsRUFBRUEsQ0FGTDtBQUdFLE9BQUMsRUFBRUMsQ0FITDtBQUlFLE9BQUMsRUFBRUMsQ0FKTDtBQUtFLFNBQUcsRUFBRUUsR0FMUDtBQU1FLFdBQUssRUFBRUQsS0FOVDtBQU9FLFdBQUssRUFBRU0sS0FQVDtBQVFFLFVBQUksRUFBRVEsaURBUlI7QUFTRSxVQUFJLEVBQUVJLElBVFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURlO0FBQUEsR0FBVixDQUFQO0FBYUQ7O0dBM0RRVCxJO1VBR2NJLGlFLEVBS1JNLDZEOzs7S0FSTlYsSTtBQTZETUEsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9jYXJkcy90aW5kZXJjYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTcHJpbmdzIH0gZnJvbSAncmVhY3Qtc3ByaW5nL2hvb2tzLmNqcydcbmltcG9ydCB7IHVzZUdlc3R1cmUgfSBmcm9tICdyZWFjdC13aXRoLWdlc3R1cmUnXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NhcmQnXG5pbXBvcnQgZGF0YSBmcm9tICcuLi9hcGkvZGF0YSdcblxuY29uc3QgdG8gPSAoaSkgPT4gKHtcbiAgeDogMCxcbiAgeTogaSAqIC0xMCxcbiAgc2NhbGU6IDEsXG4gIHJvdDogLTEwICsgTWF0aC5yYW5kb20oKSAqIDIwLFxuICBkZWxheTogaSAqIDEwMCxcbn0pXG5jb25zdCBmcm9tID0gKGkpID0+ICh7IHJvdDogMCwgc2NhbGU6IDEuNSwgeTogLTEwMDAgfSlcblxuY29uc3QgdHJhbnMgPSAociwgcykgPT5cbiAgYHBlcnNwZWN0aXZlKDE1MDBweCkgcm90YXRlWCgxMGRlZykgcm90YXRlWSgke1xuICAgIHIgLyAxMFxuICB9ZGVnKSByb3RhdGVaKCR7cn1kZWcpIHNjYWxlKCR7c30pYFxuXG5mdW5jdGlvbiBEZWNrKCkge1xuICBjb25zdCBbZ29uZV0gPSB1c2VTdGF0ZSgoKSA9PiBuZXcgU2V0KCkpXG5cbiAgY29uc3QgW3Byb3BzLCBzZXRdID0gdXNlU3ByaW5ncyhkYXRhLmxlbmd0aCwgKGkpID0+ICh7XG4gICAgLi4udG8oaSksXG4gICAgZnJvbTogZnJvbShpKSxcbiAgfSkpXG5cbiAgY29uc3QgYmluZCA9IHVzZUdlc3R1cmUoXG4gICAgKHtcbiAgICAgIGFyZ3M6IFtpbmRleF0sXG4gICAgICBkb3duLFxuICAgICAgZGVsdGE6IFt4RGVsdGFdLFxuICAgICAgZGlzdGFuY2UsXG4gICAgICBkaXJlY3Rpb246IFt4RGlyXSxcbiAgICAgIHZlbG9jaXR5LFxuICAgIH0pID0+IHtcbiAgICAgIGNvbnN0IHRyaWdnZXIgPSB2ZWxvY2l0eSA+IDAuMlxuXG4gICAgICBjb25zdCBkaXIgPSB4RGlyIDwgMCA/IC0xIDogMVxuXG4gICAgICBpZiAoIWRvd24gJiYgdHJpZ2dlcikgZ29uZS5hZGQoaW5kZXgpXG5cbiAgICAgIHNldCgoaSkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggIT09IGkpIHJldHVyblxuICAgICAgICBjb25zdCBpc0dvbmUgPSBnb25lLmhhcyhpbmRleClcblxuICAgICAgICBjb25zdCB4ID0gaXNHb25lID8gKDIwMCArIHdpbmRvdy5pbm5lcldpZHRoKSAqIGRpciA6IGRvd24gPyB4RGVsdGEgOiAwXG5cbiAgICAgICAgY29uc3Qgcm90ID0geERlbHRhIC8gMTAwICsgKGlzR29uZSA/IGRpciAqIDEwICogdmVsb2NpdHkgOiAwKVxuXG4gICAgICAgIGNvbnN0IHNjYWxlID0gZG93biA/IDEuMSA6IDFcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB4LFxuICAgICAgICAgIHJvdCxcbiAgICAgICAgICBzY2FsZSxcbiAgICAgICAgICBkZWxheTogdW5kZWZpbmVkLFxuICAgICAgICAgIGNvbmZpZzogeyBmcmljdGlvbjogNTAsIHRlbnNpb246IGRvd24gPyA4MDAgOiBpc0dvbmUgPyAyMDAgOiA1MDAgfSxcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgaWYgKCFkb3duICYmIGdvbmUuc2l6ZSA9PT0gZGF0YS5sZW5ndGgpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZ29uZS5jbGVhcigpIHx8IHNldCgoaSkgPT4gdG8oaSkpLCA2MDApXG4gICAgfVxuICApXG5cbiAgcmV0dXJuIHByb3BzLm1hcCgoeyB4LCB5LCByb3QsIHNjYWxlIH0sIGkpID0+IChcbiAgICA8Q2FyZFxuICAgICAga2V5PXtpfVxuICAgICAgaT17aX1cbiAgICAgIHg9e3h9XG4gICAgICB5PXt5fVxuICAgICAgcm90PXtyb3R9XG4gICAgICBzY2FsZT17c2NhbGV9XG4gICAgICB0cmFucz17dHJhbnN9XG4gICAgICBkYXRhPXtkYXRhfVxuICAgICAgYmluZD17YmluZH1cbiAgICAvPlxuICApKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWNrXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/cards/tindercard.js\n");

/***/ })

})