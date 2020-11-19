
import MidRouterView from "@/components/MidRouterView.vue";

const routes = {
  path: "/test",
  redirect: "/test/jssdk",
  component: MidRouterView,
  children: [
    {
      path: "testJssdk",
      name: "testJssdk",
      meta: {
        title: "jssdk demo",
      },
      component: () => import("@/views/test/jssdk.vue"),
    },
  ],
};

export default routes;
