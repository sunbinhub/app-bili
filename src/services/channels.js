export default {
  async getChannels() {
    let resp = await fetch("/x/web-interface/web/channel/category/list");
    let data = await resp.json();
    return data.data.categories;
  },
};
