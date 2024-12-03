
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deletePostApi } from "../../../services/postServices";

export default function useDeletePost() {
    const queryClient=useQueryClient()
  const { isPending: isDeleting, mutate: deletePost } = useMutation({
    mutationFn: deletePostApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey:["posts"]
      })
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });
  return { isDeleting, deletePost };
}
