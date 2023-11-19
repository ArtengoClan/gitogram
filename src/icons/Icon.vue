<template>
  <component :is='name' />
</template>

<!-- SCRIPT -->
<script>
import * as icons from './variants'
export default {
  name: 'Icon',
  components: { ...icons },
  props: {
    name: {
      type: String,
      required: true,
      validator (value) {
        return Object.keys(icons).includes(value)
      }
    }
  }
}
</script>

<!-- STYLE -->
<style scoped>

</style>
