<template>
  <div id="classify">
	  <div class="classify-left" :style="'height:'+winH+'px'" @click="handleChange">
		  <span id="0" :class="x=='0'?'act':''">类型</span>
		  <span id="1" :class="x=='1'?'act':''">风格</span>
		  <span id="2" :class="x=='2'?'act':''">品牌</span>
	  </div>
	  <div class="classify-right" :style="'height:'+winH+'px'">
		  <span class="lx">{{title}}</span>
		  <div class="classify-cont" :style="'height:'+overflowH+'px'">
			  <div v-for="(item,index) in typeList" :key="index" @click="handleTo(item)">
				  <img src="/static/img/index_img_23.png" alt="">
				  <p v-if="x=='0'">{{item.Name}}</p>
				  <p v-if="x=='1'">{{item.RenovationStyle}}</p>
				  <p v-if="x=='2'">{{item.BrandName}}</p>
			  </div>
		  </div>
	  </div>
  </div>
</template>

<script>
	
export default {
  data(){
    return{
      winH:0,
	  overflowH:0,
	  typeList:{},
	  x:"0",//当前导航状态
	  title:"类型"
    }
  },
  methods: {
    handleChange(e){
		this.x=e.target.id;
		this.x=="0"?this.title="类型":this.x=="1"?this.title="风格":this.title="品牌";
		switch(e.target.id){
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
	changeFun(n){
		let _this=this;
		wx.request({
		  url: `http://192.168.2.38:8085/api/goods/${n}`, 
		  header: {
		    'content-type': 'application/json' // 默认值
		  },
		  success (res) {
			 if(_this.x!="0"){
				  _this.typeList=JSON.parse(res.data);
			  }else{
				   _this.typeList=res.data;
			  }
			
		  }
		})
	},
	handleTo(v){
		switch(this.x){
			case "0":
				wx.navigateTo({
				  url: `/pages/ProductsShow/main?id=${v.Id}&level=${v.LevelIndex}&name=${v.Name}&x=0`
				})
			break;
			case "1":
				wx.navigateTo({
				  url: `/pages/ProductsShow/main?id=${v.Id}&name=${v.RenovationStyle}&x=1`
				})
			break;
			case "2":
				wx.navigateTo({
				  url: `/pages/ProductsShow/main?id=${v.Id}&name=${v.BrandName}&x=2`
				})
			break;
		}
		
	}
  },
  mounted() {
	  var _this = this;
	  wx.getSystemInfo({
		  success(res){
			  // console.log()
			_this.winH = res.windowHeight;
		  }
	  })
	  let lxH=0;
	  let query = wx.createSelectorQuery();
	  query.select('.lx').boundingClientRect(rect=>{  
	   lxH = rect.height;
	   this.overflowH = this.winH-lxH-10;
	  }).exec();
	  //获取类型
	  wx.request({
	    url: `http://192.168.2.38:8085/api/goods/GetTypeList`, 
	    header: {
	      'content-type': 'application/json' // 默认值
	    },
	    success (res) {
	   _this.typeList=res.data;
	    }
	  })
  }  
}
</script>

<style scoped>
#classify{
	display: flex;
}
.classify-left{
	height: 500rpx;
	width: 30%;
	text-align: center;
	border-right: 1rpx solid #eee;
}
.classify-left span{
	display: block;
	line-height: 80rpx;
}
.classify-left span.act{
	color: #fff;
	background-color: #FE223B;
}
.classify-right{
	width: 70%;
}
.classify-right>span{
	display: block;
	width: 100%;
	height: 80rpx;
	line-height: 80rpx;
	text-align: center;
	border-bottom: 1rpx solid #eee;
}
.classify-bottom{
	width: 100%;
	height: 100rpx;
	position: fixed;
	left: 0;
	bottom:100rpx;
}
.classify-cont{
	display: flex;
	flex-wrap: wrap;
	justify-content: left;
	overflow: scroll;
}
.classify-cont div{
	width: 33%;
	font-size: 24rpx;
	text-align: center;
	padding-top: 40rpx;
}
.classify-cont div img{
	width: 100rpx;
	height: 100rpx;
	border-radius: 50rpx;
}
.classify-search{
	display: flex;
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100rpx;
	line-height: 100rpx;
	text-align: center;
	border-top: 1rpx solid #eee;
}
.classify-search span:nth-child(1){
	flex: 3;
	background: #fff;	
	border-top: 1rpx solid #eee;
}
.classify-search span:nth-child(2){
	flex: 7;
	background: #FE223B;
	color: #fff;
	border-top: 1rpx solid #eee;
}
</style>
