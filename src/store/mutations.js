// let mutations = {
// 	UPDATE_NAV: (state, payload) => {
// 		// console.log(state.bNav)
// 		// console.log(payload)
// 		state.bNav = payload
// 	},
// 	UPDATE_FOOT: (state, payload) => {
// 		state.bFoot = payload
// 	},
// 	UPDATE_LOADING:(state,payload)=>state.bLoading=payload,
	
	
// 	HOME:(state,payload)=>state.home=payload,
// 	BANNER:(state,payload)=>state.banner=payload,
	
// 	SUBJECT:(state,payload)=>{
// 		// console.log(state.list)
// 		// console.log(payload)
// 		state.list=payload
// 		},
// 	FOLLOW:(state,payload)=>state.follow=payload,
// 	FIND:(state,payload)=>state.find=payload,
// 	DETAIL:(state,payload)=>state.detail=payload,
	
	
// 	USER:(state,payload)=>state.user=payload,
// };

// export default mutations;

// types
import {
  UPDATE_FOOT,UPDATE_LOADING,UPDATE_NAV
} from './types';

export default {
  [UPDATE_NAV]:(state,payload)=>state.bNav=payload,
  [UPDATE_FOOT]:(state,payload)=>state.bFoot=payload,
  [UPDATE_LOADING]:(state,payload)=>state.bLoading=payload,
  
  // [HOME]:(state,payload)=>state.home=payload,
  // [BANNER]:(state,payload)=>{
	 //  state.banner=payload
	  
	 //  // console.log(state.banner)
	 //  },
  // [FOLLOW]:(state,payload)=>state.follow=payload,
  // [FIND]:(state,payload)=>state.find=payload,
  // [SUBJECT]:(state,payload)=>state.list=payload,
  // [DETAIL]:(state,payload)=>state.detail=payload,
  
  
  // [USER]:(state,payload)=>state.user=payload,
  
}

/* let a=12;
a;
window.a

window['a']

let bulala='a';

window[bulala] */
