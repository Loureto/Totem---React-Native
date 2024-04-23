import { useMutation } from "react-query";
import { useNavigation } from "expo-router";
import { api } from "@/common";

export const useConfirmDateMutation = () => {
  const { navigate } = useNavigation<any>();
  return useMutation({
    mutationFn: async (date: string): Promise<void> => {
      return await api.post("/confirm-date", date);
    },
    onSuccess: () => {
      navigate("ConfirmNameCompanyView");
    },
    onError: () => {},
  });
};
