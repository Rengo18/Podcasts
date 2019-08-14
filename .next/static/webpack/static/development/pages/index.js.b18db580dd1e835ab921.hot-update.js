webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ChannelGrid.js":
/*!***********************************!*\
  !*** ./components/ChannelGrid.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChannelGrid; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js?d225");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js?b0b4");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js?308d");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js?6bb5");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js?4e2b");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "C:\\Users\\Rengo\\desktop\\podcasts\\components\\ChannelGrid.js";




var ChannelGrid =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ChannelGrid, _React$Component);

  function ChannelGrid() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChannelGrid);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ChannelGrid).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ChannelGrid, [{
    key: "render",
    value: function render() {
      var channels = this.props.channels;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-4192523977" + " " + "channels",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, channels.map(function (channel) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: "/channel?id=".concat(channel.id),
          key: channel.id,
          prefetch: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          className: "jsx-4192523977" + " " + "channel",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
          src: channel.urls.logo_image.original,
          alt: "Logo",
          className: "jsx-4192523977",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
          className: "jsx-4192523977",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }, channel.title)));
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "4192523977",
        __self: this
      }, ".channels.jsx-4192523977{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}.channel.jsx-4192523977{display:block;border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);margin-bottom:0.5em;-webkit-text-decoration:none;text-decoration:none;}.channel.jsx-4192523977 img.jsx-4192523977{width:100%;}h2.jsx-4192523977{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUmVuZ29cXGRlc2t0b3BcXHBvZGNhc3RzXFxjb21wb25lbnRzXFxDaGFubmVsR3JpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQndCLEFBTWlDLEFBTUMsQUFRSCxBQUdDLFdBRmYsQ0FHbUIsQ0FqQkYsQ0FNSSxhQUxMLENBaUJHLElBWHlCLFFBTGlCLElBaUJqRCxTQUNTLGtCQUNwQixDQWJzQixvQkFDQyxNQU54Qiw0Q0FPQSIsImZpbGUiOiJDOlxcVXNlcnNcXFJlbmdvXFxkZXNrdG9wXFxwb2RjYXN0c1xcY29tcG9uZW50c1xcQ2hhbm5lbEdyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnOyBcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbm5lbEdyaWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7Y2hhbm5lbHN9PXRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFubmVsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbHMubWFwKChjaGFubmVsKSA9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2hhbm5lbD9pZD0ke2NoYW5uZWwuaWR9YH0ga2V5PXtjaGFubmVsLmlkfSBwcmVmZXRjaD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNoYW5uZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y2hhbm5lbC51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWx9IGFsdD1cIkxvZ29cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57Y2hhbm5lbC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmNoYW5uZWxze1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLWdhcDoxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MTVweDtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KGF1dG8tZmlsbCxtaW5tYXgoMTYwcHgsMWZyKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2hhbm5lbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjNweDtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsMCwwLDAuMTUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jaGFubmVsIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGgye1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTowLjllbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+ICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=C:\\Users\\Rengo\\desktop\\podcasts\\components\\ChannelGrid.js */"));
    }
  }]);

  return ChannelGrid;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.b18db580dd1e835ab921.hot-update.js.map