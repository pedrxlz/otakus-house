import useSWR from "swr";
import { api } from "../../services/api/index.js";

const fetcher = (url, authorization) =>
  api
    .get(url, { headers: { authorization: authorization } })
    .then((res) => res.data);

export const useUserTravels = ({ expired }) => {
  const user =
    typeof window !== "undefined" && JSON.parse(localStorage.getItem("user"));

  const { data, mutate, isLoading, error } = useSWR(
    user._id
      ? `api/v1/booking/get-bookings?userId=${user._id}&expired=${expired}`
      : null,
    (url) => fetcher(url, user.authToken)
  );

  return {
    travels: data,
    mutate,
    isLoading,
    error: error?.response?.data?.error,
  };
};
