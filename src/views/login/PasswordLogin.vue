<template>
  <div class="passwordLogin">
    <div class="passwordLoginTop">
      <van-icon name="arrow-left" @click="toLogin"/>手机号登录
    </div>
    <div>
      <van-field
        v-model="password"
        placeholder="请输入密码"
        :value="password"
        @touchstart.native.stop="show = true"
      >
        <van-button class="forgetPassword" slot="button" size="small">忘记密码?</van-button>
      </van-field>

      <van-number-keyboard
        v-model="password"
        :show="show"
        :maxlength="6"
        @blur="show = false"
      />
    </div>
    <div class="phoneLoginBtn">
      <van-button plain round type="default" @click="loginApi">登录</van-button>
    </div>
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
    data() {
        return {
            show: false,
            password: ''
        }
    },
    methods:{
        ...mapActions('login',['loginHandler']),
        loginApi(){
            let obj = {
                phone:this.$route.query.phone,
                password:this.password
            }
            this.loginHandler(obj).then(()=>{
                this.$router.push({
                    path:'/home'
                })
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
  .forgetPassword{
      border: none;
      color: #ccc;
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
  .passwordLoginTop{
    height:30px;
    line-height: 30px;
    text-align: left;
    margin-left: 10px;
    margin-top: 10px;
  }
  .passwordLogin{
    overflow: hidden;
  }
  .van-icon{
    margin-right: 10px;
  }
</style>