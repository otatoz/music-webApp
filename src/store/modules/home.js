import {post,get} from '../../http/axios'
export default {
  namespaced:true,
  state: {
    playList:[],
    playDetail:[],
    songList:[]
  },
  getters:{
    
  }, 
  mutations: {
    refreshPlayList(state,playList){
        state.playList = playList;
    },
    refreshListDetail(state,playDetail){
      state.playDetail = playDetail;
    },
    refreshListSong(state,songList){
      state.songList = songList;
    }
  },
  actions: {
    // 获取歌单
    async findPlayList(context){
        let res = await post('/top/playlist?limit=6&order=hot')
        context.commit('refreshPlayList',res.data.playlists)
    },

    // 歌单详情
    async playListDetail(context,id){
      let res = await post('/playlist/detail',{id})
      // 歌单详情
      console.log(res.data.privileges)
      context.commit('refreshListSong',res.data.privileges)
      // 歌单列表
      context.commit('refreshListDetail',res.data.playlist)
      return res
    }
  }
}