import useSWR from "swr";
import { rooms } from "../../services/api/index.js";

const fetcher = (url) => rooms.get(url).then((res) => res.data);

export const useRooms = () => {
  const { data, mutate, isLoading, error } = useSWR(`rooms/`, fetcher);

  return {
    rooms: data,
    mutate,
    isLoading,
    error: error?.response?.data?.error,
  };
};
