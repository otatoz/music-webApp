import {post,get} from '../../http/axios'
import {setToken,clearToken} from '../../utils/index'
export default {
  namespaced:true,
  state: {
    info:[]
  },
  getters:{
    
  }, 
  mutations: {
    refreshInfo(state,info){
      state.info = info;
    }
  },
  actions: {
    // 登录
    async loginHandler(context,params){
        let res = await post('/login/cellphone',params)
        let token = res.data.account.id
        // 将用户id存储到本地
        setToken(token)
        // 使用uid换取用户信息
        context.dispatch('detail',token)
    },
    // 用户详细信息
    async detail(context,uid){
      let res = await post('/user/detail',{uid})
      context.commit('refreshInfo',res.data.profile)
    }
  }
}