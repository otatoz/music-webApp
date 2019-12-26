<template>
  <div class="phoneLogin">
    <div>
      <div class="phoneLoginTop">
        <van-icon name="arrow-left" @click="toLogin"/>手机号登录
      </div>
      <div class="notice">
        未注册手机号登陆后将自动创建账号
      </div>

      <div>
        <van-field
          v-model="phone"
          label="+86"
          placeholder="请输入手机号"
          :value="phone"
          @touchstart.native.stop="show = true"
        />

        <van-number-keyboard
          v-model="phone"
          :show="show"
          :maxlength="6"
          @blur="show = false"
        />
      </div>

      <div class="phoneLoginBtn">
        <van-button plain round type="default" @click="toNext(phone)">下一步</van-button>
      </div>
    </div>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        phone: ''
      }
    },
    methods:{
      // 下一步
      toNext(phone){
        this.$router.push({
          path:'/login/passwordLogin',
          query:{phone:phone}
        })
      },
      // 返回上一步
      toLogin(){
        this.$router.go(-1)
      }
    }
}
</script>
<style scoped>
  .phoneLogin{
    overflow: hidden;
  }
  .phoneLoginBtn{
    margin-top: 40px;
  }
  .phoneLoginBtn .van-button{
    width: 250px;
    height: 35px;
    line-height: 35px;
    background-color: red;
    color: white;
  }
  .van-cell-group{
    border-bottom: 1px solid #ccc;
  }
  .van-hairline--top-bottom::after{
    border:none;
  }
  .phoneLoginTop{
    height:30px;
    line-height: 30px;
    text-align: left;
    margin-left: 10px;
    margin-top: 10px;
  }
  .van-icon{
    margin-right: 10px;
  }
  .notice{
    font-size: 14px;
    color:#ccc;
    text-align: left;
    margin-top: 10px;
    margin-left: 10px;
  }
</style>