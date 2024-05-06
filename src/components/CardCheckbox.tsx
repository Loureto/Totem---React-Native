import { Text, TouchableOpacity, View } from "react-native";
import { cn } from "../lib";
import { AntDesign } from "@expo/vector-icons";

interface CheckboxProps {
  label: string;
  labelClasses?: string;
  isChecked: boolean;
  onPress: () => void;
}

export const Checkbox = ({
  label,
  labelClasses,
  isChecked = false,
  onPress,
}: CheckboxProps) => {
  return (
    <TouchableOpacity
      className={cn(
        "w-full flex flex-row items-center justify-between mt-3 px-3 py-3 rounded-md border-2 bg-white",
        isChecked ? "border-orange-500" : "border-gray-200"
      )}
      onPress={onPress}
    >
      {label && (
        <Text
          className={cn(
            isChecked ? "text-orange-500 font-medium" : "text-gray-500",
            labelClasses
          )}
        >
          {label}
        </Text>
      )}
      <View
        className={cn(
          "w-5 h-5 border rounded flex justify-center items-center",
          isChecked
            ? "bg-orange-500 border-orange-500"
            : "bg-transparent border-gray-400"
        )}
      >
        {isChecked && <AntDesign name="check" color="#FFF" size={14} />}
      </View>
    </TouchableOpacity>
  );
};
