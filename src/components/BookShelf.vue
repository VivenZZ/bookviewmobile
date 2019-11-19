<template>
  <div id="BookShelf">
    <div class="notLogged" v-if="!loggedIn">
      <van-tag mark  type="danger">去登录</van-tag>
      <p>登录享受云端同步功能</p>
    </div>
    <book-list-shelf v-else  :data_list="rankData" :isLoad="isRankLoad" />
  </div>
</template>

<script>
  import BookListShelf from "./BookListShelf";
export default {
  name: 'BookShelf',
  components: {
    BookListShelf
  },
  data () {
    return {
      loggedIn: false,
      rankTitle: {},
      rankData: [],
      isRankLoad: true
    }
  },
  created () {
    this.onLoad()
  },
  methods: {
    async onLoad() {
      try {
        let res = await this.$axios.get('http://route.getRank.com/')
        this.rankData = this.rankData.concat(res.data.data)
        this.isRankLoad = false
      } catch (e) {
        console.log('请求出错！')
        console.log(e)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #BookShelf{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    .notLogged{
      margin-top: 300px;
      .van-tag{
        font-size: 34px;
        margin-left: 30px;
        padding: 10px 50px;
      }
      p{
        font-size: 28px;
        color: #666;
      }
    }
  }
</style>
