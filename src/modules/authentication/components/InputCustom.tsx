import { FC } from "react";
import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

interface InputProps {
  value: string;
  onClear?: () => void;
}

export const InputCustom: FC<InputProps> = ({ value = "", onClear }) => {
  return (
    <>
      <Text className="mb-1">Código UC</Text>
      <View className="flex flex-row justify-between border-2 border-gray-200 px-3 py-3 rounded-md">
        {value && <Text>{value}</Text>}
        {!value && (
          <Text className="text-gray-500">
            Digite o código da sua unidade consumidora
          </Text>
        )}

        {value && (
          <TouchableOpacity onPress={onClear}>
            <Feather name="x-circle" size={20} color={"#6b7280"} />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};
