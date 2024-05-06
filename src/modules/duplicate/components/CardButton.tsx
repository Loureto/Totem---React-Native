import { DuplicateIcon, LocIcon, ReligacaoIcon, Spacing } from "@/components";
import { Text as TextNative, TouchableOpacity, View } from "react-native";
import { TouchableProps } from "react-native-svg";
import { cn } from "@/lib";

type Params = TouchableProps & {
  uc?: string;
  address?: string;
  pendencies?: number;
};

export const CardButton = ({
  uc = "",
  address = "",
  pendencies,
  ...props
}: Params) => {
  return (
    <TouchableOpacity
      className="relative flex-row items-center justify-between bg-white border border-gray-200 rounded-md px-2 py-2"
      {...props}
    >
      <View className="flex-row items-start">
        <View className="w-10 h-10 items-center justify-center bg-orange-500/10 rounded-md">
          <ReligacaoIcon width={16} height={16} />
        </View>
        <Spacing width={10} />
        <View className="flex-1" style={{ gap: 0 }}>
          <View className="w-full flex-row justify-between">
            <TextNative className="text-sm font-bold">UC: {uc}</TextNative>
            <View className="flex-row items-center">
              <TextNative
                className={cn(
                  "text-[10px] font-semibold px-2 py-0.5 rounded",
                  pendencies
                    ? "bg-red-200 text-red-600"
                    : "bg-green-200 text-green-600"
                )}
              >
                {pendencies ? "Cortada" : "Normal"}
              </TextNative>
            </View>
          </View>
          <View className="flex-row items-center" style={{ gap: 4 }}>
            <LocIcon height={10} width={10} />
            <TextNative className="text-[10px] text-gray-500">
              {address}
            </TextNative>
          </View>
          <View className="flex-row items-center" style={{ gap: 4 }}>
            <DuplicateIcon height={10} width={10} />
            <TextNative className="text-[10px] text-gray-500">
              {pendencies !== 1
                ? `Há ${pendencies} faturas pendentes`
                : `Há ${pendencies} fatura pendente`}
            </TextNative>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
