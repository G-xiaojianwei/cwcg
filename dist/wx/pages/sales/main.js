require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(158);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2f60dcf0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(161);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(159)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2f60dcf0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\sales\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f60dcf0", Component.options)
  } else {
    hotAPI.reload("data-v-2f60dcf0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 159:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 160:
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
			array: ['损坏', '购买需求有变动', '与看到商品有差异', '其他原因'],
			index: 0,
			array1: ['选择物流公司', '圆通', '百事', '韵达'],
			index1: 0
		};
	},

	methods: {
		bindPickerChange: function bindPickerChange(e) {
			this.index = e.mp.detail.value;
		},
		bindLogisticsChange: function bindLogisticsChange(e) {
			this.index1 = e.mp.detail.value;
		}
	}
});

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "info"
  }, [_vm._m(0), _vm._v(" "), _c('div', [_c('p', [_vm._v("肖氏照明 客厅/卧室/书房/餐厅 翰能 现代水晶灯")]), _vm._v(" "), _c('p', [_vm._v("水晶灯 6头")]), _vm._v(" "), _c('p', [_c('span', [_vm._v("¥：0.01")]), _c('span', [_vm._v("x1")])])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "type"
  }, [_c('div', [_c('span', [_vm._v("申请类型")]), _vm._v(" "), _c('i', {
    staticClass: "icon-sl"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "type-model"
  }, [_c('div', {
    staticClass: "model-cont"
  }, [_c('div', {
    staticClass: "model-title"
  }, [_vm._v("申请参数")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "modle-info"
  }, [_c('div', {
    staticClass: "info-item"
  }, [_c('div', [_vm._v("提交数量：")]), _vm._v(" "), _c('div', [_c('em', [_vm._v("-")]), _c('input', {
    attrs: {
      "type": "text"
    }
  }), _c('em', [_vm._v("+")]), _c('span', [_vm._v("(您最多可以输入数量为1)")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "info-item reason-i"
  }, [_c('div', [_vm._v("提交原因：")]), _vm._v(" "), _c('div', [_c('picker', {
    attrs: {
      "value": _vm.index,
      "range": _vm.array,
      "eventid": '0'
    },
    on: {
      "change": _vm.bindPickerChange
    }
  }, [_c('view', {
    staticClass: "picker"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t  " + _vm._s(_vm.array[_vm.index]) + "\n\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('i', {
    staticClass: "icon-xljt"
  })], 1)]), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "info-item reason-i"
  }, [_c('div', [_vm._v("选择物流：")]), _vm._v(" "), _c('div', [_c('picker', {
    attrs: {
      "value": _vm.index1,
      "range": _vm.array1,
      "eventid": '1'
    },
    on: {
      "change": _vm.bindLogisticsChange
    }
  }, [_c('view', {
    staticClass: "picker"
  }, [_vm._v("\n\t\t\t\t\t\t\t\t  " + _vm._s(_vm.array1[_vm.index1]) + "\n\t\t\t\t\t\t\t\t")])]), _vm._v(" "), _c('i', {
    staticClass: "icon-xljt"
  })], 1)])]), _vm._v(" "), _c('button', {
    staticClass: "btn2"
  }, [_vm._v("完成")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "reason"
  }, [_vm._m(5), _vm._v(" "), _vm._m(6), _vm._v(" "), _c('button', {
    staticClass: "btn"
  }, [_vm._v("提交申请")])], 1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('img', {
    attrs: {
      "src": "../../../dist/wx/static/img/kdd_03.png",
      "alt": ""
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "model-tag"
  }, [_c('span', {
    staticClass: "act"
  }, [_vm._v("维修")]), _vm._v(" "), _c('span', [_vm._v("退换")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "info-item phone"
  }, [_c('div', [_vm._v("交易单号：")]), _vm._v(" "), _c('div', [_c('input', {
    attrs: {
      "type": "text"
    }
  })])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "info-item phone"
  }, [_c('div', [_vm._v("联系电话：")]), _vm._v(" "), _c('div', [_c('input', {
    attrs: {
      "type": "text"
    }
  })])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "info-item phone"
  }, [_c('div', [_vm._v("物流单号：")]), _vm._v(" "), _c('div', [_c('input', {
    attrs: {
      "type": "text"
    }
  })])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title"
  }, [_vm._v("\n\t\t\t申请原因"), _c('span', [_vm._v("(请您描述问题并上传收到商品照片)")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cont"
  }, [_c('textarea', {
    attrs: {
      "placeholder": "请输入问题描述"
    }
  }), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "file-img"
  }, [_c('img', {
    attrs: {
      "src": "../../../static/img/add.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "file-img"
  }, [_c('img', {
    attrs: {
      "src": "../../../static/img/add.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "file-img"
  }, [_c('img', {
    attrs: {
      "src": "../../../static/img/add.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "file-img"
  }, [_c('img', {
    attrs: {
      "src": "../../../static/img/add.png",
      "alt": ""
    }
  })])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2f60dcf0", esExports)
  }
}

/***/ })

},[157]);