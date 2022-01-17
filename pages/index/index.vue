<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
			<u-icon name="photo"></u-icon>
			<u-image src="https://cdn.uviewui.com/uview/example/fade.jpg" :fade="true" duration="450"></u-image>
			<u-button >默认按钮</u-button>
			<u-button type="primary">主要按钮</u-button>
			<u-button type="success">成功按钮</u-button>
			<u-button type="info">信息按钮</u-button>
			<u-button type="warning">警告按钮</u-button>
			<u-button type="error">危险按钮</u-button>
		</view>
	</view>
</template>

<script>
	import {login} from '@/api/login.js'
	export default {
		data() {
			return {
				title: 'Hello',
				
			}
		},
		onLoad() {
			// console.log(this.$http)
			this.fn()
		},
		methods: {
			async fn(){
				let result = await login()
				console.log(result)
			}
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
