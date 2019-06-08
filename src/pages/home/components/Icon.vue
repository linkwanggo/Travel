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
  data () {
    return {
      iconList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          title: '景点门票'
        },
        {
          id: '0002',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e98eea7ed037b04a5af0250ca8a1abd7.png',
          title: '少林寺'
        },
        {
          id: '0003',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/c77aa5a455e750b2f43711b2aa7f7ce2.png',
          title: '粽情端午'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
          title: '郑州方特'
        },
        {
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/85/77241e9427222b02.png',
          title: '郑州园博园'
        },
        {
          id: '0006',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b2/bfbc5d66e0ab5a02.png',
          title: '冰雪世界'
        },
        {
          id: '0007',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
          title: '郑州动物园'
        },
        {
          id: '0008',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
          title: '实时演出'
        },
        {
          id: '0009',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
          title: '海洋馆'
        }
      ],
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
    pages () {
      let pageSize = 8
      let pages = []
      this.iconList.forEach((item, index) => {
        let page = Math.floor(index / pageSize)
        console.log(pages[page])
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
