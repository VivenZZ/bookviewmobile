<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <van-row id="home">
      <van-swipe class="home_banner" :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
      <book-list-column :title="recommendTitle" :data_list="recommendData" :isLoad="isRecommendLoad"/>
      <book-list-row :title="rankTitle"  :data_list="rankData" :isLoad="isRankLoad" />
      <book-list-column :title="hotTitle" :data_list="hotData" :isLoad="isHotLoad"/>
      <book-list-row :title="newTitle"  :data_list="newData" :isLoad="isNewLoad" />
      <!--    <book-list-row :data_list="hotData" :isLoad="isLoad" :title="title_01"/>-->

    </van-row>
  </van-pull-refresh>
</template>

<script>
import BookListRow from "../components/BookListRow";
import BookListColumn from "../components/BookListColumn";
export default {
  name: 'home',
  components: {
    BookListRow,
    BookListColumn
  },
  data() {
    return {
      isLoading: false,
      recommendTitle: {},
      recommendData: [],
      isRecommendLoad: true,
      hotTitle: {},
      hotData: [],
      isHotLoad: true,
      newTitle: {},
      newData: [],
      isNewLoad: true,
      rankTitle: {},
      rankData: [],
      isRankLoad: true,
      images: [
        'https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/5c77b5972997fbb9ec9db6605181bc45.jpg',
        'https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/6a87c8efce2e6525ab13c8dadccc7901.jpg',
        'https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/cbd0eaf8f4f24d107992a8a5f574ffa4.jpg'
      ]
    }
  },
  created() {
    this.getRecommendData()
    this.getHotData()
    this.getWxData()
    this.getRankData()
  },
  methods: {
    onRefresh () {
      this.isRecommendLoad = true
      this.isNewLoad = true
      this.isHotLoad = true
      this.isRankLoad = true
      this.getRecommendData()
      this.getHotData()
      this.getWxData()
      this.getRankData()
      this.isLoading = false;
    },
    async getRecommendData() {
     try {
       let res = await this.$axios.get('http://localhost:3000/api/books')
       this.recommendData = res.data.books
       this.recommendTitle = {
         name: '主编推荐',
         icon: 'hot',
         url: '/tuj'
       }
       this.isRecommendLoad = false
     } catch (e) {
       console.log('请求出错！')
       console.log(e)
     }
    },
    async getHotData() {
      try {
        let res = await this.$axios.get('http://localhost:3000/api/books')
        this.hotData = res.data.books
        this.hotTitle =  {
          name: '畅销书本',
          icon: 'award',
          url: '/cxs'
        }
        this.isHotLoad = false
      } catch (e) {
        console.log('请求出错！')
        console.log(e)
      }
    },
    async getWxData() {
      try {
        let res = await this.$axios.get('http://localhost:3000/api/books')
        this.newData = res.data.books
        this.newTitle = {
          name: '最新上架',
          icon: 'new',
          url: '/cxs'
        }
        this.isNewLoad = false
      } catch (e) {
        console.log('请求出错！')
        console.log(e)
      }
    },
    async getRankData() {
      try {
        let res = await this.$axios.get('http://localhost:3000/api/books')
        console.log(res)
        this.rankData = res.data.books
        this.rankTitle = {
          name: '排行榜',
          icon: 'column',
          url: '/cxs'
        }
        this.isRankLoad = false
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
