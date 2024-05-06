import { ActivityIndicator, FlatList, View } from "react-native";
import {
  BodyRow,
  Button,
  CheckBox,
  Container,
  HeadRow,
  Spacing,
  Table,
  Td,
  Text,
  Th,
  Timer,
} from "@/components";
import { CardButton } from "../components";
import { useActions } from "../hooks";
import { formatCurrency } from "@/utils";

const headItems = [
  {
    id: 1,
    title: "Mês/Ano",
  },
  {
    id: 2,
    title: "Vencimento",
  },
  {
    id: 3,
    title: "Situação",
  },
  {
    id: 4,
    title: "Fatura",
  },
];

export const DuplicateScreen = () => {
  const {
    data,
    isChecked,
    isLoading,
    isLengthsEqual,
    addInvoice,
    AddInvoiceAll,
  } = useActions();

  return (
    <Container>
      <Timer />
      <Text.Title>Segunda via</Text.Title>
      <Text.Description>
        Escolha um serviço e resolva suas necessidades de forma rápida e prática
        através do sistema de autoatendimento.
      </Text.Description>
      <Container className="mt-10">
        <CardButton
          uc={data?.uc.toString()}
          address={data?.address}
          pendencies={data?.invoice.length}
          disabled
        />
        <Spacing height={16} />
        <Table>
          <HeadRow>
            <CheckBox
              className="w-4 h-4 ml-1.5"
              isChecked={isLengthsEqual}
              variant="secondary"
              onPress={AddInvoiceAll}
            />

            {headItems.map((item) => (
              <Th key={item.id}>{item.title}</Th>
            ))}
          </HeadRow>

          {isLoading && (
            <View className="flex-1 items-center justify-center">
              <ActivityIndicator size="large" color="#F97316" />
            </View>
          )}

          {!isLoading && !data && (
            <View className="flex flex-1 items-center justify-center">
              <Text.Description>Não há pendências</Text.Description>
            </View>
          )}

          {!isLoading && data && (
            <FlatList
              data={data.invoice}
              renderItem={({ item, index }) => {
                const even = (index + 1) % 2 === 0;

                return (
                  <BodyRow
                    key={item.id}
                    variant={even ? "primary" : "secondary"}
                    onPress={() => addInvoice(item.id)}
                  >
                    <CheckBox
                      className="w-4 h-4 ml-1.5"
                      isChecked={isChecked.includes(item.id.toString())}
                      onPress={() => addInvoice(item.id)}
                    />
                    <Td>{item.date}</Td>
                    <Td>{item.deadline}</Td>
                    <Td>{item.status}</Td>
                    <Td>{formatCurrency(+item.invoice)}</Td>
                  </BodyRow>
                );
              }}
            />
          )}
        </Table>
      </Container>
      <Spacing height={16} />
      <Button label="Imprimir" />
    </Container>
  );
};
