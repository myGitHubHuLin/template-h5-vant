import Vuex, { ActionObject, ActionMethod, Module } from "vuex";
import {
  getToken,
  setToken,
  removeToken,
  setUserInfo,
  removeUserInfo,
} from "@/utils/auth";
import $api from "@/api/index";
import { getUserInfo } from "@/utils/auth";
import * as mt from "./mutations-types";


export default {
  namespaced: true,
  state: {
    token: "",
    info: {
      avatar: '',
      name: ''
    },
  },
  mutations: {
    [mt.SET_TOKEN](state, data) {
      state.token = data;
    },
    [mt.SET_USER_INFO](state, userData = {}) {
      state.info = userData;
    },
    [mt.CLEAR_USER_INFO](state) {
      state.info = {};
      state.token = null;
    },
  },
  actions: {
    async login({ commit }, data) {
      let result = await $api.user.login(data);
      commit(mt.SET_TOKEN, result.data.token);
      setToken(result.data.token);
    },
    async info({ commit }) {
      let result = await $api.user.info();
      commit(mt.SET_USER_INFO, result.data);
      // 用户信息每次进入都重新获取到session
      // setUserInfo(result.data);
    },
    logout({ commit }) {
      commit(mt.CLEAR_USER_INFO);
      removeToken();
      // removeUserInfo();
    },
  },
  getters: {
    token(state) {
      return state.token;
    },
    info(state) {
      return state.info;
    },
  },
};
