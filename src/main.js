import Vue from "vue";
import App from "./App.vue";
// import channelServ from "./services/channels"
//
// async function test() {
//   let channels = await channelServ.getChannels();
//   console.log(channels);
// }
//
// test();

new Vue({
  render: (h) => h(App),
}).$mount("#app");
