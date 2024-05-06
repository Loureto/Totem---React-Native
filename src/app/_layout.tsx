import { Slot } from "expo-router";
import { StatusBar, View } from "react-native";
import { Header } from "@/components";

export default function Layout() {
  return (
    <View className="flex-1 p-5 bg-neutral-50">
      <Header />
      <Slot />
      <StatusBar hidden />
    </View>
  );
}
