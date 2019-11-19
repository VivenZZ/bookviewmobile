<template>
  <div id="search">

    <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            show-action
            shape="round"
            @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <div class="tags" v-if="tagsBoolean">
      <div class="tag" @click="chioceTag(index)" v-for="(item, index) in searchMoreValue" :key="index">
        <van-tag v-if="index%4 == 0" round plain type="primary">{{item}}</van-tag>
        <van-tag v-if="index%4 == 1"  round plain type="success">{{item}}</van-tag>
        <van-tag v-if="index%4 == 2"  round plain type="danger">{{item}}</van-tag>
        <van-tag v-if="index%4 == 3"  round plain type="warning">{{item}}</van-tag>
      </div>
    </div>
    <div v-else>
      <book-list-row  :title="rankTitle"  :data_list="rankData" :isLoad="isRankLoad" />
    </div>
  </div>
</template>
<script>
  import BookListRow from "../components/BookListRow";
  export default {
    name: 'search',
    components: {
      BookListRow
    },
    data() {
      return {
        value: '',
        typeValue: '',
        searchMoreValue: [
                '重生之XX',
                '欢喜冤家',
                '东边日出西边雨',
                '射雕',
                '日出东方唯我不败'
        ],
        tagsBoolean: true,
        rankTitle: {},
        rankData: [],
        isRankLoad: true
      }
    },
    methods: {
      onSearch: function () {
        console.log(this.value)
        this.onLoad()
      },
      chioceTag: function (i) {
        this.value = this.searchMoreValue[i]
        this.onSearch()
        this.tagsBoolean = false
      },
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
<style lang="less" scoped>
  #search{
    padding-bottom: 104px;
    .tags{
      padding: 30px;
      .tag{
        margin: 20px 0;
      }
      .van-tag{
        font-size: 30px;
      }
    }
  }
</style>