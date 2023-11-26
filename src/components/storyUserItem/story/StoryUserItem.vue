<template>
    <button class="c-story-user-item" @click="$emit('onPress')">
        <div class="avatar">
          <img :src="avatar" class="img" alt="username avatar" />
        </div>
        <div class="username">{{ username }}</div>
    </button>
</template>

<!-- SCRIPT -->
<script>

export default {
  name: 'StoryUserItem',
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
}
</script>

<!-- STYLE -->
<style scoped>
.c-story-user-item {
  width: 92px;
  height: 116px;
}
.avatar {
  margin-bottom: 10px;
  border: 2px solid #a6328d;
  border-radius: 50%;
  transition: all 0.3s linear;
  overflow: hidden;
}
.img {
  height: 80px;
  width: 80px;
  object-fit: contain;
  padding: 6px;
}
</style>
