<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <span class="iconfont arrow-icon">&#xe65d;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header
  height $headerHeight
  display flex
  line-height $headerHeight
  background $bgColor
  color #ffffff
  .header-left
    width 0.64rem
    float left
    .back-icon
      text-align center
      font-size 0.38rem
  .header-input
    flex 1
    margin-top 0.12rem
    margin-left 0.2rem
    padding-left 0.2rem
    height 0.64rem
    line-height 0.64rem
    background #ffffff
    border-radius 0.1rem
    color #cccccc
    font-size 0.24rem
  .header-right
    width 1.24rem
    float right
    text-align center
    font-size 0.26rem
    .arrow-icon
      margin-left -0.04rem
</style>
