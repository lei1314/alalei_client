import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);//安装插件到vue

import state from '../store/state.js'
import actions from '../store/actions.js'
import mutations from '../store/mutations.js'


import banner from '../store/modules/banner.js'
import home from '../store/modules/home.js'
import find from '../store/modules/find.js'
import follow from '../store/modules/follow.js'
import subject from '../store/modules/subject.js'
import detail from '../store/modules/detail.js'
import user from '../store/modules/user.js'

let store = new Vuex.Store({//配置接受state等选项，值为对象
  // key:value,
  // state:state,
  // actions:actions,
  // mutations:mutations,
  // getters:getters
  state,actions,mutations,
  modules:{
    banner,home,find,follow,subject,detail,user
	// column,detail,follow,home,user
  }
});

//导出store实例给main.js
export default store
