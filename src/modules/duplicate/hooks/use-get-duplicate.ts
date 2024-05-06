import { fetchApi } from "@/common";
import { useQuery } from "react-query";
import { UC } from "../models";

export const useGetDuplicate = () => {
  return useQuery({
    queryKey: ["get-duplicate"],
    queryFn: async (): Promise<UC> => {
      const { data } = await fetchApi<UC>("/duplicate");
      return data;
    },
  });
};
