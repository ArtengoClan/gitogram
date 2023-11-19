<template>
    <button class="btn-toggle" :class="[{active: isOpened}]" @click="toggle">
        <span class="text">{{ isOpened ? 'Hide' : 'Show' }} issues</span>
        <span class="icon">
            <icon :class="[isOpened ? 'triangle' : 'triangle active']" name="Triangle" />
        </span>
    </button>
</template>

  <!-- SCRIPT -->
<script>
import icon from '@/icons/Icon.vue'
export default {
  name: 'Toggler',
  components: {
    icon
  },
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    toggle () {
      this.isOpened = !this.isOpened
      this.$emit('onToggle', this.isOpened)
    }
  }
}
</script>

  <!-- STYLE -->
<style scoped>
.btn-toggle {
  display: flex;
  align-items: center;
  gap: 4px;
}
  .icon {
    width: 10px;
  }

.triangle {
  transform: rotate(180deg);
}

  .triangle.active {
    transform: rotate(0deg);
  }
</style>
