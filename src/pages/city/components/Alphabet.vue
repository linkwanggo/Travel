<template>
  <ul class="list">
    <li class="alphabet"
        v-for="(item, key) in cities"
        :key="key">{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'HomeAlphabet',
  props: {
    cities: Object
  }
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
  line-height 0.4rem
  font-size 0.2rem
  color $bgColor
</style>
