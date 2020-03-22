import {get} from '../service.js'

import * as types from '../types'//整体输入，存为types对象

const state={
   find:[],
}

let actions = {
  [types.FIND]({commit,state},payload){
  	get({apiname:'find',params:{_page:1,_limit:9}}).then(
  		result=>commit('FIND',result)
  	)
  },
}

let mutations = {
  [types.FIND]:(state,payload)=>state.find=payload,
}


export default{
  namespaced:true,//命名空间的模块。模块内部直接调用，外部需要命名空间(见组件)
  state,actions,mutations
}