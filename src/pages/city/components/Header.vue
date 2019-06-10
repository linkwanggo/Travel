<template>
  <div class="header">
    <div class="iconfont header-left">&#xe624;</div>
    <span class="header-title">城市选择</span>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header
  position relative
  overflow hidden
  text-align center
  height $headerHeight
  line-height $headerHeight
  color #ffffff
  background $bgColor
  font-size 0.32rem
  .header-left
    position absolute
    color #ffffff
    left 0
    top 0
    width 0.8rem
</style>
