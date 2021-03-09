<template>
  <i class="iconfont" :class="[iconClass, extraClass]"></i>
</template>

<script>
  let map = {
    arrowUp: "iconjiantoushang",
    arrowDown: "iconjiantouxia",
    search: "iconziyuan",
  }
  export default {
    props: {
      type: {
        type: String,
        required: true,
      },
      extraClass: {
        type: String,
        default: "",
      }
    },
    computed: {
      iconClass() {
        return map[this.type];
      },
    },
  };
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_2372063_auyxrmuwi4.css";
</style>
