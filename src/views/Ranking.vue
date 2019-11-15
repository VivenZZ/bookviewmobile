<template>
  <van-tree-select
          height="100vh"
          :items="items"
          :main-active-index.sync="activeIndex"
          :click-nav="handleClick(activeIndex)"
  >
    <template slot="content">
      <van-tabs
            background="#fff"
            color=""
            title-active-color="green"
            title-inactive-color="#000"
      >
        <van-tab v-for="(tab, index) in tabName" :title="tab" :key="index">
          内容 {{ tab }}
        </van-tab>
      </van-tabs>
      <div>{{text}}</div>
    </template>
  </van-tree-select>
</template>
<script>
  export default {
    name: 'ranking',
    data() {
      return {
        activeIndex: 0,
        items: [
          { text: '武侠'},
          { text: '玄幻'}
        ],
        tabName: [
                '推荐榜',
                '字数榜',
                '月票榜'
        ],
        text: ''
      }
    },
    methods: {
      handleClick: function(e) {
        // 此处调用ajax 获取对应的数据，或者进行排序~
        if (e === 0) {
          this.text = this.items[e].text +  '我是点击榜'
        }
        if (e === 1) {
          this.text=  this.items[e].text  +  '我是月票榜'
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  .van-tree-select__nav,
  .van-sidebar-item{
    background-color: #F8F7F2;
  }
  .van-sidebar-item--select{
    background-color: #fff;
  }
  .van-tree-select__content{
    flex: 4;
  }
</style>