require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([8],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(108);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_cd1d8594_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(117);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(109)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-cd1d8594"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_cd1d8594_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cd1d8594", Component.options)
  } else {
    hotAPI.reload("data-v-cd1d8594", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 109:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 110:
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
			msg: '北京',
			c: 0,
			wH: 0,
			goodsArr: {}, //当前系列所有产品
			goodsShow: {}, //当前显示有的产品
			bannerImg: {}, //广告图片
			specialArr: {}, //特价产品
			d: false,
			site: 1,
			keywords: "灯具 现代简约"
		};
	},

	methods: {
		handleToProducts: function handleToProducts(e) {
			wx.navigateTo({
				url: "/pages/newProducts/main?id=" + e
			});
		},
		handleToAbout: function handleToAbout() {
			wx.navigateTo({
				url: '/pages/about/main'
			});
		},
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
		handleQuery: function handleQuery() {
			wx.navigateTo({
				url: "/pages/ProductsShow/main?k=" + this.keywords + "&name=" + this.keywords + "&x=3"
			});
		},
		handleToProductsDetail: function handleToProductsDetail(v, i) {
			wx.navigateTo({
				url: "/pages/productsDetail/main?id=" + v.Id + "&i=" + i
			});
		},
		handleChange: function handleChange(e) {
			this.c = e.target.id;
			var apiIn = null;
			var _this = this;
			switch (e.target.id) {
				case '0':
					apiIn = "GetJiaJu";
					break;
				case '1':
					apiIn = "GetGongCheng";
					break;
				case '2':
					apiIn = "GetGuangYuan";
					break;
				case '3':
					apiIn = "GetKaiGuan";
					break;
				case '4':
					apiIn = "GetHuWai";
					break;
				case '5':
					apiIn = "GetChuWei";
					break;
			}
			wx.request({
				url: "http://192.168.2.38:8085/api/goods/" + apiIn, //获取首页产品
				header: {
					'content-type': 'application/json' // 默认值
				},
				success: function success(res) {
					_this.goodsArr = res.data;
					_this.goodsShow = res.data.slice(0, 20);
				}
			});
		},
		scrolltolower: function scrolltolower() {
			var num = this.goodsShow.length;
			this.goodsShow = this.goodsArr.slice(0, num + 20);
		}
	},
	mounted: function mounted() {
		var _this = this;
		wx.getSystemInfo({
			success: function success(res) {
				_this.wH = res.windowHeight;
			}
		});
		wx.showShareMenu({
			withShareTicket: true,
			menus: ['shareAppMessage', 'shareTimeline']
		}),
		// 广告banner图
		wx.request({
			url: 'http://192.168.2.38:8085/api/index/GetAd', //获取首页广告
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function success(res) {
				_this.bannerImg = JSON.parse(res.data);
			}
		});
		wx.request({
			url: 'https://www.365dsw.com', //获取特价产品
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function success(res) {
				console.log(res);
			}
		});
		wx.request({
			url: 'http://192.168.2.38:8085/api/goods/GetSpecialOffer', //获取特价产品
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function success(res) {
				_this.specialArr = res.data;
			}
		});
		wx.request({
			url: "http://192.168.2.38:8085/api/goods/GetJiaJu", //获取产品
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function success(res) {
				_this.goodsArr = res.data;
				_this.goodsShow = res.data.slice(0, 20);
			}
		});
	},

	components: {
		product: __WEBPACK_IMPORTED_MODULE_0__components_product__["a" /* default */],
		returnTop: __WEBPACK_IMPORTED_MODULE_1__components_returnTop__["a" /* default */]
	}
});

/***/ }),

