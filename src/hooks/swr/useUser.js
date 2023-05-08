import useSWR from "swr";
import { api } from "../../services/api/index.js";

const fetcher = (url, authorization) =>
  api
    .get(url, { headers: { authorization: authorization } })
    .then((res) => res.data);

export const useUser = ({ email, authorization }) => {
  const { data, mutate, isLoading, error } = useSWR(
    authorization && email ? `api/v1/user?email=${email}` : null,
    (url) => fetcher(url, authorization)
  );

  return {
    user: data,
    mutate,
    isLoading,
    error: error?.response?.data?.error,
  };
};
