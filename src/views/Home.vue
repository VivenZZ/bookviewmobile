<template>
  <van-row id="home">
    <van-swipe class="home_banner" :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <div class="title">
      <van-icon name="good-job" />
      <h2>主编推荐</h2>
    </div>
    <div v-if="isLoad">
      <van-skeleton title avatar :row="3" />
    </div>
    <div v-else>
      <div v-for="item in 3" :key="item" style="margin-top:40px">
        <p>Skeleton 骨架屏</p>
        <p>将loading属性设置成false表示内容加载完成，此时会隐藏占位图，并显示Skeleton的子组件段落占位图宽度，
          可传数组来设置每一行的宽度段落占位图行数头像占位图大小通过title属性显示标题占位图，通过row属性配置占位段落行数</p>
      </div>
    </div>
  </van-row>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data() {
    return {
      images: [
        'https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/5c77b5972997fbb9ec9db6605181bc45.jpg',
        'https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/6a87c8efce2e6525ab13c8dadccc7901.jpg',
        'https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/cbd0eaf8f4f24d107992a8a5f574ffa4.jpg'
      ],
      isLoad: true
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      let res = await this.$axios.get('http://route.showapi.com/')
      console.log(res.data._data)
    }
  }
}
</script>
<style lang="less" scoped>
  #home{
    .home_banner{
      height: 300px;
      img{
        width: 100%;
        height: 300px;
      }
    }
    .title{
      display: flex;
      align-items: center;
      color: red;
      padding: 0 20px;
      margin-top: 20px;
      background-color: white;
      i{
        font-size: 40px;
      }
      h2{
        color: #333;
        margin-left: 20px;
      }
    }
  }
</style>
