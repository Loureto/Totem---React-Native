import { useState } from "react";

import { Button, Checkbox, Container, Text } from "@/components";
import { Text as TextNative } from "react-native";
import { ConfirmNameDTO, useConfirmNameMutation } from "../hooks";

const listItems = [
  { id: 1, name: "Nome da empresa" },
  { id: 2, name: "Nome da empresa" },
  { id: 3, name: "Nome da empresa" },
  { id: 4, name: "Nome da empresa" },
  { id: 5, name: "Nome da empresa" },
];

export const ConfirmNameIndividualView = () => {
  const { handleClickConfirmName, isLoading } = useConfirmNameMutation();
  const [isChecked, setIsChecked] = useState<ConfirmNameDTO>({
    id: null,
    name: null,
  });

  return (
    <Container>
      <Text.Title>Confirme o nome da sua mãe</Text.Title>
      <Text.Description>
        Selecione uma opção entre as cinco disponíveis para confirmar o nome da
        sua mãe. Isso nos ajudará a garantir a segurança e precisão das
        informações.
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
        size="lg"
        label="Confirmar"
        isLoading={isLoading}
        onPress={() => handleClickConfirmName(isChecked)}
      />
    </Container>
  );
};
