<template>
    <button class="c-story-user-item" @click="$emit('onPress')">
        <div class="avatar">
            <img :src="require(`@/assets/${avatar}`)" class="img" alt="username avatar" />
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
  width: 100%;
  height: 100%;
}
.avatar {
  margin-bottom: 10px;
  border: 2px solid #a6328d;
  border-radius: 50%;
  transition: all 0.3s linear;
}
.c-story-user-item:hover .avatar {
  border: none;
}
.img {
  padding: 6px;
}
</style>
