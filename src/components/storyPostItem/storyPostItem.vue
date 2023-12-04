<template>
    <div class="c-story-post-item" :class="{active}">
        <div class="stories-container">
            <div class="header">
                <div class="progress">
                    <Progress :active="active" @onFinish="$emit('onProgressFinish')"/>
                </div>
                <div class="user">
                    <PostHeader :headerName="data.username" :headerImg="data.userAvatar" />
                </div>
            </div>
            <div class="content">
              <div class="loader" v-if="loading">
                <Spinner />
              </div>
              <div class="info" v-else>
                <div v-if="data.content?.length" class="content-text" v-html="data.content"></div>
                <PlaceHolder v-else :paragraphs="2"/>
              </div>
            </div>
            <div class="button">
              <Follow>Follow</Follow>
            </div>
        </div>
        <template v-if="active">
          <button v-if="btnShown.includes('next')" class="btn btn-next" @click="$emit('onNextSlide')">
            <span class="icon">
              <icon name="arrow" />
            </span>
          </button>
          <button v-if="btnShown.includes('prev')" class="btn btn-prev" @click="$emit('onPrevSlide')">
            <span class="icon">
              <icon name="arrow" />
            </span>
          </button>
        </template>
    </div>
</template>

<script>
import Progress from '@/components/progress/Progress.vue'
import PostHeader from '@/components/postHeader/PostHeader.vue'
import PlaceHolder from '@/components/placeholder/PlaceHolder.vue'
import Spinner from '@/components/spinner/Spinner.vue'
import Follow from '@/components/button/Button.vue'
import Icon from '@/icons/Icon.vue'
export default {
  name: 'StoryUserItem',
  components: {
    Progress,
    PostHeader,
    Follow,
    PlaceHolder,
    Spinner,
    Icon
  },
  emits: ['onPrevSlide', 'onNextSlide', 'onProgressFinish'],
  props: {
    active: Boolean,
    loading: Boolean,
    btnShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator (value) {
        return value.every((item) => item === 'next' || item === 'prev')
      }
    },
    data: {
      type: Object,
      required: true,
      default: () => ({})
    },
    methods: {}
  }
}
</script>

<style scoped>
.stories-container {
  width: 302px;
  /* height: 538px; */
  border-radius: 5px;
  overflow: hidden;
  background: white;
}
.c-story-post-item.active .stories-container {
  transform: scale(1.05);
}
.header {
  padding-top: 8px;
  padding-bottom: 12px;
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
}
.content {
  position: relative;
  /* padding-left: 18px; */
  /* padding-right: 27px; */
  height: 404px;
  /* display: flex; */
  /* flex-direction: column; */
  /* gap: 14px; */
  border-bottom: 1px solid #cacaca;
  background-color: rgba(175, 175, 175, 0.1);
  overflow-x: hidden;
}
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.info {
  margin: 0 18px;
}
.button {
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  padding: 24px 52px;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid #000;
  background: white;
  border-radius: 50%;
  cursor: pointer;
}
.btn:hover .icon{
 color: #31ae54;
}
.c-story-post-item {
  position: relative;
}
.btn-prev {
  position: absolute;
  top: 50%;
  left: -52px;
}
.btn-next {
  position: absolute;
  top: 50%;
  right: -52px;
  transform: rotate(180deg);
}
.icon {
  color: #404040;
}
</style>
