import { useQuery } from "@tanstack/react-query";

import { getAllCommentApi } from "../../services/commentService";


export default function usegetAllComments() {
  const { data, isLoading } = useQuery({
    queryKey: ["comments"],
    queryFn: getAllCommentApi,
  });
  const { comments } = data || {};
  return { isLoading, comments};
}
