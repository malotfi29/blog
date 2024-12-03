import http from "./httpServices";

export function getAllPostsApi() {
  return http.get(`/post/list`).then(({ data }) => data.data);
}

export function getSinglePostApi(slug) {
  return http.get(`/post/slug/${slug}`).then(({ data }) => data.data);
}

export async function likePostApi({postId,userId}) {
  return http.post(`/post/like/${postId}`,userId).then(({ data }) => data.data);
}

export async function bookmarkPostApi({postId,userId}) {
  return http.post(`/post/bookmark/${postId}`,userId).then(({ data }) => data.data);
}

export async function createPostApi(data) {
  return http.post(`/post/create`, data).then(({ data }) => data.data);
}

export async function editPostApi({id,data}) {
  return http.patch(`/post/update/${id}`, data).then(({ data }) => data.data);
}

export async function getPostById(id) {
  return http.get(`/post/${id}`).then(({ data }) => data.data);
}

export async function deletePostApi(id) {
  return http.delete(`/post/remove/${id}`).then(({ data }) => data.data);
}


