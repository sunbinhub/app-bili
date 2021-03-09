//vue-cli的配置 90%的配置是webpack配置
module.exports = {
  devServer: {
    proxy: {
      "/x": {
        //凡是以/x 开头的请求，进行代理
        target: "https://api.bilibili.com",
        onProxyReq(proxyReq) {//添加请求头
          // add custom header to request
          proxyReq.setHeader("origin", "https://www.bilibili.com");
          proxyReq.setHeader(
            "referer",
            "https://www.bilibili.com/v/channel?spm_id_from=333.851.b_7072696d61727950616765546162.4"
          );
          // or log the req
        },
      },
    },
  },
};
