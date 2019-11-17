<template>
  <div class="BookList">
    <van-cell :title="title.name" :icon="title.icon" is-link :url="title.url" value="更多"/>
    <div class="list-box" v-for="(item, index) in data_list" :key="index" >
      <div class="list">
        <router-link to="/" class="img_box">
          <van-image
                  lazy-load
                  :src="item.imgSrc"
          />
        </router-link>
        <div v-if="isLoad">
          <van-skeleton title :row="2"/>
        </div>
        <div v-else>
          <div>
            <h3>{{item.author_name}}</h3>
            <p>{{item.title}}</p>
            <p>{{item.date}}</p>
          </div>
        </div>
      </div>
      <van-divider />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookList',
  props: {
    title: Object,
    data_list: Array,
    isLoad: Boolean
  }
}
</script>
<style scoped lang="less">
  .BookList{
    margin-top: 20px;
    .list-box{
      padding: 20px 0 0;
      background-color: white;
      .list{
        display: flex;
        padding: 0 20px;
        margin-bottom: 20px;
        .img_box{
          width: 132px;
          height: 176px;
          img{
            width: 100%;
          }
        }
        >div{
          margin-left: 20px;
          flex: 1;
          h3{
            margin: 0;
          }
        }
      }
    }
    .van-divider{
      margin: 0;
    }
  }
</style>
