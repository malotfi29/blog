import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-hot-toast";
import { likePostApi } from "../../services/postServices";



export default function useLikePost() {
    const queryClient = useQueryClient();
  const { isPending: isUpdating, mutate: likePost } = useMutation({
    mutationFn: likePostApi,
    onSuccess: (data) => {
        toast.success(data.message),
        queryClient.invalidateQueries({ queryKey: ["posts"] })
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });
  return{isUpdating,likePost}
}