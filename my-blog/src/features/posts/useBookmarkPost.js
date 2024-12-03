import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-hot-toast";
import { bookmarkPostApi } from "../../services/postServices";




export default function useBookmarkPost() {
    const queryClient = useQueryClient();
  const { isPending: isUpdating, mutate: bookmarkPost } = useMutation({
    mutationFn:bookmarkPostApi,
    onSuccess: (data) => {
        toast.success(data.message),
        queryClient.invalidateQueries({ queryKey: ["posts"] })
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });
  return{isUpdating,bookmarkPost}
}