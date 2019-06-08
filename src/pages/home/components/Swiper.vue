<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList"
                    :key="item.id">
        <img class="swiper-img"
             :src="item.imgUrl"
             alt="x">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'https://himg1.qunarzz.com/imgs/201812/24/C._M0DCiiL7y2_NvGRi480.jpg'
        },
        {
          id: '0002',
          imgUrl: 'https://himg3.qunarzz.com/imgs/201812/12/C._M0DCii9aSXxraeHi480.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background #eeeeee
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 40%
  .swiper-img
    width 100%
    max-height 150px
</style>
