<template>
  <div class="BookListColumn">
    <van-cell class="list-title" :title="title.name" :icon="title.icon"/>
    <swiper class="list" :options="swiperOption">
      <swiper-slide v-for="(item, index) in data_list" :key="index">
        <router-link :to="item.url" class="book_box">
          <van-image
                  lazy-load
                  :src="item.imgSrc"
          />
          <h3>{{item.title}}</h3>
          <p>{{item.author_name}}</p>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  name: 'BookListColumn',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    title: Object,
    data_list: Array,
    isLoad: Boolean
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 4.5,
        spaceBetween: 5,
        // loop: true,
        loopFillGroupWithBlank: true
      }
    }
  }
}
</script>
<style scoped lang="less">
  .BookListColumn{
    margin-top: 20px;
    .list{
      height: 304px;
      background-color: white;
      padding-left: 20px;
      box-sizing: border-box;
      .book_box{
        display: block;
        width: 100%;
        height: 304px;
        color: #333;
        .van-image{
          height: 176px !important;
        }
        h3{
          margin: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        p{
          margin: 0;
        }
      }
    }
    .list-title{
      i:first-child{
        color: #ee0a24;
      }
    }
  }
</style>
