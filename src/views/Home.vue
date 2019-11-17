<template>
  <van-row id="home">
    <van-swipe class="home_banner" :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <book-list :data_list="recommendData" :isLoad="isLoad" :title="title"/>
    <book-list :data_list="recommendData" :isLoad="isLoad" :title="title_01"/>
  </van-row>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import BookList from "../components/BookList";
export default {
  name: 'home',
  components: {
    BookList
  },
  data() {
    return {
      title: {
        name: '主编推荐',
        icon: 'good-job',
        url: '/tuj'
      },
      title_01: {
        name: '畅销书本',
        icon: 'award',
        url: '/cxs'
      },
      recommendData: [],
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
     try {
       let res = await this.$axios.get('http://route.showapi.com/')
       this.recommendData = res.data.recommendData
       console.log(res.data.recommendData)
       this.isLoad = !this.isLoad
     } catch (e) {
       console.log('请求出错！')
       console.log(e)
     }
    }
  }
}
</script>
<style lang="less" scoped>
  #home{
    padding-bottom: 104px;
    .home_banner{
      height: 300px;
      img{
        width: 100%;
        height: 300px;
      }
    }


  }
</style>
