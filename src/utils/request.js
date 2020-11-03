/**
 * axios 封装
 * @author maybe
 */
import axios from "axios";
import { Toast } from "vant";
// import store from '@/store'
import { getToken } from "@/utils/auth";
import router from "@/router";
// import configSite from '_conf' // 站点配置

/**
 * 请求失败后的错误统一处理
 * @param {number} code 请求失败的状态码
 */
const handleError = (code) => {
  switch (code) {
    case 401:
      // do something ...
      // 这里要清除一些全局的loading哦，例如 vant: Toast.clear()
      router.push("/Login");
      break;

    default:
      break;
  }
};

// create an axios instance
const service = axios.create({
  // withCredentials: true, // send cookies when cross-domain requests
  baseURL: process.env.VUE_APP_API_PREFIX, // .env中配置的api前缀
  timeout: 5000, // request timeout
});
console.log(process.env.VUE_APP_API_PREFIX);
/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
service.interceptors.request.use(
  (config) => {
    // 获取token
    const token = getToken();
    token && (config.headers.Authorization = token);
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error, "err");
    return Promise.reject(error);
  }
);
/**
 * 响应格式
 * { code => 状态码, msg => '响应信息', data => 数据 }
 */
service.interceptors.response.use(
  (response) => {
    const res = response.data;

    if (res.code !== 200) {
      // 处理自定义错误
      handleError(res.code);

      return Promise.reject(new Error(res.msg || "响应未知错误"));
    } else {
      // success
      return Promise.resolve(res);
    }
  },
  (error) => {
    console.error("response error:" + error); // for debug
    Toast.fail({
      message: error.message,
      duration: 1.5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
