import { useQuery } from "@tanstack/react-query";
import { getUserApi } from "../../services/authService";


export default function usegetUser() {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUserApi,
  });
  const { user } = data || {};
  return { isLoading, user};
}
