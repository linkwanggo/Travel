<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities"
               :hot="hotCities"
               :letter="letter">
    </city-list>
    <home-alphabet @change="handleLetterChange"
                   :cities="cities"></home-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import HomeAlphabet from './components/Alphabet'
export default {
  name: 'City',
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then((res) => {
          if (res.data && res.data.ret) {
            console.log(res)
            let data = res.data.data
            this.cities = data.cities
            this.hotCities = data.hotCities
          }
        })
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    HomeAlphabet
  }
}
</script>
<style lang="stylus" scoped></style>
