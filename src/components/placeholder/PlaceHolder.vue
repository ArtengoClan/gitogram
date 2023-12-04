<template>
    <div class="c-placeholder">
        <div class="placeholder__img"></div>
        <div class="placeholder__lines" v-for="n in paragraphs" :key="n">
            <div class="placeholder__line"></div>
            <div class="placeholder__line"></div>
            <div class="placeholder__line"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PlaceHolder',
  props: {
    paragraphs: Number
  }
}
</script>

<style scoped>
.c-placeholder {
    padding-top: 18px;
}
.placeholder__img {
    width: 266px;
    height: 136px;
    background: #dedede;
}
.placeholder__lines {
    margin-top: 22px;
}
.placeholder__line {
    border-radius: 10px;
    background: #dedede;
}
.placeholder__lines > .placeholder__line {
    margin-bottom: 8px;
}
.placeholder__line:nth-child(1) {
    width: 177px;
    height: 14px;
}
.placeholder__line:nth-child(2) {
    width: 218px;
    height: 14px;
}
.placeholder__line:nth-child(3) {
    width: 139px;
    height: 14px;
}
</style>
