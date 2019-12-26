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
            <img :src="item.url" style="height:200px;width:90%;border-radius:5px;margin-top:10px;">
          </van-swipe-item>
        </van-swipe>
      </van-tab>
      <van-tab title="云村">云村</van-tab>
      <van-tab title="视频">视频</van-tab>
      <van-tab>
        <div slot="title" @click="showModel">
          <van-icon class="iconfont icon-search" />
        </div>
      </van-tab>
    </van-tabs>
    <!-- 左侧登录界面 -->
    <van-popup
      v-model="show"
      position="left"
      :style="{ height: '100%',width:'80%' }"
    >
      <!-- <div class="loginWrapper">
        <div class="userImg">
          头像
        </div>
        <div>
          <div class="userName">
            用户名
          </div>
          <div class="singIn">
            <van-tag round type="success" size="large">标签</van-tag>
          </div>
        </div>
      </div> -->
      <div class="loginWrapper">
        <div class="loginTop">
          <div>
            登录网易云音乐
          </div>
          <div>
            手机电脑多端登录，尽享海量高品质音乐
          </div>
          <div>
            <van-button plain round type="default" @click="toLogin">立即登录</van-button>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
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
      active: 1
    }
  },
  methods:{
    showModel(){
      this.show = true
    },
    toLogin(){
      this.$router.push({
        path:'/login/login'
      })
    }
  }
}
</script>
<style scoped>
  .van-tabs >>> .van-tab{
      flex: 0;
  }
  .userImg{
    height: 60px;
    width: 60px;
    border:1px solid #333;
    border-radius: 100%;
    margin-top:20px;
    margin-left: 20px;
    margin-bottom: 10px;
  }
  .userName,.singIn{
    width: 130px;
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