/**
 * 配置webpack-cdn-plugin
 * @listens https://github.com/shirotech/webpack-cdn-plugin
 */
module.exports = {
  // 按需自定义CDN服务器
  prodUrl: "https://cdn.jsdelivr.net/npm/:name@:version/:path",
  modules: [
    {
      name: "vue",
      var: "Vue",
      path: "dist/vue.min.js",
    },
    {
      name: "vue-router",
      var: "VueRouter",
      path: "dist/vue-router.min.js",
    },
    {
      name: "vuex",
      var: "Vuex",
      path: "dist/vuex.min.js",
    },
    {
      name: "vant",
      var: "vant",
      path: "lib/vant.min.js",
      style: "lib/index.css",
    },
  ],
};
