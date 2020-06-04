/**
 * 配置webpack-cdn-plugin
 * @listens https://github.com/shirotech/webpack-cdn-plugin
 */
module.exports = {
  modules: [
    {
      name: 'vue',
      var: 'Vue',
      path: 'dist/vue.runtime.min.js'
    },
    {
      name: 'vue-router',
      var: 'VueRouter',
      path: 'dist/vue-router.min.js'
    },
    {
      name: 'vuex',
      var: 'Vuex',
      path: 'dist/vuex.min.js'
    },
    {
      name: 'vue-amap',
      var: 'VueAMap',
      path: 'dist/index.js'
    },
    {
      name: 'vant',
      var: 'vant',
      path: 'lib/vant.min.js',
      style: 'lib/index.css'
    },
  ],
}
