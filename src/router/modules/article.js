
import MidRouterView from "@/components/MidRouterView.vue";

const routes = {
  path: "/article",
  redirect: "/article/index",
  component: MidRouterView,
  children: [
    {
      path: "index",
      name: "articleIndex",
      component: () => import("@/views/article/index.vue")
    },
    {
      path: "list",
      name: "articleList",
      meta: {
        title: "列表 demo",
        hideHeader: false,
      },
      component: () => import("@/views/article/list.vue"),
    },
  ],
};

export default routes;
