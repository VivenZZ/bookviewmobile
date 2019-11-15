<template>
  <div class="about">
    <div class="line"></div>
    <h1>This is an about page</h1>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
  </div>
</template>
<script>
  export default {
    name: 'about'
  }
</script>
<style lang="less" scoped>
  .about{
    h1{
      font-size: 40px;
      color: green;
    }
    .line{
      height: 75px;
      width: 750px;
      background-color: green;
    }
  }
</style>