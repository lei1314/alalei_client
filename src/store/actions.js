import axios from '../plugins/axios.js'
import {get} from './service.js'
import * as types from './types'//整体输入，存为types对象
let actions = {
	// [types.HOME]({commit,state},payload){
	// 	get({apiname:'home',params:{_limit:10,_page:1}}).then(
	// 		result=>commit('HOME',result)
	// 	)
		
	// },
	// [types.BANNER]({commit,state},payload){
	// 	get({apiname:'banner'}).then(
	// 		result=>commit('BANNER',result)
	// 	)
	// },
	// [types.FIND]({commit,state},payload){
	// 	get({apiname:'find',params:{_page:1,_limit:9}}).then(
	// 		result=>commit('FIND',result)
	// 	)
	// },
	// [types.FOLLOW]({commit,state},payload){
	// 	get({apiname:'follow',params:{_page:1,_limit:9}}).then(
	// 		result=>commit('FOLLOW',result)
	// 	)
	// },
	// [types.SUBJECT]({commit,state},payload){
	// 	get({apiname:'find',params:{_page:1,_limit:3}}).then(
	// 		result=>commit('SUBJECT',result)
	// 	)
	// },
  
	 //  [types.DETAIL]({commit,state},{apiname,_id}){
		// get({apiname,_id}).then(
		//   result=>{
		// 	  commit('DETAIL',result.detail)
		// 	  // console.log(result)
		// 	  }
		// )
	 //  }
};

export default actions;
