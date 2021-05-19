require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([9],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(103);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_305dcd64_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(106);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(104)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_305dcd64_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\collect\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-305dcd64", Component.options)
  } else {
    hotAPI.reload("data-v-305dcd64", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 104:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 105:
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

/* harmony default export */ __webpack_exports__["a"] = ({
	data: function data() {
		return {
			uid: 0, //用户id
			collectArr: {}
		};
	},

	methods: {
		handleToProductsDetail: function handleToProductsDetail(v) {
			wx.navigateTo({
				url: '/pages/productsDetail/main?id=' + v
			});
		},
		deleteCollect: function deleteCollect(v) {
			var _this = this;
			wx.showModal({
				title: '提示',
				content: '您确定要删除该收藏吗？',
				success: function success(res) {
					if (res.confirm) {
						wx.request({
							url: 'http://192.168.2.38:8085/api/goods/DelGoodsColl?id=' + v.Id + '&uid=' + v.Uid,
							header: {
								'content-type': 'application/json' // 默认值
							},
							method: 'POST',
							success: function success(res) {
								console.log(res);
								wx.request({
									url: 'http://192.168.2.38:8085/api/goods/GetCollProList?uid=' + v.Uid,
									header: {
										'content-type': 'application/json' // 默认值
									},
									method: 'GET',
									success: function success(res) {
										_this.collectArr = res.data;
									}
								});
							}
						});
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		}
	},
	mounted: function mounted() {
		var _this = this;
		this.uid = this.$mp.query.id;
		wx.request({
			url: 'http://192.168.2.38:8085/api/goods/GetCollProList?uid=' + _this.$mp.query.id,
			header: {
				'content-type': 'application/json' // 默认值
			},
			method: 'GET',
			success: function success(res) {
				_this.collectArr = res.data;
			}
		});
	}
});

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "list"
  }, _vm._l((_vm.collectArr), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "list-item"
    }, [_c('div', {
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.handleToProductsDetail(item.ProId)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": 'http://www.365dsw.com' + item.Pic,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.handleToProductsDetail(item.ProId)
        }
      }
    }, [_c('p', [_vm._v(_vm._s(item.ProName))])], 1), _vm._v(" "), _c('div', [_c('button', {
      attrs: {
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.deleteCollect(item)
        }
      }
    }, [_vm._v("删除")])], 1)])
  })), _vm._v(" "), _c('p', {
    staticClass: "data"
  }, [_vm._v("没有更多数据")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-305dcd64", esExports)
  }
}

/***/ })

},[102]);