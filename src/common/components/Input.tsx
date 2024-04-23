import { forwardRef } from "react";
import { Text, TextInput, View } from "react-native";

import { cn } from "../lib/utils";
import { FontAwesome } from "@expo/vector-icons";

export interface InputProps
  extends React.ComponentPropsWithoutRef<typeof TextInput> {
  label?: string;
  labelClasses?: string;
  inputClasses?: string;
  errorMessage?: string;
}
const Input = forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  (
    { className, label, labelClasses, inputClasses, errorMessage, ...props },
    ref
  ) => {
    return (
      <View ref={ref} className={cn("flex flex-col gap-1.5", className)}>
        {label && (
          <Text className={cn("text-base", labelClasses)}>{label}</Text>
        )}
        <View className="relative rounded-md shadow-sm">
          {!!errorMessage && (
            <View className="absolute h-full right-0 flex justify-center pr-3">
              <FontAwesome
                name="exclamation-circle"
                size={20}
                color="#ef4444"
              />
            </View>
          )}
          <TextInput
            className={cn(
              inputClasses,
              "border-2 py-2.5 px-4 rounded-lg border-gray-200",
              !!errorMessage ? "border-red-500" : "focus:border-orange-500"
            )}
            {...props}
          />
        </View>
        {errorMessage && (
          <Text className="text-[10px] text-red-500">{errorMessage}</Text>
        )}
      </View>
    );
  }
);

export { Input };
