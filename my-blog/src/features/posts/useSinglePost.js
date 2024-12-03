import { useQuery } from "@tanstack/react-query";

import { useParams } from "react-router-dom";
import { getSinglePostApi } from "../../services/postServices";

export default function usegetSinglePost() {
  const { slug } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["posts", slug],
    queryFn: () => getSinglePostApi(slug),
  });
  const { post } = data || {};
  return { isLoading, post };
}
