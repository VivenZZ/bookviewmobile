<template>
  <div id="Ranking">
    <van-sidebar v-model="activeKey" @change="handleClick(activeKey)">
      <van-sidebar-item   v-for="(item, index) in items" :key="index" :title="item.text" />
    </van-sidebar>
    <div class="content">
      <van-tabs type="card" v-model="active"  @change="tabOnClick(active)" >
        <van-tab v-for="(item, index) in tabName" :key="index"  :title="item"></van-tab>
      </van-tabs>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
        >
          <van-cell
                  v-for="item in list"
                  :key="item"
                  :title="item"
          />
          <book-list-row :sort="true" :title="rankTitle"  :data_list="rankData" :isLoad="isRankLoad" />
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>
<script>
  import BookListRow from "../components/BookListRow";
  export default {
    name: 'ranking',
    components: {
      BookListRow
    },
    data() {
      return {
        list: [],
        isLoading: false,
        loading: false,
        finished: false,
        activeKey: 0,
        active: 0,
        items: [
          { text: '武侠'},
          { text: '玄幻'}
        ],
        tabName: [
                '推荐榜',
                '字数榜',
                '月票榜'
        ],
        rankTitle: {},
        rankData: [],
        isRankLoad: true,
      }
    },
    methods: {
      tabOnClick (index) {
        console.log(index)
        this.rankData = []
        this.onLoad()
      },
      handleClick: function(i) {
        // 此处调用ajax 获取对应的数据，或者进行排序~
        console.log(i)
        if (this.activeKey !== i) {
          this.rankData = []
          this.onLoad()
        }
      },
      onRefresh() {
        // 清空数据 重新加载
        this.rankData = []
        this.onLoad()
      },
      async onLoad() {
        this.isLoading = false;
        try {
          let res = await this.$axios.get('http://route.getRank.com/')
          this.rankData = this.rankData.concat(res.data.data)
          // this.rankTitle = {
          //   name: '排行榜',
          //   icon: 'column',
          //   url: '/cxs'
          // }
          this.isRankLoad = false
          this.isLoading = false
          this.loading = false
        } catch (e) {
          console.log('请求出错！')
          console.log(e)
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  #Ranking{
    display: flex;
    .van-sidebar{
      padding-top: 104px;
      width: 100px;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      flex: 1;
      background-color: #F8F7F2;
      .van-sidebar-item{
      }
    }
    .van-sidebar-item{
      padding: 20px 0;
      text-align: center;
    }
    .content{
      flex: 4;
      padding-top: 84px;
      padding-left: 100px;
      padding-bottom: 104px;
    }
    .van-tabs{
      width: 100%;
      position: fixed;
      background-color: white;
      height: 104px;
      top: 0;
      z-index: 2;
      display: flex;
      align-items: center;
    }
  }
  .van-tree-select__nav,
  .van-sidebar-item{
    background-color: #F8F7F2;
  }
  .van-sidebar-item--select{
    background-color: #fff;
  }

</style>