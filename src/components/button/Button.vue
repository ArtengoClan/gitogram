<template>
    <button :class="['c-button','theme-green',{'hover-text': withHoverText}]" :data-hover-text="hoverText">
        <span class="btn-text">
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    hoverText: {
      type: String
    }
  },
  computed: {
    withHoverText () {
      return this.hoverText?.length
    }
  }
}
</script>

<style scoped>
.c-button {
    width: 220px;
    height: 35px;
    /* margin: 19px 0 25px; */
    padding: 8px 87px;
    color: white;
    font-size: 16px;
    font-weight: 700;
    border-radius: 5px;
    filter: drop-shadow(0px 1px 4px #000000);
    cursor: pointer;
}
.theme-green {
    background-color: #31ae54;
}
.c-button:hover {
    background-color: #9e9e9e;
}
.btn-text {
    text-align: center;
}
.hover-text:hover span {
    display: none;
}

[data-hover-text] {
    position: relative;
}

[data-hover-text]::before {
  content: '';
}

[data-hover-text]:hover::before {
  content: attr(data-hover-text);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
