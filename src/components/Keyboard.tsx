import { Dispatch, FC, SetStateAction } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface Props {
  disabled?: boolean;
  onChange: Dispatch<SetStateAction<string>>;
  onRemove: Dispatch<SetStateAction<string>>;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "deletar"];

export const Keyboard: FC<Props> = ({
  disabled = false,
  onChange,
  onRemove,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        rowGap: 10,
        columnGap: 10,
      }}
    >
      {numbers.map((item) => {
        if (String(item).toLowerCase() === "deletar") {
          return (
            <TouchableOpacity
              key={item}
              disabled={disabled}
              onPress={onRemove.bind(null, item.toString())}
              className="flex flex-1 h-12 rounded-md items-center justify-center bg-gray-200"
            >
              <Text className="text-xl font-medium">
                {String(item).toUpperCase()}
              </Text>
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            key={item}
            disabled={disabled}
            onPress={onChange.bind(null, item.toString())}
            className="w-[31.5%] h-12 rounded-md items-center justify-center bg-gray-200"
          >
            <Text className="text-xl font-medium">
              {item.toString().toUpperCase()}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
