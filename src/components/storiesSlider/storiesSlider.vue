<template>
    <div class="c-stories-slider">
        <div class="stories-container">
          <ul class="stories" ref="slider">
            <li ref="item" class="stories-item" v-for="(trending, ndx) in trendings" :key="trending.id">
              <storyPostItem
                :data="getStoryData(trending)"
                :active="slideNdx === ndx"
                :loading="slideNdx === ndx && loading"
                :btnShown="activeBtns"
                @onNextSlide="handleSlide(ndx + 1)"
                @onPrevSlide="handleSlide(ndx - 1)"
                @onProgressFinish="handleSlide(ndx + 1)"
              />
            </li>
          </ul>
        </div>
      </div>
</template>

<script>
import storyPostItem from '@/components/storyPostItem/storyPostItem.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'storiesSlider',
  components: {
    storyPostItem
  },
  props: {
    initialSlide: {
      type: Number
    }
  },
  data () {
    return {
      slideNdx: 0,
      sliderPosition: 0,
      loading: false,
      btnsShown: true
    }
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings.trendings.data
    }),
    activeBtns () {
      if (this.slideNdx === false) return []
      if (this.slideNdx === 0) return ['next']
      if (this.slideNdx === this.trendings.length - 1) return ['prev']
      return ['next', 'prev']
    }
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchReadme: 'trendings/fetchReadme'
    }),
    async fetchReadmeForActiveSlide () {
      const { id, owner, name } = this.trendings[this.slideNdx]
      await this.fetchReadme({ id, owner: owner.login, repo: name })
    },
    getStoryData (obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme
      }
    },
    moveSlider (slideNdx) {
      if (slideNdx === 10) return
      const { slider, item } = this.$refs
      const slideWidth = parseInt(getComputedStyle(item[slideNdx]).getPropertyValue('width'), 10)
      this.slideNdx = slideNdx
      this.sliderPosition = -(slideWidth * slideNdx)
      slider.style.transform = `translateX(${this.sliderPosition}px)`
    },
    async loadReadme () {
      this.loading = true
      this.btnsShown = false
      try {
        await this.fetchReadmeForActiveSlide()
      } catch (error) {
        console.log(error)
        throw (error)
      } finally {
        this.loading = false
        this.btnsShown = true
      }
    },
    async handleSlide (slideNdx) {
      this.moveSlider(slideNdx)
      await this.loadReadme()
    }
  },
  async mounted () {
    if (this.initialSlide) {
      const ndx = this.trendings.findIndex(item => item.id === this.initialSlide)
      await this.handleSlide(ndx)
    }
    if (this.trendings === undefined) {
      await this.fetchTrendings()
    }
    await this.loadReadme()
  }
}
</script>

<style scoped>
.stories-container {
  /* margin-left: 100px; */
}
/* .stories-container {
  transform: scale(1.1);
} */
.c-stories-slider {
  /* overflow: hidden; */
  /* margin-top: 103px; */
}
.stories-container {
  /* width: 302px; */
  /* height: 538px; */
  position: relative;
  /* border-radius: 5px;
  overflow: hidden;
  background: white; */
}
.stories {
  display: flex;
  align-items: center;
  gap: 65px;
  position: absolute;
  left: 50%;
  margin-left: -384px;
  /* margin-left: calc( -(768 / 2) ); */
  transition: .4s;
}
</style>
