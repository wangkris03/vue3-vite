// import { request } from "@/utils/service"
import type * as Login from "./types/login"

/** 获取登录验证码 */
export function getLoginCodeApi() {
  return Promise.resolve({
    code: 0,
    data: "https://vercel.com/api/www/avatar/C7DGE0VjD1J5vs77htJL4bxZ?&s=60",
    message: "获取验证码成功"
  })
  // return request<Login.LoginCodeResponseData>({
  //   url: "login/code",
  //   method: "get"
  // })
}

/** 登录并返回 Token */
export function loginApi(data: Login.ILoginRequestData) {
  if (data.username === "admin" && data.password === "1" && data.code === "1") {
    return Promise.resolve({
      data: {
        token: "token-admin"
      },
      code: 0,
      message: "登录成功"
    })
  } else {
    return Promise.reject({
      data: {},
      code: -1,
      message: "登录失败"
    })
  }
  // return request<Login.LoginResponseData>({
  //   url: "users/login",
  //   method: "post",
  //   data
  // })
}

/** 获取用户详情 */
export function getUserInfoApi() {
  return Promise.resolve({
    code: 0,
    data: {
      username: "admin",
      roles: ["admin"]
    },
    message: "获取用户详情成功"
  })
  // return request<Login.UserInfoResponseData>({
  //   url: "users/info",
  //   method: "get"
  // })
}
