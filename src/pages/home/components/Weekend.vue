<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul class="border-bottom">
      <li class="item"
          v-for="item in recommondList"
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
  data () {
    return {
      recommondList: [
        {
          id: '0001',
          title: '洛阳必游TOP10',
          desc: '六朝古都，玩出千年历史尘埃',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/f9/6c5f9e716da18.jpg_r_640x214_7318f89b.jpg',
          path: 'http://piao.qunar.com/touch/toSku.htm?skuId=598&skuName=焦作打卡&cat=from_area%3Dts_sku%26from_index%3D0%26from_value%3D%25E7%2584%25A6%25E4%25BD%259C%25E6%2589%2593%25E5%258D%25A1%26dist_city%3D%25E7%2584%25A6%25E4%25BD%259C'
        },
        {
          id: '0002',
          title: '城中碧玉万仙山',
          desc: '人间仙境，世外桃源',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/d2/017059dd59b0ee.jpg_r_640x214_497664a4.jpg',
          path: 'http://piao.qunar.com/touch/toSku.htm?skuId=703&skuName=城中碧玉万仙山&cat=from_area%3Dts_sku%26from_index%3D2%26from_value%3D%25E5%259F%258E%25E4%25B8%25AD%25E7%25A2%25A7%25E7%258E%2589%25E4%25B8%2587%25E4%25BB%2599%25E5%25B1%25B1%26dist_city%3D%25E7%2584%25A6%25E4%25BD%259C'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.title
  padding 0.24rem 0 0.26rem
  background gray
  margin-top 0.2rem
.item
  width 100%
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
  font-size 0.4rem
  color #000000
  padding 0.2rem
  ellipsis()
.item-desc
  padding 0.2rem
  ellipsis()
</style>
