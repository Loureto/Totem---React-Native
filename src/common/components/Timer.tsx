import { Text } from "react-native";
import { useTimerStore } from "../store";

export const Timer = () => {
  const { timer } = useTimerStore();
  return <Text className="absolute top-0 right-0">Expira em: {timer}s</Text>;
};
