<template>
    <div class="wrapper">
        <header class="header">
            <div class="x-container">
                <button class="logo">
                    <h1 class="logo__title">Gitogram /</h1>
                </button>
                <button class="close-btn" @click="$router.push('/gitogram/dist/')">
                    <Icon name="Close"/>
                </button>
            </div>
        </header>
        <div class="content">
            <storiesSlider :initialSlide="Number($route.params.initialSlide)"/>
        </div>
    </div>
</template>

<script>
import storiesSlider from '@/components/storiesSlider/storiesSlider.vue'

import Icon from '@/icons/Icon.vue'
export default {
  name: 'Stories',
  components: {
    storiesSlider,
    Icon
  }
}
</script>

<style scoped>
.wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    z-index: 100;
}
.header {
    padding: 44px 0 90px;
    margin: 0 121px;
}
.x-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo__title {
    color: white;
}
</style>
