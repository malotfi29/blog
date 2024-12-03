import http from "./httpServices";


export async function createCommentApi(data){
    return http.post("/comment/add",data).then(({data})=>data.data)
}

export async function getAllCommentApi(){
    return http.get("/comment/list").then(({data})=>data.data)
}