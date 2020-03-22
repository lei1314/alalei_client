import {get} from '../service.js'

import * as types from '../types'//整体输入，存为types对象

const state={
   subject:[],
}

let actions = {

  [types.SUBJECT]({commit,state},payload){
  	get({apiname:'find',params:{_page:1,_limit:3}}).then(
  		result=>commit('SUBJECT',result)
  	)
  },
}

let mutations = {
  [types.SUBJECT]:(state,payload)=>state.subject=payload,
}


export default{
  namespaced:true,//命名空间的模块。模块内部直接调用，外部需要命名空间(见组件)
  state,actions,mutations
}