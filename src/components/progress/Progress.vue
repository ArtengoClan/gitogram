<template>
    <div class="c-progress" :class={active} >
        <div ref="indicator" class="indicator"></div>
    </div>
</template>

<script>
export default {
  name: 'Progress',
  data () {
    return {
      // active: false
    }
  },
  props: {
    active: Boolean
  },
  emits: ['onFinish'],
  methods: {
    emitOnFinish () {
      this.$emit('onFinish')
    }
  },
  mounted () {
  //   this.$nextTick(() => {
  //   this.active = true
  //   })
    this.$refs.indicator.addEventListener('animationend', this.emitOnFinish)
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener('animationend', this.emitOnFinish)
  }
}
</script>

<style scoped>
.c-progress {
    background: rgba(49, 174, 84, 0.3);
    height: 2px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
}

.c-progress.active .indicator {
     /* width: 100%; */
    animation: animate-progress 5s linear forwards;
}
.indicator {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 0;
    background: #31ae54;
    transition: 5s ;
}

@keyframes animate-progress {
  0% {width: 0;}
  100% {width: 100%;}
}
</style>
