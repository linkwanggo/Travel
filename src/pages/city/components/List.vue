<template>
  <div class="list"
       ref="wrapper">
    <div class="wrapper">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="item in hot"
               :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"
           v-for="(item, key) in cities"
           :key="key"
           :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <ul class="city-item-list">
          <li class="city-item border-bottom"
              v-for="innerItem in item"
              :key="innerItem.id">
            {{innerItem.name}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'

export default {
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  name: 'CityList',
  data () {
    return {
      bscroll: null
    }
  },
  watch: {
    letter () {
      if (this.bscroll && this.letter) {
        let element = this.$refs[this.letter][0]
        this.bscroll.scroller.scrollToElement(element)
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.bscroll = new BScroll(this.$refs.wrapper, {})
    }, 100)
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.border-bottom
  &:before
    border-color #cccccc
.border-topbottom
  &:before
    border-color #cccccc
  &:after
    border-color #cccccc
.list
  overflow hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  .title
    background #eeeeee
    line-height 0.44rem
    padding-left 0.1rem
    font-size 0.25rem
  .button-list
    overflow hidden
    padding 0.1rem 0.2rem 0.1rem 0.1rem
    .button-wrapper
      float left
      width 33.33%
      .button
        margin 0.1rem
        text-align center
        font-size 0.25rem
        padding 0.1rem 0
        border 0.01rem solid #cccccc
        border-radius 0.05rem
  .city-item-list
    .city-item
      font-size 0.25rem
      line-height 0.56rem
      padding-left 0.2rem
      color #666666
</style>
