import { Text, View } from "react-native";

export const Header = () => {
  return (
    <>
      <View className="w-full mb-2">
        <Text className="text-2xl text-neutral-900 font-bold">
          Roraima<Text className="text-orange-500"> Energia</Text>
        </Text>
        <View className="w-full h-px bg-gray-200 mt-1" />
      </View>
      <View className="w-12 h-2 bg-orange-500 mt-3 mb-1" />
    </>
  );
};
