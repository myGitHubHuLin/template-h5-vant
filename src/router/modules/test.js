
import MidRouterView from "@/components/MidRouterView.vue";

const routes = {
  path: "/test",
  redirect: "/test/jssdk",
  component: MidRouterView,
  children: [
    {
      path: "test-jssdk",
      name: "test-jssdk",
      meta: {
        title: "jssdk demo",
      },
      component: () => import("@/views/test/jssdk.vue"),
    },
  ],
};

export default routes;
