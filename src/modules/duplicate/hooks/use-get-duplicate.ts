import { useQuery } from "react-query";
import { fetchApi } from "@/services";
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
