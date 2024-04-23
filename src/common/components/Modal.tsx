import { useModalStore } from "@/store";
import { Modal as ModalNative, View } from "react-native";
import { Button } from "./Button";
import { Spacing } from "./Spacing";
import { Text } from "./Text";

export const Modal = () => {
  const { isOpen, title, description, openModal } = useModalStore();

  return (
    <ModalNative
      animationType="fade"
      transparent={true}
      visible={isOpen}
      onDismiss={openModal}
    >
      <View className="w-full h-full flex items-center justify-center bg-neutral-900/25 px-5">
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
      </View>
    </ModalNative>
  );
};
