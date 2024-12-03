import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { signinApi, signupApi } from "../../services/authService";

export default function useSignup() {
  const queryClient = useQueryClient();
  const { isPending: isLoading, mutate: signup} = useMutation({
    mutationFn:signupApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });
  return{isLoading,signup}
}
