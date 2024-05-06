import { useState } from "react";

import {
  Button,
  Container,
  Keyboard,
  Spacing,
  Text,
  useModalStore,
} from "@/common";
import { InputCustom } from "../components";
import { useAuthUcMutation } from "../hooks";

export const AuthenticationUcScreen = () => {
  const { isLoading, mutate } = useAuthUcMutation();
  const { setAlert } = useModalStore();
  const [value, setValue] = useState("");

  function concatValue(text: string) {
    const maxLength = 7;
    let length = value.length - 1;
    if (maxLength <= length) return;
    setValue((prev) => prev + text);
  }

  function removeValue() {
    setValue((prev) => prev.slice(0, -1));
  }

  function onSubmit() {
    if (!value) {
      return setAlert({
        title: "Atenção!",
        description: "Por favor, digite o código da sua unidade consumidora.",
      });
    }
    mutate(value);
  }

  return (
    <Container>
      <Text.Title>Bem-vindo de volta!</Text.Title>
      <Text.Description>
        Estamos aqui para tornar sua vida mais fácil. Conte conosco para
        resolver suas pendências de forma rápida e conveniente. Se precisar de
        ajuda, estamos à disposição!
      </Text.Description>
      <Container className="mt-10">
        <InputCustom value={value} onClear={() => setValue("")} />
        <Spacing height={30} />
        <Keyboard
          disabled={isLoading}
          onRemove={removeValue}
          onChange={(value) => concatValue(value.toString())}
        />
        <Spacing height={30} />
        <Button
          size="lg"
          label="Enviar"
          isLoading={isLoading}
          onPress={onSubmit}
          disabled={isLoading}
        />
      </Container>
    </Container>
  );
};
