<template>
	<div class="foot-btn">
		<ul class="footer">
			<router-link tag="li" to="/home" active-class="redcol"><i class="el-icon-office-building"></i><p>首页</p></router-link>
			<router-link tag="li" to="/follow" active-class="redcol"><i class="el-icon-s-data"></i><p>栏目</p></router-link>
			<router-link tag="li" to="/find" active-class="redcol"><i class="el-icon-loading"></i><p>发现</p></router-link>
			<router-link tag="li" to="/car" active-class="redcol"><i class="el-icon-goods"></i><p>購物車</p></router-link>
			<router-link tag="li" to="/user" active-class="redcol"><i class="el-icon-user"></i><p>我的</p></router-link>
		</ul>
	</div>
</template>
<script>
</script>
<style scoped>
	.foot-btn{
		z-index: 100;
	}
	.footer{
		width: 100%;
		background: #fff;
		position: fixed;
		left: 0;
		bottom: 0;
		border-top: 1px solid #9e9a95;
		display: flex;
		text-align: center;
		justify-content: space-around;
		padding-top: .1rem;
		font-size: .25rem;
	}
	.footer li i{
		font-size: .4rem;
	}
	.footer li p{
		color: #999;
		padding-top: .05rem;
		padding-bottom: .05rem;
	}
	.redcol{
		color: red;
	}
</style>
