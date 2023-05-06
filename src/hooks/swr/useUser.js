import useSWR from "swr";
import { api } from "../../services/api/index.js";

const fetcher = (url) => api.get(url).then((res) => res.data);

export const useUser = ({ email }) => {
  const { data, isLoading, error } = useSWR(
    email ? `api/v1/user?email=${email}` : null,
    fetcher
  );
  console.log(data);
  return {
    user: data,
    isLoading,
    error: error?.response?.data?.error,
  };
};
