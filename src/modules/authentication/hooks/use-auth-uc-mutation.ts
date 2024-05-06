import { api, useModalStore } from "@/common";
import { useNavigation } from "@react-navigation/native";
import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { AccountModel } from "../models";

export const useAuthUcMutation = () => {
  const { navigate } = useNavigation<any>();
  const { setAlert } = useModalStore();
  const uc = "UC";

  return useMutation({
    mutationFn: async (codeUC: string): Promise<AccountModel> => {
      const response = await api.post("/login", {
        uc: codeUC,
        documentType: uc,
      });
      return response.data;
    },
    onSuccess: () => {
      return navigate("ServicesStackRouter");
    },
    onError: (error: AxiosError<AxiosResponse>) => {
      return setAlert({
        title: "Falha na autenticação",
        description:
          error.response?.status.toString() || "Por favor, tente novamente.",
      });
    },
  });
};
