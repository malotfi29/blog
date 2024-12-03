import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { signinApi } from "../../services/authService";

export default function useSignin() {
  const queryClient = useQueryClient();
  const { isPending: isLoading, mutate: signin } = useMutation({
    mutationFn: signinApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });
  return{isLoading,signin}
}
