<template>
  <div id="mine">
    <!-- 居中 -->
    <van-tabs class="tabs" type="card">
      <van-tab title="我的书架"></van-tab>
      <van-tab title="最近阅读"></van-tab>
    </van-tabs>
    <div class="bookShelf_content">
      <book-shelf />
    </div>
  </div>
</template>
<script>
  import BookShelf from "../components/BookShelf";
  export default {
    name: 'mine',
    components: {
      BookShelf
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
    display: flex;
    flex-direction: column;
    padding-bottom: 104px;
    .tabs{
      background-color: white;
      padding: 50px 0 ;
    }
    .mine-nav{
      margin: 40px 0;
    }
    .bookShelf_content{
      flex: 1;
      display: flex;
    }
    .van-tabs{
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  }
</style>