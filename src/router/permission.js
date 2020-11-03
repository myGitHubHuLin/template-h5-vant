import router from "@/router";
// import { Notify } from 'vant'
import { getToken, setToken } from "@/utils/auth";
import $store from "@/store/index";
import { isEmptyObj } from "@/utils/index";
import { SET_TOKEN } from "@/store/modules/user/mutations-types";
// 检测是否存在用户信息
const checkHasUserInfo = async () => {
  let info = $store.getters["user/info"];
  if (isEmptyObj(info)) await $store.dispatch("user/info");
};
// 检测vuex是否存在token
const checkHasToken = async (token) => {
  let vuexToken = $store.getters["user/token"];
  if (!vuexToken) $store.commit("user/" + SET_TOKEN, token);
};

router.beforeEach(
  async (
    to,
    from,
    next
  ) => {
    // 设置页面标题
    document.title = to.meta.title;

    // 获取token
    const token = getToken();
    if (token) {
      // 如果vuex中token不存在，保存一下
      checkHasToken(token);
      // 如果有token判断是否有用户信息(用户信息建议每次打开网站后重新获取一次最新的用户信息，不建议存本地缓存)
      // 不要用await不然会阻塞下面的代码导致白屏
      checkHasUserInfo();

      if (to.path === "/login") {
        // 已经登录，跳转到首页
        next({ path: "/" });
      } else {
        next();
      }
    } else {
      //  no token
      if (to.meta.isOpen) {
        // 开放页面，无需验证
        next();
      } else {
        // 其他没有访问权限的页面被重定向到登录页面
        next(`/login?redirect=${to.path}`);
      }
    }
  }
);
