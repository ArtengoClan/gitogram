<template>
  <router-view></router-view>
  <!-- <feeds /> -->
</template>

<!-- SCRIPT -->
<script>
// import feeds from '@/pages/feeds/feeds.vue'

export default {
  name: 'App',
  components: {
    // feeds
  }
}
</script>

<!-- STYLE -->
<style>
* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html,body {
  box-sizing: border-box;
}

body {
  font-family: 'Inter', Helvetica, Arial, sans-serif;
  color: #262626;
  font-size: 14px;
  line-height: 1.8;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

svg {
  display: block;
}

button {
  border: none;
  background: transparent;
  cursor: pointer;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
