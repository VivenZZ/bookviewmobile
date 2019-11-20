<template>
  <div id="app">
    <router-view/>
    <van-tabbar
            active-color="#ED424B"
            inactive-color="#000"
            route>
      <van-tabbar-item
              replace
              to="/"
              icon="wap-home-o"
      >
        首页
      </van-tabbar-item>
      <van-tabbar-item
              replace
              to="/ranking"
              icon="chart-trending-o"
      >
        排行
      </van-tabbar-item>
      <van-tabbar-item
              replace
              to="/search"
              icon="search"
      >
        搜索
      </van-tabbar-item>
      <van-tabbar-item
              replace
              to="/mine"
              icon="contact"
      >
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="less">
  body{
    background-color: #f6f7f9;
  }
  .van-tab{
    padding: 0 30px;
  }
  .van-field__label{
    width: 100px !important;
  }
</style>
