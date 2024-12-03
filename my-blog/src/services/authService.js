
import http from "./httpServices";
// const {default:http}=require("./httpService")


export async function signupApi(values) {
  return http.post("/user/signup", values).then(({ data }) => data.data);
}

export async function signinApi(values) {
  return http.post("/user/signin", values).then(({ data }) => data.data);
}

export async function getUserApi() {
  return http.get("/user/profile").then(({ data }) => data.data);
}

export async function getAllUserApi() {
  return http.get("/user/list").then(({ data }) => data.data);
}

export function logoutApi() {
  return http.post(`/user/logout`);
}
