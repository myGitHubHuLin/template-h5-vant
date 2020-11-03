import http from "@/utils/request";



export function info(params) {
  return http.request({
    url: "/user/info",
    method: "get",
    params,
  });
}

export function login(data) {
  return http.request({
    url: "/user/login",
    method: "post",
    data,
  });
}

export function logout() {
  return http.request({
    url: "/user/logout",
    method: "post",
  });
}
