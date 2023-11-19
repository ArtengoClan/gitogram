<template>
    <div class="post">
        <slot name="postContent" v-if="$slots.postContent"/>
    </div>
  </template>

<!-- SCRIPT -->
<script>
export default {
  name: 'PostContent'
}
</script>

<!-- STYLE -->
<style scoped>
</style>
