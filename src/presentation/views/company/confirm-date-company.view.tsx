import { Button, Input } from "@/common";
import { Container, Text } from "@/presentation/components";
import { useNavigation } from "expo-router";
import { Controller, useForm } from "react-hook-form";

export const ConfirmDateCompanyView = () => {
  const { control } = useForm();
  const { navigate } = useNavigation<any>();
  return (
    <Container dismissKeyboard>
      <Text.Title>Confirme a data de fundação</Text.Title>
      <Text.Description>
        Por favor, confirme a data de fundação da sua empresa na tela para
        garantir a autenticidade das informações fornecidas.
      </Text.Description>
      <Container className="mt-10">
        <Controller
          name="document"
          control={control}
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
            <Input
              maxLength={18}
              keyboardType="numeric"
              label="Data de fundação"
              placeholder="dd/mm/aaaa"
              onChangeText={(text) => alert(text)}
              errorMessage={error?.message}
              {...rest}
            />
          )}
        />
      </Container>
      <Button
        label="Próximo"
        onPress={() => navigate("ConfirmNameCompanyView")}
      />
    </Container>
  );
};
