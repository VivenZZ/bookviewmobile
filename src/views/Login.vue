<template>
  <div id="Login">
    <van-image class="topImage"
            width="10rem"
            height="2.1rem"
            :src="require('../assets/login.png')"
    />
    <div class="login_box">
      <van-image class="logoImage"
                 width="2rem"
                 height="2rem"
                 :src="require('../assets/logo.png')"
      />
      <van-cell-group>
        <van-field
                v-model="username"
                required
                clearable
                label="用户名"
                left-icon="manager"
                right-icon="question-o"
                placeholder="请输入用户名"
                @click-right-icon="$toast('问号？')"
        />

        <van-field
                v-model="password"
                left-icon="lock"
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
        />
      </van-cell-group>
      <van-button class="loginBtn" round type="warning" size="large">登录</van-button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'login',
    data () {
      return {
        username: '',
        password: ''
      }
    }
  }
</script>
<style lang="less" scoped>
  #Login{
    color: red;
    height: 100vh;
    overflow: hidden;
    .topImage{
      position: relative;
      z-index: -1;
    }
    .login_box{
      width: 100%;
      height: 100vh;
      margin-top: -30px;
      background-color: white;
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 50px;
      box-sizing: border-box;
      .logoImage{
        margin:200px 0 100px;
      }
    }
    .loginBtn{
      margin-top: 88px;
      height: 80px;
      line-height: 80px;
    }
  }
</style>