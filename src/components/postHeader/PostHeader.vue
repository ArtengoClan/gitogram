<template>
    <div class="post__header">
      <!-- <img class="post__header-img" :src="require(`@/assets/${headerImg}`)" /> -->
        <img class="post__header-img" :src="headerImg" />
      <p class="post__header-text">{{ headerName }}</p>
    </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: 'PostHeader',
  props: {
    headerName: {
      type: String,
      required: true
    },
    headerImg: {
      type: String,
      required: true
    }
  }
}
</script>

  <!-- STYLE -->
<style scoped>
.post__header {
  display: flex;
  align-items: center;
  gap: 14px;
  /* margin-bottom: 16px; */
}
.post__header-img {
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: 50%;
}
.post__header-text {
  font-size: 18px;
  font-weight: 700;
}
</style>
