<template>
  <div class="c-post">
    <PostHeader :headerName="username" :headerImg="userImg" />
        <div class="post__content">
          <div class="post__content-wrapper">
            <div class="post__content-middle">
              <p class="post__content-middle-top">Vue.js</p>
              <p class="post__content-middle-center">
                <slot name="postContent" />
              </p>
            </div>
            <PostStats :star="star"  :fork="fork" />
          </div>
        </div>
    <Feed />
  </div>
</template>

<!-- SCRIPT -->
<script>
import Feed from '@/components/feed/Feed.vue'
import PostHeader from '@/components/postHeader/PostHeader.vue'
import PostStats from '@/components/postStats/PostStats'
export default {
  name: 'Post',
  props: {
    username: {
      type: String
    },
    userImg: {
      type: String
    },
    star: {
      type: String
    },
    fork: {
      type: String
    }
  },
  components: {
    Feed,
    PostHeader,
    PostStats
  }
}
</script>

<!-- STYLE -->
<style scoped>
.c-post {
  max-width: 979px;
  margin: 0 auto;
  margin-bottom: 24px;
}
.post__content {
  margin-top: 16px;
  margin-bottom: 18px;
  border: 1px solid #f1f1f1;
  box-shadow: 0px 4px 40px 0px #00000012;
  border-radius: 10px;
}
.post__content-wrapper {
  padding: 24px 20px;
}
.post__content-middle {
  margin-bottom: 32px;
}
.post__content-middle-top {
  margin-bottom: 15px;
  font-size: 26px;
  font-weight: 700;
  line-height: 28px;
}
</style>
