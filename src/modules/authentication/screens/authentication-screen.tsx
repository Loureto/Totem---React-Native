import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

import { Button, Container, Input, Spacing, Text } from "@/components";
import { formattedCpfOrCnpj } from "@/utils";

import { useAuthenticationMutation } from "../hooks";
import { AuthenticationData, configFormProps } from "../validators";

export const AuthenticationView = () => {
  const { mutate, isLoading } = useAuthenticationMutation();
  const { control, handleSubmit, reset } = useForm<AuthenticationData>({
    ...configFormProps,
  });

  useEffect(() => {
    return () => reset();
  }, [reset]);

  return (
    <Container>
      <Text.Title>Bem-vindo de volta!</Text.Title>
      <Text.Description>
        Estamos aqui para tornar sua vida mais fácil. Conte conosco para
        resolver suas pendências de forma rápida e conveniente. Se precisar de
        ajuda, estamos à disposição!
      </Text.Description>
      <Container className="mt-10">
        <Controller
          name="document"
          control={control}
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
            <Input
              maxLength={18}
              keyboardType="numeric"
              label="CPF/CNPJ"
              placeholder="Entre com o seu CPF ou CNPJ"
              onChangeText={(text) => onChange(formattedCpfOrCnpj(text))}
              errorMessage={error?.message}
              {...rest}
            />
          )}
        />
        <Spacing height={30} />
        <Button
          size="lg"
          label="Entrar"
          isLoading={isLoading}
          onPress={handleSubmit((text) => mutate(text.document))}
        />
      </Container>
    </Container>
  );
};
