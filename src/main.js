import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";



// 初始化样式
import "@/assets/css/reset.css";

// rem 适配js
// import 'amfe-flexible'

// 设置html根字体大小
import "@/assets/css/font_html.css";

// 导入vant css(由于采用配置主题方式，这里需要导入vant less 主题文件,如果不需要自定义主题注释下面代码，然后解除config/cdn.js 中vant主题样式的注释)
import "vant/lib/index.less";

// 路由权限拦截
import "./router/permission";

// 初始化svg图标
import "./icons/index";

// mock模式
if (process.env.VUE_APP_MODE == "mock") {
  require("../mock");
  console.log("本地mock数据已导入");
}

// 注册自定义全局组件
import components from "./utils/components";

// 注册全局插件
import plugins from "./utils/plugins";



Vue.use(plugins).use(components);


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");