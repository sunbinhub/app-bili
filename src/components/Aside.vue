<template>
  <div class="aside">
    <ChannelSearch></ChannelSearch>
    <TitleMenu :isActive="activeId === 100" @active="activeId = 100">
      <!--具名插槽-->
      <template v-slot:title>发现频道</template>
      <template v-slot:icon>></template>
    </TitleMenu>
    <ChannelList
      :activeId="activeId"
      @active="activeId = $event"
      columns="2"
    ></ChannelList>
  </div>
</template>

<script>
import TitleMenu from "./TitleMenu";
import ChannelList from "./ChannelList";
import ChannelSearch from "./ChannelSearch";

export default {
  components: {
    TitleMenu,
    ChannelList,
    ChannelSearch,
  },
  data() {
    return {
      activeId: 100,
    };
  },
  methods: {
    handleSearch(e) {
      console.log("搜索", e);
    },
  },
};
</script>

<style scope>
.aside {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>


