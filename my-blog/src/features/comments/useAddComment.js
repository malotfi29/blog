import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createCommentApi } from "../../services/commentService";

export default function useAddComment() {
  const queryClient = useQueryClient();
  const { isPending: isLoading, mutate:addComment } = useMutation({
    mutationFn: createCommentApi,
    onSuccess: (data) => {
     
      
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["comment"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });
  return{isLoading,addComment}
}
