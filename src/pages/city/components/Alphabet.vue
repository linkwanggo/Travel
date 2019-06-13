<template>
  <ul class="list">
    <li class="alphabet"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick"
        v-for="item in letters"
        :ref="item"
        :key="item">{{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'HomeAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      letter: '',
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.letter = e.target.innerText
      this.$emit('change', this.letter)
    },
    handleTouchStart (e) {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          let touchY = e.touches[0].clientY - 79
          let index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd (e) {
      this.touchStatus = false
    }
  },
  computed: {
    letters () {
      let letters = []
      for (let item in this.cities) {
        letters.push(item)
      }
      return letters
    }
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
