import Vuex from "vuex";

//#region 自动导入vuex modules
const files = require.context("./modules", true, /\index.js$/);
const modules = {};

files.keys().forEach((key) => {
  modules[key.replace(/(\.\/|\/index.js)/g, "")] =
    files(key).default || files(key);
});
//#endregion
// import user from "./modules/user";
// const modules = { user };

// 判断环境 vuex提示生产环境中不使用
import createPersistedState from "vuex-persistedstate";
import createLogger from 'vuex/dist/logger'

const debug = process.env.NODE_ENV !== "production";
const createPersisted = createPersistedState({
  storage: window.sessionStorage, // 这里把vuex的数据保存在sessionStorage里面，页面关闭后消失
});


export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules,
  plugins: debug ? [createLogger(), createPersisted] : [createPersisted], // vuex持久化
});
