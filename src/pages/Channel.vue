<template>
  <Layout>
    <template v-slot:head> 菜单 </template>
    <template v-slot:left>
      <Aside></Aside>
    </template>
    <template v-slot:right> 右侧区域 </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import Aside from "@/components/Aside";

export default {
  components: {
    Layout,
    Aside,
  },
};
</script>

<style scoped>
</style>
