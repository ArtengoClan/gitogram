<template>
    <div class="c-feed">
        <Toggler @onToggle="toggle" />
        <div class="comments" v-if="shown">
            <ul class="comments-list">
                <li class="comments-item" v-for="n in 3" :key="n">
                    <Comment text="some text" username="Doe" />
                </li>
            </ul>
            <div class="data">15 MAY</div>
        </div>
    </div>
  </template>

<!-- SCRIPT -->
<script>
import Toggler from '@/components/toggler/Toggler.vue'
import Comment from '@/components/comment/Comment.vue'
export default {
  name: 'Feed-item',
  components: {
    Toggler,
    Comment
  },
  data () {
    return {
      shown: false
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>

  <!-- STYLE -->
<style scoped>
.data {
  color: #00000066;
  font-size: 12px;
}
</style>
