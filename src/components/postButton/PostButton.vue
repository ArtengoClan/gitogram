<template>
  <div class="post__bottom">
    <div class="post__bottom-star">
      <div @click="addCountStar" class="post__bottom-star__left">
        <Icon class="star" name="Star" />
        <span class="star__left-text">Star</span>
      </div>
      <div class="post__bottom-star__right">
        <p class="star__right-text">{{ countStar }}k</p>
      </div>
    </div>
    <div class="post__bottom-fork">
      <div @click="addCountFork" class="post__bottom-fork__left">
        <Icon class="star" name="Fork" />
        <span class="fork__left-text">Fork</span>
      </div>
      <div class="post__bottom-fork__right">
        <p class="fork__right-text">{{ fork }}</p>
      </div>
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script>
import Icon from '@/icons/Icon.vue'
export default {
  name: 'PostButton',
  components: {
    Icon
  },
  data () {
    return {
      countStar: 156,
      fork: 4
    }
  },
  methods: {
    addCountStar () {
      this.countStar++
    },
    addCountFork () {
      this.fork++
    }
  }
}
</script>

<!-- STYLE -->
<style scoped>
.post__bottom {
  display: flex;
}
.post__bottom-star {
  display: flex;
}
.post__bottom-star__left {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 73px;
  height: 28px;
  border: 1px solid gray;
  border-radius: 6px 0px 0px 6px;
  background: #fafbfc;
  box-shadow: 0px 1px 0px 0px #1b1f230a;
  cursor: pointer;
}
.star:hover {
    color:  #31ae54;
}
.star__left-text {
  position: relative;
  font-size: 14px;
  font-weight: 400;
}
.post__bottom-star__right {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 28px;
  border: 1px solid gray;
  background: #fafbfc;
  box-shadow: 0px 1px 0px 0px #1b1f230a;
}

.post__bottom-fork {
  display: flex;
}
.post__bottom-fork__left {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 72px;
  height: 28px;
  border: 1px solid gray;
  background: #fafbfc;
  box-shadow: 0px 1px 0px 0px #1b1f230a;
  cursor: pointer;
}
.fork__left-text {
  position: relative;
  font-size: 14px;
  font-weight: 400;
}
.post__bottom-fork__right {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 28px;
  border: 1px solid gray;
  border-radius: 0px 6px 6px 0px;
  background: #fafbfc;
  box-shadow: 0px 1px 0px 0px #1b1f230a;
}
</style>
