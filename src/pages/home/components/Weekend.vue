<template>
  <div>
    <div class="title">
      <img class="title-img"
           src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"
           alt="周末去哪儿">
      周末去哪儿
    </div>
    <ul class="border-bottom">
      <li class="item"
          v-for="item in list"
          :key="item.id">
        <a :href="item.path">
          <div class="item-img-wrapper">
            <img class="item-img-content"
                 :src="item.imgUrl" />
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.title
  padding 0.24rem 0 0.26rem
  .title-img
    display inline-block
    overflow hidden
    width 0.3rem
    height 0.3rem
    margin-left 0.2rem
.item
  width 100%
  padding-bottom 0.1rem
  .item-img-wrapper
    height 0
    width 100%
    overflow hidden
    padding-bottom 37.4375%
    background-size 100% 100%
    background none !important
    .item-img-content
      width 100%
.item-title
  font-size 0.28rem
  color #000000
  padding 0.1rem
  margin-left 0.2rem
  ellipsis()
.item-desc
  font-size 0.15rem
  padding 0.1rem
  margin-left 0.2rem
  ellipsis()
</style>
