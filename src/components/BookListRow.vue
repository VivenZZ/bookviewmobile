<template>
  <div class="BookListRow">
    <van-cell v-if="title == {}" class="list-title" :title="title.name" :icon="title.icon" is-link :url="title.url" value="更多"/>
    <div class="list-box" v-for="(item, index) in data_list" :key="index" >
      <div class="list">
        <router-link to="/" class="img_box">
          <van-image
                  lazy-load
                  :src="`http://localhost:3000${item.imgPath}`"
          />
        </router-link>
        <van-skeleton v-if="isLoad" title :row="2"/>
        <div v-else>
          <div class="row01">
            <div class="name">
              <p>{{item.name}}</p>
              <p v-if="sort">{{index+1}}</p>
            </div>
            <van-rate
                    v-model="item.star"
                    :size="16"
                    :gutter="0"
                    color="#ee0a24"
                    void-icon="star"
                    void-color="#eee"
                    readonly
                    allow-half
            />
          </div>
          <p class="details">{{item.description}}</p>
          <div class="row02">
            <p>
              <van-icon name="user-o" />
              <span>{{item.Author}}</span>
            </p>
            <p>
              <van-tag plain type="default">{{item.novelclass}}</van-tag>
              <van-tag plain type="danger">{{item.status}}</van-tag>
              <van-tag plain type="primary">{{item.numbers}}字</van-tag>
            </p>
          </div>
        </div>
      </div>
      <van-divider />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookListRow',
  props: {
    title: Object,
    data_list: Array,
    isLoad: Boolean,
    sort: Boolean
  },
  data () {
    return {
      value: 3
    }
  }
}
</script>
<style scoped lang="less">
  .BookListRow{
    margin-top: 20px;
    .list-title{
      i:first-child{
        color: #ee0a24;
      }
    }
    .list-box{
      padding: 20px 0 0;
      background-color: white;
      .list{
        display: flex;
        padding: 0 20px;
        margin-bottom: 20px;
        align-items: center;
        .img_box{
          width: 132px;
          height: 176px;
          img{
            width: 100%;
          }
        }
        .row01{
          display: flex;
          align-items: center;
          align-content: space-between;
          .name{
            flex: 1;
            display: flex;
            font-size: 28px;
            font-weight: bold;
            p{
              margin: 0;
            }
            p:first-child{
              flex: 1;
            }
            p:last-child{
              margin-right: 50px;
            }
          }
          span{
            color: #c13b00;
          }
        }
        .row02{
          display: flex;
          align-items: center;
          align-content: space-between;
          p{
            display: flex;
            align-items: center;
            margin: 0;
          }
          p:first-child{
            flex: 1;
          }
          span{
            margin-left: 5px;
          }
        }
        .details{
          overflow : hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
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
