<template>
  <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          show-action
          shape="round"
          @search="onSearch"
  >
    <div slot="action" @click="onSearch">搜索</div>
  </van-search>
</template>
<script>
  export default {
    name: 'search',
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
</style>