require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([10],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
			winH: 0,
			overflowH: 0,
			typeList: {},
			x: "0", //当前导航状态
			title: "类型"
		};
	},

	methods: {
		handleChange: function handleChange(e) {
			this.x = e.target.id;
			this.x == "0" ? this.title = "类型" : this.x == "1" ? this.title = "风格" : this.title = "品牌";
			switch (e.target.id) {
				case "0":
					this.changeFun("GetTypeList");
					break;
				case "1":
					this.changeFun("GetRenovationStyle");
					break;
				case "2":
					this.changeFun("GetAlreadyGoodBrand");
					break;
			}
		},
		changeFun: function changeFun(n) {
			var _this = this;
			wx.request({
				url: "http://192.168.2.38:8085/api/goods/" + n,
				header: {
					'content-type': 'application/json' // 默认值
				},
				success: function success(res) {
					if (_this.x != "0") {
						_this.typeList = JSON.parse(res.data);
					} else {
						_this.typeList = res.data;
					}
				}
			});
		},
		handleTo: function handleTo(v) {
			switch (this.x) {
				case "0":
					wx.navigateTo({
						url: "/pages/ProductsShow/main?id=" + v.Id + "&level=" + v.LevelIndex + "&name=" + v.Name + "&x=0"
					});
					break;
				case "1":
					wx.navigateTo({
						url: "/pages/ProductsShow/main?id=" + v.Id + "&name=" + v.RenovationStyle + "&x=1"
					});
					break;
				case "2":
					wx.navigateTo({
						url: "/pages/ProductsShow/main?id=" + v.Id + "&name=" + v.BrandName + "&x=2"
					});
					break;
			}
		}
	},
	mounted: function mounted() {
		var _this2 = this;

		var _this = this;
		wx.getSystemInfo({
			success: function success(res) {
				// console.log()
				_this.winH = res.windowHeight;
			}
		});
		var lxH = 0;
		var query = wx.createSelectorQuery();
		query.select('.lx').boundingClientRect(function (rect) {
			lxH = rect.height;
			_this2.overflowH = _this2.winH - lxH - 10;
		}).exec();
		//获取类型
		wx.request({
			url: "http://192.168.2.38:8085/api/goods/GetTypeList",
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function success(res) {
				_this.typeList = res.data;
			}
		});
	}
});

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "classify"
    }
  }, [_c('div', {
    staticClass: "classify-left",
    style: ('height:' + _vm.winH + 'px'),
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.handleChange
    }
  }, [_c('span', {
    class: _vm.x == '0' ? 'act' : '',
    attrs: {
      "id": "0"
    }
  }, [_vm._v("类型")]), _vm._v(" "), _c('span', {
    class: _vm.x == '1' ? 'act' : '',
    attrs: {
      "id": "1"
    }
  }, [_vm._v("风格")]), _vm._v(" "), _c('span', {
    class: _vm.x == '2' ? 'act' : '',
    attrs: {
      "id": "2"
    }
  }, [_vm._v("品牌")])]), _vm._v(" "), _c('div', {
    staticClass: "classify-right",
    style: ('height:' + _vm.winH + 'px')
  }, [_c('span', {
    staticClass: "lx"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
    staticClass: "classify-cont",
    style: ('height:' + _vm.overflowH + 'px')
  }, _vm._l((_vm.typeList), function(item, index) {
    return _c('div', {
      key: index,
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.handleTo(item)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": "/static/img/index_img_23.png",
        "alt": ""
      }
    }), _vm._v(" "), (_vm.x == '0') ? _c('p', [_vm._v(_vm._s(item.Name))]) : _vm._e(), _vm._v(" "), (_vm.x == '1') ? _c('p', [_vm._v(_vm._s(item.RenovationStyle))]) : _vm._e(), _vm._v(" "), (_vm.x == '2') ? _c('p', [_vm._v(_vm._s(item.BrandName))]) : _vm._e()], 1)
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-19cd3f94", esExports)
  }
}

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(98);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_19cd3f94_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(101);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(99)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-19cd3f94"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_19cd3f94_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\classify\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19cd3f94", Component.options)
  } else {
    hotAPI.reload("data-v-19cd3f94", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 99:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[97]);