<template>
  <ul class="list">
    <li class="alphabet">A</li>
    <li class="alphabet">B</li>
    <li class="alphabet">A</li>
    <li class="alphabet">A</li>
    <li class="alphabet">A</li>
    <li class="alphabet">A</li>
    <li class="alphabet">A</li>
    <li class="alphabet">A</li>
    <li class="alphabet">A</li>
    <li class="alphabet">A</li>
    <li class="alphabet">A</li>
    <li class="alphabet">A</li>
    <li class="alphabet">A</li>
    <li class="alphabet">A</li>
  </ul>
</template>

<script>
export default {
  name: 'HomeAlphabet'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.list
  position absolute
  overflow hidden
  top 1.58rem
  right 0
  bottom 0
  width 0.3rem
  display flex
  flex-direction column
  justify-content center
  text-align center
  line-height 0.3rem
  font-size 0.2rem
  color $bgColor
</style>
