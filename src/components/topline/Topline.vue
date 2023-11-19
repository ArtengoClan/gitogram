<template>
  <div class="c-topline">
    <div class="container">
      <div class="headline">
        <slot name="headline" />
      </div>
      <div class="content" v-if="$slots.content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: 'Topline'
}
</script>

<!-- STYLE -->
<style scoped>
.headline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 44px 0;
}
</style>
