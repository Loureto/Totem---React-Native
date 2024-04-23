import { useState } from "react";

import { ConfirmNameDTO, useConfirmNameMutation } from "../hooks";
import { Button, Checkbox, Container, Text } from "@/common";
import { Text as TextNative } from "react-native";

const listItems = [
  { id: 1, name: "Nome da empresa" },
  { id: 2, name: "Nome da empresa" },
  { id: 3, name: "Nome da empresa" },
  { id: 4, name: "Nome da empresa" },
  { id: 5, name: "Nome da empresa" },
];

export const ConfirmNameCompanyView = () => {
  const { handleClickConfirmName, isLoading } = useConfirmNameMutation();
  const [isChecked, setIsChecked] = useState<ConfirmNameDTO>({
    id: null,
    name: null,
  });

  return (
    <Container dismissKeyboard>
      <Text.Title>Confirme o nome fantasia</Text.Title>
      <Text.Description>
        Selecione uma opção entre as cinco disponíveis para confirmar o nome
        fantasia da sua empresa. Isso nos ajudará a garantir a segurança e
        precisão das informações.
      </Text.Description>
      <Container className="mt-10">
        <TextNative className="text-base">
          Selecione apenas uma opção
        </TextNative>
        {listItems?.map((item) => (
          <Checkbox
            key={item.id}
            label={item.name}
            labelClasses={
              isChecked.id && isChecked.id !== item.id ? "line-through" : ""
            }
            isChecked={isChecked === item}
            onPress={() => setIsChecked(item)}
          />
        ))}
      </Container>
      <Button
        label="Confirmar"
        isLoading={isLoading}
        onPress={() => handleClickConfirmName(isChecked)}
      />
    </Container>
  );
};
