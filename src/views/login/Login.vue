<template>
  <div class="login">
    <div>
      <img src="../../assets/1.png" alt="">
    </div>

    <div class="phoneLogin">
      <van-button plain round type="default" @click="toLogin">手机号登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    toLogin(){
      this.$router.push({
        path:'/login/phoneLogin'
      })
    }
  }
}
</script>

<style scoped>
  html,body{
    height: 100%;
  }
  .login{
    height: 100%;
    width: 100%;
    background-color: red;
  }
  img{
    margin-top: 150px;
    height: 40px;
  }
  .phoneLogin{
    margin-top: 250px;
  }
  .phoneLogin .van-button{
    width: 250px;
    height: 35px;
    line-height: 35px;
  }
</style>
