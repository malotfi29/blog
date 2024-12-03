import { useQuery } from "@tanstack/react-query";
import { getAllBlogsCategoryApi } from "../../services/blogServices";
import { useParams } from "react-router-dom";




export default function usegetAllBlogsCategory() {
  
  const { data, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: getAllBlogsCategoryApi,
  });
  const { categories } = data || {};
  return { isLoading, categories};
}
