import { useQuery } from "@tanstack/react-query";

import { useParams } from "react-router-dom";
import { getAllBlogsCategoryApi } from "../../services/blogServices";




export default function useCategory() {
  const{slug}=useParams()
  
  
  const { data, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: getAllBlogsCategoryApi,
  });
  const { categories } = data || {};
  const selectedCategory=categories.find(c=>c.slug==slug)
 
  
  return { isLoading, categories,selectedCategory};
}
