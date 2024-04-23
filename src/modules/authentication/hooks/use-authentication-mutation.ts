import { useMutation } from "react-query";
import { useNavigation } from "@react-navigation/native";
import { AccountModel } from "../models";
import { api } from "@/services";

export const useAuthenticationMutation = () => {
  const { navigate } = useNavigation<any>();
  const individual = "CPF";

  return useMutation({
    mutationFn: async (documentType: string): Promise<AccountModel> => {
      const response = await api.post("/login", documentType);
      return response.data;
    },
    onSuccess: (data) => {
      if (data.documentType === individual) {
        return navigate("IndividualStackRouter");
      }

      return navigate("CompanyStackRouter");
    },
    onError: () => {},
  });
};
