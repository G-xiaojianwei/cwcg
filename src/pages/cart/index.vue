<template>
  <div>
		<!-- 空购物车状态 -->
		<div class="empty-cart" style="display: none;">
			<img src="/static/img/gwcl_03.png" alt="">
			<p class="empty-h">亲，购物车竟然是空的</p>
			<p class="empty-e">赶紧去挑几件喜欢的灯</p>
			<button>去逛逛</button>
		</div>
		<!-- 已添加状态 -->
		<div class="cart-added" @change="checkChange">
			<checkbox-group @change="handleChangeSelect">
			<div class="cart-item" v-for="(item,index) in cartArr">
				<div><label class="radio"><checkbox  :value="item.Id" color="#FE223B" :checked="item.select"  /></label></div>
				<div><img :src="'http://www.365dsw.com'+item.PicUrl" alt=""></div>
				<div>
					<p>{{item.ProName}}</p>
					<p>{{item.Title}}</p>
					<p></p>
					<p></p>
<!-- 					<p>外观形状:方型</p>
					<p>产品尺寸:600</p> -->
					<p>￥{{item.GoodsPrice}}</p>
				</div>
				<div>
					<i class="icon_jj" @click="handleDelete(item.Id)"></i>
					<div class="num-aq">
						<span @click="handleUpdateNum('-',index)">-</span>
						<span><input v-model="item.Num" @change="handleUpdateNum(item.Num,index)" /></span>
						<span @click="handleUpdateNum('+',index)">+</span>
					</div>
				</div>
			</div>
			</checkbox-group>
		</div>
		<!-- 结算金额汇总显示 -->
		<div class="cart-summary">
			<div><label class="radio"><checkbox  value="r1" color="#FE223B" :checked="allSelect" @click="handleAllSelect"/>全选</label></div>
			<div>合计：<span>￥{{addSum}}</span></div>
			<div @click="handleBuy">结算（{{cartId.length}}件）</div>
		</div>
	</div>
</template>

<script>
	
export default {
  data () {
    return {
      dataInfo:{},
	  cartArr:{},
	  cartId:[],
	  allSelect:false,
	  sum:0
    }
  },
  methods: {
	  //选择后提交订单
	  handleBuy(){
	  	let _this=this;
	  		//先循环出要提交的订单
	  		let datas="[";
	  		if(this.cartId.length){
	  			for(let i=0;i<this.cartId.length;i++){
	  				let cartItem=this.cartArr.filter(item=>item.Id == this.cartId[i]);
	  				let _obj=`{\"id\":"${cartItem[0].ProAttrId}",\"pid\":"${cartItem[0].ProId}",\"uid\":"${this.dataInfo.Id}",\"ut\":"1",\"num\":"${cartItem[0].Num}",\"isInstall\":"0"}`;
	  				if(i==this.cartId.length-1){
	  					datas+=_obj+"]";
	  				}else{
	  					datas+=_obj+",";
	  				}
	  				
	  			}
	  			wx.request({
	  				url: `http://192.168.2.38:8085/api/Orders/PostBeforehandOrders?uid=${_this.dataInfo.Id}&datas=${datas}`, 
	  				header: {
	  				  'content-type': 'application/json' // 默认值
	  				},
	  				method:"POST",
	  				success (res) {
	  					if(res.data){
	  						wx.navigateTo({
	  						  url: `/pages/orderDetail/main?resid=${res.data}`
	  						})
	  					}
	  				}
	  			})
	  		}else{
	  			wx.showToast({
	  			  title: '请勾选商品',
	  			  icon:'error',
	  			  duration: 2000
	  			})
	  		}
	  	// let datas=`[{\"id\":"${this.ProChildId}",\"pid\":"${this.localId}",\"uid\":"${this.uid}",\"ut\":"1",\"num\":"1",\"isInstall\":"0"}]`;
	  },
	  // 更改商品数量
	  handleUpdateNum(v,i){
		 if(v=="+"){
			 this.cartArr[i].Num+=1
		 }else if(v=="-"){
			 this.cartArr[i].Num>1 ? this.cartArr[i].Num-=1 : 1;
		 }else{
			 if(v<=1){
				 this.cartArr[i].Num=1;
			 }else{
				 this.cartArr[i].Num=v;
			 }
			  
		 }
	  },
	  //单独选中商品
	  handleChangeSelect(e){
		  //控制多选按钮
		  this.cartId=e.target.value;
		  for(let i=0;i<this.cartArr.length;i++){
			this.cartArr[i].select=false;
		  }
		  this.cartId.filter(item=>{
			  for(let i=0;i<this.cartArr.length;i++){
			  	if(this.cartArr[i].Id==item){
					this.cartArr[i].select=true;
				}
			  }
		  })
		  //控制是否全选
		  this.cartId.length==this.cartArr.length ? this.allSelect=true : this.allSelect=false;
	  },
	  //一键全选
	  handleAllSelect(){
	  		//判断是否全选
			if(this.allSelect){//全选
				this.cartId=[];
				for(let i=0;i<this.cartArr.length;i++){
					this.cartArr[i].select=false;
				}
				this.allSelect=false;
			}else{//没有全选
				for(let i=0;i<this.cartArr.length;i++){
					this.cartId.push(this.cartArr[i].Id);
					this.cartArr[i].select=true;
					this.allSelect=true;
				}
			}
	  },
	  //删除购物车商品
	  handleDelete(i){
	  		  for(let a=0;a<this.cartId.length;a++){
	  			  if(this.cartId[a]==i){
	  				  this.cartId.splice(a,1);
	  				  let cartItem=this.cartArr.filter(item=>item.Id==i);
	  				  this.sum-=cartItem[0].GoodsPrice*cartItem[0].Num;
	  			  }
	  		  }
	  		  let _this=this;
	  		  wx.request({
	  		  	url: `http://192.168.2.38:8085/api/user/DelCart?uid=${_this.dataInfo.Id}&ids=${i}`, 
	  		  	header: {
	  		  	  'content-type': 'application/json' // 默认值
	  		  	},
	  		  	method:"POST",
	  		  	success (res) {
	  		  		if(res.data==1){
	  					console.log(_this.dataInfo.Id)
	  					wx.request({
	  					  url: `http://192.168.2.38:8085/api/user/UserCart?uid=${_this.dataInfo.Id}`, 
	  					  header: {
	  					    'content-type': 'application/json' // 默认值
	  					  },
	  							 method:"POST",
	  					  success (res) {
	  					    _this.cartArr=JSON.parse(res.data);
	  						_this.cartArr.forEach(item=>{
	  									   item.select=false;
	  						})
	  					  }
	  					})
	  				}
	  		  	}
	  		  })
	  },
  },
  computed:{
  	  addSum(){
		  this.sum=0;
		  this.cartId.filter(item=>{
			  for(let i=0;i<this.cartArr.length;i++){
				  if(this.cartArr[i].Id==item){
					  this.sum+=this.cartArr[i].GoodsPrice*this.cartArr[i].Num;
				  }
			  }
		  })
		  return this.sum;
	  }
  },
  mounted() {
	  let _this= this;
  },
  onShow() {
	  // 每次进入页面，即调取数据库中购物车信息
	  let _this= this;
	  wx.getStorage({
	    key: 'dataInfo',
	    success (res) {
	     _this.dataInfo=JSON.parse(res.data);
		 // 获取用户购物车
		wx.request({
		  url: `http://192.168.2.38:8085/api/user/UserCart?uid=${_this.dataInfo.Id}`, 
		  header: {
			'content-type': 'application/json' // 默认值
		  },
				 method:"POST",
		  success (res) {
			_this.cartArr=JSON.parse(res.data);
				   _this.cartArr.forEach(item=>{
					   item.select=false;
				   })
				   console.log(JSON.parse(res.data))
		  }
		})
	    },
		fail:function(res){
			wx.reLaunch({
			  url: `/pages/my/main`
			})
			return;
		}
	  })
	  
	  //清零
	  this.sum=0;
	  this.cartId=[];
	  this.allSelect=false;
    
  }

}
</script>