/***/ 117:
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
      "eventid": '9'
    },
    on: {
      "scrolltolower": _vm.scrolltolower,
      "scroll": _vm.scroll
    }
  }, [_c('div', {
    staticClass: "index-logo"
  }, [_c('img', {
    attrs: {
      "src": "/static/img/logo.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "index-search"
  }, [_c('div', {
    staticClass: "index-search-item"
  }, [_c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.keywords),
      expression: "keywords"
    }],
    staticClass: "weui-input",
    attrs: {
      "eventid": '0'
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
  }), _vm._v(" "), _c('i', {
    staticClass: "icon_search"
  })], 1), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.handleQuery
    }
  }, [_vm._v("搜索")])])]), _vm._v(" "), _c('swiper', {
    staticClass: "index-swiper",
    attrs: {
      "autoplay": "true",
      "indicator-dots": "true",
      "indicator-color": "rgba(255,255,255,.5)",
      "indicator-active-color": "#fff"
    }
  }, _vm._l((_vm.bannerImg), function(item, index) {
    return _c('swiper-item', {
      key: index,
      attrs: {
        "mpcomid": '0_' + index
      }
    }, [_c('img', {
      attrs: {
        "src": 'https://www.365dsw.com/' + item.PicUrl,
        "alt": ""
      }
    })])
  })), _vm._v(" "), _c('div', {
    staticClass: "index-nav"
  }, [_c('div', {
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.handleToProducts(0)
      }
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/img/index_img_07.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("最新商品")])]), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.handleToProducts(1)
      }
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/img/index_img_09.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("特价专区")])]), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.handleToProducts(2)
      }
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/img/index_img_11.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("所用商品")])]), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.handleToAbout
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/img/index_img_14.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("关于我们")])])]), _vm._v(" "), _c('div', {
    staticClass: "special"
  }, [_c('div', {
    staticClass: "special-title"
  }, [_vm._v("特价推荐")]), _vm._v(" "), _c('div', {
    staticClass: "special-cont"
  }, _vm._l((_vm.specialArr), function(item, index) {
    return (index <= 3) ? _c('div', {
      key: index,
      staticClass: "special-item",
      attrs: {
        "eventid": '6_' + index
      },
      on: {
        "click": function($event) {
          _vm.handleToProductsDetail(item, 0)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": 'http://www.365dsw.com/' + item.Pic,
        "alt": ""
      }
    }), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.ProName))]), _vm._v(" "), _c('span', [_vm._v("限时特价")]), _vm._v(" "), _c('div', {
      staticClass: "special-price"
    }, [_c('span', [_vm._v("￥" + _vm._s(item.OrigPrice))]), _vm._v(" "), _c('span', {
      staticClass: "active"
    }, [_vm._v("￥" + _vm._s(item.GoodsPrice))])])], 1) : _vm._e()
  }))]), _vm._v(" "), _c('div', {
    staticClass: "advert"
  }, [_c('img', {
    attrs: {
      "src": "/static/img/index_img_20.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "all-product"
  }, [_c('div', {
    staticClass: "product-nav"
  }, [_c('ul', {
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": _vm.handleChange
    }
  }, [_c('li', {
    class: _vm.c == '0' ? 'act' : '',
    attrs: {
      "id": "0"
    }
  }, [_vm._v("家具灯饰")]), _vm._v(" "), _c('li', {
    class: _vm.c == '1' ? 'act' : '',
    attrs: {
      "id": "1"
    }
  }, [_vm._v("工程商照")]), _vm._v(" "), _c('li', {
    class: _vm.c == '2' ? 'act' : '',
    attrs: {
      "id": "2"
    }
  }, [_vm._v("照明光源")]), _vm._v(" "), _c('li', {
    class: _vm.c == '3' ? 'act' : '',
    attrs: {
      "id": "3"
    }
  }, [_vm._v("开关插座")]), _vm._v(" "), _c('li', {
    class: _vm.c == '4' ? 'act' : '',
    attrs: {
      "id": "4"
    }
  }, [_vm._v("户外灯具")]), _vm._v(" "), _c('li', {
    class: _vm.c == '5' ? 'act' : '',
    attrs: {
      "id": "5"
    }
  }, [_vm._v("厨卫电渠")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "product-cont"
  }, _vm._l((_vm.goodsShow), function(item, index) {
    return _c('product', {
      key: index,
      attrs: {
        "dataAll": item,
        "mpcomid": '1_' + index
      }
    })
  }))]), _vm._v(" "), (_vm.d) ? _c('returnTop', {
    attrs: {
      "eventid": '8',
      "mpcomid": '2'
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
     require("vue-hot-reload-api").rerender("data-v-cd1d8594", esExports)
  }
}

/***/ })

},[107]);