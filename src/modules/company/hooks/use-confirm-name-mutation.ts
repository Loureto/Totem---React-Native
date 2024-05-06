import { useMutation } from "react-query";
import { useNavigation } from "expo-router";
import { api } from "@/services";
import { useModalStore } from "@/store";

export type ConfirmNameDTO = {
  id: number | null;
  name: string | null;
};

export const useConfirmNameMutation = () => {
  const { navigate } = useNavigation<any>();
  const { setAlert } = useModalStore();
  const mutation = useMutation({
    mutationFn: async (data: ConfirmNameDTO): Promise<void> => {
      return await api.post("/confirm-name", data);
    },
    onSuccess: () => {
      navigate("ServicesStackRouter");
    },
    onError: () => {},
  });

  function handleClickConfirmName(data: ConfirmNameDTO) {
    if (!data.id && !data.name) {
      return setAlert({
        description:
          "Por favor, selecione o nome da sua empresa e confirme para prosseguir.",
      });
    }

    mutation.mutate(data);
  }

  return {
    ...mutation,
    handleClickConfirmName,
  };
};
