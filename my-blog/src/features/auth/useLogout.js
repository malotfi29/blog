import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { logoutApi } from "../../services/authService";



export default function useLogout() {
  const queryClient = useQueryClient();
  const { isPending: isLoguting, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/signin",{replace:true})
    },
    // onError: (err) => toast.error(err?.response?.data?.message),
  });
  return{isLoguting,logout}
}
