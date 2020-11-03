
import MidRouterView from "@/components/MidRouterView.vue";

const List = () => import("@/views/article/list.vue");

const routes = {
  path: "/article",
  redirect: "/article/article",
  component: MidRouterView,
  children: [
    {
      path: "article",
      name: "article",
      component: () => import("@/views/article/article.vue"),
    },
    {
      path: "list",
      name: "list",
      meta: {
        title: "列表 demo",
        hideHeader: false,
      },
      component: List,
    },
  ],
};

export default routes;
