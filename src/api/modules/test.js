import http from "@/utils/request";

export function redirect(params) {
  return http.request({
    url: "/redirect",
    method: "get",
    params,
  });
}

export function uploadImage(data) {
  return http.request({
    url: "/uploadImage",
    method: "post",
    data,
  });
}
