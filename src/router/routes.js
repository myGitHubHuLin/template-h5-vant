

// layout
import Fotter from "@/layout/Fotter/index.vue";
import Header from "@/layout/Header/index.vue";

//#region 自动导入模块路由
const files = require.context("./modules", false, /\.js$/);
const modules = [];

files.keys().forEach((key) => {
  modules.push(files(key).default || files(key));
});
//#endregion

// pages
const Home = () =>
  import(/* webpackChunkName: "home" */ "@/views/home/home.vue");
const Login = () => import("@/views/login/login.vue");
const PersonCenter = () => import("@/views/person-center/person-center.vue");
const MapDemo = () => import("@/views/map-demo/map-demo.vue");
const Redirect = () => import("@/views/redirect/redirect.vue");

const routes = [
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录",
      isOpen: true,
    },
    component: Login,
  },
  {
    path: "/",
    name: "fotter-main",
    redirect: "/home",
    component: Fotter,
    children: [
      {
        path: "home",
        name: "home",
        meta: {
          title: "主页",
        },
        component: Home,
      },
      {
        path: "map-demo",
        name: "map-demo",
        meta: {
          title: "地图",
          isOpen: true,
        },
        component: MapDemo,
      },
      {
        path: "person-center",
        name: "person-center",
        meta: {
          title: "个人中心",
        },
        component: PersonCenter,
      },
    ],
  },
  {
    path: "/",
    name: "header-main",
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
    component: Redirect,
  },
];

export default routes;
