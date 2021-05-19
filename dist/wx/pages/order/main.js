require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([3],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(135);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_829e9e9c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(141);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(136)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_829e9e9c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\order\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-829e9e9c", Component.options)
  } else {
    hotAPI.reload("data-v-829e9e9c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 136:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_orderItem__ = __webpack_require__(40);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
	data: function data() {
		return {
			i: 0,
			show: true,
			dataInfo: {},
			orderArr: [],
			filterOrder: []
		};
	},

	methods: {
		handleToIndex: function handleToIndex() {
			wx.navigateTo({
				url: "/pages/newProducts/main?id=2"
			});
		},
		handleChangeNav: function handleChangeNav(e) {
			var x = 0;
			if (typeof e !== "string") {
				this.i = e.target.id;
				x = e.target.id;
			} else {
				this.i = e;
				x = e;
			}
			switch (x) {
				case "0":
					//所有订单（未付款订单）
					//判断是否有订单数据
					this.filterOrderFun(0);
					break;
				case "1":
					//所有已支付未发货订单
					this.filterOrderFun(0);
					break;
				case "5":
					this.filterOrderFun(5);
					break;
				case "2":
					this.filterOrderFun(2);
					break;
				case "3":
					this.filterOrderFun(3);
					break;
				case "4":
					this.filterOrderFun(4);
					break;
			}
		},
		filterOrderFun: function filterOrderFun(n) {
			this.filterOrder = this.orderArr.filter(function (item) {
				return item.States == n;
			});
			this.filterOrder.length == 0 ? this.show = true : this.show = false;
		},

		//父子组件通信
		parentFn: function parentFn(i) {
			if (typeof i == "number") {
				this.getOrderData(this.i);
			}
		},
		getOrderData: function getOrderData(i) {
			var _this = this;
			wx.request({
				url: "http://192.168.2.38:8085/api/Orders/GetOrder?type=1&uid=" + _this.dataInfo.Id,
				header: {
					'content-type': 'application/json' // 默认值
				},
				method: 'GET',
				success: function success(res) {
					_this.orderArr = JSON.parse(res.data);
					_this.filterOrder = _this.orderArr;
					_this.filterOrder.length !== 0 ? _this.show = false : _this.show = true;
					_this.handleChangeNav(i);
				}
			});
		}
	},
	components: {
		orderItem: __WEBPACK_IMPORTED_MODULE_0__components_orderItem__["a" /* default */]
	},
	mounted: function mounted() {
		var _this = this;
		//通过缓存获取用户信息
		wx.getStorage({
			key: 'dataInfo',
			success: function success(res) {
				_this.dataInfo = JSON.parse(res.data);
				// 获取用户订单数据
				_this.getOrderData(_this.$mp.query.i);
			}
		});
	}
});

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "order-nav",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.handleChangeNav
    }
  }, [_c('span', {
    class: _vm.i == 0 ? 'act' : '0',
    attrs: {
      "id": "0"
    }
  }, [_vm._v("全部")]), _vm._v(" "), _c('span', {
    class: _vm.i == 1 ? 'act' : '0',
    attrs: {
      "id": "1"
    }
  }, [_vm._v("待付款")]), _vm._v(" "), _c('span', {
    class: _vm.i == 5 ? 'act' : '0',
    attrs: {
      "id": "5"
    }
  }, [_vm._v("待发货")]), _vm._v(" "), _c('span', {
    class: _vm.i == 2 ? 'act' : '0',
    attrs: {
      "id": "2"
    }
  }, [_vm._v("待收货")]), _vm._v(" "), _c('span', {
    class: _vm.i == 3 ? 'act' : '0',
    attrs: {
      "id": "3"
    }
  }, [_vm._v("已完成")]), _vm._v(" "), _c('span', {
    class: _vm.i == 4 ? 'act' : '0',
    attrs: {
      "id": "4"
    }
  }, [_vm._v("售后/退款")])]), _vm._v(" "), (_vm.show) ? _c('div', {
    staticClass: "order-empty"
  }, [_c('img', {
    attrs: {
      "src": "/static/img/kdd_03.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("亲，订单很空虚~赶紧下几盏好看的灯吧")]), _vm._v(" "), _c('button', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.handleToIndex
    }
  }, [_vm._v("去逛逛")])], 1) : _c('div', {
    staticClass: "order-list"
  }, [_c('orderItem', {
    attrs: {
      "order": _vm.filterOrder,
      "eventid": '2',
      "mpcomid": '0'
    },
    on: {
      "childFn": _vm.parentFn
    }
  })], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-829e9e9c", esExports)
  }
}

/***/ })

},[134]);