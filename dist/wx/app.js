require("./common/manifest.js")
require("./common/vendor.js")
global.webpackJsonpMpvue([15],{

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(43);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(45);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(44)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7000a72d", Component.options)
  } else {
    hotAPI.reload("data-v-7000a72d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 44:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
	created: function created() {
		// 调用API从本地缓存中获取数据
		/*
   * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
   * 微信：mpvue === wx, mpvuePlatform === 'wx'
   * 头条：mpvue === tt, mpvuePlatform === 'tt'
   * 百度：mpvue === swan, mpvuePlatform === 'swan'
   * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
   */

	},

	// onLaunch() {
	//   console.log('onLaunch监听小程序初始化');
	// },
	// onShow() {
	//   console.log('onShow监听小程序显示');
	// },
	onHide: function onHide() {
		console.log('onLaunch监听小程序隐藏');
		wx.removeStorage({
			key: 'userInfo',
			success: function success(res) {
				console.log(res);
			}
		});
		wx.removeStorage({
			key: 'dataInfo',
			success: function success(res) {
				console.log(res);
			}
		});
		wx.removeStorage({
			key: 'orderArr',
			success: function success(res) {
				console.log(res);
			}
		});
	},
	onUnload: function onUnload() {
		console.log(11);
	}
});

/***/ })

},[41]);