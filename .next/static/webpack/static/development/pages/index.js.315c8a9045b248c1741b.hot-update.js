webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./comps/List.js":
/*!***********************!*\
  !*** ./comps/List.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\You are\\todolist-app\\comps\\List.js";


var tableStyle = {
  width: 200,
  padding: 3
};

var List = function List(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3960318652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
    className: "jsx-3960318652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.items.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      className: "jsx-3960318652",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: index,
      className: "jsx-3960318652",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      style: tableStyle,
      className: "jsx-3960318652",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, item), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "jsx-3960318652",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: props.handleDelete.bind(null, item),
      className: "jsx-3960318652",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "Delete"))));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3960318652",
    __self: this
  }, "button.jsx-3960318652{background-color:red;color:white;border:solid;border-radius:10px;font-size:12px;padding:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcWW91IGFyZVxcdG9kb2xpc3QtYXBwXFxjb21wc1xcTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQm9CLEFBR2tDLHFCQUNULFlBQ0MsYUFDTSxtQkFDSixlQUNILFlBQ2hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcWW91IGFyZVxcdG9kb2xpc3QtYXBwXFxjb21wc1xcTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IHRhYmxlU3R5bGUgPXtcclxuICAgIHdpZHRoOiAyMDAsXHJcbiAgICBwYWRkaW5nOiAzXHJcbn1cclxuXHJcbmNvbnN0IExpc3QgPSBwcm9wcyA9PiAoXHJcbiAgICA8dWw+XHJcbiAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvcHMuaXRlbXMubWFwKChpdGVtLGluZGV4KSA9PiBcclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17dGFibGVTdHlsZX0+e2l0ZW19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxidXR0b24gb25DbGljaz17cHJvcHMuaGFuZGxlRGVsZXRlLmJpbmQobnVsbCwgaXRlbSl9ID5EZWxldGU8L2J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIH1gXHJcbiAgICB9PC9zdHlsZT5cclxuICAgIDwvdWw+XHJcbiAgICBcclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdCJdfQ== */\n/*@ sourceURL=C:\\Users\\You are\\todolist-app\\comps\\List.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ })

})
//# sourceMappingURL=index.js.315c8a9045b248c1741b.hot-update.js.map