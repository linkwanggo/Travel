<template>
  <div class="wrapper">
    <swiper :options="swiperOption"
            v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item in list"
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
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
        // autoplay: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length > 0
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background #eeeeee
.wrapper
  overflow hidden // 不显示超出的内容
  width 100% // 父布局的100%
  height 0
  padding-bottom 32% // 往下撑出来宽度的40%
  .swiper-img
    width 100%
    max-height 150px
</style>
