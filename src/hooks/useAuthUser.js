import { useQuery } from "@tanstack/react-query";
import { getAuthUser } from "../lib/api";

function useAuthUser() {
  const authUser = useQuery({
    queryKey: ["authUser"],
    queryFn: getAuthUser,
    retry: false,
    // Don't refetch on window focus for auth queries
    refetchOnWindowFocus: false,
    // Consider stale after 5 minutes
    staleTime: 5 * 60 * 1000,
  });
  return { isLoading: authUser.isLoading, authUser: authUser.data?.user };
}

export default useAuthUser;
