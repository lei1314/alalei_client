<template>
	<div class="foot-btn">
		<ul class="footer">
			<router-link tag="li" to="/home" active-class="redcol"><span class="iconfont icon-sp"></span>推荐</router-link>
			<router-link tag="li" to="/follow" active-class="redcol"><span class="iconfont icon-caidan"></span>热点</router-link>
			<router-link tag="li" to="/find" active-class="redcol"><span class="iconfont icon-fx"></span>发现</router-link>
			<router-link tag="li" to="/user" active-class="redcol"><span class="iconfont icon-wd"></span>我的</router-link>
		</ul>
	</div>
</template>

<script>
	// import home from '../assets/img/home.png'
	// import my1 from '../assets/img/my.png'
	export default {
		name: 'Footer',
		props: {},
		data() {
			return {
				//       home:home,
				// my:my1
			}
		},
		components: {},
		mounted() {},
		updated() {},
		methods: {

		}
	}
</script>

<style scoped>
	.foot-btn{
		z-index: 100;
	}
	/*footer*/
	.footer{
		width: 100%;
		height: 0.8rem;
		background: #fff;
		position: fixed;
		left: 0;
		bottom: 0;
		border-top: 1px sorouter-linkd #9e9a95;
		display: flex;
		justify-content: space-around;
		text-align: center;
		box-shadow: 0 0 10px grey;
		border-radius: 6px;
	}
	.footer li{
		font-size: .1rem;
		/* color: #5d5d5d; */
		line-height: .1rem;
		font-size: .24rem;
	} 
	.footer .iconfont{
		    display: block;
			font-size: .3rem;
		    height: .24rem;
		    padding: .15rem;
		
	}
	.redcol{
		color: red;
	}
	
	
	
	@font-face {font-family: "iconfont";
	  src: url('../assets/font/iconfont.eot?t=1573267851574'); /* IE9 */
	  src: url('../assets/font/iconfont.eot?t=1573267851574#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAYQAAsAAAAADAQAAAXBAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDdAqKFIhGATYCJAMgCxIABCAFhG0HgQMbWwoRFaTlkf08cIy1o0dSyET91b0Or6iRdJ8joNbQPXgIMDjQPB5BZaLiIkzSOiKnybhOPRuR//839T4eJESgalREZ3WdiZLNw1wEaWZCZ/7VHmAbwKTZzamFdcFeudCzTFj6i0/6XrKtDMvnKB0/7efq1C602Wu/rZd7E7t/U0Vc2hqLJA1pISGizVKDEAmF2jGxTS6YbUtRKfhrYo8T0GhUFLSTX1oLtOwSDphw169PN6ArSXmABHWk7Lg0Q3gHlDrOIe4CeJv8fPgPCYEGUZHg8qTd27yekPnLpWE+5jVex8SDZb08jH1JWAay9b2dxReAs95lWKM3nHQNtF9/I+aXi+qpcmqM2kKd3DBf0xrLwcKsJTgMFEpZJe7yzwslXFgzlDd9Fb9cWKDgl6dAyS9OIPMrxiMrtkBchDgZAonf8313ltXRJe3AIAjvAeIKXPhqMjxKkpKGRFU7y1AXy0YYTdddnFmz2eQaYm9vABUfOoG9KnLkJinP7oYSSG2W23ZdanVd7onX7AnutozvIcutFaWNJNWJYi3FmGEVO/YfZ41ovdtyQQiv28WfHSNivZkQxc6rSQnUJPiUsdbdlj1uJiTL2edllJeEXbCAB3FeXPBeYPq8i99p7HbiiuVxytGL/KMc626pplWwbGeL9omsfShJVofWyFOERgd/2aXTunvJDDJbd7t2Xn8/xdgO7E6OyK1ZaHu5z722m6y2VhraSB/qxPfjz7xn2/Oy6zKpxS7+oXWIteJR0AhMms7XLt26fbWb0lrGO/s9BaVmhbCLdxbFCezWs0A+7DLZCXsQZdnddcUKEyMsA3hYajRbl7u25cYtK4Rl/NLWaa26cbxbwlHXLkkJvlYWFlKZlIhWZrtfO93y/EiHEZ/QFPSG1nf5FAiXm2/BtnpMZLPNFsQ6gmyx1Q+ZQGzZQoy/UuqYgMfjgqr7egf6utvfvIliAmMd4t0CQLtYiQYMQJVZN4o1lai025SuRYX6LF1RUdeunNNl6d03GAMvM8gDLpb1ziRHph/8Hjs+h4GBdoaYsAkjNnzrBMbeA5jt2PEduw9PydT1LLsIHoGBy+WF/2qSK3lxn2IGObKU1y/HFkHlzXkK9tcy9dxMe7bexP7zQl13SFr/Lu71VmZY4NLBmQ9bPGR7leWvnJQZ91Jr3nzy/+dprfOIzS02c8MeDHwM2hQbyXGkIDaO87gaqn4Ks2TpPlJVSZB9qhrAO/x73qyPWiaqfY68rL5bDcTYYLRkORrCIG9gY+uhw2vRtXXYcKJ1bdc8dOmyIZsUys+PUjDEz18h60mVitMr3UpK241Z2twlG/Lyuaam8wohG5ss5xobX9lxc662qj/AY3Zh0alySPr+dc7FoR5DnD67rXT77DQxufOdO/o5NKdfRTvTK/UcPVvfJsSsuWsenDULmWpOveKeY2PZQohp6xydi671DD2sAzxdwhdwZmKbgrtivucxfovjq3oSjuYzgScDkJ4T3/5Sh/nJjJ/Xxa75P/p/Zht+fC0WVJwnI8aoRaS9fyCWqxjVCS6pOn/QVmEMeJ4/Tu2C/huVp/Fa5YmqnV6uGe353oWCyXsKiCojkNSmpVm5DIUmq1CqrUOjJQVXN+kyHBayAVg0Q4Gg3QGIWn2BpN09aVa+gEKvb1BqDxjMR3/hfMuTl0DH14Ja0IF5AllO/paRYzrxC8M261L2J9Y/LCt1QN909YFPTFjWOGO9hUHEgy+8wIfyNJxnhlx4RCtNFMnXtvVdX9RYXqqjVwXSBHKA8QSIxRIfrS+Oje//goLNTCsDK3quf1CxosZBr9FJSD9ZklrxLNNXN8FAKO8Bzy/YAnxQHs3XXgZy90EjZIlGnNGdXbVUy8uyZn++PNI7kM7l9RMMJ0iKZlhd7iNlSoa9TuFJPCKTTsOxknd6NIfs4qaFca994O2+2YiH76gzWs7Pw70773+hhDuryelUVxUAAA==') format('woff2'),
	  url('../assets/font/iconfont.woff?t=1573267851574') format('woff'),
	  url('../assets/font/iconfont.ttf?t=1573267851574') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
	  url('../assets/font/iconfont.svg?t=1573267851574#iconfont') format('svg'); /* iOS 4.1- */
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.icon-sp:before {
	  content: "\e78e";
	}
	
	.icon-fdj:before {
	  content: "\e63d";
	}
	
	.icon-ht:before {
	  content: "\e67e";
	}
	
	.icon-gwc:before {
	  content: "\e620";
	}
	
	.icon-fx:before {
	  content: "\e615";
	}
	
	.icon-wd:before {
	  content: "\e61a";
	}
	
	.icon-caidan:before {
	  content: "\e62e";
	}
</style>
