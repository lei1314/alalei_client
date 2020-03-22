import {get} from '../service.js'

import * as types from '../types'//整体输入，存为types对象

const state={
   banner:[],
}

let actions = {
  [types.BANNER]({commit,state},payload){
  	get({apiname:'banner'}).then(
	
  		result=>{
			commit('BANNER',result)
			
			}
  	)
  },
}

let mutations = {
  [types.BANNER]:(state,payload)=>{
  	  state.banner=payload
  	  
  	  // console.log(state.banner)
  	  },
}

export default{
  namespaced:true,//命名空间的模块。模块内部直接调用，外部需要命名空间(见组件)
  state,actions,mutations
}