import { Button, Input } from "@/common";
import { Container, Text } from "@/presentation/components";
import { useNavigation } from "expo-router";
import { Controller, useForm } from "react-hook-form";

export const ConfirmNameCompanyView = () => {
  const { control } = useForm();
  const { navigate } = useNavigation();
  return (
    <Container dismissKeyboard>
      <Text.Title>Confirme o nome fantasia</Text.Title>
      <Text.Description>
        Selecione uma opção entre as cinco disponíveis para confirmar o nome
        fantasia da sua empresa. Isso nos ajudará a garantir a segurança e
        precisão das informações.
      </Text.Description>
      <Container className="mt-10 space-y-3">
        <Controller
          name="document"
          control={control}
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
            <Input
              maxLength={18}
              keyboardType="numeric"
              label="Selecione apenas uma opção"
              placeholder="dd/mm/aaaa"
              onChangeText={(text) => alert(text)}
              errorMessage={error?.message}
              {...rest}
            />
          )}
        />
      </Container>
      <Button label="Confirmar" onPress={() => {}} />
    </Container>
  );
};
