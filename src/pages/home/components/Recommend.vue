<template>
  <div>
    <div class="title">
      <img class="title-img"
           src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"
           alt="猜你喜欢">
      猜你喜欢
    </div>
    <ul class="like-list">
      <li class="item"
          v-for="item in recommendList"
          :key="item.id">
        <a :href="item.path">
          <div class="item-img-wrapper">
            <img class="item-img-content"
                 :src="item.imgUrl" />
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <p class="item-address">{{item.address}}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data () {
    return {

    }
  },
  computed: {
    recommendList () {
      let recommendList = this.list
      return recommendList
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.like-list
  margin-left 0.24rem
.title
  padding 0.24rem 0 0.26rem
  margin-top 0.2rem
  .title-img
    display inline-block
    overflow hidden
    width 0.3rem
    height 0.3rem
    margin-left 0.2rem
.item
  position relative
  overflow hidden
  padding 0.2rem 0
  .item-img-wrapper
    background none !important
    height 2rem
    width 2rem
    overflow hidden
    float left
    .item-img-content
      height 100%
      width 100%
.item-info
  flex 1
  padding 0.1rem
  .item-title
    font-size 0.32rem
    color #000000
    padding 0.2rem
    ellipsis()
  .item-desc
    padding 0.2rem
    ellipsis()
  .item-address
    font-size 0.2rem
    float right
    margin 0.3rem 0.5rem 0 0
    color #212121
</style>
