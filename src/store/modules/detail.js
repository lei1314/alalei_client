import {get} from '../service.js'

import * as types from '../types'//整体输入，存为types对象

const state={
  detail:{}
}

let actions = {
  [types.DETAIL]({commit,state},{apiname,_id}){
    get({apiname,_id}).then(
      result=>commit('DETAIL',result)
    )
  }
}

let mutations = {
  [types.DETAIL]:(state,payload)=>state.detail=payload,
}

export default{
  namespaced:true,//命名空间的模块。模块内部直接调用，外部需要命名空间(见组件)
  state,actions,mutations
}