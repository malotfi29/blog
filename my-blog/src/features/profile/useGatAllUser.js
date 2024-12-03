import { useQuery } from "@tanstack/react-query";
import { getAllUserApi } from "../../services/authService";


export default function usegetAllUser() {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUserApi,
  });
  const { users } = data || {};
  return { isLoading, users};
}
