<template>
  <div class="item" :class="{ active: isActive }" @click="handleClick">
    <!-- 插槽 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      // required: true,
      default: false,
    },
  },
  methods: {
    handleClick() {
      this.$emit("active", 123); //抛出自定义事件
    },
  },
};
</script>

<style scoped>
.active {
  background: #e7e7e7;
}

.item {
  cursor: pointer;
  width: 100%;
  height: 100%;
  transition: 0.2s;
}

.item:hover {
  background: #f4f4f4;
}
</style>
