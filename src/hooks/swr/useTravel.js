import useSWR from "swr";
import { api } from "../../services/api/index.js";

const fetcher = (url, authorization) =>
  api
    .get(url, { headers: { authorization: authorization } })
    .then((res) => res.data);

export const useTravel = ({ id }) => {
  const user =
    typeof window !== "undefined" && JSON.parse(localStorage.getItem("user"));

  const { data, mutate, isLoading, error } = useSWR(
    id ? `api/v1/booking/get-booking?id=${id}` : null,
    (url) => fetcher(url, user.authToken)
  );

  return {
    travel: data[0],
    mutate,
    isLoading,
    error: error?.response?.data?.error,
  };
};
