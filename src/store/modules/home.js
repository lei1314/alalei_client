import {get} from '../service.js'

import * as types from '../types'//整体输入，存为types对象

const state={
  home:[]
}

let actions = {
  [types.HOME]({commit,state},payload){
    get({apiname:'home',params:{_limit:10,_page:1}}).then(
      result=>commit('HOME',result)
    )
  },
}

let mutations = {
  [types.HOME]:(state,payload)=>state.home=payload,
}

export default{
  namespaced:true,//命名空间的模块。模块内部直接调用，外部需要命名空间(见组件)
  state,actions,mutations
}