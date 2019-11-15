<template>
  <div id="mine">
    <!-- 居中 -->
    <van-tabs class="mine-nav" type="card">
      <van-tab title="我的书架">
        <not-login />
      </van-tab>
      <van-tab title="最近阅读">内容 2</van-tab>
    </van-tabs>
  </div>
</template>
<script>
  import NotLogin from "../components/NotLogin";
  export default {
    name: 'mine',
    components: {
      NotLogin
    },
    data() {
      return {
        value: ''
      }
    },
    methods: {
      onSearch: function () {
        console.log(this.value)
      }
    }
  }
</script>
<style lang="less" scoped>
  #mine{
    .mine-nav{
      margin-top: 40px;
    }
  }
</style>