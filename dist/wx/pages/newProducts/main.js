require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([5],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(130);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_404f4b70_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(133);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(131)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_404f4b70_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\newProducts\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-404f4b70", Component.options)
  } else {
    hotAPI.reload("data-v-404f4b70", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 131:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 132:
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
			wH: 0, //页面高度
			pageIndex: 1, //获取数据页面参数
			pageTotal: 20, //每次获取多少条数据
			x: '', //接口名称保存
			i: 0, //导航样式控制
			n: 0, //价格升降序控制
			idact: 0, //类别id
			brandid: 0, //品牌id
			d: false, //回到顶部控制
			site: 1, //回到顶部控制
			priceK: false, //控制筛选页面
			lowPrice: 1, //最低价
			highPrice: 10000, //最高价
			keywords: "", //关键词
			level: 0, //等级
			dataAll: {}, //所有数据存放
			typeList: {}, //类型数据
			brand: {}, //品牌数据
			localP: 2
		};
	},

	methods: {
		// 滚动到底部时加载数据
		scrolltolower: function scrolltolower() {
			var _this = this;
			this.pageTotal += 20; //当前条数加二十
			// 在当前状态是最新商品、特价商品时触发
			if (this.x == "GetSearchNewGoods" || this.x == "GetSearchSpecialOfferGoods") {
				wx.request({
					url: "http://192.168.2.38:8085/api/goods/" + _this.x + "?pageIndex=" + _this.pageIndex + "&pageTotal=" + _this.pageTotal,
					header: {
						'content-type': 'application/json' // 默认值
					},
					success: function success(res) {
						_this.dataAll = res.data.ReturnData;
					}
				});
			} else if (this.x == "GetSearchPriceGoods") {
				//在当前状态是价格升降序时触发
				this.priceMsg(this.n);
			} else if (this.x == "GetAllGoods") {
				//在当前状态是筛选时触发
				this.pageTotal += 20;
				this.screenMsg();
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

		// 控制筛选弹出层
		handleOffModel: function handleOffModel(e) {
			if (e.target.id == "model") {
				this.priceK = false;
			}
		},

		// 重置筛选条件
		handleReset: function handleReset() {
			this.idact = 0;
			this.brandid = 0;
			this.lowPrice = 1;
			this.highPrice = 10000;
			this.keywords = "";
			this.level = 0;
		},

		// 筛选完成触发事件
		handleSuccess: function handleSuccess() {
			this.pageTotal = 20;
			this.x = "GetAllGoods";
			this.screenMsg();
		},

		// 头部导航栏切换
		handleChange: function handleChange(e) {
			var _this = this;
			switch (e.target.id) {
				case '0':
					this.i = 0;
					this.x = "GetSearchNewGoods";
					this.localP = 1;
					wx.setNavigationBarTitle({
						title: "最新商品"
					});
					wx.request({
						url: "http://192.168.2.38:8085/api/goods/GetSearchNewGoods?pageIndex=" + _this.pageIndex + "&pageTotal=" + _this.pageTotal,
						header: {
							'content-type': 'application/json' // 默认值
						},
						success: function success(res) {
							_this.dataAll = res.data.ReturnData;
						}
					});
					break;
				case '1':
					this.i = 1;
					this.localP = 0;
					this.x = "GetSearchSpecialOfferGoods";
					wx.setNavigationBarTitle({
						title: "特价专区"
					});
					wx.request({
						url: "http://192.168.2.38:8085/api/goods/GetSearchSpecialOfferGoods?pageIndex=" + _this.pageIndex + "&pageTotal=" + _this.pageTotal,
						header: {
							'content-type': 'application/json' // 默认值
						},
						success: function success(res) {
							_this.dataAll = res.data.ReturnData;
						}
					});
					break;
				// 价格筛选产品获取
				case '2':
					this.i = 2;
					this.pageTotal = 0;
					this.x = "GetSearchPriceGoods";
					if (this.n == 0) {
						this.n = 1;
						this.priceMsg(this.n);
					} else {
						this.n = 0;
						this.priceMsg(this.n);
					}
					break;
				case '3':
					this.i = 3;
					break;
			}
		},
		handleChangeType: function handleChangeType(e) {
			this.idact = e.target.id;
			this.level = e.target.dataset.level;
		},
		handleChangeBrand: function handleChangeBrand(e) {
			this.brandid = e.target.id;
		},

		// 价格升降序产品获取
		priceMsg: function priceMsg(n) {
			var _this = this;
			this.pageTotal += 20;
			wx.request({
				url: "http://192.168.2.38:8085/api/goods/GetSearchPriceGoods?order=" + n + "&pageIndex=" + _this.pageIndex + "&pageTotal=" + _this.pageTotal,
				header: {
					'content-type': 'application/json' // 默认值
				},
				success: function success(res) {
					_this.dataAll = res.data.ReturnData;
				}
			});
		},

		// 筛选获取产品
		screenMsg: function screenMsg() {
			var _this = this;
			var typeid = 0;
			if (this.keywords != "") {
				typeid = 1;
			} else {
				typeid = 0;
			}
			var apiText = "begPrice=" + _this.lowPrice + "&\n\t\t\t\t\t\tendPrice=" + _this.highPrice + "&\n\t\t\t\t\t\ttypeid=" + typeid + "&\n\t\t\t\t\t\tkeyWords=" + _this.keywords + "&\n\t\t\t\t\t\tbrand=" + _this.brandid + "&\n\t\t\t\t\t\tlevel=" + _this.level + "&\n\t\t\t\t\t\tgroupId=" + _this.idact + "&\n\t\t\t\t\t\torder=0&pageIndex=" + _this.pageIndex + "&pageTotal=" + _this.pageTotal;
			wx.request({
				url: "http://192.168.2.38:8085/api/goods/GetAllGoods?" + apiText,
				header: {
					'content-type': 'application/json' // 默认值
				},
				success: function success(res) {
					if (res.data.IsSuccess) {
						_this.dataAll = res.data.ReturnData;
						_this.priceK = false;
					} else {
						alert("数据获取失败！");
					}
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
		switch (this.$mp.query.id) {
			case "0":
				this.pageTotal = 20;
				this.i = 0;
				this.x = "GetSearchNewGoods";
				this.localP = 1;
				wx.setNavigationBarTitle({
					title: "最新商品"
				});
				wx.request({
					url: "http://192.168.2.38:8085/api/goods/GetSearchNewGoods?pageIndex=" + _this.pageIndex + "&pageTotal=" + _this.pageTotal, //获取最新产品
					header: {
						'content-type': 'application/json' // 默认值
					},
					success: function success(res) {
						_this.dataAll = res.data.ReturnData;
					}
				});
				break;
			case "1":
				this.x = "GetSearchSpecialOfferGoods";
				this.pageTotal = 20;
				this.i = 1;
				this.localP = 0;
				wx.setNavigationBarTitle({
					title: "特价专区"
				});
				wx.request({
					url: "http://192.168.2.38:8085/api/goods/GetSearchSpecialOfferGoods?pageIndex=" + _this.pageIndex + "&pageTotal=" + _this.pageTotal, //获取特价产品
					header: {
						'content-type': 'application/json' // 默认值
					},
					success: function success(res) {
						_this.dataAll = res.data.ReturnData;
					}
				});
				break;
			case "2":
				this.x = "GetSearchNewGoods";
				this.i = 2;
				wx.setNavigationBarTitle({
					title: "所有商品"
				});
				wx.request({
					url: "http://192.168.2.38:8085/api/goods/GetSearchNewGoods?pageIndex=" + _this.pageIndex + "&pageTotal=" + _this.pageTotal, //获取所有产品
					header: {
						'content-type': 'application/json' // 默认值
					},
					success: function success(res) {
						_this.dataAll = res.data.ReturnData;
					}
				});
				break;
		}
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
		// 获取品牌
		wx.request({
			url: "http://192.168.2.38:8085/api/goods/GetAlreadyGoodBrand",
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function success(res) {
				_this.brand = JSON.parse(res.data);
			}
		});
	}
});

/***/ }),

/***/ 133:
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
      "eventid": '11'
    },
    on: {
      "scrolltolower": _vm.scrolltolower,
      "scroll": _vm.scroll
    }
  }, [_c('div', {
    staticClass: "new-products-nav",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.handleChange
    }
  }, [_c('span', {
    class: _vm.i == '0' ? 'act' : '',
    attrs: {
      "id": "0"
    }
  }, [_vm._v("新品")]), _vm._v(" "), _c('span', {
    class: _vm.i == '1' ? 'act' : '',
    attrs: {
      "id": "1"
    }
  }, [_vm._v("特价")]), _vm._v(" "), _c('span', {
    class: _vm.i == '2' ? 'act' : '',
    attrs: {
      "id": "2"
    }
  }, [_vm._v("价格")]), _vm._v(" "), _c('span', {
    class: _vm.i == '3' ? 'act' : '',
    attrs: {
      "id": "3",
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.priceK = true
      }
    }
  }, [_vm._v("筛选")])]), _vm._v(" "), _c('div', {
    staticClass: "new-products-cont"
  }, _vm._l((_vm.dataAll), function(item, index) {
    return _c('product', {
      key: index,
      attrs: {
        "dataAll": item,
        "tag": _vm.localP,
        "mpcomid": '0_' + index
      }
    })
  })), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.priceK),
      expression: "priceK"
    }],
    staticClass: "price-model",
    attrs: {
      "id": "model",
      "eventid": '9'
    },
    on: {
      "click": _vm.handleOffModel
    }
  }, [_c('div', {
    staticClass: "price-model-cont"
  }, [_c('div', [_c('span', [_vm._v("关键词")]), _vm._v(" "), _c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.keywords),
      expression: "keywords"
    }],
    attrs: {
      "type": "text",
      "placeholder": "请输入关键词",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.keywords)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.keywords = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', [_c('span', [_vm._v("价格")]), _vm._v(" "), _c('div', [_vm._v("\n\t\t\t\t\t价格区间（元）"), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.lowPrice),
      expression: "lowPrice"
    }],
    attrs: {
      "type": "digit",
      "placeholder": "最低价",
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.lowPrice)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.lowPrice = $event.target.value
      }
    }
  }), _vm._v(" - "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.highPrice),
      expression: "highPrice"
    }],
    attrs: {
      "type": "digit",
      "placeholder": "最高价",
      "eventid": '4'
    },
    domProps: {
      "value": (_vm.highPrice)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.highPrice = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', [_c('span', [_vm._v("品牌")]), _vm._v(" "), _c('div', {
    staticClass: "classiy"
  }, [_c('scroll-view', {
    staticStyle: {
      "height": "300rpx"
    },
    attrs: {
      "scroll-y": "true"
    }
  }, _vm._l((_vm.brand), function(item, index) {
    return _c('span', {
      key: index,
      class: _vm.brandid == item.Id ? 'act' : '',
      attrs: {
        "id": item.Id,
        "eventid": '5_' + index
      },
      on: {
        "click": _vm.handleChangeBrand
      }
    }, [_vm._v(_vm._s(item.BrandName))])
  }))], 1)]), _vm._v(" "), _c('div', [_c('span', [_vm._v("类别")]), _vm._v(" "), _c('div', {
    staticClass: "classiy"
  }, [_c('scroll-view', {
    staticStyle: {
      "height": "300rpx"
    },
    attrs: {
      "scroll-y": "true"
    }
  }, _vm._l((_vm.typeList), function(item, index) {
    return _c('span', {
      key: index,
      class: _vm.idact == item.Id ? 'act' : '',
      attrs: {
        "id": item.Id,
        "data-level": item.LevelIndex,
        "eventid": '6_' + index
      },
      on: {
        "click": _vm.handleChangeType
      }
    }, [_vm._v(_vm._s(item.Name))])
  }))], 1)]), _vm._v(" "), _c('div', {
    staticClass: "btn"
  }, [_c('span', {
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": _vm.handleReset
    }
  }, [_vm._v("重置")]), _c('span', {
    attrs: {
      "eventid": '8'
    },
    on: {
      "click": _vm.handleSuccess
    }
  }, [_vm._v("完成")])])])]), _vm._v(" "), (_vm.d) ? _c('returnTop', {
    attrs: {
      "eventid": '10',
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
     require("vue-hot-reload-api").rerender("data-v-404f4b70", esExports)
  }
}

/***/ })

},[129]);