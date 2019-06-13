<template>
  <div>
    <div class="search">
      <input class="search-input"
             v-model="keyword"
             type="text"
             placeholder="输入城市名或拼音" />
    </div>
    <div class="search-list"
         ref="searchSwiper"
         v-show="keyword">
      <ul>
        <li class="search-item border-bottom"
            v-for="item in searchList"
            :key="item.id">
          {{item.name}}
        </li>
        <li class="search-item border-bottom"
            v-show="hasNoData">
          未匹配到数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      timer: null,
      searchList: []
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.searchSwiper)
  },
  computed: {
    hasNoData () {
      return !this.searchList.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.searchList = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let k in this.cities) {
          this.cities[k].forEach((item) => {
            if (item.spell.indexOf(this.keyword) > -1 ||
              item.name.indexOf(this.keyword) > -1) {
              result.push(item)
            }
          })
          this.searchList = result
        }
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.border-bottom
  &:before
    border-color #cccccc
.search
  height 0.72rem
  padding 0 0.1rem
  background $bgColor
  .search-input
    box-sizing border-box
    width 100%
    height 0.62rem
    border-radius 0.1rem
    text-align center
    padding 0 0.1rem
    line-height 0.62rem
    font-size 0.2rem
.search-list
  z-index 1 // 层级优先级 越高优先级越大
  overflow hidden
  position absolute
  top 1.58rem
  right 0
  bottom 0
  left 0
  background #ffffff
  .search-item
    font-size 0.3rem
    height 0.56rem
    line-height 0.56rem
    padding-left 0.2rem
    color #666666
</style>
