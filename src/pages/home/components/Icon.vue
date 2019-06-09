<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(items, index) in pages"
                    :key="index">
        <div class="wrapper-icon">
          <div class="icon"
               v-for="item in items"
               :key="item.id">
            <div class="icon-img">
              <img class="icon-img-content"
                   :src="item.imgUrl" />
            </div>
            <p class="icon-desc">{{item.title}}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcon',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {

      }
    }
  },
  computed: {
    //   pages () {
    //     let pageSize = 8
    //     const pages = []
    //     // 为图标进行分页 默认8个一页
    //     // 计算总页数
    //     let totalPage = Math.floor(this.iconList.length / 8)
    //     // 预创建分页数组
    //     for (var i = 0; i < totalPage; i++) {
    //       pages.push(new Array(pageSize))
    //     }
    //     this.iconList.forEach((item, index) => {
    //       // 计算每一个图标所在的页
    //       let page = Math.floor(index / pageSize)
    //       // console.log(page)
    //       // console.log(item)
    //       console.log(typeof pages[page])
    //     })
    //     return pages
    //   }
    iconList () {
      let iconList = this.list
      return iconList
    },
    pages () {
      let pageSize = 8
      let pages = []
      this.iconList.forEach((item, index) => {
        let page = Math.floor(index / pageSize)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.wrapper-icon
  overflow hidden
  width 100%
  height 0
  padding-bottom 50%
  .icon
    position relative
    overflow hidden
    float left
    width 25%
    padding-bottom 25%
    .icon-img
      position absolute
      width 100%
      top 0
      left 0
      right 0
      bottom 0.44rem
      box-sizing border-box
      padding 0.1rem
      .icon-img-content
        display block
        margin 0 auto
        height 100%
    .icon-desc
      position absolute
      left 0
      right 0
      bottom 0
      height 0.44rem
      line-height 0.44rem
      text-align center
      ellipsis()
</style>
