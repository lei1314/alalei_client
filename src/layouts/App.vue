<template>
	<div id="app">
		<loading v-if="$store.state.bLoading" />
		<Header v-if="$store.state.bNav" />
		<!-- <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
			<router-view  style="position: absolute;left:0;top:0"></router-view>
		</transition> -->
		<transition name="slide-fade">
			<router-view />
		</transition>


		<Footer v-show="$store.state.bFoot" />
	</div>
</template>

<script>
	import Header from './Header.vue';
	import Footer from './Footer.vue';
	import loading from '../components/Loading.vue';
	export default {
		name: 'App',
		data() {
			return {
				transitionName: ''
			}
		},
		components: {
			Header,
			Footer,
			loading
		},
		watch: {
			$route: { //路由监听，属性检测
				handler(nextValue, PrevValue) {
					// console.log('路由变化了', nextValue);
					let path = nextValue.path;
					if (/follow|find/.test(path)) { //home follow column
						// this.$root.bNav = false;
						// this.$root.bFoot = true;
						this.$store.commit('UPDATE_NAV',false)
						this.$store.commit('UPDATE_FOOT',true)
					}
					if (/home|subject|cropuis|map|map2|map3/.test(path)) { //home follow column
						// this.$root.bNav = this.$root.bFoot = true;
						this.$store.commit('UPDATE_NAV',true)
						this.$store.commit('UPDATE_FOOT',true)
					}
					if (/detail|login|reg/.test(path)) { //detial login reg
						// this.$root.bNav = this.$root.bFoot = false;
						this.$store.commit('UPDATE_FOOT',false)
						this.$store.commit('UPDATE_NAV',false)
					}
					if (path.includes('/user')) { //user
						// this.$root.bNav = false;
						// this.$root.bFoot = true;
						this.$store.commit('UPDATE_NAV',false)
						this.$store.commit('UPDATE_FOOT',true)
					}
				},
				immediate: true,
			}
		}
	}
</script>

<style>
	/* 第一种  */
/* 	.slide-fade {
		position: absolute;
		left: 0;
		right: 0;
	}

	.slide-fade-enter-active {
		transition: all 1.2s ease;
	}

	.slide-fade-leave-active {

		transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
	}

	.slide-fade-enter,
	.slide-fade-leave-to {
		left: 0;
		right: 0;
		transform: translateX(50px);
		opacity: 0;
	} */

	/* 第二种 */
	.slide-fade{
  position: fixed;left:0;right: 0;
  width: 100%;
  background-color: white;
}
.slide-fade-enter, .slide-fade-leave-to
{
  left:0;top: 0;right: 0;
  position: absolute;
  transform:translateX(-500px) translateY(-500px) rotate(-150deg) scale(0.5);
  opacity:1;
}
.slide-fade-enter-active {
  background-color: white;
  transition: all 0.6s ease;
}
.slide-fade-leave-active {
  transition: all 0.7s ease;
  background-color: white;
  transform:translateX(500px) translateY(500px) rotate(150deg) scale(1) ;
  z-index: 100;
}
</style>
