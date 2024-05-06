import { useNavigation } from "expo-router";
import { Controller, useForm } from "react-hook-form";

import { Button, Input, Container, Text } from "@/components";
import { ConfirmDateType, confirmDateConfig } from "../validators";

export const ConfirmDateIndividualView = () => {
  const { control, handleSubmit } = useForm<ConfirmDateType>({
    ...confirmDateConfig,
  });
  const { navigate } = useNavigation<any>();
  return (
    <Container>
      <Text.Title>Confirme sua data de nascimento</Text.Title>
      <Text.Description>
        Por favor, confirme sua data de nascimento na tela para garantir a
        autenticidade das informações fornecidas.
      </Text.Description>
      <Container className="mt-10">
        <Controller
          name="date"
          control={control}
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
            <Input
              maxLength={18}
              keyboardType="numeric"
              label="Data de nascimento"
              placeholder="dd/mm/aaaa"
              onChangeText={(text) => alert(text)}
              errorMessage={error?.message}
              {...rest}
            />
          )}
        />
      </Container>
      <Button
        size="lg"
        label="Próximo"
        onPress={(value) => navigate("ConfirmNameIndividualView")}
      />
    </Container>
  );
};
