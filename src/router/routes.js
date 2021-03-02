

// layout
import Footer from "@/layout/footer/index.vue";
import Header from "@/layout/header/index.vue";

//#region 自动导入模块路由
const files = require.context("./modules", false, /\.js$/);
const modules = [];

files.keys().forEach((key) => {
  modules.push(files(key).default || files(key));
});
//#endregion

const routes = [
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录",
      isOpen: true,
    },
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/",
    name: "fotterMain",
    redirect: "/home",
    component: Footer,
    children: [
      {
        path: "home",
        name: "home",
        meta: {
          title: "主页",
        },
        component: () => import("@/views/home/index.vue"),
      },
      {
        path: "mapDemo",
        name: "mapDemo",
        meta: {
          title: "地图",
          isOpen: true,
        },
        component: () => import("@/views/mapDemo/index.vue"),
      },
      {
        path: "personCenter",
        name: "personCenter",
        meta: {
          title: "个人中心",
        },
        component: () => import("@/views/personCenter/index.vue"),
      },
    ],
  },
  {
    path: "/",
    name: "headerMain",
    redirect: "/home",
    component: Header,
    children: [...modules],
  },
  {
    path: "/redirect",
    name: "redirect",
    meta: {
      title: "Redirect demo",
      hideHeader: true,
      isOpen: true,
    },
    component: () => import("@/views/redirect/index.vue"),
  },
];

export default routes;