<style scoped>
.empty-cart{
	width: 100%;
	height: 100%;
	text-align: center;
}
.empty-cart img{
	margin-top: 140rpx;
	width: 332rpx;
	height: 325rpx;
	vertical-align: top;
}
.empty-cart .empty-h{
	font-size:32rpx;
	font-weight: bold;
	padding: 20rpx 0;
}
.empty-cart .empty-e{
	font-size: 24rpx;
	color: #666;
}
.empty-cart button{
	margin-top: 20rpx;
	width: 217rpx;
	height: 92rpx;
	background-color: transparent;
	color: #666;
	border: none;
	border: 1rpx solid #eee;
}
.cart-summary{
	z-index: 1000;
	width: 100%;
	position: fixed;
	left: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1rpx solid #eee;
	height: 80rpx;
	line-height: 80rpx;
	background: #fff;
}
.cart-summary div{
	flex: 1;
	text-align: center;
	font-size: 28rpx;
}
.cart-summary span{
	color: #FE223B;
}

.cart-summary div:nth-child(3){
	background: #FE223B;
	color: #fff;
	height: 100%;
}
.cart-added{
	padding-bottom: 100rpx;
}
.cart-item{
	display: flex;
	align-items: center;
	padding-top: 40rpx;
	border-bottom: 1rpx solid #eee;
}
.cart-item>div:nth-child(1){
	flex: 1.5;
	text-align: center;
}
.cart-item>div:nth-child(2){
	flex: 2.5;
}
.cart-item>div:nth-child(2) img{
	width: 100%;
	height: 180rpx;
	padding:0 10rpx;
	box-sizing: border-box;
}
.cart-item>div:nth-child(3){
	flex: 4;
}
.cart-item>div:nth-child(3) p{
	font-size: 24rpx;
	color: #666;
	margin-top: 3rpx;
}
.cart-item>div:nth-child(3) p:nth-child(1){
	font-size:28rpx;
	color: #000;
	font-weight: bold;
}
.cart-item>div:nth-child(3) p:nth-child(5){
	color: #FE223B;
	font-size: 32rpx;
}
.cart-item>div:nth-child(4){
	position: relative;
	flex: 2;
	height: 180rpx;
}
.cart-item .num-aq{
	position:absolute;
	bottom: 20rpx;
	right: 20rpx;
	display: flex;
}
.cart-item .num-aq span{
	flex: 1;
	border: 1rpx solid #eee;
	text-align: center;
}
.cart-item .num-aq span input{
	font-size: 24rpx;
}
.cart-item .num-aq span:nth-child(1){
	border-bottom-left-radius: 10rpx;
	border-top-left-radius: 10rpx;
	border-right: none;
}
.cart-item .num-aq span:nth-child(3){
	border-bottom-right-radius: 10rpx;
	border-top-right-radius: 10rpx;
	border-left: none;
}
.icon_jj{
	position: absolute;
	right: 20rpx;
	top: 0;
	width: 40rpx;
	height: 40rpx;
	border-radius: 50rpx;
	background:url(../../../static/img/gwc11_03.png);
	background-size: 100% 100%;
}
</style>
