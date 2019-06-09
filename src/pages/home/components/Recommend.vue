<template>
  <div>
    <div class="title">猜你喜欢</div>
    <ul>
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
            <button class="item-button">查看详情</button>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommondList: [
        {
          id: '0001',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋主题公园',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1804/99/9992ca60e89a46bfa3.water.jpg_200x200_d8b18a42.jpg',
          path: 'http://touch.piao.qunar.com/touch/detail.htm?id=1841319965&from=as_recommend_sight'
        },
        {
          id: '0002',
          title: '大连圣亚海洋世界2',
          desc: '浪漫大连首站2，浪漫的海洋主题公园',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1804/99/9992ca60e89a46bfa3.water.jpg_200x200_d8b18a42.jpg',
          path: 'http://touch.piao.qunar.com/touch/detail.htm?id=1841319965&from=as_recommend_sight'
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
  height 2.7rem
  .item-img-wrapper
    height 2.5rem
    width 2.5rem
    display flex
    overflow hidden
    float left
    padding 0.1rem 0.1rem 0.1rem 0.1rem
    .item-img-content
      height 100%
      width 100%
.item-info
  flex 1
  padding 0.1rem
  .item-title
    font-size 0.4rem
    color #000000
    padding 0.2rem
    ellipsis()
  .item-desc
    padding 0.2rem
    ellipsis()
  .item-button
    margin-top 0.2rem
    padding 0.2rem
    border-radius 0.1rem
    background #ff9300
    color #ffffff
</style>
