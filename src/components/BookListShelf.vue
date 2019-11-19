<template>
  <div class="BookListRow BookListShelf">
    <div class="list-box" v-for="(item, index) in data_list" :key="index" >
      <div class="list">
        <router-link to="/" class="img_box">
          <van-image
                  lazy-load
                  :src="item.imgSrc"
          />
        </router-link>
        <van-skeleton v-if="isLoad" title :row="2"/>
        <div v-else>
          <div class="row01">
            <div class="name">
              <van-cell :title="item.title" is-link value="继续阅读" />
            </div>
          </div>
          <p class="row02">
            <van-icon name="user-o" />
            <span>{{item.author_name}}</span>
          </p>
          <div class="row03">
            <span>读至 {{item.newCharpter}}</span>
            <span>1小时前</span>
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
    data_list: Array,
    isLoad: Boolean
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
          margin: 20px 0;
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
        .row03{
          display: flex;
          justify-content: space-between;
          span:first-child{
            flex: 1;
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          }
          span:last-child{
            margin: 0 20px 0 100px;
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
  .BookListShelf{
    flex: 1;
    color: #333333;
    .van-cell{
      padding: 0;
    }
    .list-box .list .row01 span{
      color: #333;
    }
  }
</style>
