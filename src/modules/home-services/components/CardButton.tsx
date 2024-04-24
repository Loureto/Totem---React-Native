import { ReactNode } from "react";
import {
  Dimensions,
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const widthWithoutPadding = width - 20 * 2;
const widthCard = widthWithoutPadding * 0.48;

type Props = {
  title: string;
  icon: ReactNode;
  onPress: (event: GestureResponderEvent) => void;
};

export const CardButton = ({ title, icon, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={{ width: widthCard, height: 160 }}
      onPress={onPress}
    >
      <View className="flex-1 p-5 justify-between items-center border border-neutral-200 rounded-md">
        {icon}
        <Text className="font-medium mt-2">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
