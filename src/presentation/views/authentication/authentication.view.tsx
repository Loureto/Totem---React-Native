import { Button, Input } from "@/common";
import { Authentication } from "@/domain";

import { Container, Text } from "@/presentation/components";
import { useAuthentication } from "@/presentation/hooks";

import { formattedCpfOrCnpj } from "@/presentation/utils";
import { AuthenticationData, configFormProps } from "@/presentation/validators";

import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

interface IAuthentication {
  authentication: Authentication;
}

export const AuthenticationView: React.FC<IAuthentication> = ({
  authentication,
}) => {
  const { handleClickLogin } = useAuthentication(authentication);
  const { control, handleSubmit, reset } = useForm<AuthenticationData>({
    ...configFormProps,
  });

  useEffect(() => {
    return () => reset();
  }, []);

  return (
    <Container dismissKeyboard>
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
      </Container>
      <Button
        label="Entrar"
        onPress={handleSubmit((text) => handleClickLogin(text.document))}
      />
    </Container>
  );
};
