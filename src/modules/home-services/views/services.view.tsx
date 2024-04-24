import { StyleSheet } from "react-native";

import { CardButton } from "../components/CardButton";
import { Container, Text, SegundaViaIcon, ReligacaoIcon } from "@/common";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 40,
    gap: 14,
  },
});

const listItems = [
  {
    id: 1,
    name: "Segunda via",
    icon: <SegundaViaIcon />,
    onPress: () => alert("Segunda via"),
  },
  {
    id: 2,
    name: "Religação",
    icon: <ReligacaoIcon />,
    onPress: () => alert("Em desenvolvimento"),
  },
];

export const ServicesView = () => {
  return (
    <Container>
      <Text.Title>Serviços</Text.Title>
      <Text.Description>
        Escolha um serviço e resolva suas necessidades de forma rápida e prática
        através do sistema de autoatendimento.
      </Text.Description>

      <Container style={styles.container}>
        {listItems?.map((item) => (
          <CardButton
            key={item.id}
            title={item.name}
            icon={item.icon}
            onPress={item.onPress}
          />
        ))}
      </Container>
    </Container>
  );
};
