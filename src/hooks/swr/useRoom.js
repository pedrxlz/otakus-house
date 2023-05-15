import useSWR from "swr";
import { rooms } from "../../services/api/index.js";

const fetcher = (url) => rooms.get(url).then((res) => res.data);

export const useRoom = ({ id }) => {
  const { data, mutate, isLoading, error } = useSWR(
    id ? `rooms/description/${id}` : null,
    fetcher
  );

  return {
    room: data,
    mutate,
    isLoading,
    error: error?.response?.data?.error,
  };
};
