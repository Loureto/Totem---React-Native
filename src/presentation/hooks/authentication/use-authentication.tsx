import { Authentication } from "@/domain";
import { useNavigation } from "@react-navigation/native";

export const useAuthentication = (auth: Authentication) => {
  const navigate = useNavigation<any>();

  async function handleClickLogin(cpf: string): Promise<void> {
    const formattedText = cpf.replace(/[^0-9]/g, "");
    const response = await auth.login({ cpf: formattedText });

    if (!response) return;

    return navigate.navigate("CompanyStackRouter");
  }

  return {
    handleClickLogin,
  };
};
