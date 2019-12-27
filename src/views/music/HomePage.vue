<template>
  <div class="home">
    <van-tabs v-model="active">
      <!-- 左侧显示图标 -->
      <van-tab>
        <div slot="title" @click="showModel">
          <van-icon class="iconfont icon-caidan" />
        </div>
      </van-tab>

      <van-tab title="我的">我的</van-tab>

      <van-tab title="发现">
        <!-- 轮播图 -->
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="item in image" :key="item.id">
            <img :src="item.url" style="height:150px;width:90%;border-radius:5px;margin-top:10px;">
          </van-swipe-item>
        </van-swipe>
        
        <!-- 推荐 -->
        <van-grid :column-num="5">
            <van-grid-item>
                <van-icon class="iconfont icon-rili" />
            </van-grid-item>
            <van-grid-item>
                <van-icon class="iconfont icon-gedan" />
            </van-grid-item>
            <van-grid-item>
                <van-icon class="iconfont icon-paihangbang" />
            </van-grid-item>
            <van-grid-item>
                <van-icon class="iconfont icon-tubiaozhizuomoban" />
            </van-grid-item>
            <van-grid-item>
                <van-icon class="iconfont icon-zhibo" />
            </van-grid-item>
        </van-grid>

        <!-- 推荐歌单 -->
        <div class="recommendedSong">
            <div class="recommendedSongTop">
                <div class="recommendedTitle">推荐歌单</div>
                <van-button round plain hairline type="info">歌单广场</van-button>
            </div>
            <div class="recommendedList">
                <ul v-for="item in playList" :key="item.id">
                    <li class="recommendedItem" @click="toPlayList(item.id)">
                        <div class="playC">{{item.playCount | playFilter}}</div>
                        <img :src="item.coverImgUrl" alt="">
                        <div class="recommendedListName" :title="item.name">{{item.name}}</div>
                    </li>
                </ul>
            </div>
        </div>
      </van-tab>
      <van-tab title="云村">云村</van-tab>
      <van-tab title="视频">视频</van-tab>

      <!-- 右侧搜索图标 -->
      <van-tab>
        <div slot="title">
          <van-icon class="iconfont icon-search" />
        </div>
      </van-tab>
    </van-tabs>

    <!-- 左侧个人详情界面 -->
    <van-popup
      v-model="show"
      position="left"
      :style="{ height: '100%',width:'80%' }">
        <div class="loginWrapper">
            <div class="userImg">
            <img :src="info.avatarUrl" alt="">
            </div>
            <div>
            <div class="userName">
                用户名
            </div>
            <div class="singIn">
                <van-tag round type="success" size="large">签到</van-tag>
            </div>
            </div>
        </div>
    </van-popup>
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
  data(){
    return {
      show: false,
      image:[{
        id:1,
        url:'http://p1.music.126.net/OFAOnivvC4EYgM4WXehwNA==/109951164574182616.jpg?imageView&quality=89'
      },{
        id:2,
        url:'http://p1.music.126.net/SYqEOIaUo6XEwRT344-kGg==/109951164574235808.jpg?imageView&quality=89'
      },{
        id:3,
        url:'http://p1.music.126.net/WixqgEdI1jLPcdt6UeXV6g==/109951164574244415.jpg?imageView&quality=89'
      }],
      active: 2
    }
  },
  created(){
    this.findPlayList()
  },
  computed:{
      ...mapState('login',['info']),
      ...mapState('home',['playList'])
  },
  methods:{
    ...mapActions('home',['findPlayList']),
    showModel(){
      this.show = true
    },
    toPlayList(id){
      this.$router.push({
        path:'/playList',
        query:{id}
      })
    }
  },
  // 处理播放量格式
  filters:{
    playFilter:function(playCo){
      if(playCo > 10000){
        var count = parseInt(playCo/10000) + '万'
        return count 
      }
      if(playCo < 10000){
        var count = parseInt(playCo/1000) + '千'
        return count
      }
      
    }
  }
}
</script>
<style scoped>
  .playC{
    position: absolute;
    right: 5%;
    top: 3%;
    color: white;
  }
  .recommendedItem{
    position: relative;
  }
  .recommendedListName{
    width: 100px;
    height: 40px;

    /* 超出部分以点的形式显示 */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    /* 行数 */
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .recommendedList ul li{
      float: left;
      height: 160px;
      margin-right: 5px;
  }
  .recommendedList ul li:first-child{
      margin-left: 15px;
  }
  .recommendedList ul li img{
      height: 100px;
  }
  .recommendedSongTop *{
      display: inline-block;
  }
  .recommendedSongTop{
      height: 70px;
  }
  .recommendedSongTop .van-button{
      float: right;
      margin-top: 20px;
      margin-right: 10px;
      height: 30px;
      line-height: 30px;
  }
  .recommendedTitle{
      float: left;
      margin-top: 25px;
      margin-left: 10px;
      font-weight: bold;
  }
  .van-grid >>> .van-grid-item__content{
      background-color: red;
      opacity: 0.7;
      border-radius: 100%;
      height: 55px;
      width: 55px;
      color: white;
      font-size: 26px;
  }
  .van-grid >>> .van-grid-item__content::after{
      border:none;
  }
  .van-grid{
      padding-left: 10px;
      padding-top: 5px;
  }
  .van-tabs >>> .van-tabs__line{
      display: none;
  }
  .van-tabs >>> .van-tab--active{
      font-weight: 600 !important;
  }
  .van-tabs >>> .van-tab{
      flex: 0;
  }
  .userImg img{
    height: 60px;
    width: 60px;
    border:1px solid #333;
    border-radius: 100%;
    margin-top:20px;
    margin-bottom: 10px;
    float: left;
    margin-left: 30px;
  }
  .userImg{
      height: 100px;
  }
  .userName,.singIn{
    width: 100px;
    display: inline-block;
  }
  .userName{
    text-align: left;
    padding-left: 10px;
  }
  .singIn{
    text-align: right;
    padding-right: 20px;
  }
</style>