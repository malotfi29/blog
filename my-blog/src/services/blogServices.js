import http from "./httpServices";

export function getAllBlogsCategoryApi() {
  return http.get("/category/list").then(({ data }) => data.data);
}