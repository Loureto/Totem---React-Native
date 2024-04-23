import { Controller, useForm } from "react-hook-form";

import { useConfirmDateMutation } from "../hooks";
import { ConfirmDateType, confirmDateConfig } from "../validators";

import { Button, Container, Input, Text } from "@/common";
import { dateMask } from "@/utils";
import { useNavigation } from "expo-router";

export const ConfirmDateCompanyView = () => {
  const { navigate } = useNavigation<any>();
  const { mutate, isLoading } = useConfirmDateMutation();
  const { control, handleSubmit } = useForm<ConfirmDateType>({
    ...confirmDateConfig,
  });

  return (
    <Container dismissKeyboard>
      <Text.Title>Confirme a data de fundação</Text.Title>
      <Text.Description>
        Por favor, confirme a data de fundação da sua empresa na tela para
        garantir a autenticidade das informações fornecidas.
      </Text.Description>
      <Container className="mt-10">
        <Controller
          name="date"
          control={control}
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
            <Input
              maxLength={10}
              keyboardType="numeric"
              label="Data de fundação"
              placeholder="dd/mm/aaaa"
              onChangeText={(text) => onChange(dateMask(text))}
              errorMessage={error?.message}
              {...rest}
            />
          )}
        />
      </Container>

      <Button
        label="Próximo"
        isLoading={isLoading}
        onPress={() => navigate("ConfirmNameCompanyView")}
      />
    </Container>
  );
};
