import { useQuery } from "@tanstack/react-query";
import { getAllPostsApi } from "../../services/postServices";
import { useParams } from "react-router-dom";


export default function usegetAllPosts() {
  // const{slug}=useParams()
  // console.log(slug);
  
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getAllPostsApi,
  });
  const { posts } = data || {};
  return { isLoading, posts };
}
