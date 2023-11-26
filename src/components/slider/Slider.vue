<template>
    <div class="c-slider">
      <div class="slider__header">
        <div class="progress-wrapper">
          <Progress />
        </div>
        <div class="postHeader-wrapper">
          <PostHeader headerName="React.reposit" headerImg="https://kartinki.pics/uploads/posts/2022-12/1671764817_kartinkin-net-p-kartinka-litso-cheloveka-dlya-detei-oboi-16.png" />
        </div>
      </div>
      <div class="slider__content">
        <p class="slider__text">
          <b>The easiest</b> way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.
        </p>
        <p class="slider__text">
          For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.
        </p>
        <p class="slider__text">
          In Preview 4 we enable push/pop navigation with NavigationPage. We added a concrete implementation of IWindow, and completed porting ContentPage from Xamarin.Forms
        </p>
        <p class="slider__text">
          For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.
        </p>
      </div>
    </div>
    <div class="slider__bottom">
      <div class="sliderButton-wrapper">
        <SliderButton>Follow</SliderButton>
      </div>
    </div>
</template>

  <!-- SCRIPT -->
<script>
import Progress from '@/components/progress/Progress.vue'
import PostHeader from '@/components/postHeader/PostHeader.vue'
import SliderButton from '@/components/button/Button.vue'
export default {
  name: 'Slider',
  components: {
    Progress,
    PostHeader,
    SliderButton
  }
}
</script>

<!-- STYLE -->
<style scoped>
.c-slider {
  max-width: 375px;
  border-radius: 5px;
  overflow: hidden;
}
.slider__header {
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
}
.progress-wrapper {
  padding-top: 8px;
  padding-bottom: 12px;
}
.postHeader-wrapper {
  padding-bottom: 13px;
}
.slider__content {
  position: relative;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  border-bottom: 1px solid #cacaca;
  background-color: rgba(175, 175, 175, 0.3);
  overflow-y: scroll;
}
.slider__content::after {
  content: url('../../assets/sliderImg.png');
  position: absolute;
  top: 0;
  left: 35px;
}
.slider__text:nth-child(1) {
  padding-top: 122px;
}
.slider__text {
  padding-left: 18px;
  padding-right: 27px;
}
.slider__bottom {
padding: 24px 52px;
}
.sliderButton-wrapper {
  margin: 0 auto;
}
</style>
