import { Modal as ModalNative, View } from "react-native";
import { useModalStore } from "@/store";
import { Button } from "./Button";
import { Spacing } from "./Spacing";
import { Text } from "./Text";
import { BlurView } from "expo-blur";

export const Modal = () => {
  const { isOpen, title, description, openModal } = useModalStore();

  return (
    <ModalNative
      animationType="fade"
      transparent={true}
      visible={isOpen}
      onDismiss={openModal}
    >
      <BlurView
        className="w-full h-full flex items-center justify-center px-5"
        intensity={80}
        blurReductionFactor={100}
        experimentalBlurMethod="dimezisBlurView"
        tint="dark"
      >
        <View className="bg-white w-full p-5 rounded-md">
          <Text.Title>{title ? title : "Atenção!"}</Text.Title>
          <Spacing height={12} />
          <Text.Description>{description}</Text.Description>
          <Spacing height={20} />
          <Button
            className="ml-auto px-6"
            label="Entendi"
            size="sm"
            onPress={openModal}
          />
        </View>
      </BlurView>
    </ModalNative>
  );
};
