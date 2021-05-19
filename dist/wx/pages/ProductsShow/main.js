require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([14],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(153);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_a0a176da_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(156);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(154)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_a0a176da_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\ProductsShow\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a0a176da", Component.options)
  } else {
    hotAPI.reload("data-v-a0a176da", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 154:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_product__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_returnTop__ = __webpack_require__(25);
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
			wH: 0, //页面高度
			pageIndex: 1, //获取数据页面参数
			pageTotal: 0, //每次获取多少条数据
			d: false, //回到顶部控制
			site: 1, //回到顶部控制
			x: "0",
			dataAll: {}, //所有数据存放
			typeId: 0, //类型id
			typeLevel: 0, //类型等级
			apiText: "",
			keyWords: ""

		};
	},

	methods: {
		// 滚动到底部时加载数据
		scrolltolower: function scrolltolower() {
			var _this = this;
			// 在当前状态是最新商品、特价商品时触发
			this.pageTotal += 20; //当前条数加二十
			switch (this.x) {
				case "0":
					this.apiText = "GetSearchTypeGoods?id=" + this.typeId + "&level=" + this.typeLevel + "&pageIndex=" + this.pageIndex + "&pageTotal=" + this.pageTotal;
					this.queryFun();
					break;
				case "1":
					this.apiText = "GetSearchTypeGoods?id=" + this.typeId + "&pageIndex=" + this.pageIndex + "&pageTotal=" + this.pageTotal;
					this.queryFun();
					break;
				case "2":
					this.apiText = "GetSearchTypeGoods?id=" + this.typeId + "&pageIndex=" + this.pageIndex + "&pageTotal=" + this.pageTotal;
					this.queryFun();
					break;
				case "3":
					this.apiText = "GetKeywordsGoods?keyWords=" + this.keyWords + "&pageIndex=" + this.pageIndex + "&pageTotal=" + this.pageTotal;
					this.queryFun();
					break;
			}
		},

		// 判断回到顶部距离
		scroll: function scroll(e) {
			this.site = 1;
			if (e.mp.detail.scrollTop >= 400) {
				this.d = true;
			} else {
				this.d = false;
			}
		},
		updateInfo: function updateInfo(data) {
			// 回到顶部
			this.site = 0;
		},
		queryFun: function queryFun() {
			var _this = this;
			wx.request({
				url: "http://192.168.2.38:8085/api/goods/" + _this.apiText, //获取首页产品
				header: {
					'content-type': 'application/json' // 默认值
				},
				success: function success(res) {
					_this.dataAll = res.data.ReturnData;
				}
			});
		}
	},
	components: {
		product: __WEBPACK_IMPORTED_MODULE_0__components_product__["a" /* default */],
		returnTop: __WEBPACK_IMPORTED_MODULE_1__components_returnTop__["a" /* default */]
	},
	mounted: function mounted() {
		var _this = this;
		wx.getSystemInfo({
			success: function success(res) {
				_this.wH = res.windowHeight;
			}
		});

		if (this.$mp.query.level) {
			this.typeLevel = this.$mp.query.level;
		}
		if (this.$mp.query.id) {
			this.typeId = this.$mp.query.id;
		}
		if (this.$mp.query.k) {
			this.keyWords = this.$mp.query.k;
		}
		this.x = this.$mp.query.x;
		wx.setNavigationBarTitle({
			title: this.$mp.query.name
		});
		this.pageTotal = 20;
		switch (this.$mp.query.x) {
			case "0":
				this.apiText = "GetSearchTypeGoods?id=" + this.typeId + "&level=" + this.typeLevel + "&pageIndex=" + this.pageIndex + "&pageTotal=" + this.pageTotal;
				break;
			case "1":
				this.apiText = "GetSearchRenovationStyleGoods?id=" + this.typeId + "&pageIndex=" + this.pageIndex + "&pageTotal=" + this.pageTotal;
				break;
			case "2":
				this.apiText = "GetSearchBrandGoods?id=" + this.typeId + "&pageIndex=" + this.pageIndex + "&pageTotal=" + this.pageTotal;
				break;
			case "3":
				this.apiText = "GetKeywordsGoods?keyWords=" + this.keyWords + "&pageIndex=" + this.pageIndex + "&pageTotal=" + this.pageTotal;
				break;
		}

		// 通过类型查询
		wx.request({
			url: "http://192.168.2.38:8085/api/goods/" + _this.apiText, //获取首页产品
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function success(res) {
				_this.dataAll = res.data.ReturnData;
			}
		});
	}
});

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('scroll-view', {
    style: ('height:' + _vm.wH + 'px;'),
    attrs: {
      "scroll-top": _vm.site,
      "scroll-y": "true",
      "refresher-triggered": "true",
      "lower-threshold": "100",
      "eventid": '1'
    },
    on: {
      "scrolltolower": _vm.scrolltolower,
      "scroll": _vm.scroll
    }
  }, [_c('div', {
    staticClass: "new-products-cont",
    staticStyle: {
      "padding-top": "20rpx"
    }
  }, _vm._l((_vm.dataAll), function(item, index) {
    return _c('product', {
      key: index,
      attrs: {
        "dataAll": item,
        "mpcomid": '0_' + index
      }
    })
  })), _vm._v(" "), (_vm.d) ? _c('returnTop', {
    attrs: {
      "eventid": '0',
      "mpcomid": '1'
    },
    on: {
      "updateInfo": _vm.updateInfo
    }
  }) : _vm._e()], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a0a176da", esExports)
  }
}

/***/ })

},[152]);