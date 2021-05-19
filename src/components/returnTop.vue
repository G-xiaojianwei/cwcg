<template>
	<div class="return" @click='goTop()'><img src="/static/img/return.png" alt=""></div>
</template>

<script>
	export default{
		data(){
			return{
		
			}
		},
		methods:{
			goTop () {
			      this.$emit('updateInfo');
			    }
		}
	}
</script>

<style>
	.return{
		position: fixed;
		right: 20rpx;
		bottom: 40rpx;
		width: 50rpx;
		height: 50rpx;
		border-radius: 50%;
		background: #FE223B;
		text-align: center;
	}
	.return img{
		width: 70%;
		height: 70%;
		margin-top: 5rpx;
		vertical-align: middle;
	}
</style>
